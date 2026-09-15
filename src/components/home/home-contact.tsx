import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";

export function HomeContact() {
  return (
    <section className="home-contact-section" id="about" aria-labelledby="home-contact-title">
      <div className="container">
        <div className="home-contact-panel">
          <div className="home-contact-portrait" style={{ position: "relative" }}>
            <Image src="/myprofile.png" alt={`Professional portrait of ${profile.name}`} fill sizes="(max-width: 900px) 100vw, 42vw" />
            <span>Let’s build something<br />great together.</span>
          </div>
          <div className="home-contact-copy">
            <span className="eyebrow">Get in touch</span>
            <h2 id="home-contact-title">Complex requirements,<br /><em>made clear.</em></h2>
            <p>Have a project in mind or want to discuss an opportunity? I’m open to interesting products, collaborations and engineering challenges.</p>
            <div className="home-contact-actions">
              <a className="button button-primary" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context="home_contact">
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp me <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="button" href={`mailto:${profile.email}`} data-analytics-event="email_click" data-analytics-context="home_contact">
                <Mail size={17} aria-hidden="true" /> Email me
              </a>
            </div>
            <div className="home-contact-facts">
              <span><MapPin size={14} aria-hidden="true" /> {profile.location}</span>
              <span><Globe2 size={14} aria-hidden="true" /> Available worldwide</span>
              <span><CheckCircle2 size={14} aria-hidden="true" /> {profile.availability}</span>
            </div>
            <Link className="home-arrow-link" href="/about">More about my approach <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
