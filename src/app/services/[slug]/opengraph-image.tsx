import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { gigs } from "@/content/gigs";

export const alt = "Freelance development service by Huzaifa Sajjad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ServiceOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gig = gigs.find((item) => item.slug === slug);
  if (!gig) notFound();
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: 72, color: "#f8fafc", background: "radial-gradient(circle at 84% 16%, #272b72 0%, #0a1022 42%, #050816 78%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 820 }}>
        <div style={{ color: "#67e8f9", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" }}>Freelance service · Huzaifa Sajjad</div>
        <div style={{ marginTop: 30, fontSize: 76, lineHeight: .98, letterSpacing: -4, fontWeight: 700 }}>{gig.title}</div>
        <div style={{ marginTop: 28, color: "#cbd5e1", fontSize: 27, lineHeight: 1.4 }}>{gig.description}</div>
      </div>
      <div style={{ marginLeft: "auto", width: 250, height: 250, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid rgba(129,140,248,.55)", borderRadius: 50, background: "linear-gradient(145deg, #19224a, #090f25)", boxShadow: "0 0 90px rgba(99,102,241,.35)" }}><span style={{ color: "#94a3b8", fontSize: 18, textTransform: "uppercase", letterSpacing: 2 }}>Starts at</span><strong style={{ marginTop: 14, fontSize: 52, letterSpacing: -3 }}>{gig.priceLabel.replace("From ", "")}</strong><span style={{ marginTop: 10, color: "#a5b4fc", fontSize: 18 }}>USD</span></div>
    </div>,
    size,
  );
}
