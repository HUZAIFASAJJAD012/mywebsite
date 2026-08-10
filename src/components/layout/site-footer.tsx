import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/"><span className="brand-mark">HS</span><span>{profile.name}</span></Link>
            <p className="footer-title">{profile.title}. Building dependable digital products from Pakistan for teams worldwide.</p>
          </div>
          <div className="footer-links">
            <strong>Explore</strong>
            <Link href="/projects">Projects</Link><Link href="/gigs">Gigs</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <strong>Connect</strong>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Designed and built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
