class BlogManager {
  constructor() {
    this.posts = [];
    this.container = null;
    this.currentLang = 'en';
  }

  init(i18nInstance) {
    this.i18n = i18nInstance;
    this.container = document.getElementById('blogContent');
    if (!this.container) return;

    this.currentLang = this.i18n ? this.i18n.currentLang : 'en';
    this.loadData();
    this.bindEvents();
    this.bindLangChange();
  }

  bindEvents() {
    var self = this;
    window.addEventListener('hashchange', function() {
      self.route();
    });
  }

  bindLangChange() {
    var self = this;
    window.addEventListener('langchange', function() {
      self.route();
    });
  }

  loadData() {
    var self = this;
    fetch('posts/data.json')
      .then(function(res) {
        if (!res.ok) throw new Error('data.json not found');
        return res.json();
      })
      .then(function(data) {
        self.posts = data;
        self.route();
      })
      .catch(function(err) {
        console.warn('Blog: no posts data found. Run: node scripts/build-blog.js');
        self.renderEmpty();
      });
  }

  route() {
    var hash = window.location.hash.slice(1);
    if (hash) {
      this.renderPost(hash);
    } else {
      this.renderList();
    }
  }

  getLang() {
    return this.i18n ? this.i18n.currentLang : 'en';
  }

  getPostLang(post) {
    var lang = this.getLang();
    if (post.languages[lang]) return lang;
    if (post.languages['en']) return 'en';
    return Object.keys(post.languages)[0];
  }

  getPostTitle(post) {
    var lang = this.getPostLang(post);
    if (typeof post.title === 'object') return post.title[lang] || post.title['en'] || '';
    return post.title || '';
  }

  getPostDescription(post) {
    var lang = this.getPostLang(post);
    if (typeof post.description === 'object') return post.description[lang] || post.description['en'] || '';
    return post.description || '';
  }

  renderEmpty() {
    this.container.innerHTML =
      '<div class="blog-empty">' +
        '<div class="terminal">' +
          '<div class="terminal__header">' +
            '<div class="terminal__dots">' +
              '<span class="terminal__dot terminal__dot--red"></span>' +
              '<span class="terminal__dot terminal__dot--yellow"></span>' +
              '<span class="terminal__dot terminal__dot--green"></span>' +
            '</div>' +
            '<span class="terminal__title">root@blog:~$ ls posts/</span>' +
          '</div>' +
          '<div class="terminal__body">' +
            '<div style="color: var(--color-accent);">$ echo "No posts yet"</div>' +
            '<div>Write your first post in posts/</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  renderList() {
    var self = this;
    if (this.posts.length === 0) {
      this.renderEmpty();
      return;
    }

    var heading = document.getElementById('blogHeading');
    if (heading) heading.style.display = '';

    var html = '<div class="blog-grid">';

    this.posts.forEach(function(post) {
      var lang = self.getPostLang(post);
      var title = self.getPostTitle(post);
      var desc = self.getPostDescription(post);
      var date = self.formatDate(post.date);
      var tags = post.tags || [];
      var imgUrl = post.image ? 'posts/' + encodeURIComponent(post.dir) + '/' + encodeURIComponent(post.image) : null;

      var card = '<article class="blog-card" data-slug="' + post.slug + '">';
      if (imgUrl) {
        card += '<div class="blog-card__image"><img src="' + imgUrl + '" alt="' + title + '" loading="lazy" /></div>';
      }
      card += '<div class="blog-card__body">';
      card += '<time class="blog-card__date">' + date + '</time>';
      card += '<h2 class="blog-card__title">' + title + '</h2>';
      card += '<p class="blog-card__desc">' + desc + '</p>';
      if (tags.length > 0) {
        card += '<div class="blog-card__tags">';
        tags.forEach(function(tag) {
          card += '<span class="blog-card__tag">' + tag + '</span>';
        });
        card += '</div>';
      }
      card += '</div></article>';

      html += card;
    });

    html += '</div>';
    this.container.innerHTML = html;

    this.container.querySelectorAll('.blog-card').forEach(function(card) {
      card.addEventListener('click', function() {
        window.location.hash = card.getAttribute('data-slug');
      });
    });
  }

  renderPost(slug) {
    var self = this;
    var post = this.posts.find(function(p) { return p.slug === slug; });
    if (!post) {
      this.renderList();
      return;
    }

    var heading = document.getElementById('blogHeading');
    if (heading) heading.style.display = 'none';

    var lang = this.getPostLang(post);
    var mdFile = post.languages[lang].file;

    fetch('posts/' + encodeURIComponent(post.dir) + '/' + mdFile)
      .then(function(res) {
        if (!res.ok) throw new Error('Post file not found');
        return res.text();
      })
      .then(function(content) {
        var parsed = self.parseFrontmatter(content);
        var html = marked.parse(parsed.body);

        var backText = self.i18n && self.i18n.currentLang === 'es' ? '← Volver al blog' : '← Back to blog';
        var date = self.formatDate(post.date);
        var tags = post.tags || [];

        var postHtml =
          '<div class="blog-post">' +
            '<a href="blog.html" class="blog-post__back">' + backText + '</a>' +
            '<header class="blog-post__header">' +
              '<time class="blog-post__date">' + date + '</time>' +
              '<h1 class="blog-post__title">' + self.getPostTitle(post) + '</h1>' +
              '<div class="blog-post__meta">' +
                '<span class="blog-post__reading">' + self.estimateReading(post.languages[lang].wordCount) + '</span>' +
              '</div>' +
              (tags.length > 0 ?
                '<div class="blog-post__tags">' +
                  tags.map(function(t) { return '<span class="blog-card__tag">' + t + '</span>'; }).join('') +
                '</div>' : '') +
            '</header>' +
            '<div class="blog-post__content markdown-body">' + html + '</div>' +
          '</div>';

        self.container.innerHTML = postHtml;
        self.resolveImages(post.dir);
        window.scrollTo(0, 0);
      })
      .catch(function(err) {
        console.error('Error loading post:', err);
        self.renderList();
      });
  }

  resolveImages(postDir) {
    var prefix = 'posts/' + encodeURIComponent(postDir) + '/';
    this.container.querySelectorAll('.markdown-body img').forEach(function(img) {
      var src = img.getAttribute('src');
      if (!src) return;
      if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return;
      if (src.startsWith('posts/')) return;
      img.setAttribute('src', prefix + encodeURIComponent(src));
    });
  }

  parseFrontmatter(content) {
    var match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return { data: {}, body: content };

    var raw = match[1];
    var data = {};
    raw.split('\n').forEach(function(line) {
      var idx = line.indexOf(':');
      if (idx === -1) return;
      var key = line.slice(0, idx).trim();
      var val = line.slice(idx + 1).trim();

      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(function(s) {
          return s.trim().replace(/^["']|["']$/g, '');
        });
      } else {
        val = val.replace(/^["']|["']$/g, '');
      }
      data[key] = val;
    });

    var body = content.slice(match[0].length).trim();
    return { data: data, body: body };
  }

  formatDate(dateStr) {
    if (!dateStr) return '';
    try {
      var d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString(this.getLang() === 'es' ? 'es-ES' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch (e) {
      return dateStr;
    }
  }

  estimateReading(wordCount) {
    var mins = Math.max(1, Math.round(wordCount / 200));
    if (this.i18n && this.i18n.currentLang === 'es') {
      return mins + ' min de lectura';
    }
    return mins + ' min read';
  }
}
