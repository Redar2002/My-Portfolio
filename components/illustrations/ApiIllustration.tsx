import type { Locale } from "@/lib/i18n";
import { Frame } from "./Frame";

const t = {
  fr: { label: "Illustration : une interface React qui échange des requêtes et réponses JSON avec une API REST Laravel Lumen organisée en modules", modules: "modules" },
  en: { label: "Illustration: a React interface exchanging JSON requests and responses with a modular Laravel Lumen REST API", modules: "modules" },
};

export function ApiIllustration({ locale }: { locale: Locale }) {
  const c = t[locale];
  return (
    <Frame label={c.label}>
      {/* Client React */}
      <rect x="20" y="24" width="150" height="212" rx="6" className="fill-surface-2 stroke-line" />
      <circle cx="32" cy="36" r="2.5" className="fill-line-strong" />
      <circle cx="41" cy="36" r="2.5" className="fill-line-strong" />
      <circle cx="50" cy="36" r="2.5" className="fill-line-strong" />
      <text x="158" y="39" textAnchor="end" fontSize="9" className="fill-muted font-mono">
        React
      </text>
      <rect x="32" y="54" width="126" height="10" rx="3" className="fill-line-strong" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(32 ${76 + i * 50})`}>
          <rect width="126" height="40" rx="5" className="fill-surface stroke-line" />
          <rect x="10" y="10" width={70 - i * 12} height="6" rx="3" className="fill-line-strong" />
          <rect x="10" y="24" width={96 - i * 8} height="6" rx="3" className="fill-line anim-grow" style={{ animationDelay: `${0.6 + i * 0.4}s` }} />
        </g>
      ))}

      {/* Échanges HTTP */}
      <text x="200" y="98" textAnchor="middle" fontSize="8" className="fill-accent font-mono">
        GET /api
      </text>
      <path d="M176 108 H224" className="stroke-accent anim-flow" strokeWidth="1.5" fill="none" />
      <path d="M220 103 l6 5 -6 5" className="stroke-accent" strokeWidth="1.5" fill="none" />
      <path d="M224 152 H176" className="stroke-line-strong anim-flow" strokeWidth="1.5" fill="none" />
      <path d="M180 147 l-6 5 6 5" className="stroke-line-strong" strokeWidth="1.5" fill="none" />
      <text x="200" y="170" textAnchor="middle" fontSize="8" className="fill-muted font-mono">
        200 · JSON
      </text>

      {/* API Lumen */}
      <rect x="230" y="24" width="150" height="212" rx="6" className="fill-surface-2 stroke-line" />
      <text x="242" y="42" fontSize="9" className="fill-accent font-mono">
        Lumen · REST
      </text>
      <text x="242" y="62" fontSize="8" className="fill-muted font-mono">
        {c.modules}/
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(242 ${72 + i * 36})`}>
          <rect width="126" height="28" rx="5" className={i === 1 ? "fill-accent-soft stroke-accent" : "fill-surface stroke-line"} />
          <rect x="10" y="11" width="8" height="6" rx="1.5" className={i === 1 ? "fill-accent anim-pulse" : "fill-line-strong"} />
          <rect x="24" y="11" width={84 - i * 10} height="6" rx="3" className="fill-line-strong" />
        </g>
      ))}
    </Frame>
  );
}
