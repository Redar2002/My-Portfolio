import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

/** Placeholder visible pour un contenu à compléter (chiffre, détail non vérifié). */
export function Todo({ children, locale = "fr" }: { children: ReactNode; locale?: Locale }) {
  return (
    <mark className="todo">
      [{locale === "fr" ? "À COMPLÉTER : " : "TO COMPLETE: "}
      {children}]
    </mark>
  );
}
