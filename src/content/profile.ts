export const profile = {
  name: "Huzaifa Sajjad",
  initials: "HS",
  title: "Full-Stack Developer, Mobile App Developer and Web Team Lead",
  shortTitle: "Full-Stack Developer & Web Team Lead",
  email: "huzaifasajjad4404@gmail.com",
  phoneDisplay: "+92 341 3332077",
  whatsappUrl: "https://wa.me/923413332077",
  githubUrl: "https://github.com/huzaifasajjad012",
  freelancerUrl: "https://www.freelancer.com/u/huzaifasajjad12",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || undefined,
  location: "Pakistan",
  availability: "Available for projects",
  heroTitle: "Freelance full-stack web development,",
  heroTitleAccent: "from interface to infrastructure.",
  heroCopy:
    "I’m Huzaifa Sajjad, a freelance Full-Stack Developer, Mobile App Developer and Web Team Lead. I build SEO-ready business websites, e-commerce platforms, AI automations and custom applications for clients worldwide.",
  about:
    "I enjoy turning complex requirements into clear, reliable digital products. My work covers the complete delivery path — interface implementation, backend architecture, mobile experiences, integrations, deployment and team coordination.",
  languages: ["English: Fluent", "Urdu: Native", "Pushto: Conversational"],
} as const;

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.huzaifasajjaddev.online";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
