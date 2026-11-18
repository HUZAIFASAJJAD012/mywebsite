import { articles } from "@/content/articles";
import { gigs } from "@/content/gigs";
import { profile, siteUrl } from "@/content/profile";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

// A plain-text summary of the site for AI assistants and LLM-based search tools (llms.txt convention).
export function GET() {
  const markets = profile.clientReach.markets.map((market) => `${market.name} (${market.detail})`).join("; ");
  const stack = profile.heroCopy.match(/using (.+)\.$/)?.[1];
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.name} is a freelance ${profile.title.toLowerCase()} based in ${profile.location}, building websites, web applications, mobile apps and APIs for businesses and teams worldwide.`,
    "",
    ...(stack ? [`- Core technologies: ${stack}`] : []),
    `- Location: ${profile.location}; works remotely with clients worldwide`,
    `- Client markets: ${markets}`,
    `- Languages: ${profile.languages.join(", ")}`,
    `- Availability: ${profile.availability}`,
    `- Contact: ${siteUrl}/contact · ${profile.email} · WhatsApp ${profile.phoneDisplay}`,
    "",
    "## Services",
    "",
    ...gigs.map((gig) => `- [${gig.title}](${siteUrl}/services/${gig.slug}): ${gig.description} (${gig.priceLabel})`),
    "",
    "## Projects",
    "",
    ...projects.map((project) => `- [${project.title}](${siteUrl}/projects/${project.slug}): ${project.shortDescription}`),
    "",
    "## Articles",
    "",
    ...articles.map((article) => `- [${article.title}](${siteUrl}/articles/${article.slug}): ${article.description}`),
    "",
    "## Profile",
    "",
    `- [About ${profile.name}](${siteUrl}/about): experience, education and approach`,
    `- [GitHub](${profile.githubUrl})`,
    `- [Freelancer](${profile.freelancerUrl})`,
    ...(profile.linkedinUrl ? [`- [LinkedIn](${profile.linkedinUrl})`] : []),
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
