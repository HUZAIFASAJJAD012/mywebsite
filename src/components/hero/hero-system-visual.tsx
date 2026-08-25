"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { Box, CheckCircle2, Cloud, Code2, Smartphone } from "lucide-react";
import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { motionTokens } from "@/lib/motion";

const routes = [
  { className: "map-station station-frontend", label: "Interface", title: "Frontend", detail: "React · Next.js", icon: Code2 },
  { className: "map-station station-backend", label: "Systems", title: "Backend", detail: "NestJS · APIs", icon: Box },
  { className: "map-station station-mobile", label: "Experience", title: "Mobile", detail: "React Native", icon: Smartphone },
  { className: "map-station station-cloud", label: "Delivery", title: "Cloud", detail: "AWS · Docker", icon: Cloud },
];

const stack = ["React", "Next.js", "TypeScript", "NestJS", "Postgres", "AWS"];

export function HeroSystemVisual() {
  const reducedMotion = useReducedMotion();
  const [capable, setCapable] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spotX = useMotionValue(320);
  const spotY = useMotionValue(220);
  const smoothX = useSpring(pointerX, motionTokens.spring.pointer);
  const smoothY = useSpring(pointerY, motionTokens.spring.pointer);
  const rotateY = useTransform(smoothX, [-.5, .5], [-1.8, 1.8]);
  const rotateX = useTransform(smoothY, [-.5, .5], [1.8, -1.8]);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${spotX}px ${spotY}px, rgba(34, 211, 238, .09), transparent 72%)`;

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
    spotX.set(x);
    spotY.set(y);
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
      <m.div
        className="delivery-map"
        style={capable ? { rotateX, rotateY, transformPerspective: 1400, backgroundImage: spotlight } : undefined}
        aria-hidden="true"
      >
        <header className="delivery-map-head">
          <div className="map-identity"><b>HS</b><span>Product delivery map</span></div>
          <div className="map-status"><i /> System online</div>
        </header>

        <div className="map-viewport">
          <div className="map-axis axis-input">Build layers</div>
          <div className="map-axis axis-output">Production</div>
          <svg className="delivery-routes" viewBox="0 0 720 430" preserveAspectRatio="none">
            <m.path className="route route-interface" d="M118 92 H265 C306 92 311 178 356 214" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .55, delay: .08 }} />
            <m.path className="route route-systems" d="M602 92 H455 C414 92 409 178 364 214" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .55, delay: .14 }} />
            <m.path className="route route-mobile" d="M118 338 H265 C306 338 311 250 356 216" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .55, delay: .2 }} />
            <m.path className="route route-cloud" d="M602 338 H455 C414 338 409 250 364 216" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .55, delay: .26 }} />
            <path className="route route-pulse" d="M360 214 V392 H618" />
            <g className="route-stops">
              <circle cx="118" cy="92" r="5" /><circle cx="602" cy="92" r="5" />
              <circle cx="118" cy="338" r="5" /><circle cx="602" cy="338" r="5" />
              <circle cx="360" cy="214" r="8" /><circle cx="618" cy="392" r="5" />
            </g>
          </svg>

          {routes.map(({ className, label, title, detail, icon: Icon }) => (
            <div className={className} key={title}>
              <Icon />
              <div><small>{label}</small><strong>{title}</strong><span>{detail}</span></div>
            </div>
          ))}

          <div className="product-interchange">
            <span>Product</span>
            <b>HS</b>
            <small>One connected build</small>
          </div>

          <div className="delivery-note">
            <CheckCircle2 />
            <div><small>Release signal</small><strong>Ready to ship</strong></div>
          </div>
        </div>

        <footer className="delivery-map-foot">
          <span>Core stack</span>
          <div className="map-stack">{stack.map((item) => <b key={item}>{item}</b>)}</div>
          <small>04 connected layers</small>
        </footer>
      </m.div>
    </div>
  );
}
