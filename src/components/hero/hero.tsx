import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { HeroSystemVisual } from "./hero-system-visual";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy-col">
          <div className="hero-kicker hero-enter enter-one"><b>01</b><i /><span>{profile.name}</span></div>
          <h1 className="hero-enter enter-two">{profile.heroTitle}<br /><span>{profile.heroTitleAccent}</span></h1>
          <p className="hero-role-line hero-enter enter-three">I turn complex requirements into <strong>products.</strong></p>
          <p className="hero-copy hero-enter enter-three">{profile.heroCopy}</p>
          <div className="hero-enter enter-four">
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">View selected work <ArrowRight size={18} /></Link>
              <Link className="button" href="/services">View services</Link>
            </div>
          </div>
        </div>
        <div className="hero-visual-col hero-enter enter-visual"><HeroSystemVisual /></div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span>Scroll</span><i /><b /></div>
    </section>
  );
}
