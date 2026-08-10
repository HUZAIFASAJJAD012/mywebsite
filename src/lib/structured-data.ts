import { profile, siteUrl } from "@/content/profile";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  sameAs: [profile.githubUrl],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${profile.name} — Portfolio`,
  url: siteUrl,
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${profile.name} — Professional Portfolio`,
  url: siteUrl,
  mainEntity: personJsonLd,
};
