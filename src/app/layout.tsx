import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactCommandLauncher } from "@/components/layout/contact-command-launcher";
import { IntroductionVideo } from "@/components/layout/introduction-video";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AnalyticsEvents } from "@/components/analytics/analytics-events";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { profile, siteUrl } from "@/content/profile";
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: profile.name,
  title: { default: "Huzaifa Sajjad | Freelance Full-Stack Developer", template: "%s — Huzaifa Sajjad" },
  description: "Huzaifa Sajjad is a freelance full-stack developer building fast websites, web applications, mobile apps, APIs and scalable digital products worldwide.",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Huzaifa Sajjad",
    "HuzaifaSajjad",
    "Huzaifa Sajjad developer",
    "Huzaifa Sajjad full-stack developer",
    "freelance web developer Pakistan",
    "Next.js developer Pakistan",
    "mobile app developer Pakistan",
  ],
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: `${profile.name} | Freelance Full-Stack Developer`, description: profile.heroCopy, url: "/", siteName: profile.name, locale: "en_US" },
  twitter: { card: "summary_large_image", title: `${profile.name} | Freelance Full-Stack Developer`, description: profile.heroCopy },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
  other: { "google-adsense-account": "ca-pub-3396023961379458" },
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
          <IntroductionVideo />
          <ContactCommandLauncher />
          <AnalyticsEvents />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]).replace(/</g, "\\u003c") }} />
        <Analytics /><SpeedInsights /><GoogleAnalytics />
      </body>
    </html>
  );
}
