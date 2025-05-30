# Curso Angular 19

Alejandro Cerezo Lasne
<alce65@hotmail.es>
IT Formación para Inetum
26-30/05/2025

## Día 1 (L-26): Introducción a Angular

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

## Día 2 (M-27): Rutas y Componentes

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

## Día 3 (X-28). Arquitectura de componentes. Formularios TD

- Debugging
- Template svg
- Comunicación entre componentes (continuación)
  - Contadores. Eventos con valor
  - Testing de componentes con comunicación.
- Arquitectura de componentes
  - Componentes de presentación vs contenedores.
  - Componentes inteligentes vs tontos.
- Ejemplo: ToDo List
  - Entidad ToDo. Modelo y mock de datos (RxJs).
  - Componente Tasks. Lógica del estado
  - Componente TodoItem. Input y Output (Eventos)
  - Componente TodoCreate. Output (Eventos). Forms Template Driven (TD)
  
## Día 4 (J-29). Servicios. Providers e injectors. Formularios DD

- Forms TD (review)
- Introducción a los servicios en Angular.
- Servicios y Providers. DI (Dependency Injection)
  - Creación de un servicio: TimeServer
  - Provider root v. provider en un componente
- Servicios y patrón Repository
  - Servicio InMemoryTaskRepository. Mock de datos.
  - Uso de promesas y observables (RxJs)
  - Testing de servicios.
  - Uso en los componentes. Inyección de dependencias.
  - Repositorio y lógica de negocio (estado). Estrategias
  - Estrategia no optimista 1 repositorio / 2 estado
- Formularios reactivos (DD)

## Día 5 (V-30). Servicios HTTP
