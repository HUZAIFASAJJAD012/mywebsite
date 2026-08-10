"use client";

import { m, useScroll, useSpring } from "motion/react";
import { motionTokens } from "@/lib/motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, motionTokens.spring.gentle);
  return <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
