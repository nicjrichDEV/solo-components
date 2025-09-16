# Repository Guidelines

## Project Structure & Module Organization
- `src/components` holds public-facing components; prefer `PascalCase` directories and keep prop-driven logic inside.
- `src/internalComponents` and `src/layouts` contain scaffolding that wires demos and shared chrome; avoid importing these from product code.
- `src/demos` offers runnable usage examples, while `src/utils` centralizes hooks and helpers; colocate assets in `src/assets` and styles in `src/styles`.
- `public/` serves static files shipped by Vite, and `index.html` bootstraps `src/main.jsx`.

## Build, Test, and Development Commands
- `npm install` resolves dependencies; rerun after pulling changes that touch `package*.json`.
- `npm run dev` starts the Vite dev server with HMR on http://localhost:5173.
- `npm run build` produces the optimized bundle in `dist/`; use before publishing component snapshots.
- `npm run preview` serves the production build locally for smoke checks.
- `npm run lint` runs ESLint with the shared config; treat failures as blockers.

## Coding Style & Naming Conventions
- JavaScript and JSX use 2-space indentation, semicolons, and double quotes; run `npx prettier --write <files>` before submitting.
- Components live in `PascalCase.jsx`; hooks and utilities use `camelCase.js`.
- Follow the configured ESLint rules, including the `no-unused-vars` exemption for capitalized symbols intended for JSX.
- Keep CSS modular by scoping rules inside `src/styles` and referencing them via imports from components.

## Testing Guidelines
- Automated tests are not wired yet; when adding behavior, include lightweight `Component.test.jsx` files beside the source using Vitest + Testing Library (bring the dependencies if absent).
- Document manual verification steps in your pull request until coverage exists.
- Capture edge cases in demos under `src/demos` so reviewers can reproduce quickly.

## Commit & Pull Request Guidelines
- Use short, descriptive, sentence-case commit messages (e.g., “Add badge hover tokens”) as seen in the existing history.
- Structure PR descriptions with context, implementation notes, and validation results; attach screenshots or recordings for any UI change.
- Reference issue IDs when available and list follow-up work explicitly so scope stays clear.
