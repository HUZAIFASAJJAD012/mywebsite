import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectArt } from "./project-art";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article className="project-feature">
        <div className="project-content">
          <span className="project-kicker">0{index + 1} · {project.category[0]}</span>
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
          <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          <div className="project-actions">
            <Link className="text-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={17} /></Link>
            {project.liveUrl ? <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="project_live_click" data-analytics-context={project.slug}>Live website <ExternalLink size={15} /></a> : null}
          </div>
        </div>
        <ProjectArt project={project} />
      </article>
    </Reveal>
  );
}
