import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArt } from "@/components/projects/project-art";
import { featuredProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <div className="home-work-grid">
      {featuredProjects.map((project, index) => (
        <article className="home-work-card" key={project.slug}>
          <div className="home-work-index" aria-hidden="true">0{index + 1}</div>
          <ProjectArt project={project} />
          <div className="home-work-card-body">
            <div className="home-work-card-top">
              <h3>{project.title}</h3>
              <span>{project.category[0]}</span>
            </div>
            <p>{project.shortDescription}</p>
            <Link className="home-arrow-link" href={`/projects/${project.slug}`}>
              View case study <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
