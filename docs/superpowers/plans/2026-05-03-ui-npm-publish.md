# UI npm Publish Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prepare `@hitszosa/ui` for npm publishing as an Astro-first UI package with shared theme initialization.

**Architecture:** Keep the existing `dist/` package layout. Add a client-side `theme-init` entry that reads simple `data-*` attributes from `<html>`, export it from npm, and update consuming Astro apps to import that entry instead of owning duplicate scripts.

**Tech Stack:** Astro 6, TypeScript, Tailwind CSS v4, npm scoped packages.

---

## Chunk 1: Shared Theme Init

**Files:**

- Create: `client/theme-init.ts`
- Modify: `package.json`
- Modify: `tsconfig.build.json`
- Modify: `index.ts`

- [ ] Add `client/theme-init.ts` that reads `data-theme-storage-key` and `data-default-theme-mode` from `document.documentElement`, validates with `isThemeMode`, and calls `applyTheme(getStoredThemeMode(...))`.
- [ ] Export `./client/theme-init` from `package.json`.
- [ ] Ensure `client/**/*.ts` remains included in `tsconfig.build.json`.
- [ ] Optionally export theme-init side-effect entry from root only if useful; otherwise keep it as an explicit subpath import.

## Chunk 2: Consumer Updates

**Files:**

- Modify: `osa-moe-landing-page/src/layouts/Layout.astro`
- Modify: `packages/ui/preview/src/layouts/Layout.astro`
- Remove: `osa-moe-landing-page/src/scripts/theme-init.ts`
- Remove: `packages/ui/preview/src/scripts/theme-init.ts`

- [ ] Replace local script references with inline module imports: `<script>import '@hitszosa/ui/client/theme-init'</script>`.
- [ ] Keep `<html data-default-theme-mode data-theme-storage-key>` as the public configuration surface.
- [ ] Remove duplicate local theme-init files.

## Chunk 3: npm Package Docs and Metadata

**Files:**

- Create: `README.md`
- Modify: `package.json`
- Modify: `.gitignore`
- Modify: `.prettierignore`

- [ ] Add npm metadata: `description`, `license`, `repository`, `keywords`, `publishConfig.access`.
- [ ] Keep `files: ["dist/"]` so preview/docs/source do not publish.
- [ ] Add README with installation, Astro setup, Tailwind `@source`, theme initialization, component usage, asset usage, and publish commands.
- [ ] Ignore generated `.astro/` and `dist/` locally if dist should remain generated.

## Chunk 4: Verification

**Files:**

- No source changes unless verification reveals an issue.

- [ ] Run `pnpm build` in `packages/ui`.
- [ ] Run `pnpm pack --dry-run` in `packages/ui` and verify only expected files are included.
- [ ] Run `pnpm build` in `packages/ui/preview`.
- [ ] Run `pnpm build` in `osa-moe-landing-page`.
