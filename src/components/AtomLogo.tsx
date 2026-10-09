type AtomLogoProps = {
  size?: number;
  withWordmark?: boolean;
  animated?: boolean;
  className?: string;
  wordmarkClassName?: string;
};

/**
 * Onevia "Saturn" mark — a glowing red planet with a fixed tilted ring and a
 * single moon that orbits around it, passing behind and in front of the planet
 * (real CSS 3D z-sorting). The planet gently breathes. Animation is CSS-driven
 * and automatically disabled under `prefers-reduced-motion`.
 */
export function AtomLogo({
  size = 40,
  withWordmark = true,
  animated = true,
  className = '',
  wordmarkClassName = '',
}: AtomLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="saturn shrink-0"
        style={{ width: size, height: size }}
        role="img"
        aria-label="Onevia"
      >
        <span className="saturn-glow" />
        <span className="saturn-3d">
          <span className="saturn-ring">
            <span className="saturn-ring-inner" />
          </span>
          <span className="saturn-planet" />
          <span className="saturn-orbit" style={animated ? undefined : { animation: 'none' }}>
            <span className="saturn-moon" />
          </span>
        </span>
      </span>

      {withWordmark && (
        <span className={`font-display font-extrabold tracking-tight ${wordmarkClassName}`}>
          One<span className="text-accent">via</span>
        </span>
      )}
    </span>
  );
}
