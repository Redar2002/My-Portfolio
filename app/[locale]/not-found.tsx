import Link from "next/link";
import { fr } from "@/content/i18n/fr";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-40 md:px-8">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">{fr.notFound.title}</h1>
      <p className="mt-4 text-muted">{fr.notFound.text}</p>
      <Link href="/fr" className="mt-8 inline-block text-accent underline underline-offset-4">
        {fr.notFound.home}
      </Link>
    </div>
  );
}
