import Script from "next/script";
import { adsensePublisherId } from "@/content/profile";
import { shouldLoadAdSense } from "@/lib/seo";

/** Loads the AdSense script late, so it cannot delay the main content or interaction. Off unless explicitly enabled. */
export function AdSenseScript() {
  if (!shouldLoadAdSense()) return null;

  return (
    <Script
      id="adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsensePublisherId)}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
}
