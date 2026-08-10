"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";

type RevealProps = { children: ReactNode; className?: string; delay?: number };

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .08 }}
      transition={{ duration: reduceMotion ? 0 : .38, delay, ease: [.16, 1, .3, 1] }}
    >
      {children}
    </m.div>
  );
}
