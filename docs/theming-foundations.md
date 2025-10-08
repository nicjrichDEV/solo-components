# Theming Foundations

This repo is a playground for a multi-brand system, but the goal is to stay nimble while you iterate on components. Below is a leaner approach that keeps the styling layers understandable and easy to extend.

## 1. Layer the tokens, not the components

Start from three token layers that each have a single job:

1. **Primitives** – brand-agnostic, device-agnostic raw values (e.g. gray-1, gray-12, spacing-4). Keep them in `src/styles/primitives/` and treat them like a design system palette.
2. **Semantic aliases** – component-friendly names that describe purpose instead of color (e.g. `--surface`, `--surface-muted`, `--text-strong`, `--border-subtle`). Create the variable when you first need it inside a component, not before.
3. **Themes** – brand + mode overrides that assign primitives to semantic aliases. Each brand exports a light and dark map so overrides stay grouped.

By limiting each layer to a single concern you avoid spaghetti variable names and prevent themes from leaking into component code.

## 2. Keep the selectors simple

Use a single data attribute for brand and one for mode. Setting them on `:root` makes the theme global, but you can scope to any subtree for previews.

```css
:root {
  color-scheme: light;

  /* defaults (brand-neutral light) */
  --surface: var(--gray-1);
  --surface-muted: var(--gray-2);
  --surface-strong: var(--gray-3);
  --text-strong: var(--gray-12);
  --text-muted: var(--gray-11);
  --border-subtle: var(--gray-6);
  --border-strong: var(--gray-8);
  --focus-ring: var(--blue-9);
}

:root[data-mode='dark'] {
  color-scheme: dark;
  --surface: var(--gray-12);
  --surface-muted: var(--gray-11);
  --surface-strong: var(--gray-10);
  --text-strong: var(--gray-1);
  --text-muted: var(--gray-4);
  --border-subtle: var(--gray-7);
  --border-strong: var(--gray-9);
  --focus-ring: var(--blue-8);
}

:root[data-brand='spruce'][data-mode='light'],
:root[data-brand='spruce']:not([data-mode='dark']) {
  --surface: var(--spruce-1);
  --surface-strong: var(--spruce-3);
  --text-strong: var(--spruce-12);
  --focus-ring: var(--spruce-8);
}

:root[data-brand='spruce'][data-mode='dark'] {
  --surface: var(--spruce-12);
  --surface-strong: var(--spruce-10);
  --text-strong: var(--spruce-1);
  --focus-ring: var(--spruce-9);
}
```

No `:where()` needed—`[data-brand='name'][data-mode='dark']` keeps specificity low because attribute selectors match at the same specificity as a class.

To scope the theme, wrap any subtree:

```html
<section data-brand="spruce" data-mode="dark">
  <!-- components inside inherit the spruce dark theme -->
</section>
```

## 3. Describe the role, not the appearance

When naming semantic tokens, answer “what is this color used for?” Examples:

- `--surface`, `--surface-raised`, `--surface-overlay`
- `--text`, `--text-muted`, `--text-inverted`
- `--border`, `--border-strong`
- `--accent`, `--accent-hover`, `--accent-foreground`
- `--danger`, `--danger-foreground`

If a token is only used inside one component family (e.g. Banner), nest it: `--banner-bg`, `--banner-icon`, `--banner-accent`. This keeps the global namespace from exploding and makes it obvious when a token is unused.

## 4. Add themes incrementally

To introduce a new brand:

1. Define the primitive palette (`--pine-1` … `--pine-12`).
2. Create `src/styles/themes/pine.css` with two attribute blocks (`[data-brand='pine']` + light/dark overrides).
3. Import that file in `src/styles/global.css` so the selectors are available.

Because the semantic names already exist, the new brand only needs to map primitives → semantics. No component files change.

## 5. Create variables when you need them

Scaffolding hundreds of placeholders makes it harder to spot real usage. Instead:

1. Build the component with hard-coded primitives (`var(--gray-12)` etc.).
2. Extract each hard-coded value into a semantic alias the moment you need it in more than one place or foresee a theme override.
3. Move the alias to a shared `semantic` file if multiple components will consume it; otherwise keep it in the component’s CSS module.

This keeps tokens meaningful and avoids premature abstraction.

## 6. Additional resources

- [Every Layout – Algorithmic Design Tokens](https://every-layout.dev/blog/algorithmic-design-tokens/) for practical token naming.
- [Radix Colors](https://www.radix-ui.com/colors) for balanced primitive palettes in light/dark pairs.
- [CSS Tricks – Theming with Custom Properties](https://css-tricks.com/theming-and-custom-properties/) for attribute-driven theming patterns.
- [Design Tokens W3C Community Group](https://design-tokens.org/) for the evolving spec and glossary.

Use these to validate naming, understand token layering, and keep the system maintainable as you add components.
