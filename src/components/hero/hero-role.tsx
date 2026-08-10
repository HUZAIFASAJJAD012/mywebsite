"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";

const roles = ["interfaces", "systems", "products"];

export function HeroRole() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(reduceMotion ? roles.length - 1 : 0);

  useEffect(() => {
    if (reduceMotion || index >= roles.length - 1) return;
    const timer = window.setTimeout(() => setIndex((current) => current + 1), index === 0 ? 1600 : 1250);
    return () => window.clearTimeout(timer);
  }, [index, reduceMotion]);

  return (
    <span className="hero-role-line">I turn complex requirements into <span className="role-window"><AnimatePresence mode="wait" initial={false}><m.span key={roles[index]} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} transition={{ duration: .24 }}>{roles[index]}</m.span></AnimatePresence></span>.</span>
  );
}
