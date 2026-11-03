import { ImageResponse } from "next/og";

export const alt = "LiniWeb — Jasa Pembuatan Website Profesional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 80, background: "#eef2ff", color: "#18264b", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>LiniWeb</div>
      <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.15 }}>Website Profesional untuk Bisnis Anda</div>
      <div style={{ display: "flex", fontSize: 28 }}>Landing Page · Company Profile · Toko Online</div>
      <div style={{ display: "flex", fontSize: 24 }}>www.liniweb.site</div>
    </div>,
    size,
  );
}
