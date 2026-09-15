import Link from "next/link";
import { ArrowUpRight, LayoutPanelTop } from "lucide-react";
import { capabilities } from "@/content/capabilities";

export function HomeExpertise() {
  return (
    <div className="home-expertise-layout">
      <div className="home-expertise-grid">
        {capabilities.map(({ title, description, tools, icon: Icon }, index) => (
          <Link className="home-expertise-card" href="/services" key={title}>
            <span className="home-expertise-number">0{index + 1}</span>
            <span className="home-expertise-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="home-tech-list">
              {tools.slice(0, 3).map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <ArrowUpRight className="home-expertise-arrow" size={17} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <Link className="home-ui-band" href="/services/web-development">
        <span className="home-expertise-icon"><LayoutPanelTop size={20} strokeWidth={1.7} aria-hidden="true" /></span>
        <span><strong>Product UI</strong><small>Thoughtful interfaces that turn complicated requirements into clear, understandable product experiences.</small></span>
        <span className="home-tech-list"><i>Responsive design</i><i>Content structure</i><i>Interaction design</i></span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}
