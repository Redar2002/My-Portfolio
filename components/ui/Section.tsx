import type { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

type Props = { id: string; index: string; title: string; intro?: string; children: ReactNode };

export function Section({ id, index, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-24 md:py-32">
      <div className="page-container">
        <SectionHeader id={`${id}-title`} index={index} title={title} intro={intro} />
        {children}
      </div>
    </section>
  );
}
