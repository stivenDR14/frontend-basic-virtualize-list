# React Virtualized List App

<div align="center">
  <a href="#english" id="en-btn">🇬🇧 English</a> |
  <a href="#spanish" id="es-btn">🇪🇸 Español</a>
</div>

<div id="english">

## Overview

This is a React application that demonstrates a login system, token management, and rendering a virtualized list of items. The application includes public and private routes done by a mixture between Context-based Architecture and components-based architecture.

## Features

- Fake login system with form validation
- Token-based authentication
- Virtualized list for efficient rendering of large datasets
- Responsive design for web and mobile
- Public and private routing configurations
- Logout workflow linked to app context

## Tech Stack

- node v20.15.1
- React 19
- TypeScript
- Vite
- Material UI v7
- React Router v7
- Axios for API requests
- Context API for state management

## Installation

1. Clone the repository:

```bash
git clone https://github.com/stivenDR14/frontend-basic-virtualize-list.git
cd frontend-basic-virtualize-list
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Usage

### Login

Use any valid email format and a password with at least 6 characters to log in. The app implements a fake login system that randomly succeeds or fails to simulate a real-world scenario.

### Home Page

After successful login, you'll be redirected to the home page with a virtualized list of reviews. The list efficiently renders only the items that are visible in the viewport, allowing for smooth scrolling through large datasets.
The endpoint used to fetch data is public is getting mocked data from Amazon ratings of shoes, more than 2000 reviews are available.

### Logout

Click the logout button at the top left corner to log out and return to the login screen.

## Architecture

The application uses a context-based and components-based architecture to handle authentication and state management:

- **App Context**: Manages authentication state, loading states, and notifications
- **Public/Private Routes**: Protects routes based on authentication status
- **Pages**: Pages are the main sections that are used to render the home page and the login page and focused only on the UI elements and structure.
- **Components**: Reusable UI components for the app
- **Services**: API requests and data handling
- **Hooks**: Custom hooks for the sections and components logic

## Virtualization Solution

The home page uses a custom virtualization hook (`useVirtualize`) that renders only the items visible in the viewport and a small buffer of off-screen items. This significantly improves performance when dealing with large lists by reducing DOM elements and memory usage.

The virtualization solution includes:

- Dynamic calculation of visible items based on scroll position
- Buffer items to prevent flickering during scrolling
- Position calculation for absolute positioning of list items
- Gradient indicators for scrollable content

## Potential Improvements for backend calls

- Implement date-based caching strategies for API responses. currently the data is cached forever after the first fetch.
- Add pagination in the UI and on the API side.
- implement code status properties in the API responses to handle different statuses in the UI.

</div>

<div id="spanish" style="display:none">

## Descripción General

Esta es una aplicación React que demuestra un sistema de inicio de sesión, gestión de tokens y renderización de una lista virtualizada de elementos. La aplicación incluye rutas públicas y privadas configuradas con una mezcla entre arquitectura basada en contextos y arquitectura basada en componentes.

## Características

- Sistema de inicio de sesión simulado con validación de formularios
- Autenticación basada en tokens
- Lista virtualizada para renderizar eficientemente grandes conjuntos de datos
- Diseño responsivo para web y móvil
- Configuraciones de enrutamiento público y privado
- Flujo de cierre de sesión vinculado al contexto de la aplicación

## Tecnologías Utilizadas

- node v20.15.1
- React 19
- TypeScript
- Vite
- Material UI v7
- React Router v7
- Axios para peticiones API
- Context API para gestión de estado

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/stivenDR14/frontend-basic-virtualize-list.git
cd frontend-basic-virtualize-list
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Compilar para producción:

```bash
npm run build
```

## Uso

### Inicio de Sesión

Utiliza cualquier formato de correo electrónico válido y una contraseña de al menos 6 caracteres para iniciar sesión. La aplicación implementa un sistema de inicio de sesión simulado que aleatoriamente tiene éxito o falla para simular un escenario real.

### Página Principal

Después de un inicio de sesión exitoso, serás redirigido a la página principal con una lista virtualizada de reseñas. La lista renderiza eficientemente solo los elementos que son visibles en la ventana, permitiendo un desplazamiento suave a través de grandes conjuntos de datos.

### Cierre de Sesión

Haz clic en el botón de cierre de sesión en la esquina superior izquierda para cerrar sesión y volver a la pantalla de inicio de sesión.

## Arquitectura

La aplicación utiliza una arquitectura basada en contextos y componentes para manejar la autenticación y la gestión del estado:

- **Contexto de App**: Gestiona el estado de autenticación, estados de carga y notificaciones
- **Rutas Públicas/Privadas**: Protege las rutas basadas en el estado de autenticación
- **Páginas**: Las páginas son las secciones principales que se utilizan para renderizar la página de inicio y la página de acceso y están enfocadas solo en los elementos de la interfaz de usuario y la estructura.
- **Componentes**: Componentes reutilizables para la aplicación
- **Servicios**: Peticiones API y manejo de datos
- **Hooks**: Hooks personalizados para la lógica de secciones y componentes.

## Solución de Virtualización

La página principal utiliza un hook de virtualización personalizado (`useVirtualize`) que renderiza solo los elementos visibles en la ventana y una pequeña cantdad de elementos fuera de pantalla. Esto mejora significativamente el rendimiento al manejar listas grandes reduciendo los elementos DOM y el uso de memoria.

La solución de virtualización incluye:

- Cálculo dinámico de elementos visibles basado en la posición de desplazamiento
- Elementos de búfer para prevenir parpadeos durante el desplazamiento
- Cálculo de posición para el posicionamiento absoluto de los elementos de la lista
- Indicadores de gradiente para contenido desplazable

## Mejoras Potenciales para llamadas a backend

- Implementar estrategias de caché para respuestas de API.
- Agregar paginación en la UI y en el backend.
- Implementar propiedades de código en las respuestas de API para manejar diferentes estados en la UI.

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const englishSection = document.getElementById('english');
  const spanishSection = document.getElementById('spanish');
  const enBtn = document.getElementById('en-btn');
  const esBtn = document.getElementById('es-btn');
  
  enBtn.addEventListener('click', function(e) {
    e.preventDefault();
    englishSection.style.display = 'block';
    spanishSection.style.display = 'none';
  });
  
  esBtn.addEventListener('click', function(e) {
    e.preventDefault();
    englishSection.style.display = 'none';
    spanishSection.style.display = 'block';
  });
});
</script>
