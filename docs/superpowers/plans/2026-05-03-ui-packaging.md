# UI Packaging Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `@hitszosa/ui` as an Astro-first built package with local linting, formatting, and pre-commit enforcement.

**Architecture:** Compile TypeScript entrypoints into `dist/`, copy Astro components and static assets into the same output tree, and repoint package exports to the built paths. Add lightweight repo tooling that matches the landing page enough to keep contributor workflow consistent.

**Tech Stack:** Node.js, TypeScript, Astro, ESLint, Prettier, Husky, lint-staged

---

## Chunk 1: Package Build Output

**Files:**

- Modify: `package.json`
- Create: `tsconfig.build.json`
- Create: `types/modules.d.ts`
- Create: `scripts/build.mjs`

- [ ] Define `dist/` as the only published package payload.
- [ ] Compile TypeScript entrypoints with declaration output.
- [ ] Copy `assets/`, `components/`, and `styles/` into `dist/` unchanged.
- [ ] Repoint package `exports` and `types` to the built output.

## Chunk 2: Local Quality Tooling

**Files:**

- Create: `eslint.config.mjs`
- Create: `.prettierrc.json`
- Create: `.prettierignore`
- Create: `.gitignore`
- Create: `.husky/pre-commit`
- Modify: `package.json`

- [ ] Add ESLint for Astro and TypeScript files.
- [ ] Add Prettier with Astro formatting.
- [ ] Add Husky and lint-staged with a pre-commit hook.
- [ ] Ignore generated directories from linting and formatting.

## Chunk 3: Verification

**Files:**

- Verify: `dist/**`
- Verify: `preview/**`
- Verify: `../osa-moe-landing-page/**`

- [ ] Run `pnpm install` in `packages/ui`.
- [ ] Run `pnpm build`, `pnpm lint`, and `pnpm format:check` in `packages/ui`.
- [ ] Run `pnpm build` in `packages/ui/preview`.
- [ ] Run `pnpm build` in `osa-moe-landing-page` against the local package.
