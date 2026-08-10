# Digital Forge 2.0 Implementation Plan

## Current foundation

The repository already contains a static-first Next.js 16 portfolio with typed project data, Server Component pages, responsive styling, case-study generation, metadata, JSON-LD, a validated contact route, and a successful production build.

## Upgrade scope

1. Introduce a root `LazyMotion`/`MotionConfig` provider using `domAnimation`, then migrate client animations from the full Motion component to `m` primitives.
2. Add a Motion-value-driven scroll progress line and shared active navigation marker. Section changes will use Intersection Observer; pointer and scroll frames will never enter React state.
3. Replace the hero orbit graphic with the Digital Forge 2.0 Product System Canvas: a CSS product window, SVG connector paths, real stack rail, restrained line reveal, changing role, and local pointer depth/spotlight.
4. Add shared project-cover layout IDs and native view-transition names as progressive enhancement, with reduced-motion fallbacks.
5. Convert capabilities into an asymmetric bento composition and add an accessible proof rail using `LayoutGroup` and `AnimatePresence` on desktop with button-driven behaviour that also works on mobile.
6. Improve the mobile menu’s focus trap and focus return, then add the compact `Cmd/Ctrl + K` contact shortcut as an accessible optional enhancement.
7. Add Vitest data/schema tests, pnpm support, repository documentation, and a dedicated content checklist for asset-only launch tasks.
8. Run lint, strict type checking, tests, production build, dependency audit, runtime route checks, and a production bundle summary.

## Constraints

- Keep all content server-rendered and readable before hydration.
- Do not add GSAP or WebGL; neither is required for this upgrade.
- Keep missing portrait, screenshots, résumé, LinkedIn URL, dates, and outcomes out of visible production copy and track them in `CONTENT_CHECKLIST.md`.
- Retain CSS for simple hover/focus effects and use Motion only for state, layout, SVG, and pointer-responsive continuity.
