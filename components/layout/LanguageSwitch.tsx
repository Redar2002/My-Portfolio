"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

/** Sélecteur FR / EN : renvoie vers la même page dans l'autre langue. */
export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <div role="group" aria-label={label} className="flex items-center gap-1 rounded-full border border-line p-1">
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${l}`)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            className={`grid h-7 min-w-9 place-items-center rounded-full px-2 font-mono text-[11px] font-medium uppercase transition-colors ${
              active ? "bg-fg text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
