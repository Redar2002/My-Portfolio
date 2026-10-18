"use client";

import { useState } from "react";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { stack } from "@/content/stack";
import { projects, type ProjectSlug } from "@/content/projects";

/** Section 05 : outils par rôle, filtrables par projet. */
export function StackExplorer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [filter, setFilter] = useState<ProjectSlug | null>(null);
  const shortName = (slug: ProjectSlug) => projects.find((p) => p.slug === slug)!.short[locale];

  const options: { value: ProjectSlug | null; label: string }[] = [
    { value: null, label: dict.stack.all },
    ...projects.map((p) => ({ value: p.slug, label: p.short[locale] })),
  ];

  return (
    <div>
      <div role="group" aria-label={dict.stack.filterLabel} className="flex flex-wrap gap-2">
        {options.map((o) => {
          const pressed = filter === o.value;
          return (
            <button
              key={o.label}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(o.value)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                pressed ? "border-accent bg-accent text-accent-fg" : "border-line text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div key={group.id} className="bg-bg p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{group.title[locale]}</h3>
            <ul className="mt-4 space-y-3">
              {group.tools.map((tool) => {
                const dimmed = filter !== null && !tool.projects.includes(filter);
                return (
                  <li key={tool.name} className={`transition-opacity duration-300 ${dimmed ? "opacity-25" : ""}`} aria-hidden={dimmed || undefined}>
                    <p className="font-medium text-fg">{tool.name}</p>
                    <p className="mt-0.5 text-sm text-muted">
                      {tool.projects.length ? tool.projects.map(shortName).join(" · ") : dict.stack.noProject}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
