# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development

- `npm run dev` - Start Vite dev server with hot reload
- `npm run build` - Build for production using Vite
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint on JavaScript/JSX files

### Code Quality

The project uses ESLint with custom rules:

- Unused variables starting with capital letters or underscores are ignored
- React hooks and React refresh plugins are configured
- Modern ECMAScript features and JSX are supported

## Architecture & Structure

### Component System

This is a **component library project** built with React and Vite, focusing on reusable UI components with a sophisticated styling system.

**Component Architecture:**

- **Primitive-based components**: Components like `Banner` use a primitive pattern where sub-components are exported as properties (e.g., `Banner.Root`, `Banner.Title`, `Banner.Description`)
- **Compound component exports**: Main component exports are structured as `export * as ComponentName from "./index.parts"`
- **Demo components**: Each component has corresponding demo components in `src/demos/` for testing and showcasing

### Styling System

The current approach is to use stock CSS to learn some of the latest CSS features such as @layer, nesting, etc.

**CSS Architecture:**

- Right now its a bit of the wild west, in the future css needs to be refactored to some kind of standard approach.

- **Primitive-based design tokens**: Located in `src/styles/primitives/` (colors, breakpoints, layout, radius)
- **Semantic layer**: `src/styles/semantic/` provides meaning-based classes (background, border, text, icon)
- **Theme system**: Light/dark themes in `src/styles/themes/` with CSS custom properties
- **Component-specific styles**: Each component has its own CSS file with variant-based classes

**Theme Implementation:**

- Theme switching via `data-theme` attribute on `document.documentElement`
- Centralized theme context in `App.jsx` with `ThemeContext`
- CSS custom properties for theme-aware styling

### File Organization

```
src/
├── components/          # Reusable UI components
│   ├── badge/          # Component with variants (solid, size, status, shape)
│   └── banner/         # Primitive-based compound component
├── demos/              # Component demonstrations
├── internalComponents/ # App-specific components (nav, layout helpers)
├── layouts/            # Layout components
├── styles/             # Styling system
│   ├── primitives/     # Design tokens
│   ├── semantic/       # Semantic CSS classes
│   └── themes/         # Theme implementations
└── utils/              # Utility functions
```

### Key Utilities

- `cn()` utility in `src/utils/cn.js`: Simple className joining utility (filters falsy values)
- Component names and constants in `src/utils/`

## Development Patterns

- Compound component pattern
- CSS layers
- :Where in CSS for theming

### Component Creation

When creating new components:

1. Follow the existing variant-based prop system (variant, size, status, shape)
2. Use the `cn()` utility for conditional className joining
3. Create separate CSS files with variant-specific classes
4. Consider primitive-based architecture for complex components
5. Add demo components to showcase functionality
6. If the component is complex enough use the compound component pattern

### Styling Guidelines

- Use CSS custom properties for theme-aware values
- Organize styles by concern: base → variants → responsive
- Follow the semantic naming convention for reusable styles
- Import primitive styles before semantic styles

### Theme Development

- Extend themes in `src/styles/themes/`
- Use semantic classes rather than direct color values
- Test components in both light and dark themes

### Project Goals

This is an exploratory project for a junior frontend developer that is currently taking Scrimba's Frontend Developer Career Path to create a specific set of React components. This project is also being used as an experiment to get a better understanding of how theming could work using standard CSS and creating an extensible semantic css variable architecture and setup that could be used for future design system projects.

**Shot-term Goal:**
Complete all of the components laid out as part of the Scrimba assignment.

**Long-term Goal:**
Use this project as a playground to better understand compound components pattern, complex theming and css variable architecture/naming conventions that can scale for large enterprises.

### How Claude Should Respond

Since the goal of this project is learning and mentoring a junior attempting to becoming a fantastic design engineer. When responding instead of writing any code please act as a senior frontend developer mentoring a junior walking through how to implement the code step by step with great explanation to ensure the junior understands the core concepts and how to extend this knowledge for future use.

### Learning Milestones

- [ ] Master compound component patterns
- [ ] Understand CSS custom property architecture
- [ ] Implement responsive design with CSS layers
- [ ] Evolve a CSS variable architecture than can scale for enterprise grade theming

### Common Learning Areas

- CSS specificity with layers and semantic classes
- Component composition vs inheritance decisions
- Theme variable naming conventions for scalability
- Performance considerations with CSS custom properties

### Key Concepts to Research

- CSS @layer for style organization
- :where() for low-specificity theming
- Compound component patterns in React
- Design token naming conventions
