import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ContactCta } from "@/components/layout/contact-cta";

export const metadata: Metadata = { title: "Projects", description: "Selected web, mobile and full-stack projects delivered by Huzaifa Sajjad.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return (
    <>
      <header className="page-hero"><div className="container"><span className="eyebrow">Selected project</span><h1>Full-stack work, built for real customers.</h1><p>A restaurant platform delivered from interface design through customer journeys and production launch.</p></div></header>
      <section className="section"><div className="container"><ProjectGrid /></div></section>
      <ContactCta />
    </>
  );
}
