import Link from "next/link";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/content/site";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const tagline = site.heroTaglines[site.heroTagline][locale];
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:px-8 md:pt-32 md:pb-36">
        <h1 id="hero-title">
          <span className="block font-mono text-sm text-accent">
            {site.name} — {site.title[locale]}
          </span>
          <span className="mt-6 block max-w-4xl text-4xl font-semibold tracking-tight text-balance text-fg sm:text-5xl md:text-7xl md:leading-[1.02]">
            {tagline}
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{dict.hero.subtitle}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={`/${locale}#projects`}
            className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            {dict.hero.ctaProjects}
            <span aria-hidden="true">↓</span>
          </Link>
          <Link
            href={`/${locale}#contact`}
            className="inline-flex h-12 items-center rounded-md border border-line-strong px-6 font-medium text-fg transition-colors hover:border-fg"
          >
            {dict.hero.ctaContact}
          </Link>
        </div>

        <p className="mt-10 flex items-start gap-3 text-sm text-muted">
          <span aria-hidden="true" className="relative mt-1.5 flex size-2 shrink-0">
            <span className="anim-pulse absolute inset-0 rounded-full bg-accent" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
          {dict.hero.availability}
        </p>

        <div className="mt-20 border-t border-line pt-6">
          <p className="sr-only">{dict.hero.pipelineLabel}</p>
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted uppercase md:text-sm">
            {dict.hero.pipeline.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className={i === dict.hero.pipeline.length - 1 ? "text-accent" : undefined}>{step}</span>
                {i < dict.hero.pipeline.length - 1 ? (
                  <span aria-hidden="true" className="text-line-strong">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
