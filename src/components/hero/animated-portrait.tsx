"use client";

import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import styles from "./hero.module.css";

export function AnimatedPortrait({ children }: { children: ReactNode }) {
  const floatRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerTilt = useMotionValue(0);
  const springOptions = { stiffness: 90, damping: 22, mass: .8 };
  const x = useSpring(pointerX, springOptions);
  const y = useSpring(pointerY, springOptions);
  const rotate = useSpring(pointerTilt, springOptions);

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    pointerTilt.set(0);
  };

  const movePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const vertical = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    pointerX.set(horizontal * 12);
    pointerY.set(vertical * 8);
    pointerTilt.set(horizontal * 1.2);
  };

  useEffect(() => {
    const element = floatRef.current;
    if (!element) return;
    let visible = false;
    const update = () => {
      element.style.animationPlayState = visible && !document.hidden && !reduceMotion ? "running" : "paused";
      if (!visible || document.hidden || reduceMotion) {
        pointerX.set(0);
        pointerY.set(0);
        pointerTilt.set(0);
        x.jump(0);
        y.jump(0);
        rotate.jump(0);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: .05 });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [reduceMotion, pointerX, pointerY, pointerTilt, x, y, rotate]);

  return (
    <m.div className={styles.portrait}
      onPointerMove={movePointer}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
      initial={false}
      whileInView={reduceMotion ? { y: 0 } : { y: [18, 0] }}
      viewport={{ once: true, amount: .05 }}
      transition={{ duration: reduceMotion ? 0 : 1.1, ease: [.16, 1, .3, 1] }}>
      <m.div className={styles.portraitParallax} style={{ x, y, rotate }}>
        <div ref={floatRef} className={styles.portraitFloat}>{children}</div>
      </m.div>
    </m.div>
  );
}
