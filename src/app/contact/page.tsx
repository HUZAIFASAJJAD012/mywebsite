import type { Metadata } from "next";
import { Code2, Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = { title: "Hire a Freelance Full-Stack Developer", description: "Contact Huzaifa Sajjad to discuss web development, e-commerce, AI automation, SEO, deployment, bot or browser extension requirements.", alternates: { canonical: "/contact" }, openGraph: { title: "Hire Huzaifa Sajjad for Your Development Project", description: "Share your project requirements and receive a clear next step.", url: "/contact", type: "website" } };

export default function ContactPage() {
  return (
    <><header className="page-hero"><div className="container"><span className="eyebrow">Start a conversation</span><h1>Let’s turn your next step into a real product.</h1><p>Share what you’re building, where it currently stands and what outcome you need. I’ll reply with a clear path forward.</p></div></header>
    <section className="section"><div className="container contact-layout">
      <aside className="contact-aside"><span className="eyebrow">Direct contact</span><h2 style={{ fontSize: "2.4rem", margin: "1rem 0" }}>Prefer a direct channel?</h2><p className="section-copy">Email and WhatsApp are the quickest ways to reach me. I’m based in Pakistan and work with teams worldwide.</p><div className="direct-links"><a className="direct-link" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a><a className="direct-link" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> {profile.phoneDisplay}</a><a className="direct-link" href={profile.githubUrl} target="_blank" rel="noopener noreferrer"><Code2 size={18} /> GitHub profile</a><div className="direct-link"><MapPin size={18} /> Pakistan · Available worldwide</div></div></aside>
      <ContactForm />
    </div></section></>
  );
}
