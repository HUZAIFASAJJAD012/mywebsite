"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { Box, CheckCircle2, Cloud, Code2, Smartphone } from "lucide-react";
import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { motionTokens } from "@/lib/motion";
import { Hero3DLoader } from "./hero-3d-loader";

const routes = [
  { className: "map-station station-frontend", label: "Interface", title: "Frontend", detail: "React · Next.js", icon: Code2 },
  { className: "map-station station-backend", label: "Systems", title: "Backend", detail: "NestJS · APIs", icon: Box },
  { className: "map-station station-mobile", label: "Experience", title: "Mobile", detail: "React Native", icon: Smartphone },
  { className: "map-station station-cloud", label: "Delivery", title: "Cloud", detail: "AWS · Docker", icon: Cloud },
];

export function HeroSystemVisual() {
  const reducedMotion = useReducedMotion();
  const [capable, setCapable] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, motionTokens.spring.pointer);
  const smoothY = useSpring(pointerY, motionTokens.spring.pointer);
  const rotateY = useTransform(smoothX, [-.5, .5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-.5, .5], [3, -3]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setCapable(media.matches && !reducedMotion && !document.hidden);
    update();
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [reducedMotion]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!capable) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointerX.set(x / bounds.width - .5);
    pointerY.set(y / bounds.height - .5);
  }

  function reset() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className="product-canvas"
      onPointerMove={move}
      onPointerLeave={reset}
      role="img"
      aria-label="Huzaifa Sajjad product delivery map connecting frontend, backend, mobile and cloud engineering"
    >
      <m.div className="hero-ecosystem" style={capable ? { rotateX, rotateY, transformPerspective: 1400 } : undefined} aria-hidden="true">
        <svg className="hero-connections" viewBox="0 0 700 560" preserveAspectRatio="none">
          <m.path d="M145 112 L315 240" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .7, delay: .12 }} />
          <m.path d="M555 112 L385 240" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .7, delay: .18 }} />
          <m.path d="M145 425 L315 312" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .7, delay: .24 }} />
          <m.path d="M555 425 L385 312" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .7, delay: .3 }} />
        </svg>
        <div className="hero-3d-stage"><Hero3DLoader /></div>
        <div className="hero-core-label"><b>HS</b><span>Full-Stack Developer</span></div>
        {routes.map(({ className, label, title, detail, icon: Icon }) => (
          <div className={`hero-skill-panel ${className}`} key={title}>
            <Icon size={20} />
            <div><small>{label}</small><strong>{title}</strong><span>{detail}</span></div>
          </div>
        ))}
        <div className="hero-ready"><CheckCircle2 size={16} /><span><small>Delivery status</small><strong>Production ready</strong></span></div>
      </m.div>
    </div>
  );
}
