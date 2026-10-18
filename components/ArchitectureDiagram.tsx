"use client";

import { AnimatePresence, m } from "framer-motion";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { architectures, stageLabels } from "@/content/architecture";
import type { ProjectSlug } from "@/content/projects";
import type { Dictionary } from "@/content/i18n/fr";
import type { Locale } from "@/lib/i18n";
import { RichText } from "./ui/RichText";

type Props = { slug: ProjectSlug; locale: Locale; labels: Dictionary["architecture"] };

/**
 * Diagramme interactif : chaque nœud est un onglet (motif ARIA « tabs »).
 * Flèches ← → ↑ ↓, Début et Fin déplacent la sélection.
 */
export function ArchitectureDiagram({ slug, locale, labels }: Props) {
  const nodes = architectures[slug];
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const node = nodes[active];

  function select(i: number) {
    const next = (i + nodes.length) % nodes.length;
    setActive(next);
    refs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const current = refs.current.indexOf(e.currentTarget);
    const keys: Record<string, () => void> = {
      ArrowRight: () => select(current + 1),
      ArrowDown: () => select(current + 1),
      ArrowLeft: () => select(current - 1),
      ArrowUp: () => select(current - 1),
      Home: () => select(0),
      End: () => select(nodes.length - 1),
    };
    if (keys[e.key]) {
      e.preventDefault();
      keys[e.key]();
    }
  }

  return (
    <div>
      <div role="tablist" aria-label={labels.nodesLabel} aria-orientation="horizontal" className="grid gap-2 md:grid-cols-5 md:gap-0">
        {nodes.map((n, i) => {
          const selected = i === active;
          return (
            <div key={i} className="relative flex items-stretch md:pr-6">
              <button
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className={`w-full rounded-lg border p-4 text-left transition-colors ${
                  selected ? "border-accent bg-accent-soft" : "border-line bg-surface hover:border-line-strong"
                }`}
              >
                <span className={`block font-mono text-[11px] uppercase tracking-wider ${selected ? "text-accent" : "text-muted"}`}>
                  {String(i + 1).padStart(2, "0")} · {(n.stageLabel ?? stageLabels[n.stage])[locale]}
                </span>
                <span className="mt-2 block text-sm font-medium text-fg">{n.name[locale]}</span>
              </button>
              {i < nodes.length - 1 ? (
                <svg aria-hidden="true" viewBox="0 0 24 12" className="absolute top-1/2 right-0 hidden w-6 -translate-y-1/2 md:block">
                  <path d="M2 6h18M16 2l4 4-4 4" fill="none" className={i < active ? "stroke-accent" : "stroke-line-strong"} strokeWidth="1.5" />
                </svg>
              ) : null}
            </div>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        aria-live="polite"
        className="mt-4 rounded-lg border border-line bg-surface p-6 md:p-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold text-fg">{node.name[locale]}</h3>
              <p className="font-mono text-xs text-muted">
                {labels.step} {active + 1} {labels.of} {nodes.length} · <span aria-hidden="true">{labels.hint}</span>
              </p>
            </div>
            <dl className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">{labels.role}</dt>
                <dd className="mt-1.5 text-fg">{node.role[locale]}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">{labels.receives}</dt>
                <dd className="mt-1.5 text-muted">{node.receives[locale]}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">{labels.sends}</dt>
                <dd className="mt-1.5 text-muted">{node.sends[locale]}</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">{labels.tools}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {node.tools.map((tool) => {
                    const text = typeof tool === "string" ? tool : tool[locale];
                    return (
                      <span key={text} className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">
                        <RichText text={text} />
                      </span>
                    );
                  })}
                </dd>
              </div>
            </dl>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
