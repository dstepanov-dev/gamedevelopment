/**
 * Decorative full-bleed background: ambient blur spheres + faint engineering grid.
 * Purely presentational, pointer-events-none, rendered once behind the page.
 */
export function AmbientBackground(): JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Faint grid overlay, faded toward edges */}
      <div className="absolute inset-0 bg-grid opacity-[0.5] mask-fade-edges" />

      {/* Ambient blur spheres */}
      <div className="absolute -left-32 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand/20 blur-[140px] animate-float-slow" />
      <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-glow/15 blur-[150px] animate-float" />
      <div className="absolute bottom-[-15%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-glow/10 blur-[150px] animate-float-slow" />

      {/* Top vignette to anchor the fixed header */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-base-900/80 to-transparent" />
    </div>
  );
}
