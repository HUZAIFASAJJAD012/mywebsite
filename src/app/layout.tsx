import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactCommandLauncher } from "@/components/layout/contact-command-launcher";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { profile, siteUrl } from "@/content/profile";
import { personJsonLd, profilePageJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Huzaifa Sajjad — Full-Stack Developer and Web Team Lead", template: "%s — Huzaifa Sajjad" },
  description: "Portfolio of Huzaifa Sajjad, a Full-Stack Developer, Mobile App Developer and Web Team Lead building modern web applications, backend systems and mobile products.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: `${profile.name} — Full-Stack Developer`, description: profile.heroCopy, url: "/", siteName: `${profile.name} Portfolio` },
  twitter: { card: "summary_large_image", title: `${profile.name} — Full-Stack Developer`, description: profile.heroCopy },
};

export const viewport: Viewport = { themeColor: "#050816", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <MotionProvider>
          <ScrollProgress />
          <span id="scroll-sentinel" className="scroll-sentinel" aria-hidden="true" />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <ContactCommandLauncher />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, profilePageJsonLd, websiteJsonLd]) }} />
        <Analytics /><SpeedInsights />
      </body>
    </html>
  );
}
