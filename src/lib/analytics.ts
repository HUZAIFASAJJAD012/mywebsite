"use client";

import { track } from "@vercel/analytics/react";

type EventProperties = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, properties?: EventProperties) => void;
  }
}

export function trackPortfolioEvent(name: string, properties?: EventProperties) {
  track(name, properties);
  window.gtag?.("event", name, properties);
}
