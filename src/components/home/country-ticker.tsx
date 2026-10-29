"use client";

import { useEffect, useRef } from "react";
import { Globe2 } from "lucide-react";
import { m, useAnimationFrame, useInView, useMotionValue, useReducedMotion } from "motion/react";
import styles from "./country-ticker.module.css";

type Country = {
  readonly name: string;
  readonly flag: string;
};

const pixelsPerMillisecond = 0.045;

function CountryList({ countries, duplicate = false }: { countries: readonly Country[]; duplicate?: boolean }) {
  return (
    <div className={`${styles.group} ${duplicate ? styles.duplicate : ""}`} role={duplicate ? undefined : "list"} aria-hidden={duplicate || undefined}>
      {countries.map((country) => (
        <span className={styles.country} role={duplicate ? undefined : "listitem"} key={country.name}>
          <span className={styles.flag} aria-hidden="true">{country.flag}</span>
          <span>{country.name}</span>
        </span>
      ))}
    </div>
  );
}

export function CountryTicker({ countries }: { countries: readonly Country[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const groupWidth = useRef(0);
  const distance = useRef(0);
  const x = useMotionValue(0);
  const isInView = useInView(viewportRef, { amount: 0.15 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const updateWidth = () => {
      groupWidth.current = group.getBoundingClientRect().width;
      if (groupWidth.current > 0) distance.current %= groupWidth.current;
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_time, delta) => {
    if (reduceMotion || !isInView || document.visibilityState !== "visible" || groupWidth.current === 0) return;

    distance.current = (distance.current + Math.min(delta, 64) * pixelsPerMillisecond) % groupWidth.current;
    x.set(-distance.current);
  });

  return (
    <div className={styles.ticker} role="region" aria-label="Countries served worldwide">
      <div className={styles.label} aria-hidden="true">
        <Globe2 size={15} />
        <span>Worldwide</span>
      </div>
      <div className={styles.viewport} ref={viewportRef}>
        <m.div className={styles.track} style={{ x }}>
          <div ref={groupRef}>
            <CountryList countries={countries} />
          </div>
          <CountryList countries={countries} duplicate />
        </m.div>
      </div>
    </div>
  );
}
