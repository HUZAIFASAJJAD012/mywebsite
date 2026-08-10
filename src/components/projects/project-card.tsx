import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectArt } from "./project-art";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={`/projects/${project.slug}`}>
      <ProjectArt project={project} />
      <div className="project-card-body">
        <span className="project-kicker">{project.category.join(" · ")}</span>
        <h2>{project.title}</h2>
        <p>{project.shortDescription}</p>
        <span className="text-link">View project <ArrowUpRight size={16} /></span>
      </div>
    </Link>
  );
}
