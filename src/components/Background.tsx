/**
 * Fixed Red Noir background: oxblood→black gradient, two parallax star fields,
 * a central red radial glow, and a faint masked grid. Sits behind all content.
 */
export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-noir to-black" />
      <div className="absolute top-0 left-0 h-px w-px stars-1 animate-star-slow" />
      <div className="absolute top-0 left-0 h-0.5 w-0.5 stars-2 animate-star-fast" />
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute inset-0 bg-grid" />
    </div>
  );
}
