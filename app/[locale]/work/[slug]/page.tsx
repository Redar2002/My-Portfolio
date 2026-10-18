import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { loadCaseStudy } from "@/lib/work";
import { getProject, projects, type ProjectSlug } from "@/content/projects";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ProjectIllustration } from "@/components/illustrations";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Todo } from "@/components/ui/Todo";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

async function resolve(params: Params) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) notFound();
  return { locale: locale as Locale, project };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, project } = await resolve(params);
  return buildMetadata({
    locale,
    path: `/work/${project.slug}`,
    title: project.title[locale],
    description: project.built[locale],
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, project } = await resolve(params);
  const dict = getDictionary(locale);
  const Content = await loadCaseStudy(locale, project.slug as ProjectSlug);
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    [dict.work.category, project.category[locale]],
    [dict.work.period, project.period[locale]],
    [dict.work.context, project.context[locale]],
  ] as const;

  return (
    <article className="page-container pt-32 pb-24 md:pt-40">
      <Link href={`/${locale}#project-${project.slug}`} className="font-mono text-sm text-muted hover:text-fg">
        ← {dict.work.back}
      </Link>

      <header className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-sm text-accent">
            02.{index + 1} — {project.category[locale]}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-balance text-fg md:text-7xl">{project.title[locale]}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{project.role[locale]}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
                <dd className="mt-1 text-fg">{value}</dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{dict.work.status}</dt>
              <dd className="mt-1">
                <StatusBadge status={project.status} dict={dict} />
              </dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-line bg-surface-2 p-3">
            <ProjectIllustration kind={project.illustration} locale={locale} />
          </div>
        </div>
      </header>

      <div className="mt-16 grid gap-12 border-t border-line pt-4 lg:grid-cols-12">
        <div className="prose-case max-w-3xl lg:col-span-8">
          <Content
            components={{
              Architecture: () => (
                <div className="not-prose my-8">
                  <ArchitectureDiagram slug={project.slug} locale={locale} labels={dict.architecture} />
                </div>
              ),
              Todo: (props: { children: React.ReactNode }) => <Todo locale={locale} {...props} />,
            }}
          />
        </div>
        <aside className="lg:col-span-4">
          <div className="sticky top-24 mt-14 rounded-xl border border-line p-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-accent">{dict.work.stack}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <nav aria-label={dict.work.next} className="mt-24 border-t border-line pt-10">
        <Link href={`/${locale}/work/${next.slug}`} className="group block">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">{dict.work.next}</span>
          <span className="mt-2 flex items-center gap-3 font-serif text-4xl text-fg italic group-hover:text-accent md:text-6xl">
            {next.title[locale]}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </nav>
    </article>
  );
}
