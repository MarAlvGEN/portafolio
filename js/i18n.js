class I18n {
  static TRANSLATIONS = {
    en: {
      nav_home: 'Home', nav_about: 'About', nav_projects: 'Projects', nav_blog: 'Blog',
      hero_badge: 'Freelance',
      hero_subtitle: 'Backend Developer | Sysadmin',
      hero_description: 'Java & Spring Boot Developer with server administration roots and full-stack capabilities. Driven by ethical hacking, I build secure applications using modern front-end tech, while teaching Linux fundamentals and breaking down web vulnerabilities for my community on social media.',
      hero_email: 'Email', hero_cv: 'CV',
      about_terminal_title: 'root@portfolio:~$ skill --list --verbose',
      about_profile: 'PROFILE:', about_alias: 'ALIAS:', about_status: 'STATUS:',
      about_heading: 'PROFILE: MAURICIO \u00c1LVAREZ',
      about_p1: 'With over 5 years of experience in backend development and systems administration, I specialize in building robust, secure Java applications backed by Spring Boot and deployed across distributed Linux environments. My work bridges the gap between development and operations, ensuring applications are not only functional but hardened against modern attack vectors.',
      about_p2: 'My journey into ethical hacking has given me a unique perspective on application security. I actively contribute to the cybersecurity community by creating educational content, breaking down common web vulnerabilities, and demonstrating practical exploitation techniques on my social media channels. Security is not an afterthought in my workflow \u2014 it is the foundation.',
      about_tech_label: 'CORE TECHNOLOGIES',
      projects_heading: 'PROJECTS',
      project_1_title: 'secure_auth_service v1.2',
      project_1_overview: 'A production-grade authentication microservice built with Java and Spring Boot, implementing OAuth 2.0 with JWT token rotation, role-based access control, and rate limiting.',
      project_1_implications: 'Provides a centralized identity layer for distributed systems, eliminating credential duplication across services. Enables single sign-on across multiple front-end applications.',
      project_1_challenges: 'Implementing secure token refresh without exposing refresh tokens to XSS attacks required careful httpOnly cookie management and distributed token bucket algorithms.',
      project_1_results: 'Deployed across 3 production environments handling 10k+ auth requests per minute with 99.97% uptime. Reduced authentication-related incidents by 84%.',
      project_2_title: 'netinfra_monitor v3.0',
      project_2_overview: 'A comprehensive network infrastructure monitoring platform that aggregates metrics from servers, containers, and applications in real-time.',
      project_2_implications: 'Enables sysadmins to detect anomalies, track resource utilization trends, and receive proactive alerts before outages impact end users.',
      project_2_challenges: 'Handling high-cardinality metric streams from hundreds of endpoints required downsampling strategies and efficient time-series storage.',
      project_2_results: 'Currently monitoring 200+ endpoints with sub-second metric ingestion. Reduced unplanned downtime by 62% across the infrastructure.',
      project_3_title: 'vuln_scanner_cli v1.5',
      project_3_overview: 'A command-line vulnerability scanner that automates common security assessments for web applications and network services.',
      project_3_implications: 'Democratizes security testing for development teams without dedicated penetration testing resources. Integrates into CI/CD pipelines.',
      project_3_challenges: 'Balancing scan speed with accuracy required adaptive timing algorithms and context-aware scoring engines.',
      project_3_results: 'Scanned over 500 targets in internal red team exercises, discovering 47 previously unknown exposure points.',
      project_4_title: 'cloud_deploy_tool v2.1',
      project_4_overview: 'An opinionated deployment automation tool that orchestrates containerized application deployments across AWS infrastructure using Terraform and Kubernetes.',
      project_4_implications: 'Standardizes deployment workflows across development, staging, and production environments. Reduces infrastructure drift.',
      project_4_challenges: 'Supporting multi-region failover while maintaining consistent state required distributed locking and rule-based auto-scaling policies.',
      project_4_results: 'Reduced average deployment time from 45 minutes to under 8 minutes. Cut AWS infrastructure costs by 30%.',
      modal_overview: 'OVERVIEW:', modal_implications: 'IMPLICATIONS:',
      modal_challenges: 'CHALLENGES:', modal_results: 'RESULTS:',
      modal_github: 'GitHub', modal_demo: 'Live Demo',
      blog_heading: 'BLOG',
      footer_credit: '\u00a9 Mauricio \u00c1lvarez',
    },
    es: {
      nav_home: 'Inicio', nav_about: 'Sobre m\u00ed', nav_projects: 'Proyectos', nav_blog: 'Blog',
      hero_badge: 'Freelance',
      hero_subtitle: 'Desarrollador Backend | Sysadmin',
      hero_description: 'Desarrollador Java & Spring Boot con ra\u00edces en administraci\u00f3n de servidores y capacidades full-stack. Impulsado por el ethical hacking, construyo aplicaciones seguras usando tecnolog\u00edas front-end modernas, mientras ense\u00f1o fundamentos de Linux y desgloso vulnerabilidades web para mi comunidad en redes sociales.',
      hero_email: 'Correo', hero_cv: 'CV',
      about_terminal_title: 'root@portfolio:~$ skill --list --verbose',
      about_profile: 'PERFIL:', about_alias: 'ALIAS:', about_status: 'ESTADO:',
      about_heading: 'PERFIL: MAURICIO \u00c1LVAREZ',
      about_p1: 'Con m\u00e1s de 5 a\u00f1os de experiencia en desarrollo backend y administraci\u00f3n de sistemas, me especializo en construir aplicaciones Java robustas y seguras respaldadas por Spring Boot y desplegadas en entornos Linux distribuidos. Mi trabajo conecta el desarrollo con las operaciones, asegurando que las aplicaciones no solo funcionen sino que est\u00e9n blindadas contra vectores de ataque modernos.',
      about_p2: 'Mi camino hacia el ethical hacking me ha dado una perspectiva \u00fanica sobre la seguridad de aplicaciones. Contribuyo activamente a la comunidad de ciberseguridad creando contenido educativo, desglosando vulnerabilidades web comunes y demostrando t\u00e9cnicas pr\u00e1cticas de explotaci\u00f3n en mis canales de redes sociales. La seguridad no es una afterthought en mi workflow \u2014 es la fundaci\u00f3n.',
      about_tech_label: 'TECNOLOG\u00cdAS PRINCIPALES',
      projects_heading: 'PROYECTOS',
      project_1_title: 'secure_auth_service v1.2',
      project_1_overview: 'Microservicio de autenticaci\u00f3n de nivel productivo construido con Java y Spring Boot, implementando OAuth 2.0 con rotaci\u00f3n de tokens JWT, control de acceso basado en roles y rate limiting.',
      project_1_implications: 'Proporciona una capa de identidad centralizada para sistemas distribuidos, eliminando la duplicaci\u00f3n de credenciales entre servicios.',
      project_1_challenges: 'Implementar la renovaci\u00f3n segura de tokens sin exponer refresh tokens a ataques XSS requiri\u00f3 una gesti\u00f3n cuidadosa de cookies httpOnly.',
      project_1_results: 'Desplegado en 3 entornos de producci\u00f3n manejando m\u00e1s de 10k solicitudes de autenticaci\u00f3n por minuto con 99.97% de uptime.',
      project_2_title: 'netinfra_monitor v3.0',
      project_2_overview: 'Plataforma integral de monitoreo de infraestructura de red que agrega m\u00e9tricas de servidores, contenedores y aplicaciones en tiempo real.',
      project_2_implications: 'Permite a los sysadmins detectar anomal\u00edas, rastrear tendencias de utilizaci\u00f3n de recursos y recibir alertas proactivas antes de que las interrupciones afecten a los usuarios.',
      project_2_challenges: 'Manejar flujos de m\u00e9tricas de alta cardinalidad de cientos de endpoints requiri\u00f3 estrategias de downsampling y almacenamiento eficiente de series temporales.',
      project_2_results: 'Monitoreando actualmente m\u00e1s de 200 endpoints con ingesti\u00f3n de m\u00e9tricas sub-segundo. Redujo el downtime no planificado en un 62%.',
      project_3_title: 'vuln_scanner_cli v1.5',
      project_3_overview: 'Scanner de vulnerabilidades por l\u00ednea de comandos que automatiza evaluaciones de seguridad comunes para aplicaciones web y servicios de red.',
      project_3_implications: 'Democratiza las pruebas de seguridad para equipos de desarrollo sin recursos dedicados de penetration testing.',
      project_3_challenges: 'Equilibrar la velocidad de escaneo con la precisi\u00f3n requiri\u00f3 algoritmos de temporizaci\u00f3n adaptativos y motores de puntuaci\u00f3n context-aware.',
      project_3_results: 'Escane\u00f3 m\u00e1s de 500 objetivos en ejercicios internos de red team, descubriendo 47 puntos de exposici\u00f3n previamente desconocidos.',
      project_4_title: 'cloud_deploy_tool v2.1',
      project_4_overview: 'Herramienta de automatizaci\u00f3n de despliegue que orquesta despliegues de aplicaciones containerizadas en infraestructura AWS usando Terraform y Kubernetes.',
      project_4_implications: 'Estandariza los flujos de trabajo de despliegue en entornos de desarrollo, staging y producci\u00f3n. Reduce el drift de infraestructura.',
      project_4_challenges: 'Soportar failover multi-regi\u00f3n manteniendo estado consistente requiri\u00f3 bloqueo distribuido y pol\u00edticas de auto-escalado basadas en reglas.',
      project_4_results: 'Redujo el tiempo promedio de despliegue de 45 minutos a menos de 8 minutos. Redujo costos de infraestructura AWS en un 30%.',
      modal_overview: 'RESUMEN:', modal_implications: 'IMPLICACIONES:',
      modal_challenges: 'DESAF\u00cdOS:', modal_results: 'RESULTADOS:',
      modal_github: 'GitHub', modal_demo: 'Demo en Vivo',
      blog_heading: 'BLOG',
      footer_credit: '\u00a9 Mauricio \u00c1lvarez',
    }
  };

  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'en';
  }

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    this.apply();
    this.updateToggle();
    window.dispatchEvent(new CustomEvent('langchange'));
  }

  apply() {
    var t = I18n.TRANSLATIONS[this.currentLang];
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });
  }

  updateToggle() {
    var lang = this.currentLang;
    document.querySelectorAll('.lang-toggle__btn').forEach(function(btn) {
      btn.classList.toggle('lang-toggle__btn--active', btn.getAttribute('data-lang') === lang);
    });
  }

  init() {
    document.documentElement.lang = this.currentLang;
    this.apply();
    this.updateToggle();
    var self = this;
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('lang-toggle__btn')) {
        self.setLang(e.target.getAttribute('data-lang'));
      }
    });
  }
}
