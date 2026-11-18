import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { profile, siteUrl } from "@/content/profile";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

const title = "Privacy Policy | Huzaifa Sajjad";
const description = "How huzaifasajjaddev.online collects, uses and protects information, including contact form data, analytics, cookies and Google AdSense advertising.";
const effectiveDate = "2026-11-18";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", type: "website" },
  twitter: { card: "summary", title, description },
};

const sections = [
  { id: "information-you-provide", heading: "Information you provide" },
  { id: "information-collected-automatically", heading: "Information collected automatically" },
  { id: "cookies-and-advertising", heading: "Cookies and Google AdSense advertising" },
  { id: "how-information-is-used", heading: "How information is used" },
  { id: "sharing", heading: "Service providers and sharing" },
  { id: "retention-and-security", heading: "Retention and security" },
  { id: "your-choices", heading: "Your choices and rights" },
  { id: "children", heading: "Children’s privacy" },
  { id: "changes", heading: "Changes to this policy" },
  { id: "contact", heading: "Contact" },
];

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function PrivacyPage() {
  const formattedDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(effectiveDate));
  const jsonLd = createBreadcrumbJsonLd([{ name: "Home", url: siteUrl }, { name: "Privacy Policy", url: `${siteUrl}/privacy` }]);

  return (
    <>
      <header className="case-hero article-hero"><div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="section-copy reading-width">This policy explains what information this website collects, why it is collected and the choices you have. It applies to {siteUrl.replace("https://", "")}, operated by {profile.name}.</p>
        <p className="article-meta">Effective and last updated: <time dateTime={effectiveDate}>{formattedDate}</time></p>
      </div></header>
      <div className="container article-layout">
        <nav className="article-toc" aria-label="Table of contents">
          <strong>On this page</strong>
          <ol>{sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}</ol>
        </nav>
        <div className="article-content">
          <section id="information-you-provide">
            <h2>Information you provide</h2>
            <p>When you use the contact form, you may provide your name, email address, company, WhatsApp or phone number, project type, timeline, budget, preferred contact method and message. Only the fields marked as required are needed to send an enquiry.</p>
            <p>If you contact me directly by email or WhatsApp, I receive the information you choose to include in that message.</p>
          </section>

          <section id="information-collected-automatically">
            <h2>Information collected automatically</h2>
            <ul>
              <li><strong>Enquiry source.</strong> To understand how visitors find the site, the page you first landed on, the referring website and any campaign (UTM) parameters in the link are stored in your browser’s session storage. This information is sent only if you submit the contact form, and is cleared when you close the browser tab.</li>
              <li><strong>Analytics.</strong> The site uses Vercel Web Analytics and Vercel Speed Insights to measure page views and performance in aggregate. Google Analytics may also be used to understand how the site is used; it sets cookies in your browser. Contact form message content is never sent to analytics providers.</li>
              <li><strong>Server logs and security.</strong> The hosting provider (Vercel) processes technical data such as IP address, browser type and requested pages to deliver the site and protect it from abuse. Your IP address is also used briefly to limit repeated contact form submissions.</li>
            </ul>
          </section>

          <section id="cookies-and-advertising">
            <h2>Cookies and Google AdSense advertising</h2>
            <p>This website may display advertisements served by Google AdSense. In connection with those ads:</p>
            <ul>
              <li>Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this website or other websites.</li>
              <li>Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the internet.</li>
              <li>You may opt out of personalised advertising by visiting <a href="https://adssettings.google.com" {...external}>Google Ads Settings</a>. You can also opt out of some third-party vendors’ use of cookies for personalised advertising at <a href="https://www.aboutads.info/choices/" {...external}>www.aboutads.info</a>.</li>
              <li>Learn more in <a href="https://policies.google.com/technologies/partner-sites" {...external}>how Google uses information from sites or apps that use its services</a> and <a href="https://policies.google.com/technologies/ads" {...external}>how Google uses cookies in advertising</a>.</li>
            </ul>
            <p>Where required by law — for example, for visitors in the European Economic Area, the United Kingdom and Switzerland — you will be asked for consent before advertising cookies are used, and you can change your choice at any time.</p>
            <p>You can also block or delete cookies through your browser settings. Some features of the site may not work as intended if you do.</p>
          </section>

          <section id="how-information-is-used">
            <h2>How information is used</h2>
            <ul>
              <li>To reply to your enquiry and discuss your project.</li>
              <li>To understand which pages and channels bring visitors, and to improve the website’s content and performance.</li>
              <li>To keep the website secure and prevent spam or abuse.</li>
              <li>To display advertising that helps support the free content on this site.</li>
            </ul>
            <p>Your information is not sold, and the contact details you send are not added to marketing lists.</p>
          </section>

          <section id="sharing">
            <h2>Service providers and sharing</h2>
            <p>Information is shared only with providers that help operate the website: Vercel (hosting, analytics and performance monitoring), the email provider used to deliver contact form messages, Google (analytics and advertising) and, where relevant, WhatsApp if you choose to contact me there. These providers process information under their own privacy policies. Information may also be disclosed where required by law.</p>
          </section>

          <section id="retention-and-security">
            <h2>Retention and security</h2>
            <p>Enquiries are kept only for as long as needed to respond, manage any resulting project and meet legal or accounting obligations. Reasonable technical measures — including HTTPS encryption, input validation and spam protection — are used to protect information, but no online service can be guaranteed to be completely secure.</p>
          </section>

          <section id="your-choices">
            <h2>Your choices and rights</h2>
            <p>Depending on where you live, you may have the right to access, correct or delete the personal information I hold about you, or to object to or restrict how it is used. To make a request, email me using the address below. You can manage cookies and personalised advertising using the links in the cookies section above.</p>
          </section>

          <section id="children">
            <h2>Children’s privacy</h2>
            <p>This website is intended for businesses and adults. It is not directed at children under 13, and I do not knowingly collect personal information from them.</p>
          </section>

          <section id="changes">
            <h2>Changes to this policy</h2>
            <p>This policy may be updated when the website or the services it uses change. The date at the top of the page shows when it was last updated.</p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>Questions about this policy or your information can be sent to <a href={`mailto:${profile.email}`}>{profile.email}</a> or through the <Link href="/contact">contact page</Link>.</p>
          </section>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
