"use client";

import { useEffect, useState } from "react";
import { m } from "motion/react";

const sections = [{ id: "work", label: "Work" }, { id: "expertise", label: "Expertise" }, { id: "experience", label: "Experience" }, { id: "about", label: "About" }];

export function SectionIndex() {
  const [active, setActive] = useState("work");
  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id)).filter((element): element is HTMLElement => Boolean(element));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, .1, .25] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <nav className="section-index" aria-label="Homepage sections">{sections.map(({ id, label }, index) => <a href={`#${id}`} key={id} aria-label={label}>{active === id ? <m.span layoutId="section-index-active" /> : null}<small>0{index + 1}</small></a>)}</nav>;
}
