import Link from "next/link";
import { ArrowDownRight, Download, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";
import { HeroSystemVisual } from "./hero-system-visual";
import { HeroRole } from "./hero-role";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy-col">
          <div className="availability hero-enter enter-one"><span className="availability-dot" />{profile.availability}</div>
          <span className="eyebrow hero-name hero-enter enter-one">{profile.name}</span>
          <h1 className="hero-enter enter-two">{profile.heroTitle}<br /><span>{profile.heroTitleAccent}</span></h1>
          <div className="hero-enter enter-three"><HeroRole /></div>
          <p className="hero-copy hero-enter enter-three">{profile.heroCopy}</p>
          <div className="hero-enter enter-four">
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">View selected work <ArrowDownRight size={18} /></Link>
              <Link className="button" href="/gigs">View services</Link>
            </div>
            <div className="hero-links" aria-label="Contact and profile links">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={`mailto:${profile.email}`}><Mail size={13} /> Email</a>
              <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={13} /> WhatsApp</a>
              <span className="muted" title="Resume will be added before launch"><Download size={13} /> Résumé coming soon</span>
            </div>
          </div>
        </div>
        <div className="hero-visual-col hero-enter enter-visual"><HeroSystemVisual /></div>
      </div>
    </section>
  );
}
