import type { Metadata } from "next";
import { profile } from "../content/profile";

/**
 * Shared Open Graph fields. A page's own `openGraph` object replaces the layout's
 * entirely, so every page that defines one must spread this in to keep `og:site_name`
 * and `og:locale`.
 */
export const baseOpenGraph = {
  siteName: profile.name,
  locale: "en_US",
} satisfies Metadata["openGraph"];

/**
 * Only the production deployment may be indexed. Vercel preview and development
 * deployments set VERCEL_ENV to something other than "production". Local `next build`
 * and `next start` do not set it, so they stay indexable and behave like production.
 */
export function isIndexableEnvironment(vercelEnv: string | undefined = process.env.VERCEL_ENV) {
  return !vercelEnv || vercelEnv === "production";
}

/** Converts a date-only string (2026-11-24) to ISO 8601 with a timezone, as Google recommends for schema dates. */
export function toIsoDateTime(date: string) {
  return date.includes("T") ? date : `${date}T00:00:00+05:00`;
}
