import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/seo";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ContactCta } from "@/components/layout/contact-cta";

export const metadata: Metadata = { title: "Full-Stack Web Development Projects", description: "Explore full-stack web development work by Huzaifa Sajjad, including responsive business websites, e-commerce experiences and custom platforms delivered to production.", alternates: { canonical: "/projects" }, openGraph: { ...baseOpenGraph, title: "Full-Stack Web Development Projects", description: "Selected client work delivered from interface to production.", url: "/projects", type: "website" }, twitter: { card: "summary_large_image", title: "Full-Stack Web Development Projects", description: "Selected client work delivered from interface to production." } };

export default function ProjectsPage() {
  return (
    <>
      <header className="page-hero"><div className="container"><span className="eyebrow">Selected projects</span><h1>Full-stack work, built for real users.</h1><p>Responsive digital platforms delivered from interface design and content structure through development and production launch.</p></div></header>
      <section className="section"><div className="container"><ProjectGrid /></div></section>
      <ContactCta />
    </>
  );
}
