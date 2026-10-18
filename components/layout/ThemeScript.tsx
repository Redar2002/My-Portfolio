"use client";

import { useLayoutEffect } from "react";

// Applique le thème enregistré avant le premier rendu (évite le flash). Sombre par défaut.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){}`;

let hydrated = false;

/**
 * Le script n'est utile qu'au premier chargement : il est rendu côté serveur et réutilisé
 * à l'hydratation. Lors des navigations suivantes (ex. FR → EN), React ne doit pas recréer
 * de <script> côté client (avertissement React 19) : on ne rend alors plus rien, et l'effet
 * ci-dessous réapplique le thème, car React réinitialise les attributs de <html>.
 */
export function ThemeScript() {
  useLayoutEffect(() => {
    hydrated = true;
    try {
      document.documentElement.dataset.theme = localStorage.getItem("theme") === "light" ? "light" : "dark";
    } catch {}
  }, []);
  if (hydrated) return null;
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
