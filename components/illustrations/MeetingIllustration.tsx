import type { Locale } from "@/lib/i18n";
import { Frame } from "./Frame";

const t = {
  fr: { label: "Illustration : une transcription de réunion analysée puis résumée en décisions, actions et KPI", transcript: "transcription", summary: "synthèse ia", rows: ["décisions", "actions", "kpi"] },
  en: { label: "Illustration: a meeting transcript analysed then summarised into decisions, action items and KPIs", transcript: "transcript", summary: "ai summary", rows: ["decisions", "actions", "kpis"] },
};

// Longueurs des lignes de texte de la transcription (purement décoratives).
const lines = [120, 96, 132, 84, 110, 128, 70, 116, 100];

export function MeetingIllustration({ locale }: { locale: Locale }) {
  const c = t[locale];
  return (
    <Frame label={c.label}>
      {/* Transcription */}
      <rect x="20" y="24" width="160" height="212" rx="6" className="fill-surface-2 stroke-line" />
      <text x="32" y="44" fontSize="10" className="fill-muted font-mono">
        {c.transcript}
      </text>
      {lines.map((w, i) => (
        <g key={i}>
          <rect x="32" y={58 + i * 18} width="10" height="6" rx="2" className={i % 3 === 0 ? "fill-accent" : "fill-line-strong"} opacity={0.7} />
          <rect x="48" y={58 + i * 18} width={w} height="6" rx="3" className="fill-line-strong" />
        </g>
      ))}
      <g className="anim-scan" style={{ ["--scan-distance" as string]: "150px" }}>
        <rect x="26" y="52" width="148" height="20" rx="4" className="fill-accent" opacity="0.12" />
        <line x1="26" x2="174" y1="72" y2="72" className="stroke-accent" strokeWidth="1" />
      </g>

      {/* Flux */}
      <path d="M186 130 H214" className="stroke-accent anim-flow" strokeWidth="1.5" fill="none" />
      <path d="M210 125 l6 5 -6 5" className="stroke-accent" strokeWidth="1.5" fill="none" />

      {/* Synthèse */}
      <rect x="222" y="24" width="158" height="212" rx="6" className="fill-surface-2 stroke-line" />
      <text x="234" y="44" fontSize="10" className="fill-accent font-mono">
        {c.summary}
        <tspan className="anim-blink">_</tspan>
      </text>
      {c.rows.map((row, i) => (
        <g key={row} transform={`translate(234 ${62 + i * 58})`}>
          <text x="0" y="8" fontSize="9" className="fill-muted font-mono">
            {row}
          </text>
          {[0, 1].map((j) => (
            <g key={j}>
              <rect x="0" y={18 + j * 14} width="6" height="6" rx="1.5" className="stroke-accent" fill="none" />
              <rect
                x="12"
                y={18 + j * 14}
                width={j === 0 ? 112 : 84}
                height="6"
                rx="3"
                className="fill-line-strong anim-grow"
                style={{ animationDelay: `${0.4 + i * 0.5 + j * 0.2}s` }}
              />
            </g>
          ))}
        </g>
      ))}
    </Frame>
  );
}
