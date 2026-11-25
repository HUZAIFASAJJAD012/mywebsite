import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/seo";
import { Code2, ExternalLink, Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";
import { gigs } from "@/content/gigs";
import { getProject } from "@/content/projects";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = { title: { absolute: "Contact Huzaifa Sajjad | Full-Stack Developer" }, description: "Contact Huzaifa Sajjad about a website, web application, mobile app, SaaS product, e-commerce store, API or existing software improvement.", alternates: { canonical: "/contact" }, openGraph: { ...baseOpenGraph, title: "Contact Huzaifa Sajjad | Full-Stack Developer", description: "Share your project requirements with Huzaifa Sajjad and receive a clear next step.", url: "/contact", type: "website" }, twitter: { card: "summary_large_image", title: "Contact Huzaifa Sajjad | Full-Stack Developer", description: "Discuss your website, application, mobile, e-commerce or backend project." } };

const projectTypeByService: Record<string, string> = {
  "web-development": "Business Website", "small-business-websites": "Business Website", "business-landing-page": "Business Website",
  "full-stack-development": "Web Application", "nextjs-development": "Web Application",
  "ecommerce-development": "E-commerce", "mobile-app-development": "Mobile Application",
  "mvp-development": "SaaS / MVP", "backend-api-development": "Backend / API", "ai-automation": "AI / Automation",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[]; project?: string | string[] }> }) {
  const query = await searchParams;
  const requestedService = query.service;
  const serviceSlug = typeof requestedService === "string" ? requestedService : undefined;
  const service = serviceSlug ? gigs.find((item) => item.slug === serviceSlug) : undefined;
  const requestedProject = typeof query.project === "string" ? getProject(query.project) : undefined;
  const formContext = service?.title ?? (requestedProject ? `${requestedProject.title} related project` : undefined);
  return (
    <><header className="page-hero"><div className="container"><span className="eyebrow">Start a conversation</span><h1>Let’s discuss your project.</h1><p>Looking for a developer for a website, web application, mobile app, SaaS platform, e-commerce store or backend system? Send your project details to Huzaifa Sajjad.</p></div></header>
    <section className="section"><div className="container contact-layout">
      <aside className="contact-aside"><span className="eyebrow">Direct contact</span><h2 style={{ fontSize: "2.4rem", margin: "1rem 0" }}>Prefer a direct channel?</h2><p className="section-copy">Email and WhatsApp are the quickest ways to reach me. I’m based in Pakistan and work with teams worldwide.</p><div className="direct-links"><a className="direct-link" href={`mailto:${profile.email}`} data-analytics-event="email_click" data-analytics-context="contact"><Mail size={18} /> {profile.email}</a><a className="direct-link" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context="contact"><MessageCircle size={18} /> {profile.phoneDisplay}</a><a className="direct-link" href={profile.githubUrl} target="_blank" rel="me noopener noreferrer" data-analytics-event="github_click" data-analytics-context="contact"><Code2 size={18} /> GitHub profile</a>{profile.linkedinUrl ? <a className="direct-link" href={profile.linkedinUrl} target="_blank" rel="me noopener noreferrer" data-analytics-event="linkedin_click" data-analytics-context="contact"><ExternalLink size={18} /> LinkedIn profile</a> : null}<div className="direct-link"><MapPin size={18} /> Pakistan · Available worldwide</div></div></aside>
      <ContactForm context={formContext} defaultProjectType={serviceSlug ? projectTypeByService[serviceSlug] ?? "" : requestedProject ? "Existing Product Improvements" : ""} />
    </div></section></>
  );
}
