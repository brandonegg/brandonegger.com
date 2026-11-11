import { ImageResponse } from "next/og";
import { logo } from "@/lib/site";

// iOS ignores SVG icons, so render a PNG home-screen icon from the same shapes.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const { bg, ink, accent } = logo.colors.light;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
      }}
    >
      {/* iOS applies its own rounded mask, so the background stays square. */}
      <svg width="144" height="144" viewBox={logo.viewBox}>
        <path fill={accent} d={logo.tilde} />
        <path fill={ink} d={logo.slash} />
      </svg>
    </div>,
    size,
  );
}
