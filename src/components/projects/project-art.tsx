"use client";

import { m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/projects";

export function ProjectArt({ project, className }: { project: Project; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <m.div className={cn("project-art", project.coverTone, className)} role="img" aria-label={`${project.title} project preview artwork`} layoutId={reduceMotion ? undefined : `project-cover-${project.slug}`} style={reduceMotion ? undefined : { viewTransitionName: `project-cover-${project.slug}` }} transition={{ type: "spring", stiffness: 180, damping: 24, mass: .9 }}>
      <div className="browser-mockup" aria-hidden="true">
        <div className="browser-bar"><span /><span /><span /></div>
        <div className="mock-page">
          <div className="mock-nav" />
          <div className="mock-title" />
          <div className="mock-copy" />
          <div className="mock-cards"><span /><span /></div>
        </div>
      </div>
    </m.div>
  );
}
