# Portfolio — Reda Laksyer

Portfolio bilingue (FR/EN) d'ingénieur BI & Data/IA.
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · MDX.

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:3000 → redirige vers /fr
npm run build      # build de production
npm run start      # sert le build
npm run lint
npm run typecheck
```

> Windows / PowerShell : si `npm` est bloqué, exécutez une fois
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

## Arborescence

```
app/
  [locale]/                 /fr et /en (FR par défaut, redirection de /)
    layout.tsx              <html lang>, thème, skip link, en-tête, pied de page, métadonnées
    page.tsx                accueil : sections 01 → 07 + JSON-LD Person
    opengraph-image.tsx     image OG générée (+ twitter-image.tsx)
    work/[slug]/page.tsx    gabarit d'étude de cas (contenu MDX)
  global-not-found.tsx      404 globale
  sitemap.ts · robots.ts · icon.svg · globals.css
components/
  layout/                   Header, Footer, ThemeToggle, LanguageSwitch, MotionProvider
  sections/                 Hero, Skills, Projects, Architecture, Method, Stack, Journey, Contact
  illustrations/            illustrations SVG animées des projets
  ArchitectureDiagram.tsx   diagramme interactif (clavier : ← → ↑ ↓ Début Fin)
  ui/                       Section, Reveal, Badge, StatusBadge, RichText, Todo, Figure
content/                    ← TOUT le contenu éditable est ici
  site.ts                   identité, contact, CV, langues, 3 variantes de promesse du hero
  i18n/fr.ts · i18n/en.ts   textes d'interface
  projects.ts               projets (problème / construit / résultat, statut, tags)
  skills.ts                 4 disciplines → projets liés
  architecture.ts           nœuds des diagrammes par projet
  method.ts                 5 étapes + principes
  stack.ts                  outils par rôle → projets
  timeline.ts               parcours
  work/{fr,en}/*.mdx        études de cas
lib/                        i18n, SEO, polices, chargement MDX, image OG
public/cv/                  CV PDF
public/work/elia/           captures réelles du projet Elia
public/topography.svg       courbes de niveau du fond (générées)
```

## Modifier le contenu

- **Textes et données** : éditez les fichiers de `content/`. Chaque champ bilingue s'écrit `{ fr: "…", en: "…" }`.
- **Promesse du hero** : `content/site.ts` → `heroTagline` (0, 1 ou 2) choisit parmi les 3 variantes.
- **Études de cas** : `content/work/fr/<slug>.mdx` et `content/work/en/<slug>.mdx`.
  Composants disponibles : `<Architecture />`, `<Todo>…</Todo>`, `<Figure src width height alt caption />`.
- **Placeholders** : tout ce qui est marqué `[À COMPLÉTER : …]` ou `<Todo>` s'affiche en surbrillance.
  Remplacez-les par des faits vérifiés — aucun chiffre n'a été inventé.
- **CV anglais** : déposez le PDF dans `public/cv/` puis renseignez `cv.en` dans `content/site.ts`.

## Déployer sur Vercel

1. Importer le dépôt sur vercel.com (framework détecté automatiquement).
2. Ajouter la variable d'environnement `NEXT_PUBLIC_SITE_URL` (ex. `https://reda-laksyer.vercel.app`),
   utilisée pour les URL canoniques, le sitemap et les images OG.
3. Déployer.

## Accessibilité et performance

- Thème sombre par défaut, bascule clair/sombre mémorisée, sans flash au chargement.
- Lien « Aller au contenu », navigation clavier complète, motifs ARIA `tabs`, contrastes AA.
- `prefers-reduced-motion` respecté (CSS et Framer Motion).
- Polices auto-hébergées, illustrations en SVG, pages statiques.
- Animation du hero en canvas : démarre après le chargement, 30 images/s, pause hors écran.
  Lighthouse (local) : bureau 100 ; mobile simulé 91–96 en performance (accueil), 100 en accessibilité, bonnes pratiques et SEO.
