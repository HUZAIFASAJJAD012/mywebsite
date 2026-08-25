import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProductShowcase } from "@/components/products/product-showcase";
import { CapabilitySystem } from "@/components/capabilities/capability-system";
import { CapabilityProof } from "@/components/capabilities/capability-proof";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { ContactCta } from "@/components/layout/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { SectionIndex } from "@/components/motion/section-index";
import { featuredProjects } from "@/content/projects";
import { profile } from "@/content/profile";

const process = [
  ["Understand", "Requirements, users, risks and a shared definition of success."],
  ["Architect", "Product flows, data models, API contracts and a durable component system."],
  ["Build", "Frontend, backend and integrations developed with quality checks throughout."],
  ["Launch", "Production deployment, monitoring, optimisation and dependable support."],
];

export default function HomePage() {
  return (
    <>
      <SectionIndex />
      <Hero />
      <section className="credibility" aria-label="Professional credibility">
        <div className="container credibility-grid">
          <div className="credibility-item"><strong>Since 2022</strong>Building production digital products</div>
          <div className="credibility-item"><strong>End-to-end</strong>Full-stack web and mobile delivery</div>
          <div className="credibility-item"><strong>Team-minded</strong>Leadership and project management</div>
          <div className="credibility-item"><strong>Pakistan · Worldwide</strong>Available for remote collaboration</div>
        </div>
      </section>

      <section className="section product-section" id="products">
        <div className="container">
          <SectionHeading eyebrow="My product" title="A focused tool, built for honest downloads." copy="Lynvado turns an authorized public media link into a clear choice of source-available formats and a secure temporary download." />
          <ProductShowcase />
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Products shaped for real use." copy="Digital experiences delivered across interface design, content structure, responsive development and production deployment." />
          <div className="featured-list">{featuredProjects.map((project, index) => <FeaturedProject project={project} index={index} key={project.slug} />)}</div>
          <div style={{ marginTop: "2.5rem" }}><Link className="button" href="/projects">View every project <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="container">
          <SectionHeading eyebrow="Capability system" title="The whole product, connected." copy="From the interface people use to the infrastructure behind it, each layer is designed to work as one dependable system." />
          <CapabilitySystem />
          <CapabilityProof />
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <SectionHeading eyebrow="Leadership & experience" title="Building well. Delivering reliably." copy="Hands-on engineering combined with team coordination, architecture decisions and clear client communication." />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading eyebrow="Working process" title="Clarity at every stage." />
          <div className="process-grid">{process.map(([title, copy], index) => <Reveal key={title} delay={index * .05}><article className="process-step"><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <Reveal>
            <div className="about-panel">
              <div className="monogram-art profile-art"><Image src="/myprofile.png" alt="Professional portrait of Huzaifa Sajjad" fill sizes="(max-width: 1023px) 100vw, 40vw" /></div>
              <div className="about-content">
                <span className="eyebrow">About Huzaifa</span><h2>Complex requirements, made clear.</h2>
                <p className="section-copy">{profile.about}</p>
                <div className="quick-facts">
                  <div><span>Based in</span><strong>Pakistan</strong></div>
                  <div><span>Education</span><strong>BS Software Engineering</strong></div>
                  <div><span>University</span><strong>COMSATS Abbottabad</strong></div>
                  <div><span>Languages</span><strong>English · Urdu · Pushto</strong></div>
                </div>
                <Link className="text-link" href="/about">More about my approach <ArrowUpRight size={17} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
