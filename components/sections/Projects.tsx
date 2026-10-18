import Link from "next/link";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { RichText } from "@/components/ui/RichText";
import { ProjectIllustration } from "@/components/illustrations";

export function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="projects" index="02" title={dict.projects.title} intro={dict.projects.intro}>
      <ol className="space-y-24 md:space-y-32">
        {projects.map((p, i) => (
          <li key={p.slug} id={`project-${p.slug}`} className="scroll-mt-24">
            <article aria-labelledby={`${p.slug}-title`} className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
              <Reveal className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-xl border border-line bg-surface-2 p-3 transition-colors hover:border-line-strong">
                  <ProjectIllustration kind={p.illustration} locale={locale} />
                </div>
              </Reveal>

              <Reveal delay={0.05} className="lg:col-span-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
                  <span className="text-accent">02.{i + 1}</span>
                  <span>{p.category[locale]}</span>
                  <StatusBadge status={p.status} dict={dict} />
                </div>
                <h3 id={`${p.slug}-title`} className="mt-4 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                  {p.title[locale]}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {p.context[locale]} · {p.period[locale]}
                </p>

                <dl className="mt-8 space-y-5">
                  {(
                    [
                      [dict.projects.problem, p.problem[locale]],
                      [dict.projects.built, p.built[locale]],
                      [dict.projects.result, p.result[locale]],
                    ] as const
                  ).map(([label, text]) => (
                    <div key={label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-accent sm:pt-1">{label}</dt>
                      <dd className="leading-relaxed text-muted">
                        <RichText text={text} />
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Stack">
                  {p.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/work/${p.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 font-medium text-accent"
                >
                  {dict.projects.caseStudy}
                  <span className="sr-only"> : {p.title[locale]}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
