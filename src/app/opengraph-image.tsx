import { ImageResponse } from "next/og";

export const alt = "Huzaifa Sajjad — Full-Stack Developer and Web Team Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "72px", color: "#f8fafc", background: "radial-gradient(circle at 78% 20%, #24265e 0%, #0a1022 38%, #050816 72%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "800px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#a5b4fc", fontSize: 24, letterSpacing: 3, textTransform: "uppercase" }}>
          <span style={{ width: 32, height: 2, background: "#a5b4fc" }} /> Huzaifa Sajjad
        </div>
        <div style={{ marginTop: 34, fontSize: 72, lineHeight: 1.02, letterSpacing: -4, fontWeight: 700 }}>Full-stack products, built from interface to infrastructure.</div>
        <div style={{ marginTop: 30, color: "#cbd5e1", fontSize: 27 }}>Full-Stack Developer · Mobile App Developer · Web Team Lead</div>
      </div>
      <div style={{ marginLeft: "auto", width: 210, height: 210, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(129,140,248,.55)", borderRadius: 58, background: "linear-gradient(145deg, #19224a, #090f25)", boxShadow: "0 0 90px rgba(99,102,241,.35)", fontSize: 72, fontWeight: 700, letterSpacing: -7 }}>HS</div>
    </div>,
    size,
  );
}
