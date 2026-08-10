"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { Box, Cloud, Code2, MoreHorizontal, Smartphone } from "lucide-react";
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
  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${spotX}px ${spotY}px, rgba(37, 99, 235, .13), transparent 72%)`;

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
    <m.div className="product-canvas" onPointerMove={move} onPointerLeave={reset} style={{ backgroundImage: capable ? spotlight : undefined }} aria-label="Connected system architecture showing frontend, backend, mobile, cloud and technology stack">
      <div className="blueprint-grid grid-left" aria-hidden="true" /><div className="blueprint-grid grid-right" aria-hidden="true" />
      <svg className="canvas-connectors" viewBox="0 0 860 680" aria-hidden="true">
        <m.path d="M182 82 H310 Q328 82 328 100 V162" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .42, delay: .12 }} />
        <m.path d="M678 102 H580 Q562 102 562 120 V162" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .42, delay: .17 }} />
        <m.path d="M170 490 H236 Q252 490 252 472 V414" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .42, delay: .22 }} />
        <m.path d="M686 512 H622 Q604 512 604 494 V414" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .42, delay: .27 }} />
      </svg>

      <div className="arch-node node-frontend" aria-hidden="true"><Code2 /><div><strong>Frontend</strong><small>React · Next.js · TypeScript</small></div></div>
      <div className="arch-node node-backend" aria-hidden="true"><Box /><div><strong>Backend</strong><small>Node.js · NestJS · APIs</small></div></div>
      <div className="arch-node node-mobile" aria-hidden="true"><Smartphone /><div><strong>Mobile</strong><small>React Native · Flutter</small></div></div>
      <div className="arch-node node-cloud" aria-hidden="true"><Cloud /><div><strong>Cloud</strong><small>AWS · Docker · CI/CD</small></div></div>

      <m.div className="product-window" style={capable ? { rotateX, rotateY, transformPerspective: 1200 } : undefined} aria-hidden="true">
        <div className="product-window-bar"><span>System architecture</span><MoreHorizontal size={18} /></div>
        <div className="product-window-body">
          <div className="architecture-core">
            <span className="dashboard-label">Connected product layers</span>
            <div className="layer-stack"><i /><i /><i /><i /></div>
          </div>
          <div className="architecture-stats">
            <div><small>Architecture</small><strong>Modular</strong><span className="signal-line" /></div>
            <div><small>Delivery</small><strong>Tested</strong><span className="signal-line short" /></div>
            <div><small>Releases</small><strong>Repeatable</strong><span className="signal-bars"><i /><i /><i /><i /><i /></span></div>
            <div className="system-status"><small>Status</small><span><i /> Production-minded</span></div>
          </div>
        </div>
      </m.div>

      <div className="stack-rail" aria-hidden="true"><span>Technology stack</span><div><b>⚛</b><b>N</b><b>TS</b><b>JS</b><b>Nj</b><b>▣</b><b>aws</b></div></div>
      <div className="canvas-caption" aria-hidden="true"><i /> Building scalable digital products <i /></div>
    </m.div>
  );
}
