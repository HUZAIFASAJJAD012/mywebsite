export type LeadAttribution = {
  source?: string;
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

const storageKey = "hs_lead_attribution";

function inferSource(referrer: string, utmSource: string | null) {
  if (utmSource) return utmSource.slice(0, 80);
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (host.includes("google.")) return "google";
    if (host.includes("linkedin.")) return "linkedin";
    if (host.includes("github.")) return "github";
    return "referral";
  } catch {
    return "referral";
  }
}

export function captureAttribution() {
  if (typeof window === "undefined" || window.sessionStorage.getItem(storageKey)) return;
  const params = new URLSearchParams(window.location.search);
  const attribution: LeadAttribution = {
    source: inferSource(document.referrer, params.get("utm_source")),
    landingPage: `${window.location.pathname}${window.location.search}`.slice(0, 1000),
    referrer: document.referrer.slice(0, 1000) || undefined,
    utmSource: params.get("utm_source")?.slice(0, 200),
    utmMedium: params.get("utm_medium")?.slice(0, 200),
    utmCampaign: params.get("utm_campaign")?.slice(0, 200),
    utmContent: params.get("utm_content")?.slice(0, 200),
    utmTerm: params.get("utm_term")?.slice(0, 200),
  };
  window.sessionStorage.setItem(storageKey, JSON.stringify(attribution));
}

export function readAttribution(): LeadAttribution {
  if (typeof window === "undefined") return {};
  captureAttribution();
  try {
    return JSON.parse(window.sessionStorage.getItem(storageKey) ?? "{}") as LeadAttribution;
  } catch {
    return {};
  }
}
