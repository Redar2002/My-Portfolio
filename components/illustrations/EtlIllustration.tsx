import type { Locale } from "@/lib/i18n";
import { Frame } from "./Frame";

const t = {
  fr: { label: "Illustration : pipeline ETL animé du système OLTP vers SSIS, le Data Mart, le cube SSAS et Power BI, avec le schéma en étoile", dims: ["Date", "Médecin", "Service", "Patient"] },
  en: { label: "Illustration: animated ETL pipeline from the OLTP system to SSIS, the Data Mart, the SSAS cube and Power BI, with the star schema", dims: ["Date", "Doctor", "Dept.", "Patient"] },
};

const steps = ["OLTP", "SSIS", "MART", "SSAS", "BI"];

export function EtlIllustration({ locale }: { locale: Locale }) {
  const c = t[locale];
  return (
    <Frame label={c.label}>
      {/* Pipeline */}
      {steps.slice(0, -1).map((_, i) => (
        <line key={i} x1={66 + i * 72} x2={92 + i * 72} y1="62" y2="62" className="stroke-accent anim-flow" strokeWidth="1.5" />
      ))}
      {steps.map((s, i) => (
        <g key={s} transform={`translate(${22 + i * 72} 40)`}>
          <rect width="44" height="44" rx="8" className={i === 2 ? "fill-accent-soft stroke-accent" : "fill-surface-2 stroke-line-strong"} />
          <text x="22" y="26" textAnchor="middle" fontSize="9" className={i === 2 ? "fill-accent font-mono" : "fill-muted font-mono"}>
            {s}
          </text>
          <circle cx="38" cy="8" r="2" className="fill-accent anim-pulse" style={{ animationDelay: `${i * 0.35}s` }} />
        </g>
      ))}

      {/* Schéma en étoile */}
      <g transform="translate(200 172)">
        {[
          [-120, -42],
          [120, -42],
          [-120, 42],
          [120, 42],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1="0" y1="0" x2={x} y2={y} className="stroke-line-strong" strokeWidth="1" />
            <rect x={x - 38} y={y - 13} width="76" height="26" rx="5" className="fill-surface-2 stroke-line-strong" />
            <text x={x} y={y + 3} textAnchor="middle" fontSize="9" className="fill-muted font-mono">
              Dim{c.dims[i]}
            </text>
          </g>
        ))}
        <rect x="-58" y="-16" width="116" height="32" rx="6" className="fill-accent-soft stroke-accent" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" className="fill-accent font-mono">
          FactConsultation
        </text>
      </g>
    </Frame>
  );
}
