# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website built with modern web technologies. The project uses Vite as the build tool and features a comprehensive UI component library from shadcn/ui.

## Key Technologies

- **React 18.3.1** with TypeScript
- **Vite 5.4.1** with SWC for fast builds
- **shadcn/ui** component library (44+ components)
- **Tailwind CSS 3.4.11** for styling
- **React Router DOM** for routing
- **React Query** (TanStack Query) for data management
- **React Hook Form** with Zod for form validation
- **next-themes** for dark/light mode support

## Common Development Commands

```bash
# Start development server (port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

### Directory Structure
- `src/components/` - React components organized by feature
  - `ui/` - shadcn/ui component library (Button, Card, Dialog, Form, etc.)
  - Portfolio sections (HeroSection, AboutSection, ProjectsSection, etc.)
- `src/pages/` - Page components (Index, NotFound)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and helpers
- `public/` - Static assets

### Key Configuration
- **TypeScript**: Path alias `@/*` maps to `./src/*`
- **Vite**: Custom port 8080, component tagging in dev mode
- **Tailwind**: Custom color scheme, dark mode support, custom animations
- **ESLint**: TypeScript support with React hooks plugin

### Important Patterns
1. **Component Structure**: Components use TypeScript interfaces for props and follow React functional component patterns
2. **Styling**: Tailwind CSS utility classes with custom theme extensions
3. **Form Handling**: React Hook Form with Zod schemas for validation
4. **Theming**: Dark/light mode toggle with theme persistence via next-themes
5. **Routing**: React Router v6 with lazy loading for code splitting

### Development Notes
- The project uses both npm and bun (both lock files present)
- No testing framework is currently configured
- TypeScript is configured with relaxed type checking (noImplicitAny: false)
- The project includes extensive animations using Tailwind CSS animate
- All shadcn/ui components are locally installed in `src/components/ui/`