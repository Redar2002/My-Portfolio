import { Reveal } from "./Reveal";

type Props = { index: string; title: string; intro?: string; id: string };

/** En-tête éditorial numéroté (01, 02…) commun à toutes les sections. */
export function SectionHeader({ index, title, intro, id }: Props) {
  return (
    <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-[8rem_1fr]">
      <p className="font-mono text-sm text-accent" aria-hidden="true">
        {index} /
      </p>
      <div>
        <h2 id={id} className="text-3xl font-semibold tracking-tight text-fg md:text-5xl">
          {title}
        </h2>
        {intro ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
      </div>
    </Reveal>
  );
}
