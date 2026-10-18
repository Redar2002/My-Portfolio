import Link from "next/link";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { disciplines } from "@/content/skills";
import { getProject } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="skills" index="01" title={dict.skills.title} intro={dict.skills.intro}>
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
        {disciplines.map((d, i) => (
          <Reveal as="li" key={d.id} delay={i * 0.05} className="flex flex-col bg-bg p-6 md:p-10">
            <p className="font-mono text-xs text-accent">01.{i + 1}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">{d.title[locale]}</h3>
            <p className="mt-3 leading-relaxed text-muted">{d.summary[locale]}</p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-sm text-fg">
              {d.items[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">{dict.skills.usedIn}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {d.projects.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${locale}#project-${slug}`}
                      className="inline-flex items-center gap-1.5 rounded border border-line px-2.5 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {getProject(slug)?.short[locale]}
                      <span aria-hidden="true">↘</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
