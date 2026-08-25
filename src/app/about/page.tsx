import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Code2, ExternalLink } from "lucide-react";
import { profile } from "@/content/profile";
import { profilePageJsonLd } from "@/lib/structured-data";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { ContactCta } from "@/components/layout/contact-cta";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: { absolute: "About Huzaifa Sajjad | Full-Stack Developer" }, description: "Learn about Huzaifa Sajjad, a full-stack and mobile developer in Pakistan building web applications, backend systems and digital products worldwide.", alternates: { canonical: "/about" }, openGraph: { title: "About Huzaifa Sajjad | Full-Stack Developer", description: "Professional experience, product approach, technical skills and education.", url: "/about", type: "profile" }, twitter: { card: "summary_large_image", title: "About Huzaifa Sajjad | Full-Stack Developer", description: "Professional experience, product approach, technical skills and education." } };
const principles = ["Build for the real user", "Keep architecture understandable", "Make performance part of design", "Communicate risks early", "Prefer dependable delivery over unnecessary complexity"];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c") }} />
      <header className="page-hero"><div className="container"><span className="eyebrow">About</span><h1>Engineering with a product mindset.</h1><p>I’m Huzaifa Sajjad, a software engineer focused on building complete digital products across interfaces, backend systems, mobile applications, integrations and production deployment.</p></div></header>
      <section className="section"><div className="container about-grid">
        <div className="sticky-art"><div className="monogram-art profile-art"><Image src="/myprofile.png" alt="Professional portrait of Huzaifa Sajjad" fill sizes="(max-width: 1023px) 100vw, 40vw" /></div></div>
        <div><span className="eyebrow">How I work</span><h2 className="section-title">Clear thinking. Dependable delivery.</h2><p className="section-copy">{profile.about}</p><p className="section-copy">Alongside hands-on development, I lead delivery work, coordinate teams and translate business requirements into practical technical decisions. Good software should be understandable to the people building it and useful to the people relying on it.</p>
          <div className="principles">{principles.map((principle, index) => <div className="principle" key={principle}><span>0{index + 1}</span><strong><Check size={15} style={{ display: "inline", marginRight: ".6rem" }} />{principle}</strong></div>)}</div>
          <div className="quick-facts"><div><span>Location</span><strong>Pakistan</strong></div><div><span>Degree</span><strong>BS Software Engineering</strong></div><div><span>University</span><strong>COMSATS Abbottabad</strong></div><div><span>Languages</span><strong>English · Urdu · Pushto</strong></div></div>
          <div className="profile-links"><a className="button" href={profile.githubUrl} target="_blank" rel="me noopener noreferrer" data-analytics-event="github_click" data-analytics-context="about"><Code2 size={17} /> GitHub</a>{profile.linkedinUrl ? <a className="button" href={profile.linkedinUrl} target="_blank" rel="me noopener noreferrer" data-analytics-event="linkedin_click" data-analytics-context="about"><ExternalLink size={17} /> LinkedIn</a> : null}<Link className="button" href="/projects">View projects <ArrowRight size={17} /></Link><Link className="button" href="/services/full-stack-development">Full-stack services <ArrowRight size={17} /></Link></div>
        </div>
      </div></section>
      <section className="section-tight"><div className="container"><SectionHeading eyebrow="Experience" title="Hands-on work and leadership." /><ExperienceTimeline /></div></section>
      <section className="section-tight"><div className="container"><SectionHeading eyebrow="Education & recognition" title="Built on strong foundations." /><div className="education-grid"><article className="capability-card"><span className="project-kicker">August 2021 — February 2025</span><h3>BS Software Engineering</h3><p>COMSATS University, Abbottabad</p></article><article className="capability-card"><span className="project-kicker">Recognition</span><h3>3rd Place — Web Development Competition</h3><p>Organised by the Google Developer Team at COMSATS Islamabad and Abbottabad.</p></article></div></div></section>
      <ContactCta />
    </>
  );
}
