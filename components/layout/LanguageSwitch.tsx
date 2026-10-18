"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

/** Lien vers la même page dans l'autre langue. */
export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const target: Locale = locale === "fr" ? "en" : "fr";
  const href = pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${target}`);

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={label}
      title={label}
      className="grid h-9 place-items-center rounded-md border border-line px-2.5 font-mono text-xs uppercase text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {target}
    </Link>
  );
}
