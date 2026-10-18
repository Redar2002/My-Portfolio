import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { methodSteps, principles } from "@/content/method";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Method({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="method" index="04" title={dict.method.title} intro={dict.method.intro}>
      <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
        {methodSteps.map((step, i) => (
          <Reveal as="li" key={i} delay={i * 0.05} className="flex flex-col bg-bg p-6">
            <span className="font-mono text-3xl font-light text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-semibold text-fg">
              <span className="sr-only">{i + 1}. </span>
              {step.title[locale]}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.text[locale]}</p>
            <div className="mt-auto pt-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{dict.method.deliverables}</p>
              <ul className="mt-2 space-y-1.5">
                {step.deliverables[locale].map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-fg">
                    <span aria-hidden="true" className="text-accent">
                      ▸
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <h3 className="mt-20 font-mono text-sm uppercase tracking-wider text-muted">{dict.method.principlesTitle}</h3>
      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <Reveal as="li" key={i} delay={i * 0.05} className="border-l-2 border-accent pl-5">
            <p className="text-lg leading-snug font-medium text-fg">{locale === "fr" ? `« ${p.fr} »` : `“${p.en}”`}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
