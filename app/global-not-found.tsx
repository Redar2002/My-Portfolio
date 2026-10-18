import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { inter, jetbrains } from "@/lib/fonts";
import { fr } from "@/content/i18n/fr";
import { en } from "@/content/i18n/en";

export const metadata: Metadata = {
  title: "404 — Reda Laksyer",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" data-theme="dark" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="grid min-h-dvh place-items-center px-5">
        <main className="max-w-xl">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{fr.notFound.title}</h1>
          <p className="mt-2 text-muted" lang="en">
            {en.notFound.title}
          </p>
          <p className="mt-6 text-muted">{fr.notFound.text}</p>
          <p className="mt-8 flex gap-6">
            <Link href="/fr" className="text-accent underline underline-offset-4">
              {fr.notFound.home}
            </Link>
            <Link href="/en" lang="en" className="text-accent underline underline-offset-4">
              {en.notFound.home}
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
