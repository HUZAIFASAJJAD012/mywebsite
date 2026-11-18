import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getArticle } from "@/content/articles";

export const alt = "Article by Huzaifa Sajjad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ArticleOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", color: "#f8fafc", background: "radial-gradient(circle at 85% 15%, #8b5cf655 0%, #0a1022 42%, #050816 78%)", fontFamily: "sans-serif" }}>
      <div style={{ color: "#a5b4fc", fontSize: 24, letterSpacing: 3, textTransform: "uppercase" }}>{article.category}</div>
      <div style={{ marginTop: 28, fontSize: 76, lineHeight: 1, letterSpacing: -3, fontWeight: 700, maxWidth: 1000 }}>{article.title}</div>
      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 16, color: "#cbd5e1", fontSize: 24 }}>
        <span style={{ display: "flex", width: 52, height: 52, alignItems: "center", justifyContent: "center", borderRadius: 14, background: "#6366f1", color: "white", fontWeight: 700 }}>HS</span>
        Huzaifa Sajjad · huzaifasajjaddev.online
      </div>
    </div>, size,
  );
}
