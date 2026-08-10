import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { ProjectArt } from "@/components/projects/project-art";
import { ContactCta } from "@/components/layout/contact-cta";
import { profile, siteUrl } from "@/content/profile";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} Web Development Case Study`, description: project.summary, alternates: { canonical: `/projects/${slug}` }, openGraph: { title: `${project.title} — Web Development Case Study`, description: project.summary, url: `/projects/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title: `${project.title} — Web Development Case Study`, description: project.summary } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const related = projects.length > 1 ? projects[(projectIndex + 1) % projects.length] : undefined;
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "CreativeWork", "@id": `${siteUrl}/projects/${project.slug}#project`, name: project.title, description: project.summary, url: `${siteUrl}/projects/${project.slug}`, image: project.coverImage ? `${siteUrl}${project.coverImage}` : undefined, creator: { "@id": `${siteUrl}/#person`, name: profile.name } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${siteUrl}/projects/${project.slug}` },
    ] },
  ];

  return (
    <>
      <article>
        <header className="case-hero"><div className="container">
          <Link className="text-link" href="/projects"><ArrowLeft size={16} /> All projects</Link>
          <span className="eyebrow" style={{ marginTop: "3rem" }}>{project.category.join(" · ")}</span>
          <h1>{project.title}</h1><p className="section-copy reading-width">{project.summary}</p>
          {project.liveUrl ? <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.5rem" }}>Visit live project <ExternalLink size={16} /></a> : null}
          <div className="case-meta">
            <div><span>Role</span><strong>{project.role.join(" · ")}</strong></div>
            <div><span>Status</span><strong>{project.status}</strong></div>
            <div><span>Year</span><strong>{project.year ?? "Ongoing portfolio"}</strong></div>
            <div><span>Stack</span><strong>{project.stack.join(" · ")}</strong></div>
          </div>
          <ProjectArt project={project} className="case-art" />
        </div></header>
        <div className="container">
          <section className="case-section"><h2>Overview</h2><div><p>{project.summary}</p><p>This case study focuses on the product work and technical responsibilities that can be stated accurately without inventing commercial metrics.</p></div></section>
          <section className="case-section"><h2>The challenge</h2><p>{project.challenge}</p></section>
          <section className="case-section"><h2>Solution & architecture</h2><p>{project.solution}</p></section>
          <section className="case-section"><h2>My responsibilities</h2><ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
          {related ? <section className="case-section"><h2>Related project</h2><div><p>Continue with another product from the portfolio.</p><Link className="button" href={`/projects/${related.slug}`}>Explore {related.title}</Link></div></section> : null}
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ContactCta />
    </>
  );
}
