import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site } from "@/content/site";
import { disciplines } from "@/content/skills";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ArchitectureExplorer } from "@/components/sections/Architecture";
import { Method } from "@/components/sections/Method";
import { StackExplorer } from "@/components/sections/Stack";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  // Données structurées schema.org Person
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title[locale],
    description: dict.meta.description,
    url: `${site.url}/${locale}`,
    email: `mailto:${site.contact.email}`,
    telephone: site.contact.phoneHref.replace("tel:", ""),
    address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" },
    sameAs: [site.contact.linkedin, site.contact.github],
    knowsLanguage: ["ar", "fr", "en"],
    knowsAbout: disciplines.flatMap((d) => d.items[locale]),
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "ISMAGI — Institut Supérieur de Génie Informatique" },
      { "@type": "EducationalOrganization", name: "ISTA — Institut Spécialisé de Technologie Appliquée" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Hero locale={locale} dict={dict} />
      <Skills locale={locale} dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Section id="architecture" index="03" title={dict.architecture.title} intro={dict.architecture.intro}>
        <ArchitectureExplorer locale={locale} dict={dict} />
      </Section>
      <Method locale={locale} dict={dict} />
      <Section id="stack" index="05" title={dict.stack.title} intro={dict.stack.intro}>
        <StackExplorer locale={locale} dict={dict} />
      </Section>
      <Journey locale={locale} dict={dict} />
      <Contact locale={locale} dict={dict} />
    </>
  );
}
