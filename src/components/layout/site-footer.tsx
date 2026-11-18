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
            <Link href="/projects">Projects</Link><Link href="/services">Services</Link><Link href="/services/full-stack-development">Full-stack development</Link><Link href="/articles">Articles</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <strong>Connect</strong>
            <a href={`mailto:${profile.email}`} data-analytics-event="email_click" data-analytics-context="footer">Email</a>
            <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context="footer">WhatsApp</a>
            <a href={profile.githubUrl} target="_blank" rel="me noopener noreferrer" data-analytics-event="github_click" data-analytics-context="footer">GitHub</a>
            {profile.linkedinUrl ? <a href={profile.linkedinUrl} target="_blank" rel="me noopener noreferrer" data-analytics-event="linkedin_click" data-analytics-context="footer">LinkedIn</a> : null}
            <a href={profile.freelancerUrl} target="_blank" rel="me noopener noreferrer">Freelancer</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span><Link href="/privacy">Privacy Policy</Link> · Designed and built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
