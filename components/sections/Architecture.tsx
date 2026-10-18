"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

/** Section 03 : onglets par projet + diagramme interactif. */
export function ArchitectureExplorer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const current = refs.current.indexOf(e.currentTarget);
    let next = current;
    if (e.key === "ArrowRight") next = (current + 1) % projects.length;
    else if (e.key === "ArrowLeft") next = (current - 1 + projects.length) % projects.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = projects.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  const project = projects[active];

  return (
    <div>
      <div role="tablist" aria-label={dict.architecture.tablistLabel} className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0">
        {projects.map((p, i) => (
          <button
            key={p.slug}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKeyDown}
            className={`shrink-0 rounded-md px-4 py-2 text-sm whitespace-nowrap transition-colors ${
              i === active ? "bg-surface-2 text-fg shadow-[inset_0_-2px_0_var(--accent)]" : "text-muted hover:text-fg"
            }`}
          >
            {p.short[locale]}
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="mt-6">
        <ArchitectureDiagram key={project.slug} slug={project.slug} locale={locale} labels={dict.architecture} />
      </div>
    </div>
  );
}
