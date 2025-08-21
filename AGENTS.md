# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` contains React components and utilities.
  - Components: `src/components/` (e.g., `Navigation.jsx`) and feature folders (e.g., `src/badge/Badge.jsx`, `src/badge/Badge.css`).
  - Utilities: `src/utils/` (e.g., `cn.js`).
  - Entry: `src/main.jsx` mounts `App.jsx` to `#root`; HTML shell is `index.html`.
- Assets: `src/assets/` for local images; `public/` for static files served as-is.
- Build config: `vite.config.js`; linting in `eslint.config.js`; formatting in `.prettierrc`.

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server with React + Tailwind.
- `npm run build`: Production build to `dist/`.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint against the repo.

## Coding Style & Naming Conventions
- Language: React 19 with JSX, ES modules.
- Components: Prefer functional components with default export; PascalCase file names (e.g., `Navigation.jsx`, `Badge.jsx`).
- Styles: Tailwind CSS for utility classes; component-scoped CSS allowed (e.g., `Badge.css`).
- Utilities: lowerCamelCase file names (e.g., `cn.js`).
- Formatting: Prettier with `prettier-plugin-tailwindcss` (keeps Tailwind classes ordered). Indentation is Prettier defaults.
- Linting: ESLint (browser globals, React hooks/refresh). Notable rule: `no-unused-vars` ignores constants matching `^[A-Z_]`.

## Testing Guidelines
- Framework: Not configured yet. If adding tests, use Vitest + React Testing Library.
- Location: `src/__tests__/` or co-located next to components.
- Naming: `*.test.jsx` or `*.spec.jsx`.
- Commands (after adding tooling): `npm run test`, `npm run test:watch`.

## Commit & Pull Request Guidelines
- Commits: Use clear, imperative messages (e.g., "Add badge shape prop"). Reference issues when relevant.
- Scope: Keep commits focused; include refactors or formatting in separate commits when practical.
- PRs: Provide a concise description, screenshots for UI changes, and steps to validate. Link related issues. Ensure `npm run lint` passes and the app builds.

## Security & Configuration Tips
- Secrets: Do not commit secrets or tokens; use environment variables if introduced.
- Assets: Prefer `public/` for static files that must keep their path; place component-specific assets under `src/`.

