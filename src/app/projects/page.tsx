import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ContactCta } from "@/components/layout/contact-cta";

export const metadata: Metadata = { title: "Full-Stack Web Development Projects", description: "Explore full-stack web development work by Huzaifa Sajjad, including responsive interfaces, multilingual content, reservations and production delivery.", alternates: { canonical: "/projects" }, openGraph: { title: "Full-Stack Web Development Projects", description: "Selected client work delivered from interface to production.", url: "/projects", type: "website" } };

export default function ProjectsPage() {
  return (
    <>
      <header className="page-hero"><div className="container"><span className="eyebrow">Selected project</span><h1>Full-stack work, built for real customers.</h1><p>A restaurant platform delivered from interface design through customer journeys and production launch.</p></div></header>
      <section className="section"><div className="container"><ProjectGrid /></div></section>
      <ContactCta />
    </>
  );
}
