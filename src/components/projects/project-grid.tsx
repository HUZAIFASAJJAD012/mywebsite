"use client";

import { useMemo, useState } from "react";
import { projectFilterGroups, projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

const filters = ["All", ...projectFilterGroups.filter((group) => projects.some((project) => project.filterGroup === group))];

export function ProjectGrid() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => project.filterGroup === active), [active]);

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
