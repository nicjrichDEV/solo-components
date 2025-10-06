# Repository Guidelines

## Project Goals & Learning Focus
Solo Components is a learning-focused component library for practicing Scrimba's frontend curriculum while prototyping an extensible CSS theming system. Short term, finish the assignment's component roster with high-quality demos. Long term, treat the repo as a playground for compound components, semantic design tokens, and enterprise-ready theme architecture built with standard CSS primitives.

## Project Structure & Module Organization
Core widgets live in `src/components`, with compound patterns (e.g., `Banner.Root`, `Banner.Title`) exported via index aggregators. Example scenarios live in `src/demos`, internal scaffolding in `src/internalComponents`, and shared layouts in `src/layouts`. Style layers sit under `src/styles`: primitive tokens, semantic helpers, and `themes/` for light/dark variants. Utilities such as `cn()` reside in `src/utils`, while `public/` holds static assets and `src/main.jsx` wires the Vite entry.

## Build, Test, and Development Commands
- `npm install` syncs dependencies to the lockfile.
- `npm run dev` launches the Vite dev server with HMR at `http://localhost:5173`.
- `npm run build` emits an optimized bundle in `dist/` for publishing or preview.
- `npm run preview` serves the built assets for smoke tests.
- `npm run lint` runs the ESLint suite configured for modern JSX and hooks.

## Coding Style & Naming Conventions
Use ES Modules and React 19 JSX. Components, layouts, and demos follow `PascalCase.jsx`; hooks use `useSomething.js`; shared helpers default to `camelCase.js`. Keep indentation at two spaces and prefer single quotes in JS/JSX. Run `npx prettier --write "src/**/*.{js,jsx}"` before pushing. Lean on compound component organization, export only reusable primitives, and group demo-specific helpers beside their stories.

## Testing Guidelines
Automated tests are not yet wired up; exercise changes through the appropriate `src/demos` entry and document accessibility or theme edge cases in code comments. When adding a harness (Vitest + Testing Library is suggested), colocate specs in `src/components/<name>/__tests__/<Component>.test.jsx` and cover both light and dark themes.

## Commit & Pull Request Guidelines
Commit history favors concise, imperative subjects (e.g., "Continue Banner variant wiring"). Keep the first line ≤72 characters and add contextual body text when altering behavior or theme structure. Pull requests should link relevant Scrimba goals or issues, include before/after visuals for UI shifts, and list manual verification steps (`dev`, `lint`, `preview`) so reviewers can repeat them.
