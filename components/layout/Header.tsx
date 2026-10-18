"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";

export const sectionIds = ["skills", "projects", "architecture", "method", "stack", "journey", "contact"] as const;

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = sectionIds.map((id, i) => ({
    id,
    href: `/${locale}#${id}`,
    num: String(i + 1).padStart(2, "0"),
    label: dict.nav[id],
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2.5 font-mono text-sm text-fg">
          <span aria-hidden="true" className="grid size-7 place-items-center rounded bg-accent text-[11px] font-semibold text-accent-fg">
            {site.initials}
          </span>
          <span>{site.name}</span>
        </Link>

        <nav aria-label={dict.a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {links.map((l) => (
              <li key={l.id}>
                <Link href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                  <span aria-hidden="true" className="mr-1 font-mono text-[11px] text-accent">
                    {l.num}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={dict.a11y.switchLanguage} />
          <ThemeToggle labels={{ toLight: dict.a11y.themeToLight, toDark: dict.a11y.themeToDark }} />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md border border-line text-muted hover:text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label={dict.a11y.mainNav} hidden={!open} className="border-t border-line lg:hidden">
        <ul className="mx-auto max-w-6xl px-5 py-4">
          {links.map((l) => (
            <li key={l.id}>
              <Link href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-3 py-2.5 text-fg">
                <span aria-hidden="true" className="font-mono text-xs text-accent">
                  {l.num}
                </span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
