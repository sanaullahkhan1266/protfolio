export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center">
      {/* Vignette overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      {/* Intentionally empty to let the 3D cover shine */}
      <div className="sr-only">Fullscreen cover</div>
    </section>
  );
}
