import { profile, siteUrl } from "../content/profile";

const sameAs = [profile.githubUrl, profile.freelancerUrl, profile.linkedinUrl].filter(
  (url): url is string => Boolean(url),
);

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: profile.name,
  alternateName: "HuzaifaSajjad",
  url: siteUrl,
  mainEntityOfPage: { "@id": `${siteUrl}/about#profile-page` },
  image: {
    "@type": "ImageObject",
    "@id": `${siteUrl}/#portrait`,
    url: `${siteUrl}/myprofile.png`,
    contentUrl: `${siteUrl}/myprofile.png`,
    width: 1122,
    height: 1402,
    caption: `Professional portrait of ${profile.name}`,
  },
  jobTitle: profile.title,
  description: profile.heroCopy,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneDisplay,
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  homeLocation: { "@type": "Country", name: profile.location },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "COMSATS University Islamabad, Abbottabad Campus",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "BS Software Engineering",
    credentialCategory: "degree",
  },
  award: "3rd Place — Web Development Competition organised by the Google Developer Team at COMSATS Islamabad and Abbottabad",
  knowsLanguage: ["English", "Urdu", "Pashto"],
  sameAs,
  knowsAbout: ["Full-stack web development", "Mobile application development", "E-commerce development", "AI automation", "Technical SEO", "DevOps", "Browser extension development"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: profile.name,
  alternateName: ["HuzaifaSajjad", `${profile.name} Portfolio`, "huzaifasajjaddev.online"],
  url: siteUrl,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profile-page`,
  name: `${profile.name} — Freelance Full-Stack Developer`,
  url: `${siteUrl}/about`,
  dateModified: process.env.SITE_LAST_MODIFIED ?? "2026-08-25",
  primaryImageOfPage: { "@id": `${siteUrl}/#portrait` },
  mainEntity: { "@id": `${siteUrl}/#person` },
  isPartOf: { "@id": `${siteUrl}/#website` },
};

export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
