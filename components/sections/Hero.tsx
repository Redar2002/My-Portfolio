import Link from "next/link";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import { HeroPipeline } from "./HeroPipeline";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [line1, line2] = site.heroTaglines[site.heroTagline][locale];
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-32 md:px-10 md:pt-40">
        <h1 id="hero-title">
          <span className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-fg/85 uppercase md:text-sm">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            {site.name} · {site.title[locale]}
          </span>
          <span className="mt-8 block font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.02em] text-fg">
            {line1}
          </span>
          <span className="block font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.98] tracking-[-0.02em] text-accent italic">
            {line2}
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-fg/80 md:text-2xl md:leading-relaxed">{dict.hero.subtitle}</p>
            <p className="mt-6 text-sm text-muted">{dict.hero.availability}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}#projects`} className="btn btn-primary">
              {dict.hero.ctaProjects}
              <span aria-hidden="true">→</span>
            </Link>
            <Link href={`/${locale}#contact`} className="btn btn-secondary">
              {dict.hero.ctaContact}
            </Link>
          </div>
        </div>

        <figure className="mt-20 md:mt-28">
          <figcaption className="sr-only">{dict.hero.pipelineLabel}</figcaption>
          <ol aria-hidden="true" className="grid grid-cols-4 font-mono text-[10px] tracking-[0.18em] text-fg/75 uppercase md:text-sm">
            {dict.hero.stages.map((s, i) => (
              <li key={s} className={i === 3 ? "text-right" : i === 0 ? "" : "text-center"}>
                {s}
              </li>
            ))}
          </ol>
          <HeroPipeline />
        </figure>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line py-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fg/80 md:text-sm">
            {dict.hero.tags.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-muted" />
                {t}
              </li>
            ))}
          </ul>
          <Link href={`/${locale}#skills`} className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase hover:text-fg">
            {dict.hero.scroll}
            <span aria-hidden="true" className="anim-pulse h-6 w-px bg-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
