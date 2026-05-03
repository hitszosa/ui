# UI Preview Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a small Astro preview app inside `@hitszosa/ui` for inspecting tokens, logos, and shared components.

**Architecture:** Add a `preview/` Astro app that depends on the local package via `file:..`. The preview page imports the shared Tailwind preset and shared theme CSS, then renders a dashboard-style showcase for theme modes, semantic colors, physical palettes, logo assets, and shared components.

**Tech Stack:** Astro 6, Tailwind CSS v4, `@tailwindcss/vite`, local `@hitszosa/ui`

---

## Files

- Create: `preview/package.json`
- Create: `preview/astro.config.mjs`
- Create: `preview/tsconfig.json`
- Create: `preview/src/layouts/Layout.astro`
- Create: `preview/src/pages/index.astro`
- Create: `preview/src/styles/global.css`
- Modify: `package.json` (add runtime dependency if needed)

## Tasks

- [ ] Add preview app scaffold
- [ ] Add shared dependency support needed by shared components
- [ ] Build preview layout and sections
- [ ] Verify `pnpm build` in `preview/`
