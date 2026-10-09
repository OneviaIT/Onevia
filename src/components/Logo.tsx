type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
};

/**
 * Onevia "orbit / convergence" mark — concentric orbital rings with service
 * nodes converging into one glowing core ("one via"). Rendered as inline SVG
 * so it stays crisp at any size.
 */
export function Logo({
  size = 32,
  withWordmark = true,
  className = '',
  wordmarkClassName = '',
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        role="img"
        aria-label="Onevia"
        className="shrink-0"
      >
        <circle cx="50" cy="50" r="45" stroke="#ef233c" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="50" cy="50" r="35" stroke="#ef233c" strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="50" cy="50" r="25" stroke="#ef233c" strokeOpacity="0.5" strokeWidth="1" />
        <circle cx="85" cy="50" r="3" fill="#ef233c" fillOpacity="0.6" />
        <circle cx="15" cy="50" r="3" fill="#ef233c" fillOpacity="0.4" />
        <circle cx="50" cy="15" r="3" fill="#ef233c" fillOpacity="0.85" />
        <path d="M50 50 L50 15" stroke="#ef233c" strokeWidth="1" strokeOpacity="0.4" />
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="#ef233c"
          style={{ filter: 'drop-shadow(0 0 6px rgba(239,35,60,0.9))' }}
        />
      </svg>
      {withWordmark && (
        <span className={`font-display font-bold tracking-tight ${wordmarkClassName}`}>Onevia</span>
      )}
    </span>
  );
}
