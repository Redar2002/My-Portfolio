import type { ReactNode } from "react";

/** Cadre commun des illustrations : SVG décoratif + description accessible. */
export function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={label} className="h-auto w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="0.5" y="0.5" width="399" height="259" rx="10" className="fill-surface stroke-line" />
      {children}
    </svg>
  );
}
