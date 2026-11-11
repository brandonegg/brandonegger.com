import { ImageResponse } from "next/og";
import { logo, site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { bg, ink, accent } = logo.colors.dark;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        gap: 40,
        background: bg,
        color: ink,
      }}
    >
      <svg width="160" height="160" viewBox={logo.viewBox}>
        <path fill={accent} d={logo.tilde} />
        <path fill={ink} d={logo.slash} />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 40, color: accent }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    </div>,
    size,
  );
}
