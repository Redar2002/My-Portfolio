import type { MDXComponents } from "mdx/types";
import { Todo } from "@/components/ui/Todo";
import { Figure } from "@/components/ui/Figure";

/** Composants disponibles dans les fichiers MDX de content/work. */
const components: MDXComponents = {
  Todo,
  Figure,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
