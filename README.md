# Mauricio Alvarez | Portafolio Personal

[![Website](https://img.shields.io/badge/Website-Live-0d1117?style=for-the-badge&logo=github&logoColor=white)](https://netenebraes.github.io)
[![Penpot Design](https://img.shields.io/badge/Penpot-Prototipo-0d1117?style=for-the-badge&logo=penpot&logoColor=white)](https://design.penpot.app/#/view?file-id=9529fedc-e097-80ce-8008-64cea048fef8&page-id=913d4a22-ba3f-8112-8008-613dd747e4b8&section=interactions&index=0&share-id=d390ec3b-f0b3-80cd-8008-64d06ed9c15c)

Fullstack Developer & SecOps. Backend developer con mentalidad de hacker: construyo APIs seguras, automatizo sistemas Linux y creo contenido técnico para una comunidad de más de 50,000 desarrolladores en YouTube y TikTok.

---

## Vista Previa

<img width="957" height="642" alt="Vista previa del sitio" src="https://github.com/user-attachments/assets/4079792d-cbeb-4ea2-8e6c-a19b370a8010" />

---

## Historia del Proyecto: Del Boceto al Código

Este portafolio no nació directamente en el navegador. Para lograr un producto funcional, ligero y con identidad visual propia, el proyecto pasó por una fase estructurada de diseño, prototipado e implementación.

### 1. La Idea Inicial y la Elección de Penpot
El primer paso consistió en maquetar una **Propuesta #01** de diseño interactivo. Para ello elegí **Penpot** sobre Figma por tres razones clave:

- **Inspección de código ilimitada:** Permite inspeccionar CSS y SVG de forma gratuita sin las restricciones de pago del *Dev Mode* de Figma.
- **Terminología nativa de CSS:** La interfaz utiliza propiedades reales como `flexbox`, `align-items` o `justify-content`, simplificando el paso del prototipo al código.
- **Autonomía y despliegue local:** La posibilidad de alojar Penpot mediante Docker me permitió trabajar directamente con los recursos del sistema sin depender de conexiones externas.

> *El archivo fuente `index.penpot` se incluye en este repositorio para ser importado en instancias locales de Docker o consultado directamente en la nube.*

### 2. Desarrollo e Implementación
Una vez validada la estructura en el prototipo, trasladé el diseño a un frontend web limpio, priorizando el rendimiento y la accesibilidad:

- **Sin frameworks ni dependencias:** Construido 100% en JavaScript Vanilla y CSS puro para garantizar la máxima velocidad de carga.
- **Enfoque Developer/SecOps:** Uso de variables CSS personalizadas y una selección tipográfica técnica (*Intel One Mono* y *Space Grotesk*).

---

## Estructura del Sitio

- **Inicio (`index.html`)** — Hero principal con métricas de comunidad en redes sociales y presentación.
- **Sobre mí (`about.html`)** — Perfil profesional, stack técnico y experiencia.
- **Proyectos (`projects.html`)** — Galería de desarrollos backend, automatización y herramientas SecOps.

---

## Tech Stack

- **Diseño & UI/UX:** Penpot (Nube y Docker Local)
- **Frontend:** HTML5 semántico, CSS3 (Custom Properties, Flexbox, Grid) y JavaScript Vanilla
- **Tipografía:** Google Fonts (*Intel One Mono*, *Space Grotesk*)

---

## Métodos de Inspección del Prototipo

Para revisar las decisiones de diseño y el código fuente original del prototipo:

1. **Vía Web (Recomendado):** Accede directamente al [Prototipo interactivo en Penpot](https://design.penpot.app/#/view?file-id=9529fedc-e097-80ce-8008-64cea048fef8&page-id=913d4a22-ba3f-8112-8008-613dd747e4b8&section=interactions&index=0&share-id=d390ec3b-f0b3-80cd-8008-64d06ed9c15c).
2. **Vía Docker Local:** Importa el archivo `index.penpot` en una instancia propia de Penpot siguiendo la guía oficial de despliegue con Docker.

![Guía de inspección](./assets/tuto.png)
