import { useId } from 'react';

type AtomLogoProps = {
  size?: number;
  withWordmark?: boolean;
  animated?: boolean;
  className?: string;
  wordmarkClassName?: string;
};

/** Path to the real OV1 logo image (transparent background). */
const LOGO_SRC = '/brand/onevia-ov1.png';

/** Intrinsic dimensions of the logo artwork. */
const LOGO_W = 357;
const LOGO_H = 200;

/**
 * Onevia "OV1" mark — renders the actual (transparent) logo artwork. A white
 * lightning highlight sweeps diagonally across the mark, clipped exactly to the
 * logo shape through an alpha mask built from the image. The sweep is disabled
 * when `animated` is false.
 */
export function AtomLogo({
  size = 40,
  withWordmark = true,
  animated = true,
  className = '',
  wordmarkClassName = '',
}: AtomLogoProps) {
  const uid = useId().replace(/[:]/g, '');
  const maskId = `ov1-mask-${uid}`;
  const gradId = `ov1-grad-${uid}`;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox={`0 0 ${LOGO_W} ${LOGO_H}`}
        height={size}
        width={size * (LOGO_W / LOGO_H)}
        className="shrink-0 overflow-visible"
        role="img"
        aria-label="Onevia"
        style={{ filter: 'drop-shadow(0 0 6px rgba(239, 35, 60, 0.45))' }}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="0.55" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Alpha mask = the logo shape, so the shine only shows on the mark. */}
          <mask id={maskId} maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
            <image
              href={LOGO_SRC}
              x="0"
              y="0"
              width={LOGO_W}
              height={LOGO_H}
              preserveAspectRatio="xMidYMid meet"
            />
          </mask>
        </defs>

        {/* The logo artwork (transparent background) */}
        <image
          href={LOGO_SRC}
          x="0"
          y="0"
          width={LOGO_W}
          height={LOGO_H}
          preserveAspectRatio="xMidYMid meet"
        />

        {/* White lightning sweep, clipped to the logo shape */}
        <g mask={`url(#${maskId})`}>
          <rect
            x="-120"
            y="-40"
            width="70"
            height="280"
            fill={`url(#${gradId})`}
            transform="skewX(-18)"
          >
            {animated && (
              <animate attributeName="x" from="-140" to="440" dur="2.4s" repeatCount="indefinite" />
            )}
          </rect>
        </g>
      </svg>

      {withWordmark && (
        <span
          className={`inline-flex items-baseline font-display font-extrabold leading-none tracking-tight ${wordmarkClassName}`}
        >
          One
          <span className="relative inline-block text-accent">
            via
            <span
              aria-label="Labs"
              className="absolute left-0 top-full flex w-full justify-between font-display font-medium uppercase tracking-normal text-white"
              style={{ fontSize: '0.42em', marginTop: '0.15em' }}
            >
              {['L', 'A', 'B', 'S'].map((c) => (
                <span key={c} aria-hidden="true">
                  {c}
                </span>
              ))}
            </span>
          </span>
        </span>
      )}
    </span>
  );
}
