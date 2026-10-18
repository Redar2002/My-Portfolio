import Link from "next/link";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { timeline } from "@/content/timeline";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Journey({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="journey" index="06" title={dict.journey.title} intro={dict.journey.intro}>
      <ol className="relative border-l border-line">
        {timeline.map((entry, i) => (
          <Reveal as="li" key={i} delay={i * 0.04} className="relative grid gap-2 pb-12 pl-8 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-8">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[5px] size-[9px] rounded-full border-2 border-bg ${
                entry.kind === "internship" ? "bg-accent" : "bg-line-strong"
              }`}
            />
            <p className="font-mono text-sm text-muted">{entry.period}</p>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {entry.kind === "internship" ? dict.journey.internship : dict.journey.education}
              </p>
              <h3 className="mt-1 font-serif text-2xl text-fg md:text-3xl">{entry.title[locale]}</h3>
              <p className="mt-1 text-muted">{entry.org}</p>
              {entry.detail ? (
                <p className="mt-2 text-sm text-muted">
                  {entry.detail[locale]}{" "}
                  {entry.project ? (
                    <Link href={`/${locale}/work/${entry.project}`} className="text-accent underline-offset-4 hover:underline">
                      {dict.projects.caseStudy} →
                    </Link>
                  ) : null}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
