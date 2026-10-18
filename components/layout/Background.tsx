/** Fond fixe : trame de points, courbes de niveau et halos d'accent. Purement décoratif. */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-dots absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "var(--contour)",
          WebkitMask: "url(/topography.svg) center / cover no-repeat",
          mask: "url(/topography.svg) center / cover no-repeat",
        }}
      />
      <div className="absolute -top-40 right-[-10%] size-[55vw] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-70" />
      <div className="absolute bottom-[-20%] left-[-15%] size-[50vw] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-40" />
    </div>
  );
}
