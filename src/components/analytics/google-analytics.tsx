import Script from "next/script";
import { consentModeDefault } from "@/lib/consent";

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', ${JSON.stringify(consentModeDefault)});
        gtag('js', new Date());
        gtag('config', ${JSON.stringify(measurementId)});
      `}</Script>
    </>
  );
}
