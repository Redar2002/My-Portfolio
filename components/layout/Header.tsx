"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";

export const sectionIds = ["skills", "projects", "architecture", "method", "stack", "journey", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

/**
 * Navigation flottante en pilule. Au défilement (et sur mobile), elle se replie
 * en un bouton rond qui rouvre le menu.
 */
export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section active (accueil uniquement)
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = sectionIds.map((id, i) => ({ id, href: `/${locale}#${id}`, num: String(i + 1).padStart(2, "0"), label: dict.nav[id] }));
  const collapsed = scrolled && !open;
  // Sur bureau, seul l'élément visible (pilule ou bouton rond) reste accessible au clavier.
  const roundHidden = isDesktop && !collapsed;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      {/* Pilule complète (bureau) */}
      <div
        inert={collapsed}
        className={`glass pointer-events-auto hidden items-center gap-1 rounded-full border border-line-strong py-1.5 pr-1.5 pl-5 shadow-[0_0_30px_var(--glow)] transition-all duration-300 lg:flex ${
          collapsed ? "pointer-events-none! scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Link href={`/${locale}`} className="mr-3 font-serif text-2xl leading-none text-fg" onClick={() => setOpen(false)}>
          {site.name.split(" ")[0]}
        </Link>
        <nav aria-label={dict.a11y.mainNav}>
          <ul className="flex items-center">
            {links.map((l) => {
              const current = active === l.id;
              return (
                <li key={l.id}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={current ? "location" : undefined}
                    className={`block rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                      current ? "border-accent/60 bg-accent-soft text-accent" : "border-transparent text-muted hover:text-fg"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="ml-2 flex items-center gap-1.5">
          <LanguageSwitch locale={locale} label={dict.a11y.switchLanguage} />
          <ThemeToggle labels={{ toLight: dict.a11y.themeToLight, toDark: dict.a11y.themeToDark }} />
        </div>
      </div>

      {/* Bouton rond (repli au défilement, et toujours sur mobile) */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
        aria-hidden={roundHidden || undefined}
        tabIndex={roundHidden ? -1 : 0}
        onClick={() => setOpen((v) => !v)}
        className={`glass pointer-events-auto absolute top-0 grid size-14 place-items-center rounded-full border border-accent/40 text-accent shadow-[0_0_30px_var(--glow)] transition-all duration-300 ${
          collapsed ? "lg:scale-100 lg:opacity-100" : "lg:pointer-events-none lg:scale-75 lg:opacity-0"
        }`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M5 8h14M5 12h14M5 16h14" />}
        </svg>
      </button>

      {/* Menu ouvert depuis le bouton rond (mobile) */}
      <div
        id="site-menu"
        hidden={!open}
        className="glass pointer-events-auto absolute top-20 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-line-strong p-3 shadow-[0_0_40px_var(--glow)] lg:hidden"
      >
        <nav aria-label={dict.a11y.mainNav}>
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-3 rounded-lg px-3 py-2.5 ${active === l.id ? "bg-accent-soft text-accent" : "text-fg"}`}
                >
                  <span aria-hidden="true" className="font-mono text-xs text-accent">
                    {l.num}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-2 flex items-center justify-between border-t border-line px-3 pt-3">
          <LanguageSwitch locale={locale} label={dict.a11y.switchLanguage} />
          <ThemeToggle labels={{ toLight: dict.a11y.themeToLight, toDark: dict.a11y.themeToDark }} />
        </div>
      </div>
    </header>
  );
}
