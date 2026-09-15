"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Hero3DScene = dynamic(() => import("./hero-3d-scene").then((module) => module.Hero3DScene), {
  ssr: false,
  loading: () => <div className="hero-3d-fallback" aria-hidden="true" />,
});

export function Hero3DLoader() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const enabled = process.env.NEXT_PUBLIC_ENABLE_3D_HERO !== "false";

  useEffect(() => {
    const mount = mountRef.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    if (!mount) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting && !document.hidden), { rootMargin: "100px" });
    const updateVisibility = () => {
      const bounds = mount.getBoundingClientRect();
      setActive(!document.hidden && bounds.bottom > -100 && bounds.top < window.innerHeight + 100);
    };
    observer.observe(mount);
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return <div className="hero-3d-mount" ref={mountRef}>{enabled && !reducedMotion ? <Hero3DScene active={active} /> : <div className="hero-3d-fallback" aria-hidden="true" />}</div>;
}
