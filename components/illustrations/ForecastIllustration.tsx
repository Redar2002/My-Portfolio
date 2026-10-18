import type { Locale } from "@/lib/i18n";
import { Frame } from "./Frame";

const t = {
  fr: { label: "Illustration : tableau de bord avec indicateurs d'import, d'export et de balance, et courbe de prévision avec intervalle de confiance", kpis: ["import", "export", "balance"], history: "historique", forecast: "prévision" },
  en: { label: "Illustration: dashboard with import, export and balance indicators, and a forecast curve with a confidence interval", kpis: ["import", "export", "balance"], history: "history", forecast: "forecast" },
};

// Courbe illustrative, sans valeur réelle.
const history = "M28 196 C48 186 58 150 78 156 S108 196 128 176 S158 120 178 132 S208 170 228 150";
const forecast = "M228 150 C248 134 258 118 278 126 S318 160 338 140 S362 118 372 122";
const band = "M228 150 C248 120 258 96 278 102 S318 128 338 106 S362 84 372 86 L372 158 C362 156 352 176 338 174 S298 190 278 152 S248 168 228 150 Z";

export function ForecastIllustration({ locale }: { locale: Locale }) {
  const c = t[locale];
  return (
    <Frame label={c.label}>
      {c.kpis.map((k, i) => (
        <g key={k} transform={`translate(${20 + i * 124} 20)`}>
          <rect width="112" height="48" rx="6" className="fill-surface-2 stroke-line" />
          <text x="10" y="18" fontSize="9" className="fill-muted font-mono">
            {k}
          </text>
          <rect x="10" y="28" width={i === 2 ? 46 : 58} height="10" rx="3" className="fill-line-strong anim-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          <text x={i === 2 ? 62 : 74} y="37" fontSize="9" className="fill-muted font-mono">
            MW
          </text>
        </g>
      ))}

      <rect x="20" y="80" width="360" height="160" rx="6" className="fill-surface-2 stroke-line" />
      {[110, 140, 170, 200].map((y) => (
        <line key={y} x1="28" x2="372" y1={y} y2={y} className="stroke-line" strokeWidth="1" />
      ))}
      <line x1="228" x2="228" y1="88" y2="232" className="stroke-line-strong" strokeDasharray="2 3" />

      <path d={band} className="fill-accent" opacity="0.1" />
      <path d={history} fill="none" className="stroke-fg anim-draw" strokeWidth="1.6" style={{ ["--len" as string]: "320" }} />
      <path
        d={forecast}
        fill="none"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeDasharray="5 4"
      />
      <circle cx="228" cy="150" r="3" className="fill-accent anim-pulse" />

      <g transform="translate(32 226)" fontSize="9" className="font-mono">
        <line x1="0" x2="14" y1="-3" y2="-3" className="stroke-fg" strokeWidth="1.6" />
        <text x="20" y="0" className="fill-muted">
          {c.history}
        </text>
        <line x1="96" x2="110" y1="-3" y2="-3" className="stroke-accent" strokeWidth="1.8" strokeDasharray="4 3" />
        <text x="116" y="0" className="fill-muted">
          {c.forecast}
        </text>
      </g>
    </Frame>
  );
}
