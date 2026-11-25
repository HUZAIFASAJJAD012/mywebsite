import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { projects, getProject } from "@/content/projects";
import { gigs } from "@/content/gigs";
import { ProjectArt } from "@/components/projects/project-art";
import { ContactCta } from "@/components/layout/contact-cta";
import { AnalyticsPageView } from "@/components/analytics/analytics-events";
import { profile, siteUrl } from "@/content/profile";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = getProject(slug);
  if (!project) return {};
  const title = project.seoTitle ?? `${project.title} Web Development Case Study`;
  return { title, description: project.shortDescription, alternates: { canonical: `/projects/${slug}` }, openGraph: { ...baseOpenGraph, title, description: project.shortDescription, url: `/projects/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description: project.shortDescription } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const related = projects.length > 1 ? projects[(projectIndex + 1) % projects.length] : undefined;
  const relatedServices = (project.serviceSlugs ?? []).map((serviceSlug) => gigs.find((gig) => gig.slug === serviceSlug)).filter((gig): gig is NonNullable<typeof gig> => Boolean(gig));
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "CreativeWork", "@id": `${siteUrl}/projects/${project.slug}#project`, name: project.title, description: project.summary, url: `${siteUrl}/projects/${project.slug}`, image: project.coverImage ? `${siteUrl}${project.coverImage}` : undefined, creator: { "@id": `${siteUrl}/#person`, name: profile.name } },
    createBreadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "Projects", url: `${siteUrl}/projects` },
      { name: project.title, url: `${siteUrl}/projects/${project.slug}` },
    ]),
  ];

  return (
    <>
      <AnalyticsPageView event="project_view" slug={project.slug} />
      <article>
        <header className="case-hero"><div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.title }]} />
          <span className="eyebrow" style={{ marginTop: "3rem" }}>{project.category.join(" · ")}</span>
          <h1>{project.title}</h1><p className="section-copy reading-width">{project.summary}</p>
          {project.liveUrl ? <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.5rem" }} data-analytics-event="project_live_click" data-analytics-context={project.slug}>Visit live project <ExternalLink size={16} /></a> : null}
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
          {project.highlights?.length ? <section className="case-section"><h2>Key features</h2><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section> : null}
          {relatedServices.length ? <section className="case-section"><h2>Related services</h2><div><p>Explore the development services connected to this project.</p><div className="case-service-links">{relatedServices.map((service) => <Link className="text-link" href={`/services/${service.slug}`} key={service.slug}>{service.title}<ArrowRight size={15} /></Link>)}</div></div></section> : null}
          {related ? <section className="case-section"><h2>Related project</h2><div><p>Continue with another product from the portfolio.</p><Link className="button" href={`/projects/${related.slug}`}>Explore {related.title}</Link></div></section> : null}
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ContactCta eyebrow="Build something similar" title="Need something similar?" copy="Share the product, audience and outcome you have in mind. I’ll help identify the clearest technical starting point." href={`/contact?project=${project.slug}`} context={project.slug} />
    </>
  );
}
