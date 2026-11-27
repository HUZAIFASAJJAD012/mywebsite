import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Globe2 } from "lucide-react";
import { profile } from "@/content/profile";
import styles from "./hero.module.css";
import { AnimatedPortrait } from "./animated-portrait";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.watermark} aria-hidden="true">DEVELOPER</div>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>— IDEAS INTO REALITY</p>
          <p className={styles.introduction}>Hello, I’m {profile.name}.</p>
          <h1 id="hero-heading">Freelance web developer.<br /><span>Your vision, built</span><br />beyond expectations.</h1>
          <p className={styles.role}>{profile.shortTitle}</p>
          <p className={styles.description}>{profile.heroCopy}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contact">Let’s build something <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link className={styles.secondary} href="#work">Explore my work <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className={styles.location}><Globe2 size={14} aria-hidden="true" />Based in {profile.location} · Working worldwide</p>
        </div>
        <div className={styles.visual}>
          <div className={styles.orbit} aria-hidden="true" /><span className={styles.spark} aria-hidden="true">✳</span>
          <AnimatedPortrait><Image src="/pic1.png" alt={`Portrait of ${profile.name}`} fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1023px) 560px, (max-width: 1500px) 52vw, 700px" preload /></AnimatedPortrait>
          <div className={styles.availability}><span /><div><strong>{profile.availability}</strong><small>Let’s create something exceptional.</small></div><ArrowUpRight size={18} aria-hidden="true" /></div>
          <span className={styles.caption}>DESIGN. DEVELOP. DELIVER.</span>
        </div>
      </div>
      <a className={styles.scroll} href="#work">SCROLL TO EXPLORE ↓</a>
    </section>
  );
}
