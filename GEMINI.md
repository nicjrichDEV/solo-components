# GEMINI.md

## Project Overview

This is a React component library built with Vite and styled with Tailwind CSS. The project is structured to house individual UI components in their own directories within the `src` folder. It includes a utility for conditionally joining class names, which is a common practice in component-based libraries for flexible styling.

## Building and Running

### Development
To run the project in development mode, use the following command. This will start a development server with Hot Module Replacement (HMR).

```bash
npm run dev
```

### Building for Production
To build the project for production, use the following command. This will create an optimized build of the application in the `dist` directory.

```bash
npm run build
```

### Linting
To run the linter and check for code quality, use the following command:

```bash
npm run lint
```

### Previewing the Production Build
To preview the production build locally, use the following command:

```bash
npm run preview
```

## Development Conventions

*   **Component Structure:** Each component is expected to be in its own directory under `src`. For example, the `Badge` component is located in `src/badge`.
*   **Styling:** Styling is done using a combination of CSS files and Tailwind CSS. The project uses a `cn.js` utility to conditionally apply CSS classes.
*   **Dependencies:** The project uses `lucide-react` for icons.
