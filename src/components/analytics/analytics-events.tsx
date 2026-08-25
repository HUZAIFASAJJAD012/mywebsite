"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";
import { trackPortfolioEvent } from "@/lib/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    captureAttribution();
    const handleClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>("[data-analytics-event]");
      const eventName = element?.dataset.analyticsEvent;
      if (!eventName) return;
      trackPortfolioEvent(eventName, element.dataset.analyticsContext ? { context: element.dataset.analyticsContext } : undefined);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export function AnalyticsPageView({ event, slug }: { event: "project_view" | "service_view"; slug: string }) {
  useEffect(() => {
    trackPortfolioEvent(event, { slug });
  }, [event, slug]);

  return null;
}
