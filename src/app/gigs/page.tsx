import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/seo";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Blocks, Bot, Box, Braces, Check, CloudUpload, Code2, Layers3, MessageCircle, PanelsTopLeft, Rocket, SearchCheck, ShieldCheck, ShoppingCart, Smartphone, Sparkles } from "lucide-react";
import { gigs, gigFaqs, type GigIcon } from "@/content/gigs";
import { profile, siteUrl } from "@/content/profile";

export const metadata: Metadata = {
  title: "Freelance Full-Stack Development Services",
  description: "Hire Huzaifa Sajjad for full-stack development, custom websites, Next.js applications, mobile apps, backend APIs, e-commerce, MVPs and automation.",
  keywords: ["freelance full stack developer", "web developer", "Next.js developer", "mobile app developer", "backend API developer", "ecommerce developer", "MVP developer", "AI automation developer"],
  alternates: { canonical: "/services" },
  openGraph: { ...baseOpenGraph, type: "website",
    title: "Full-Stack, Web & Mobile Development Services",
    description: "Production-minded development services for websites, applications, mobile products, APIs, e-commerce and MVPs.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack, Web & Mobile Development Services",
    description: "Websites, applications, mobile products, APIs, e-commerce, MVPs and practical automation.",
  },
};

const icons: Record<GigIcon, LucideIcon> = {
  fullstack: Layers3,
  web: Code2,
  backend: Braces,
  mobile: Smartphone,
  landing: PanelsTopLeft,
  commerce: ShoppingCart,
  automation: Bot,
  seo: SearchCheck,
  deployment: CloudUpload,
  bots: Blocks,
  mvp: Rocket,
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/services#page`,
  name: `${profile.name} Web Development Services`,
  url: `${siteUrl}/services`,
  description: "Freelance full-stack, web, mobile, backend, e-commerce, MVP, automation, SEO and deployment services.",
  mainEntity: {
    "@type": "ItemList",
    name: "Development and digital services",
    itemListElement: gigs.map((gig, index) => ({
      "@type": "Offer",
      position: index + 1,
      url: `${siteUrl}/services/${gig.slug}`,
      ...(gig.startingPrice ? { price: gig.startingPrice, priceCurrency: "USD" } : {}),
      seller: { "@id": `${siteUrl}/#person` },
      itemOffered: { "@type": "Service", name: gig.title, description: gig.description, url: `${siteUrl}/services/${gig.slug}`, areaServed: "Worldwide" },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: gigFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function GigsPage() {
  const whatsappHref = `${profile.whatsappUrl}?text=${encodeURIComponent("Hi Huzaifa, I would like to discuss a project from your services page.")}`;

  return (
    <>
      <header className="gigs-hero">
        <div className="container gigs-hero-grid">
          <div className="gigs-hero-copy">
            <span className="eyebrow">Freelance services</span>
            <h1>Full-stack, web and mobile <span>development services.</span></h1>
            <p>Work with Huzaifa Sajjad on custom websites, Next.js applications, mobile products, backend APIs, e-commerce platforms, startup MVPs and practical automation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">Explore services <ArrowRight size={17} /></a>
              <a className="button" href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context="services"><MessageCircle size={17} /> Discuss on WhatsApp</a>
            </div>
          </div>
          <aside className="gigs-hero-summary" aria-label="Popular service starting prices">
            <span className="gigs-summary-label"><Sparkles size={18} aria-hidden="true" /> Popular starting points</span>
            <div className="gigs-price-row">
              <span className="gigs-price-icon"><Box size={23} aria-hidden="true" /></span>
              <strong>$100</strong>
              <small>Business landing page</small>
            </div>
            <div className="gigs-price-row">
              <span className="gigs-price-icon"><ShoppingCart size={23} aria-hidden="true" /></span>
              <strong>$2,000+</strong>
              <small>Full e-commerce build</small>
            </div>
            <div className="gigs-price-note">
              <span className="gigs-price-icon"><ShieldCheck size={23} aria-hidden="true" /></span>
              <p>Every project is scoped before work begins.<br />Custom requirements receive a tailored quote.</p>
            </div>
          </aside>
        </div>
      </header>

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head gigs-section-head">
            <div><span className="eyebrow">Available gigs</span><h2 className="section-title" id="services-title">Services built around real business needs.</h2></div>
            <p className="section-copy">Choose the closest match, then share your goals and requirements. The final scope, timeline and quote are confirmed before development starts.</p>
          </div>
          <div className="gigs-grid">
            {gigs.map((gig) => {
              const Icon = icons[gig.icon];
              const inquiryHref = `${profile.whatsappUrl}?text=${encodeURIComponent(`Hi Huzaifa, I am interested in your ${gig.title} service.`)}`;
              return (
                <article className={`gig-card${gig.featured ? " featured" : ""}`} id={gig.slug} key={gig.slug}>
                  <div className="gig-card-top"><span className="gig-icon"><Icon size={21} /></span>{gig.featured ? <span className="gig-badge">Popular</span> : null}</div>
                  <h2>{gig.title}</h2>
                  <p>{gig.description}</p>
                  <strong className="gig-price">{gig.priceLabel}</strong>
                  <ul>{gig.deliverables.map((item) => <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>)}</ul>
                  <div className="gig-actions"><Link className="text-link" href={`/services/${gig.slug}`}>View service details <ArrowRight size={16} /></Link><a href={inquiryHref} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context={gig.slug}>WhatsApp</a></div>
                </article>
              );
            })}
          </div>
          <p className="pricing-note">Prices are shown in USD and are starting estimates, not final quotes. Scope, integrations, content, revisions and delivery requirements may change the final price.</p>
        </div>
      </section>

      <section className="section-tight gig-process" aria-labelledby="process-title">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title" id="process-title">From first message to production.</h2>
          <div className="gig-process-grid">
            <div><span>01</span><h3>Share the goal</h3><p>Tell me what you need, who it is for and the result you want the project to create.</p></div>
            <div><span>02</span><h3>Confirm the scope</h3><p>I’ll review the requirements and outline deliverables, timeline, dependencies and price.</p></div>
            <div><span>03</span><h3>Build & review</h3><p>The work is developed, tested and reviewed against the agreed requirements.</p></div>
            <div><span>04</span><h3>Launch & handoff</h3><p>Your project is prepared for production with a clear handoff and agreed launch support.</p></div>
          </div>
        </div>
      </section>

      <section className="section gigs-faq" aria-labelledby="faq-title">
        <div className="container gigs-faq-grid">
          <div><span className="eyebrow">Questions</span><h2 className="section-title" id="faq-title">Before you inquire.</h2><p className="section-copy">If your project does not fit one package exactly, send the requirements anyway. Custom scopes are welcome.</p></div>
          <div className="faq-list">
            {gigFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="gigs-cta" aria-labelledby="gigs-cta-title">
        <div className="container">
          <span className="eyebrow">Start a project</span>
          <h2 id="gigs-cta-title">Tell me what you want to build.</h2>
          <p>Send your requirements, preferred timeline and any useful references. I’ll reply with the clearest next step.</p>
          <div className="center-actions">
            <Link className="button button-primary" href="/contact" data-analytics-event="contact_click" data-analytics-context="services">Send project details <ArrowRight size={17} /></Link>
            <a className="button" href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-context="services"><MessageCircle size={17} /> WhatsApp</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]).replace(/</g, "\\u003c") }} />
    </>
  );
}
