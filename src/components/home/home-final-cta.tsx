import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function HomeFinalCta() {
  return (
    <section className="home-final-cta" aria-labelledby="home-final-cta-title">
      <div className="home-horizon" aria-hidden="true" />
      <div className="container">
        <span className="eyebrow">Let’s build together</span>
        <h2 id="home-final-cta-title">Have a product to build,<br />improve or launch?</h2>
        <p>Let’s turn your idea into a real, working product.</p>
        <div className="center-actions">
          <Link className="button button-primary" href="/contact" data-analytics-event="contact_click" data-analytics-context="home_final_cta">Start a project <ArrowRight size={17} aria-hidden="true" /></Link>
          <a className="button" href={`mailto:${profile.email}`} data-analytics-event="email_click" data-analytics-context="home_final_cta"><Mail size={16} aria-hidden="true" /> Send an email</a>
        </div>
      </div>
    </section>
  );
}
