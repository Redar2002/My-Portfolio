import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

/** Image Open Graph générée (1200×630), commune à l'accueil et aux études de cas. */
export function renderOg({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#06080b",
          color: "#e8edf3",
          backgroundImage: "linear-gradient(to right, #121821 1px, transparent 1px), linear-gradient(to bottom, #121821 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              background: "#3d9bff",
              color: "#03101f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 28, color: "#3d9bff" }}>{eyebrow}</div>
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9aa5b4" }}>
          <span>{footer}</span>
          <span>source → etl → data mart → kpi</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
