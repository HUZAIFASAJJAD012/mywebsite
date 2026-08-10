# AGENTS.md

## Project

This repository contains the production portfolio website for Huzaifa Sajjad.

## Documentation

Before implementing or changing Next.js code, read the version-matched documentation bundled in `node_modules/next/dist/docs/` and follow the installed version rather than relying on remembered APIs.

## Architecture

- Next.js App Router
- TypeScript strict mode
- React Server Components by default
- Client Components only for interaction and animation
- Tailwind CSS design tokens
- Motion for standard UI animation using `LazyMotion` and `m` components
- CSS transitions for trivial states
- GSAP only for one verified complex timeline
- React Three Fiber is experimental, feature-flagged and lazy-loaded

## Quality requirements

- No TypeScript errors
- No lint errors
- Production build must pass
- WCAG 2.2 AA target
- Reduced-motion support
- Target LCP <= 2.2s, INP <= 150ms, CLS <= 0.05; never exceed 2.5s / 200ms / 0.1
- No fabricated project metrics or testimonials

## Content

Profile and contact data must come from `src/content/profile.ts`.
Project content must come from typed data or MDX.
Do not duplicate profile information across components.

## Motion

Use transform and opacity for routine animation.
Use `LazyMotion` and motion values; do not use React state per animation frame.
Do not animate the same element using Motion and GSAP.
Pause motion offscreen and when the page is hidden.
Disable non-essential motion when reduced motion is requested.

## Completion

Run:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`

Report all results in the final response.
