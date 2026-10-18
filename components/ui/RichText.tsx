import { Fragment } from "react";

const PLACEHOLDER = /(\[(?:À COMPLÉTER|TO COMPLETE)[^\]]*\])/g;

/** Affiche un texte de contenu en surlignant les placeholders « [À COMPLÉTER : …] ». */
export function RichText({ text }: { text: string }) {
  const parts = text.split(PLACEHOLDER);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="todo">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
