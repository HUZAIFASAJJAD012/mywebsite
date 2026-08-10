# Performance Validation Notes

## Local production build

- Next.js: 16.2.10 with Turbopack
- All content routes except the contact handler are prerendered.
- Six project-detail routes are statically generated through `generateStaticParams`.
- The production homepage, projects, case-study, about, contact, sitemap and robots routes return HTTP 200.

## JavaScript summary

Measured from the script resources emitted into the locally built homepage HTML:

- Route/application client chunks: approximately 56 KB gzip (`3h6fuj8301orl`, `1dcmdc53jijxj`, `1vqn_g09wep_6`)
- Total initial scripts including the Next.js/React/Turbopack runtime: approximately 238 KB gzip
- The application-specific budget is below 90 KB gzip, but the strict 150 KB all-in homepage target is not met once the installed framework runtime is counted.

Motion is loaded through `LazyMotion` with `domAnimation`. The contact command dialog is a separate on-demand client chunk. GSAP, WebGL and React Three Fiber are not installed.

## Runtime behaviour

- No application code uses `requestAnimationFrame` or `setInterval`.
- Pointer depth uses Motion values and transforms without React state updates per pointer frame.
- Scroll progress uses `useScroll` and a spring Motion value without mirroring scroll position into React state.
- Section and navigation changes use Intersection Observer.
- Reduced-motion users receive static pointer depth, connectors and role text.
- The likely homepage LCP element is the server-rendered hero heading; the CSS/SVG canvas contains no blocking image asset.

## Validation still requiring deployment

Lighthouse, slow-4G/4x CPU traces, real browser Core Web Vitals and cross-browser screenshots require the final deployed origin and production media assets. Run Lighthouse in an incognito browser against that deployment and pair simulated data with Vercel field metrics. Optional WebGL remains deliberately unimplemented unless those measurements stay within budget.
