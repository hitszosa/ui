# UI Preview Design

Date: 2026-05-03

## Goal

Add an internal preview app inside `@hitszosa/ui` so designers and developers can inspect colors, logos, theme behavior, and shared components in one place.

## Scope

- A small Astro app under `preview/`
- Uses the local `@hitszosa/ui` package directly
- Shows:
  - semantic theme tokens
  - `osa` and `accent` palettes
  - logo assets and alt text
  - shared components such as `ThemeToggle`
  - light / dark / system behavior

## Non-Goals

- Storybook-level controls
- Publishing the preview to npm
- Exhaustive design documentation beyond the live preview page

## Structure

- `preview/` is a standalone Astro app for local development only
- `@hitszosa/ui` remains the source of truth for tokens, assets, and components
- The preview imports `@hitszosa/ui/tailwind/preset` and `@hitszosa/ui/styles/theme.css`

## Preview Sections

1. Theme: current mode, toggle, semantic usage samples
2. Colors: semantic tokens and physical palettes
3. Assets: logo variants with name and alt text
4. Components: shared components rendered in realistic contexts
