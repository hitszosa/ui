# UI Packaging Design

Date: 2026-05-03

## Goal

Make `@hitszosa/ui` easier for future Astro sites to consume by shipping a stable built package layout instead of exposing raw TypeScript entrypoints.

## Scope

- Build TypeScript entrypoints into `dist/`
- Copy Astro components, shared CSS, and assets into `dist/`
- Update `exports` to point at built package paths
- Add local quality tooling: ESLint, Prettier, Husky, and lint-staged

## Non-Goals

- Cross-framework packaging beyond Astro consumers
- Storybook or additional preview tooling
- Publishing to npm in this change

## Structure

- `index.ts`, `client/theme.ts`, and `tailwind/preset.ts` compile to `dist/`
- `components/`, `styles/`, and `assets/` are copied into `dist/` unchanged so Astro and Vite can still process them at the consumer edge
- `package.json` exposes only built entrypoints
- The package keeps `preview/` as the integration sandbox for local verification

## Tooling

- Use a small Node build script instead of a heavier bundler so file layout stays predictable
- Reuse the landing page's ESLint, Prettier, and Husky pattern where it fits
- Validate with package build, package lint, preview build, and landing build
