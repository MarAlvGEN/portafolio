class StatBarAnimator {
  constructor() {
    this.observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-percent') + '%';
          this.unobserve(entry.target);
        }
      });
    }.bind(this), { threshold: 0.5 });
  }

  init() {
    var fills = document.querySelectorAll('.mono-chart__fill');
    var observer = this.observer;
    fills.forEach(function(fill) {
      observer.observe(fill);
    });
  }
}

class ProjectModal {
  static DATA = [
    {
      titleKey: 'project_1_title',
      overviewKey: 'project_1_overview',
      implicationsKey: 'project_1_implications',
      challengesKey: 'project_1_challenges',
      resultsKey: 'project_1_results',
      tagIds: ['java', 'spring', 'postgresql', 'redis', 'oauth2'],
      tagNames: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'OAuth2'],
    },
    {
      titleKey: 'project_2_title',
      overviewKey: 'project_2_overview',
      implicationsKey: 'project_2_implications',
      challengesKey: 'project_2_challenges',
      resultsKey: 'project_2_results',
      tagIds: ['python', 'docker', 'prometheus', 'grafana'],
      tagNames: ['Python', 'Docker', 'Prometheus', 'Grafana'],
    },
    {
      titleKey: 'project_3_title',
      overviewKey: 'project_3_overview',
      implicationsKey: 'project_3_implications',
      challengesKey: 'project_3_challenges',
      resultsKey: 'project_3_results',
      tagIds: ['bash', 'python', 'nmap', 'curl'],
      tagNames: ['Bash', 'Python', 'Nmap', 'Curl'],
    },
    {
      titleKey: 'project_4_title',
      overviewKey: 'project_4_overview',
      implicationsKey: 'project_4_implications',
      challengesKey: 'project_4_challenges',
      resultsKey: 'project_4_results',
      tagIds: ['docker', 'kubernetes', 'terraform', 'aws'],
      tagNames: ['Docker', 'Kubernetes', 'Terraform', 'AWS'],
    },
  ];

  constructor() {
    this.overlay = document.getElementById('projectModal');
    this.lang = null;
    this.bindEvents();
  }

  setLang(i18nInstance) {
    this.lang = i18nInstance;
  }

  bindEvents() {
    var self = this;
    if (this.overlay) {
      this.overlay.addEventListener('click', function(e) {
        if (e.target === self.overlay) self.close();
      });
    }
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') self.close();
    });
  }

  open(index) {
    if (!this.overlay || !this.lang) return;
    var t = I18n.TRANSLATIONS[this.lang.currentLang];
    var project = ProjectModal.DATA[index];
    if (!project) return;

    document.getElementById('modalTitle').textContent =
      'PROJECT DETAIL: ' + t[project.titleKey];

    document.getElementById('modalContent').innerHTML =
      '<div><h4>' + t.modal_overview + '</h4><p>' + t[project.overviewKey] + '</p></div>' +
      '<div><h4>' + t.modal_implications + '</h4><p>' + t[project.implicationsKey] + '</p></div>' +
      '<div><h4>' + t.modal_challenges + '</h4><p>' + t[project.challengesKey] + '</p></div>' +
      '<div><h4>' + t.modal_results + '</h4><p>' + t[project.resultsKey] + '</p></div>';

    var badges = new BadgeCollection(
      project.tagIds.map(function(id, i) {
        return { name: project.tagNames[i], iconId: id };
      })
    );
    var techContainer = document.getElementById('modalTechstack');
    techContainer.innerHTML = '<span class="modal__techstack-label">TECH STACK:</span>';
    var wrapper = document.createElement('span');
    wrapper.className = 'modal__techstack-badges';
    techContainer.appendChild(wrapper);
    badges.renderTo(wrapper);

    this.overlay.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.documentElement.style.overflow = '';
  }
}

/* =============================================
   Micro-interactions (Amicro-inspired)
   ============================================= */

class TiltCard {
  constructor(element, maxTilt) {
    this.element = element;
    this.maxTilt = maxTilt || 15;
    this.bindEvents();
  }

  bindEvents() {
    var self = this;
    this.element.addEventListener('mousemove', function(e) {
      var rect = self.element.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      self.element.style.transform =
        'rotateY(' + (x * self.maxTilt) + 'deg) rotateX(' + (-y * self.maxTilt) + 'deg)';
    });

    this.element.addEventListener('mouseleave', function() {
      self.element.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }
}

class MagneticHover {
  constructor(element, range, strength) {
    this.element = element;
    this.range = range || 45;
    this.strength = strength || 0.35;
    this.bindEvents();
  }

  bindEvents() {
    var self = this;
    this.element.addEventListener('mousemove', function(e) {
      var rect = self.element.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < self.range) {
        var targetX = (e.clientX - centerX) * self.strength;
        var targetY = (e.clientY - centerY) * self.strength;
        self.element.style.transform = 'translate(' + targetX + 'px, ' + targetY + 'px)';
      } else {
        self.element.style.transform = 'translate(0, 0)';
      }
    });

    this.element.addEventListener('mouseleave', function() {
      self.element.style.transform = 'translate(0, 0)';
    });
  }
}

class FadeUpAnimator {
  static init() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(function(el) {
      observer.observe(el);
    });
  }
}

class TextRevealAnimator {
  static init() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.text-reveal').forEach(function(el) {
      observer.observe(el);
    });
  }
}

var emailBtn = document.getElementById('emailBtn');
if (emailBtn) {
  emailBtn.style.position = 'relative';
  emailBtn.addEventListener('click', function() {
    var email = 'contact' + '@' + 'netenebrae.dev';
    var lang = document.documentElement.lang || 'en';
    var msg = lang === 'es' ? 'Copiado' : 'Copied';

    var oldTooltip = emailBtn.querySelector('.email-tooltip');
    if (oldTooltip) oldTooltip.remove();

    var tooltip = document.createElement('div');
    tooltip.className = 'email-tooltip';
    tooltip.textContent = msg;
    emailBtn.appendChild(tooltip);

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        tooltip.classList.add('show');
      });
    });

    navigator.clipboard.writeText(email);

    setTimeout(function() {
      tooltip.classList.remove('show');
      tooltip.classList.add('hide');
      setTimeout(function() {
        if (tooltip.parentNode) tooltip.remove();
      }, 300);
    }, 2000);
  });
}
