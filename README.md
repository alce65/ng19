# Curso Angular 19

Alejandro Cerezo Lasne
<alce65@hotmail.es>
IT Formación para Inetum
26-30/05/2025

## Día 1 (L-25): Introducción a Angular

- Introducción a Angular y su ecosistema.
- Instalación de Angular CLI.
- Creación de un nuevo workspace Angular sin proyecto. `ng new`
- Creación de un nuevo proyecto (app) Angular. `ng generate app`
- Estructura de un workspace/proyecto Angular.
- Añadiendo ESLint y Prettier.
- Angular CLI: Comandos básicos.
  - Servidor de desarrollo: `ng serve`.
  - Testing con Karma y Jasmine: `ng test`.
  - Construcción del proyecto: `ng build`.
- Generación de componentes: `ng generate`.
  - Elementos de un componente: HTML, CSS, TypeScript.
  - Componente Counter. Estado y eventos. Condicionales @If
  - Componente Greeting. Input de usuario: data binding.
- Scaffolding. Core y Features
  - Componente Header.
  - Componente Footer.
  - Componentes (pages): Home, About, Contact.
- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu

## Día 2 (M-26): Rutas y Componentes

- Rutas (continuación)
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive
- Rutas Lazy. Default import en las páginas
- Componente Layout. Reorganización de core components
- RTemeorganización componentes en Home
- Testing de componentes
  - Configuración de Karma y Jasmine.
  - Coverage istambul
  - Creación de pruebas unitarias para componentes.
- Pipes. Location "es"
- Logo. Componentes de template svg
- Comunicación entre componentes
  - Input. Decoradores @Input. Drilling del título
  - Output. Decorador @Output. EventEmitter
  - Agrupando contadores.

## Día 3 (M-26). Arquitectura de componentes. Servicios

- Debugging
- Template svg
- Comunicación entre componentes (continuación)
  - Contadores. Eventos con valor
  - Testing de componentes con comunicación.
- Arquitectura de componentes
  - Componentes de presentación vs contenedores.
  - Componentes inteligentes vs tontos.
