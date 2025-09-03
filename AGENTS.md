# Repository Guidelines

## Project Structure & Module Organization
- Root: `index.html`, `vite.config.js`, `eslint.config.js`, `package.json`.
- App code: `src/`
  - Components: `src/components/nav/*` (e.g., `SideNav.jsx`, `MobileNav.css`).
  - Layouts: `src/layouts/*` (e.g., `MainLayout.jsx`, `MainLayout.css`).
  - Styles: `src/styles/*` (design tokens, utilities; `global.css` is intentionally hand-managed).
  - Utilities: `src/utils/*` (e.g., `cn.js`, `constants.js`).
  - Assets: `src/assets/`.
- Static assets: `public/` (served as-is by Vite).

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server with HMR.
- `npm run build`: Production build to `dist/`.
- `npm run preview`: Serve the built app locally.
- `npm run lint`: Run ESLint over the project.
- Optional: `npx prettier -w .` to format (respects `.prettierignore`).

## Coding Style & Naming Conventions
- JavaScript/JSX with ES modules; 2 spaces or existing file style for indentation (match surrounding code).
- Components: PascalCase filenames/exports (e.g., `MainLayout.jsx`).
- Utilities: camelCase filenames, default or named exports as appropriate (e.g., `cn.js`).
- CSS: plain CSS files colocated (`*.css`) with layers; avoid Tailwind/CVA (removed).
- Linting: ESLint (recommended + React Hooks, React Refresh). Rule: `no-unused-vars` ignores ALL_CAPS constants.
- Formatting: Prettier v3; do not auto-format `src/styles/global.css` (see `.prettierignore`).

## Testing Guidelines
- No formal test suite yet. Validate changes via `npm run dev`, inspect affected views, and verify responsive behavior.
- For UI changes, include a short manual test plan in PR (steps + expected results). Consider adding Vitest/RTL in follow-ups.

## Commit & Pull Request Guidelines
- Commits: Present tense, concise subject (≤72 chars), describe intent and scope. Example: "Add SideNav responsive breakpoints".
- PRs: Clear description, linked issues, before/after screenshots for UI, repro steps, and notes on accessibility when relevant.
- Quality gates: `npm run lint` passes; `npm run build` succeeds; no unused/abandoned code.

## Security & Configuration Tips
- Environment variables: use `VITE_` prefix (e.g., `VITE_API_BASE`) and load via `import.meta.env`.
- Do not commit secrets; prefer `.env.local` (git-ignored).
- Avoid introducing new dependencies without discussion; prefer lightweight utilities in `src/utils/`.

