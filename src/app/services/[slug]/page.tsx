import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { gigs } from "@/content/gigs";
import { profile, siteUrl } from "@/content/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return gigs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const gig = gigs.find((item) => item.slug === slug);
  if (!gig) return {};
  const url = `/services/${gig.slug}`;
  return {
    title: gig.searchTitle,
    description: gig.searchDescription,
    keywords: gig.searchTerms,
    alternates: { canonical: url },
    openGraph: { type: "website", title: gig.searchTitle, description: gig.searchDescription, url },
    twitter: { card: "summary_large_image", title: gig.searchTitle, description: gig.searchDescription },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gig = gigs.find((item) => item.slug === slug);
  if (!gig) notFound();
  const serviceUrl = `${siteUrl}/services/${gig.slug}`;
  const whatsappHref = `${profile.whatsappUrl}?text=${encodeURIComponent(`Hi Huzaifa, I would like to discuss your ${gig.title} service.`)}`;
  const related = gigs.filter((item) => item.slug !== gig.slug).slice(0, 3);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: gig.title,
      serviceType: gig.title,
      description: gig.searchDescription,
      url: serviceUrl,
      areaServed: "Worldwide",
      provider: { "@id": `${siteUrl}/#person` },
      offers: {
        "@type": "Offer",
        url: serviceUrl,
        price: gig.startingPrice,
        priceCurrency: "USD",
        description: `${gig.priceLabel}. The final quote depends on the agreed project scope.`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/gigs` },
        { "@type": "ListItem", position: 3, name: gig.title, item: serviceUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: gig.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <article>
        <header className="service-hero">
          <div className="container">
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <Link href="/gigs"><ArrowLeft size={15} /> All services</Link><span aria-hidden="true">/</span><span>{gig.title}</span>
            </nav>
            <div className="service-hero-grid">
              <div>
                <span className="eyebrow">Freelance service · Available worldwide</span>
                <h1>{gig.searchTitle}</h1>
                <p>{gig.intro}</p>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/contact">Request a quote <ArrowRight size={17} /></Link>
                  <a className="button" href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Ask on WhatsApp</a>
                </div>
              </div>
              <aside className="service-price-card" aria-label="Service pricing summary">
                <span>Starting price</span><strong>{gig.priceLabel.replace("From ", "")}</strong>
                <p>{gig.description}</p>
                <small>USD · Final scope, timeline and quote are confirmed before work begins.</small>
              </aside>
            </div>
          </div>
        </header>

        <section className="section" aria-labelledby="included-title">
          <div className="container service-split">
            <div><span className="eyebrow">What is covered</span><h2 className="section-title" id="included-title">A practical foundation for the work.</h2><p className="section-copy">The starting scope focuses on the core deliverables below. Additional requirements are identified and quoted during discovery.</p></div>
            <div className="service-deliverables">{gig.deliverables.map((item) => <div key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></div>)}</div>
          </div>
        </section>

        <section className="section-tight service-fit" aria-labelledby="fit-title">
          <div className="container">
            <span className="eyebrow">Good fit</span><h2 className="section-title" id="fit-title">Who this service is designed for.</h2>
            <div className="service-fit-grid">{gig.idealFor.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
          </div>
        </section>

        <section className="section" aria-labelledby="approach-title">
          <div className="container">
            <span className="eyebrow">Delivery approach</span><h2 className="section-title" id="approach-title">Clear steps before production.</h2>
            <ol className="service-approach">{gig.approach.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
          </div>
        </section>

        <section className="section-tight service-faq" aria-labelledby="service-faq-title">
          <div className="container service-split">
            <div><span className="eyebrow">Service FAQ</span><h2 className="section-title" id="service-faq-title">Useful details before you enquire.</h2></div>
            <div className="faq-list">{gig.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
          </div>
        </section>

        <section className="section" aria-labelledby="related-services-title">
          <div className="container">
            <span className="eyebrow">Related services</span><h2 className="section-title" id="related-services-title">Explore another starting point.</h2>
            <div className="related-services">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.priceLabel}</span><h3>{item.title}</h3><p>{item.description}</p><strong>View service <ArrowRight size={15} /></strong></Link>)}</div>
          </div>
        </section>
      </article>
      <section className="gigs-cta" aria-labelledby="service-cta-title"><div className="container"><span className="eyebrow">Start the conversation</span><h2 id="service-cta-title">Have a project in mind?</h2><p>Share the outcome, current stage and preferred timeline. I’ll respond with the clearest next step.</p><div className="center-actions"><Link className="button button-primary" href="/contact">Send project details <ArrowRight size={17} /></Link><a className="button" href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> WhatsApp</a></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
