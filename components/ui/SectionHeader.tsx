import { Reveal } from "./Reveal";

type Props = { index: string; title: string; intro?: string; id: string };

/** En-tête éditorial numéroté (01, 02…) : titre en serif, dernier mot en italique d'accent. */
export function SectionHeader({ index, title, intro, id }: Props) {
  const cut = title.lastIndexOf(" ");
  const head = cut > 0 ? title.slice(0, cut + 1) : "";
  const tail = cut > 0 ? title.slice(cut + 1) : title;
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
      </p>
      <h2 id={id} className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.01em] text-fg md:text-7xl">
        {head}
        <span className="text-accent italic">{tail}</span>
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
    </Reveal>
  );
}
