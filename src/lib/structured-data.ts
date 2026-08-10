import { profile, siteUrl } from "@/content/profile";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: profile.name,
  alternateName: "HuzaifaSajjad",
  url: siteUrl,
  image: `${siteUrl}/myprofile.png`,
  jobTitle: profile.title,
  description: profile.heroCopy,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneDisplay,
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  sameAs: [profile.githubUrl],
  knowsAbout: ["Full-stack web development", "Mobile application development", "E-commerce development", "AI automation", "Technical SEO", "DevOps", "Browser extension development"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: profile.name,
  alternateName: ["HuzaifaSajjad", `${profile.name} Portfolio`],
  url: siteUrl,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile-page`,
  name: `${profile.name} — Freelance Full-Stack Developer`,
  url: siteUrl,
  mainEntity: { "@id": `${siteUrl}/#person` },
  isPartOf: { "@id": `${siteUrl}/#website` },
};
