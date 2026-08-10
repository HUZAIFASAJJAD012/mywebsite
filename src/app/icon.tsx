import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", background: "linear-gradient(145deg, #6366f1, #111936)", borderRadius: 16, fontSize: 23, fontWeight: 700, letterSpacing: -2 }}>HS</div>,
    size,
  );
}
