import Image from "next/image";

type FigureProps = { src: string; alt: string; caption?: string; width: number; height: number };

/** Capture d'écran réelle d'un projet, utilisée dans les études de cas MDX. */
export function Figure({ src, alt, caption, width, height }: FigureProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg border border-line bg-white">
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full" />
      </div>
      {caption ? <figcaption className="mt-2 font-mono text-xs text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
