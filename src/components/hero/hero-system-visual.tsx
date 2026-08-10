"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { motionTokens } from "@/lib/motion";

export function HeroSystemVisual() {
  const reducedMotion = useReducedMotion();
  const [capable, setCapable] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spotX = useMotionValue(320);
  const spotY = useMotionValue(220);
  const smoothX = useSpring(pointerX, motionTokens.spring.pointer);
  const smoothY = useSpring(pointerY, motionTokens.spring.pointer);
  const rotateY = useTransform(smoothX, [-.5, .5], [-2.5, 2.5]);
  const rotateX = useTransform(smoothY, [-.5, .5], [2.5, -2.5]);
  const backX = useTransform(smoothX, [-.5, .5], [-8, 8]);
  const backY = useTransform(smoothY, [-.5, .5], [-6, 6]);
  const midX = useTransform(backX, (value) => value * -.55);
  const midY = useTransform(backY, (value) => value * -.55);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${spotX}px ${spotY}px, rgba(103, 232, 249, .11), transparent 70%)`;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setCapable(media.matches && !reducedMotion && !document.hidden);
    update(); media.addEventListener("change", update); document.addEventListener("visibilitychange", update);
    return () => { media.removeEventListener("change", update); document.removeEventListener("visibilitychange", update); };
  }, [reducedMotion]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!capable) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left; const y = event.clientY - bounds.top;
    spotX.set(x); spotY.set(y); pointerX.set(x / bounds.width - .5); pointerY.set(y / bounds.height - .5);
  }

  function reset() { pointerX.set(0); pointerY.set(0); }

  return (
    <m.div className="product-canvas" onPointerMove={move} onPointerLeave={reset} style={{ backgroundImage: capable ? spotlight : undefined }} aria-label="Connected product system showing frontend, backend, mobile and cloud">
      <m.div className="canvas-plane plane-back" style={capable ? { x: backX, y: backY } : undefined} aria-hidden="true" />
      <m.div className="canvas-plane plane-mid" style={capable ? { x: midX, y: midY } : undefined} aria-hidden="true" />
      <svg className="canvas-connectors" viewBox="0 0 640 540" aria-hidden="true">
        <m.path d="M128 116 C180 120 180 180 244 190" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .75, delay: .35 }} />
        <m.path d="M510 112 C460 130 475 180 416 194" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .75, delay: .42 }} />
        <m.path d="M110 425 C174 415 186 370 242 350" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .75, delay: .49 }} />
        <m.path d="M522 428 C465 410 458 370 410 351" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .75, delay: .56 }} />
      </svg>
      <span className="canvas-chip chip-frontend">Frontend</span><span className="canvas-chip chip-backend">Backend</span><span className="canvas-chip chip-mobile">Mobile</span><span className="canvas-chip chip-cloud">Cloud</span>
      <m.div className="product-window" style={capable ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}>
        <div className="product-window-bar"><span /><span /><span /><small>product.system</small><em>Live</em></div>
        <div className="product-window-body">
          <div className="product-sidebar"><span className="active" /><span /><span /><span /></div>
          <div className="product-dashboard"><div className="dashboard-label">Delivery overview</div><strong>One system.<br />Every layer.</strong><div className="dashboard-grid"><span /><span /><span /></div></div>
        </div>
      </m.div>
      <div className="stack-rail" aria-label="Core capabilities"><span>Next.js</span><span>NestJS</span><span>React Native</span><span>PostgreSQL</span></div>
      <div className="canvas-coordinate top">SYS / 01</div><div className="canvas-coordinate bottom">34.01° N · 71.58° E</div>
    </m.div>
  );
}
