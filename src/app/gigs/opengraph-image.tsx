import { ImageResponse } from "next/og";

export const alt = "Freelance web development, SEO and AI automation services by Huzaifa Sajjad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function GigsOpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: 70, color: "#f8fafc", background: "radial-gradient(circle at 82% 18%, #272b72 0%, #0a1022 40%, #050816 76%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 760 }}>
        <div style={{ color: "#67e8f9", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" }}>Freelance services · Huzaifa Sajjad</div>
        <div style={{ marginTop: 28, fontSize: 72, lineHeight: 1, letterSpacing: -4, fontWeight: 700 }}>Web development, SEO & AI automation.</div>
        <div style={{ marginTop: 28, color: "#cbd5e1", fontSize: 25, lineHeight: 1.45 }}>Landing pages · E-commerce · Deployment · Bots · Browser extensions</div>
      </div>
      <div style={{ marginLeft: "auto", width: 280, display: "flex", flexDirection: "column", gap: 16 }}>
        {["Landing pages from $100", "E-commerce from $2,000", "AI automation from $500"].map((item) => <div key={item} style={{ padding: "18px 20px", border: "1px solid rgba(129,140,248,.45)", borderRadius: 18, background: "rgba(14,22,48,.84)", fontSize: 20 }}>{item}</div>)}
      </div>
    </div>,
    size,
  );
}
