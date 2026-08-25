import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";

export function ContactCta({ eyebrow = "Let’s work together", title = "Have a product to build, improve or launch?", copy = "Tell me what you’re working on and the outcome you need. I’ll respond with a clear next step.", href = "/contact", context = "site_cta" }: { eyebrow?: string; title?: string; copy?: string; href?: string; context?: string }) {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id="contact-cta-title">{title}</h2>
      <p>{copy}</p>
      <div className="center-actions">
        <Link className="button button-primary" href={href} data-analytics-event="contact_click" data-analytics-context={context}>Tell me about your project <ArrowUpRight size={17} /></Link>
        <a className="button" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context={context}><MessageCircle size={17} /> WhatsApp</a>
      </div>
    </section>
  );
}
