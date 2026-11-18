import Link from "next/link";
import { ArrowRight, Boxes, Globe2, Layers3, LifeBuoy } from "lucide-react";
import { Hero } from "@/components/hero/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductShowcase } from "@/components/products/product-showcase";
import { Reveal } from "@/components/motion/reveal";
import { SelectedWork } from "@/components/home/selected-work";
import { HomeExpertise } from "@/components/home/home-expertise";
import { HomeExperience } from "@/components/home/home-experience";
import { HomeContact } from "@/components/home/home-contact";
import { HomeFinalCta } from "@/components/home/home-final-cta";
import { HomeGlobalReach } from "@/components/home/home-global-reach";

const process = [
  ["Discovery", "Understand goals, users, requirements and the real product constraint."],
  ["Strategy", "Choose architecture, technology and priorities for a dependable build."],
  ["Build", "Frontend, backend and integrations developed with quality checks throughout."],
  ["Delivery", "Launch, monitor, support and improve the product after release."],
];

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HomeGlobalReach />
      <section className="credibility" aria-label="Professional credibility">
        <div className="container credibility-grid">
          <div className="credibility-item"><Layers3 aria-hidden="true" /><span><strong>Production experience</strong>Building digital products since 2022</span></div>
          <div className="credibility-item"><Boxes aria-hidden="true" /><span><strong>Full-stack delivery</strong>Interface through infrastructure</span></div>
          <div className="credibility-item"><LifeBuoy aria-hidden="true" /><span><strong>Dependable support</strong>Planning, launch and iteration</span></div>
          <div className="credibility-item"><Globe2 aria-hidden="true" /><span><strong>Worldwide collaboration</strong>Based in Pakistan</span></div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Products shaped" titleAccent="for real use." copy="Digital experiences delivered across interface design, content structure, responsive development and production deployment." />
          <SelectedWork />
          <div className="home-section-action"><Link className="home-arrow-link" href="/projects">View every project <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section product-section" id="products">
        <div className="container">
          <SectionHeading eyebrow="My own product" title="A focused tool, built" titleAccent="for honest downloads." copy="Lynvado turns an authorized public media link into a clear choice of source-available formats and a secure temporary download." />
          <ProductShowcase />
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="container">
          <SectionHeading eyebrow="What I do" title="The whole product," titleAccent="connected." copy="From user interfaces to infrastructure, I provide end-to-end development services that turn ideas into working products." />
          <HomeExpertise />
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="Building well. Delivering reliably." copy="Hands-on engineering combined with team coordination, architecture decisions and clear client communication." />
          <HomeExperience />
        </div>
      </section>

      <section className="section-tight" id="process">
        <div className="container">
          <SectionHeading eyebrow="My process" title="Clarity at every stage." copy="A simple, transparent process from initial idea to production." />
          <div className="process-grid">{process.map(([title, copy], index) => <Reveal key={title} delay={index * .05}><article className="process-step"><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div>
        </div>
      </section>
      <HomeContact />
      <HomeFinalCta />
    </div>
  );
}
