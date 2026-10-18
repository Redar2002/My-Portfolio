import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "./CopyButton";

export function Contact({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { contact } = site;
  const channels = [
    { label: dict.contact.phone, value: contact.phoneDisplay, href: contact.phoneHref, external: false },
    { label: dict.contact.linkedin, value: "linkedin.com/in/reda-laksyer-31704926a", href: contact.linkedin, external: true },
    { label: dict.contact.github, value: "github.com/Redar2002", href: contact.github, external: true },
  ];
  const cvs = [
    { label: dict.contact.cvFr, href: site.cv.fr, lang: "fr" },
    { label: dict.contact.cvEn, href: site.cv.en, lang: "en" },
  ];

  return (
    <Section id="contact" index="07" title={dict.contact.title} intro={dict.contact.intro}>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-wider text-muted">{dict.contact.email}</p>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="text-2xl font-semibold tracking-tight break-all text-fg decoration-accent decoration-2 underline-offset-8 hover:underline sm:text-4xl md:text-5xl"
          >
            {contact.email}
          </a>
          <CopyButton value={contact.email} labels={{ copy: dict.contact.copy, copied: dict.contact.copied }} />
        </div>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <ul className="divide-y divide-line border-y border-line">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex flex-wrap items-baseline justify-between gap-2 py-5"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">{c.label}</span>
                  <span className="text-fg transition-colors group-hover:text-accent">
                    {c.value} <span aria-hidden="true">{c.external ? "↗" : "→"}</span>
                    {c.external ? <span className="sr-only"> {dict.a11y.external}</span> : null}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-mono text-xs uppercase tracking-wider text-muted">{dict.contact.cv}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {cvs.map((cv) =>
              cv.href ? (
                <a
                  key={cv.lang}
                  href={cv.href}
                  download
                  hrefLang={cv.lang}
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  <span aria-hidden="true">↓</span> {cv.label} <span className="font-mono text-xs opacity-80">PDF</span>
                </a>
              ) : (
                <span
                  key={cv.lang}
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-dashed border-line-strong px-5 text-muted"
                >
                  {cv.label} <mark className="todo">{dict.contact.cvMissing}</mark>
                </span>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <dl className="space-y-8">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{dict.contact.location}</dt>
              <dd className="mt-2 text-fg">{site.location[locale]}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{dict.contact.languages}</dt>
              <dd className="mt-2">
                <ul className="space-y-1.5">
                  {site.languages.map((l) => (
                    <li key={l.name.fr} className="flex justify-between gap-4">
                      <span className="text-fg">{l.name[locale]}</span>
                      <span className="text-muted">{l.level[locale]}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{dict.contact.availability}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{dict.hero.availability}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
