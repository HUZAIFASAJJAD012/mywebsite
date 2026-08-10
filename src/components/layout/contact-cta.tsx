import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <span className="eyebrow">Let’s work together</span>
      <h2 id="contact-cta-title">Have a product to build, improve or launch?</h2>
      <p>Tell me what you’re working on and the outcome you need. I’ll respond with a clear next step.</p>
      <div className="center-actions">
        <Link className="button button-primary" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
        <a className="button" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> WhatsApp</a>
      </div>
    </section>
  );
}
