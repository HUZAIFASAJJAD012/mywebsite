"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

const filters = ["All", ...Array.from(new Set(projects.flatMap((project) => project.category)))];

export function ProjectGrid() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => project.category.includes(active)), [active]);

  return (
    <>
      <div className="tag-list" role="group" aria-label="Filter projects" style={{ marginBottom: "2.5rem" }}>
        {filters.map((filter) => (
          <button className={active === filter ? "button button-primary" : "button"} type="button" key={filter} onClick={() => setActive(filter)} aria-pressed={active === filter}>
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">{filtered.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
    </>
  );
}
