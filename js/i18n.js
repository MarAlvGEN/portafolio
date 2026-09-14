class I18n {
	static TRANSLATIONS = {
		en: {
			nav_home: 'Home',
			nav_about: 'About',
			nav_projects: 'Projects',
			nav_blog: 'Blog',
			hero_badge: 'Freelance',
			hero_subtitle: 'Backend Developer | Sysadmin',
			hero_description:
				'Java & Spring Boot Developer with server administration roots and full-stack capabilities. Driven by ethical hacking, I build secure applications using modern front-end tech, while teaching Linux fundamentals and breaking down web vulnerabilities for my community on social media.',
			hero_email: 'Email',
			hero_cv: 'CV',
			about_terminal_title: 'root@portfolio:~$ skill --list --verbose',
			about_profile: 'PROFILE:',
			about_alias: 'ALIAS:',
			about_status: 'STATUS:',
			about_heading: 'PROFILE: MAURICIO \u00c1LVAREZ',
			about_p1:
				'Backend developer trained in Java & Spring Boot through Generation\'s full-stack bootcamp, with self-taught expertise in Linux systems administration. I build and maintain Arch Linux workspaces from scratch, using BSPWM, Neovim, and custom automation scripts tailored for low-spec hardware.',
			about_p2:
				'As a bug bounty hunter on BugCrowd, I practice ethical hacking to find and responsibly disclose real vulnerabilities. I share what I learn about Linux security and web exploitation on social media, building an open knowledge base (neCyberWiki) and contributing upstream to open-source projects like nvim-html-css.',
			about_tech_label: 'CORE TECHNOLOGIES',
			projects_heading: 'PROJECTS',
			project_1_title: 'Intel Legacy Buffer Fix (Arch Linux)',
			project_1_overview:
				'Automation script that fixes rendering artifacts (vertical lines, screen corruption) on legacy Intel GPUs under X11 by replacing modern Mesa with mesa-amber and enabling SNA acceleration.',
			project_1_implications:
				'Restores stable, tear-free rendering on Intel Gen6 (Sandy Bridge) hardware running Arch Linux with lightweight window managers like BSPWM.',
			project_1_challenges:
				'Handling pacman dependency conflicts with -Rdd, mitigating SDDM login freezes by forcing software rendering on the greeter, and creating environment overrides to keep Mesa Amber active across Qt and Electron apps.',
			project_1_results:
				'Eliminated screen tearing and corruption on Intel HD 2000 hardware. The script has been tested across multiple Arch installs and includes automatic backup of original Xorg configs.',
			project_2_title: 'nenvim',
			project_2_overview:
				'Modular Neovim configuration written in Lua, focused on maintainability and a clean development workflow with curated plugins for LSP, linting, formatting, and UI.',
			project_2_implications:
				'Provides a reproducible, version-controlled editor setup that can be cloned and restored in minutes on any fresh Arch install.',
			project_2_challenges:
				'Balancing plugin load times with feature richness required careful lazy-loading via Mason and selective keymap definitions to avoid conflicts.',
			project_2_results:
				'Maintains a modular directory structure (config/, plugins/, theme/) with pre-configured LSP support and a consistent Catppuccin Mocha aesthetic.',
			project_3_title: 'neBSPWM-dotfiles',
			project_3_overview:
				'Full Arch Linux ricing environment for cybersecurity and development, including BSPWM, SXHKD, Polybar, Conky, Kitty, ZSH, and Starship with Catppuccin Mocha theming.',
			project_3_implications:
				'Enables complete workstation restoration in minutes on fresh installs, designed specifically for low-spec hardware (Intel i3 2nd gen, 8GB RAM).',
			project_3_challenges:
				'Integrating SDDM theming, Polybar network modules, Conky system monitors, and firejail sandboxing into a single cohesive setup script required extensive testing across multiple Arch installs.',
			project_3_results:
				'10 stars and 3 forks on GitHub, 380+ commits. Includes cybersecurity tools script, hotkeys documentation, and known issues tracking.',
			project_4_title: 'neCyberWiki',
			project_4_overview:
				'Collaborative knowledge base on cybersecurity, ethical hacking, and computer science, built with Obsidian and published via Quartz. Includes pentesting guides, cheatsheets, and tool references.',
			project_4_implications:
				'Provides a free, open-source educational resource that centralizes practical security knowledge in one accessible location.',
			project_4_challenges:
				'Maintaining content quality across 1800+ commits while keeping the Quartz static site generator in sync with Obsidian markdown conventions.',
			project_4_results:
				'Published at netenebraes.github.io/neCyberWiki with 9 stars. Licensed under MIT with active community contributions welcome.',
			project_5_title: 'Bug Bounty Hunter (BugCrowd)',
			project_5_overview:
				'Active bug bounty hunting on BugCrowd, identifying and responsibly disclosing vulnerabilities in web applications and network services.',
			project_5_implications:
				'Contributes to the security of production systems while building practical penetration testing skills and earning recognition in the cybersecurity community.',
			project_5_challenges:
				'Balancing automated scanning with manual testing techniques, and writing clear, reproducible vulnerability reports that meet platform disclosure standards.',
			project_5_results:
				'Identified and reported multiple security issues across various targets, building a track record of responsible disclosure.',
			project_6_title: 'NASA APOD Explorer',
			project_6_overview:
				'Web application to browse NASA Astronomy Picture of the Day, explore historical images by date, and save favorites to localStorage. Built with HTML, CSS, and JavaScript using the NASA Open API.',
			project_6_implications:
				'Demonstrates API integration, responsive design, and client-side data persistence in a clean, accessible interface.',
			project_6_challenges:
				'Implementing date-based historical queries, handling NASA API rate limits, and maintaining responsive layouts across mobile and desktop.',
			project_6_results:
				'Deployed on GitHub Pages with team collaboration. Features include date picker search, favorites management, and responsive image galleries.',
			project_7_title: 'devPortes',
			project_7_overview:
				'Sports complex management and reservation system developed as a final bootcamp project. Features reservation modules, admin panels, and user profile management.',
			project_7_implications:
				'Provides a complete booking workflow for sports facilities, demonstrating full-stack development skills in a team environment.',
			project_7_challenges:
				'Coordinating frontend-backend integration across team members, managing reservation state, and implementing role-based access for admin and regular users.',
			project_7_results:
				'Deployed on GitHub Pages with functional reservation and admin panels. Built with HTML, CSS, and JavaScript.',
			project_8_title: 'nvim-html-css PR #64 (Merged)',
			project_8_overview:
				'Merged pull request fixing a crash in the nvim-html-css plugin (216+ stars). Added missing buffer validation in cache:get_ids to prevent Lua errors on unloaded buffers.',
			project_8_implications:
				'Improved stability for all users of the plugin, preventing crashes when autocomplete is triggered on floating or unloaded buffers.',
			project_8_challenges:
				'Tracing the root cause required understanding the plugin cache architecture and identifying the inconsistent validation pattern between cache:get_classes and cache:get_ids.',
			project_8_results:
				'Merged into upstream mainline. The fix prevents "attempt to index a nil value" crashes in html-css/cache.lua:32.',
			modal_overview: 'OVERVIEW:',
			modal_implications: 'IMPLICATIONS:',
			modal_challenges: 'CHALLENGES:',
			modal_results: 'RESULTS:',
			modal_github: 'GitHub',
			modal_demo: 'Live Demo',
			blog_heading: 'BLOG',
			footer_credit: '\u00a9 Mauricio \u00c1lvarez',
		},
		es: {
			nav_home: 'Inicio',
			nav_about: 'Sobre m\u00ed',
			nav_projects: 'Proyectos',
			nav_blog: 'Blog',
			hero_badge: 'Freelance',
			hero_subtitle: 'Desarrollador Backend | Sysadmin',
			hero_description:
				'Desarrollador Java & Spring Boot con ra\u00edces en administraci\u00f3n de servidores y capacidades full-stack. Impulsado por el ethical hacking, construyo aplicaciones seguras usando tecnolog\u00edas front-end modernas, mientras ense\u00f1o fundamentos de Linux y desgloso vulnerabilidades web para mi comunidad en redes sociales.',
			hero_email: 'Correo',
			hero_cv: 'CV',
			about_terminal_title: 'root@portfolio:~$ skill --list --verbose',
			about_profile: 'PERFIL:',
			about_alias: 'ALIAS:',
			about_status: 'ESTADO:',
			about_heading: 'PERFIL: MAURICIO \u00c1LVAREZ',
			about_p1:
				'Desarrollador backend formado en Java & Spring Boot a trav\u00e9s del bootcamp full-stack de Generation, con experiencia autodidacta en administraci\u00f3n de sistemas Linux. Construyo y mantengo espacios de trabajo Arch Linux desde cero, usando BSPWM, Neovim y scripts de automatizaci\u00f3n personalizados para hardware de gama baja.',
			about_p2:
				'Como bug bounty hunter en BugCrowd, practico ethical hacking para encontrar y divulgar responsablemente vulnerabilidades reales. Comparto lo que aprendo sobre seguridad Linux y explotaci\u00f3n web en redes sociales, construyendo una base de conocimiento abierta (neCyberWiki) y contribuyendo a proyectos open-source como nvim-html-css.',
			about_tech_label: 'TECNOLOG\u00cdAS PRINCIPALES',
			projects_heading: 'PROYECTOS',
		project_1_title: 'Intel Legacy Buffer Fix (Arch Linux)',
			project_1_overview:
				'Script de automatización que corrige artefactos de renderizado (líneas verticales, corrupción de pantalla) en GPUs Intel antiguas bajo X11, reemplazando Mesa moderna por mesa-amber y habilitando aceleración SNA.',
			project_1_implications:
				'Restaura renderizado estable sin tearing en hardware Intel Gen6 (Sandy Bridge) ejecutando Arch Linux con gestores de ventanas ligeros como BSPWM.',
			project_1_challenges:
				'Manejar conflictos de dependencias de pacman con -Rdd, mitigar congelamientos en el login de SDDM forzando renderizado por software en el greeter, y crear overrides de variables de entorno para mantener Mesa Amber activo en apps Qt y Electron.',
			project_1_results:
				'Eliminó tearing y corrupción de pantalla en hardware Intel HD 2000. El script ha sido probado en múltiples instalaciones Arch e incluye backup automático de configs Xorg.',
			project_2_title: 'nenvim',
			project_2_overview:
				'Configuración modular de Neovim escrita en Lua, enfocada en mantenibilidad y un flujo de trabajo limpio con plugins curados para LSP, linting, formateo e UI.',
			project_2_implications:
				'Proporciona un setup de editor reproducible y versionado que puede ser clonado y restaurado en minutos en cualquier instalación Arch fresca.',
			project_2_challenges:
				'Balancear tiempos de carga de plugins con riqueza de funcionalidades requirió lazy-loading cuidadoso vía Mason y definiciones selectivas de keymaps para evitar conflictos.',
			project_2_results:
				'Mantiene estructura de directorios modular (config/, plugins/, theme/) con soporte LSP preconfigurado y estética consistente Catppuccin Mocha.',
			project_3_title: 'neBSPWM-dotfiles',
			project_3_overview:
				'Entorno completo de Arch Linux para ciberseguridad y desarrollo, incluyendo BSPWM, SXHKD, Polybar, Conky, Kitty, ZSH y Starship con theming Catppuccin Mocha.',
			project_3_implications:
				'Permite restauración completa de la estación de trabajo en minutos, diseñado específicamente para hardware de gama baja (Intel i3 2da gen, 8GB RAM).',
			project_3_challenges:
				'Integrar theming de SDDM, módulos de red en Polybar, monitores de sistema Conky y sandboxing con firejail en un setup cohesivo requirió pruebas extensas.',
			project_3_results:
				'10 estrellas y 3 forks en GitHub, 380+ commits. Incluye script de herramientas de ciberseguridad, documentación de hotkeys y tracking de errores conocidos.',
			project_4_title: 'neCyberWiki',
			project_4_overview:
				'Wiki de conocimiento colaborativo sobre ciberseguridad, hacking ético y ciencias de la computación, construida con Obsidian y publicada vía Quartz.',
			project_4_implications:
				'Proporciona un recurso educativo gratuito y open-source que centraliza conocimiento práctico de seguridad en una ubicación accesible.',
			project_4_challenges:
				'Mantener calidad del contenido a través de 1800+ commits mientras se sincroniza el generador de sites estáticos Quartz con las convenciones de markdown de Obsidian.',
			project_4_results:
				'Publicado en netenebraes.github.io/neCyberWiki con 9 estrellas. Licenciado bajo MIT con contribuciones de la comunidad bienvenidas.',
			project_5_title: 'Bug Bounty Hunter (BugCrowd)',
			project_5_overview:
				'Hunting activo de bug bounties en BugCrowd, identificando y divulgando responsablemente vulnerabilidades en aplicaciones web y servicios de red.',
			project_5_implications:
				'Contribuye a la seguridad de sistemas en producción mientras desarrolla habilidades prácticas de penetration testing y gana reconocimiento.',
			project_5_challenges:
				'Balancear escaneo automatizado con técnicas de testing manual, y escribir reportes de vulnerabilidad claros y reproducibles que cumplan estándares de divulgación.',
			project_5_results:
				'Identificó y reportó múltiples problemas de seguridad en varios targets, construyendo un historial de divulgación responsable.',
			project_6_title: 'NASA APOD Explorer',
			project_6_overview:
				'Aplicación web para explorar la Imagen Astronómica del Día de NASA, buscar imágenes históricas por fecha y guardar favoritos en localStorage.',
			project_6_implications:
				'Demuestra integración de APIs, diseño responsive y persistencia de datos del lado del cliente en una interfaz limpia y accesible.',
			project_6_challenges:
				'Implementar consultas históricas por fecha, manejar límites de tasa de la API de NASA y mantener layouts responsive en móvil y desktop.',
			project_6_results:
				'Desplegado en GitHub Pages con colaboración en equipo. Features: búsqueda por fecha, gestión de favoritos y galerías responsive.',
			project_7_title: 'devPortes',
			project_7_overview:
				'Sistema de gestión y reservas de complejos deportivos desarrollado como proyecto final de bootcamp. Incluye módulos de reservas, paneles admin y gestión de perfiles.',
			project_7_implications:
				'Proporciona flujo completo de reservas para instalaciones deportivas, demostrando habilidades de desarrollo full-stack en equipo.',
			project_7_challenges:
				'Coordinar integración frontend-backend entre miembros del equipo, manejar estado de reservas e implementar acceso basado en roles.',
			project_7_results:
				'Desplegado en GitHub Pages con paneles de reservas y administración funcionales. Construido con HTML, CSS y JavaScript.',
			project_8_title: 'PR #64 nvim-html-css (Mergeado)',
			project_8_overview:
				'Pull request mergeado que corrige un crash en el plugin nvim-html-css (216+ estrellas). Agregó validación de buffer faltante en cache:get_ids para prevenir errores Lua.',
			project_8_implications:
				'Mejoró estabilidad para todos los usuarios del plugin, previniendo crashes cuando se dispara autocomplete en buffers flotantes o sin cargar.',
			project_8_challenges:
				'Rastrear la causa raíz requirió entender la arquitectura del cache del plugin e identificar el patrón inconsistente de validación entre cache:get_classes y cache:get_ids.',
			project_8_results:
				'Mergeado en la rama principal upstream. El fix previene crashes "attempt to index a nil value" en html-css/cache.lua:32.',
			modal_overview: 'RESUMEN:',
			modal_implications: 'IMPLICACIONES:',
			modal_challenges: 'DESAFÍOS:',
			modal_results: 'RESULTADOS:',
			modal_github: 'GitHub',
			modal_demo: 'Demo en Vivo',
			blog_heading: 'BLOG',
			footer_credit: '\u00a9 Mauricio \u00c1lvarez',
		},
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
		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			if (t[key]) el.textContent = t[key];
		});
	}

	updateToggle() {
		var lang = this.currentLang;
		document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
			btn.classList.toggle(
				'lang-toggle__btn--active',
				btn.getAttribute('data-lang') === lang,
			);
		});
	}

	init() {
		document.documentElement.lang = this.currentLang;
		this.apply();
		this.updateToggle();
		var self = this;
		document.addEventListener('click', function (e) {
			if (e.target.classList.contains('lang-toggle__btn')) {
				self.setLang(e.target.getAttribute('data-lang'));
			}
		});
	}
}
