import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getProject } from "@/content/projects";

export const alt = "Project case study by Huzaifa Sajjad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tones = { indigo: "#6366f1", cyan: "#22d3ee", violet: "#8b5cf6", teal: "#2dd4bf", blue: "#3b82f6", rose: "#fb7185" };

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const accent = tones[project.coverTone];
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "72px", color: "#f8fafc", background: `radial-gradient(circle at 82% 20%, ${accent}55 0%, #0a1022 40%, #050816 76%)`, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "690px" }}>
        <div style={{ color: "#a5b4fc", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" }}>{project.category.join(" · ")}</div>
        <div style={{ marginTop: 26, fontSize: 94, lineHeight: .94, letterSpacing: -5, fontWeight: 700 }}>{project.title}</div>
        <div style={{ marginTop: 30, color: "#cbd5e1", fontSize: 26, lineHeight: 1.4 }}>{project.shortDescription}</div>
        <div style={{ marginTop: 34, color: "#94a3b8", fontSize: 18 }}>Case study by Huzaifa Sajjad</div>
      </div>
      <div style={{ marginLeft: "auto", width: 310, height: 360, display: "flex", flexDirection: "column", border: "2px solid rgba(255,255,255,.16)", borderRadius: 24, overflow: "hidden", background: "#0e1630", boxShadow: "0 35px 90px rgba(0,0,0,.5)" }}>
        <div style={{ height: 45, display: "flex", alignItems: "center", gap: 7, padding: "0 18px", background: "#18213c" }}><span style={{ width: 7, height: 7, borderRadius: 10, background: "#64708a" }} /><span style={{ width: 7, height: 7, borderRadius: 10, background: "#64708a" }} /><span style={{ width: 7, height: 7, borderRadius: 10, background: "#64708a" }} /></div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: 32, background: `linear-gradient(145deg, ${accent}44, #0a1022)` }}><span style={{ color: "#cbd5e1", fontSize: 16 }}>Product system</span><strong style={{ marginTop: 22, fontSize: 38, lineHeight: 1.05 }}>{project.title}</strong><div style={{ marginTop: "auto", display: "flex", gap: 8 }}>{project.stack.slice(0, 2).map((item) => <span key={item} style={{ padding: "7px 10px", border: "1px solid rgba(255,255,255,.16)", borderRadius: 20, fontSize: 12 }}>{item}</span>)}</div></div>
      </div>
    </div>, size,
  );
}
