import type { Dictionary } from "@/content/i18n/fr";
import { site } from "@/content/site";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. {dict.footer.built}
        </p>
        <a href="#top" className="font-mono text-xs hover:text-fg">
          ↑ {dict.footer.top}
        </a>
      </div>
    </footer>
  );
}
