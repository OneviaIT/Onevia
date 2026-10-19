import { useId, type ReactNode } from 'react';
import type { ArtId } from '../data/posts';

const A = '#ef233c';
const W = 'rgba(255,255,255,0.75)';
const D = 'rgba(255,255,255,0.22)';

function line(x1: number, y1: number, x2: number, y2: number, stroke = D, dash?: string) {
  return (
    <line
      key={`${x1}-${y1}-${x2}-${y2}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth="1.5"
      strokeDasharray={dash}
      strokeLinecap="round"
    />
  );
}

const ring = (n: number, r: number, cx = 200, cy = 120, start = -90) =>
  Array.from({ length: n }, (_, i) => {
    const a = ((start + (360 / n) * i) * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });

const scenes: Record<ArtId, () => ReactNode> = {
  strategy: () => {
    const pts = ring(6, 80);
    return (
      <>
        {pts.map((p) => line(200, 120, p.x, p.y, 'rgba(239,35,60,0.5)'))}
        {pts.map((p) => (
          <circle key={`${p.x}`} cx={p.x} cy={p.y} r="9" fill="#111" stroke={W} strokeWidth="1.5" />
        ))}
        <circle cx="200" cy="120" r="26" fill={A} opacity="0.18" className="animate-pulse" />
        <circle cx="200" cy="120" r="13" fill={A} />
      </>
    );
  },
  rag: () => (
    <>
      {[60, 100, 140].map((y) => (
        <g key={y}>
          <rect x="40" y={y} width="56" height="30" rx="4" fill="#111" stroke={W} strokeWidth="1.5" />
          {line(48, y + 10, 88, y + 10)}
          {line(48, y + 20, 74, y + 20)}
        </g>
      ))}
      {[75, 115, 155].map((y) => line(98, y, 168, 120, 'rgba(239,35,60,0.45)', '4 4'))}
      <circle cx="190" cy="118" r="20" fill="none" stroke={A} strokeWidth="3" />
      {line(205, 133, 220, 150, A)}
      <rect x="260" y="82" width="100" height="62" rx="12" fill="#111" stroke={W} strokeWidth="1.5" />
      {line(274, 102, 344, 102, W)}
      {line(274, 116, 330, 116)}
      {line(274, 130, 318, 130)}
      <path d="M280 144 L272 162 L298 144" fill="#111" stroke={W} strokeWidth="1.5" />
    </>
  ),
  slo: () => (
    <>
      {line(50, 190, 350, 190, W)}
      {line(50, 40, 50, 190, W)}
      <path
        d="M50 150 L90 130 L130 140 L170 100 L210 115 L250 85 L290 95 L350 60 L350 190 L50 190 Z"
        fill="rgba(239,35,60,0.12)"
      />
      <polyline
        points="50,150 90,130 130,140 170,100 210,115 250,85 290,95 350,60"
        fill="none"
        stroke={A}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {line(50, 70, 350, 70, W, '6 6')}
      <circle cx="350" cy="60" r="6" fill={A} className="animate-pulse" />
    </>
  ),
  cicd: () => (
    <>
      {[30, 125, 220, 315].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="90"
            width="60"
            height="50"
            rx="10"
            fill="#111"
            stroke={i === 3 ? A : W}
            strokeWidth="1.5"
          />
          {i === 3 ? (
            <path d={`M${x + 18} 116 l9 9 l17 -19`} fill="none" stroke={A} strokeWidth="3" strokeLinecap="round" />
          ) : (
            <circle cx={x + 30} cy="115" r="8" fill="none" stroke={W} strokeWidth="1.5" />
          )}
          {i < 3 && line(x + 62, 115, x + 92, 115, A)}
        </g>
      ))}
      <path d="M345 150 C345 200 55 200 55 150" fill="none" stroke={D} strokeWidth="1.5" strokeDasharray="5 5" />
      <path d="M50 158 L55 148 L62 156" fill="none" stroke={D} strokeWidth="1.5" />
    </>
  ),
  legacy: () => (
    <>
      <rect x="40" y="70" width="110" height="100" rx="8" fill="#111" stroke={D} strokeWidth="1.5" strokeDasharray="6 4" />
      {line(60, 100, 130, 100)}
      {line(60, 120, 112, 120)}
      {line(60, 140, 125, 140)}
      {line(160, 120, 215, 120, A)}
      <path d="M208 112 L220 120 L208 128" fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={240 + (i % 2) * 58}
          y={70 + Math.floor(i / 2) * 54}
          width="50"
          height="44"
          rx="8"
          fill={i === 0 ? 'rgba(239,35,60,0.25)' : '#111'}
          stroke={i === 0 ? A : W}
          strokeWidth="1.5"
        />
      ))}
    </>
  ),
  cloud: () => (
    <>
      <path
        d="M110 120 C90 120 80 100 98 88 C102 66 138 60 150 80 C170 62 205 72 205 98 C230 98 236 128 212 128 L110 128 Z"
        fill="#111"
        stroke={W}
        strokeWidth="1.5"
        transform="translate(30 -10)"
      />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={230 + i * 28}
          y={170 - (4 - i) * 22}
          width="18"
          height={(4 - i) * 22}
          rx="3"
          fill={i === 3 ? A : 'rgba(255,255,255,0.18)'}
        />
      ))}
      <circle cx="90" cy="170" r="16" fill="none" stroke={A} strokeWidth="2" />
      <text x="90" y="176" textAnchor="middle" fontSize="16" fontWeight="700" fill={A}>
        $
      </text>
      {line(120, 170, 215, 170, D, '5 5')}
    </>
  ),
  tenant: () => (
    <>
      {[2, 1, 0].map((i) => (
        <g key={i} transform={`translate(${i * 26} ${-i * 20})`}>
          <rect
            x="90"
            y="110"
            width="170"
            height="80"
            rx="12"
            fill="#0d0d0d"
            stroke={i === 0 ? A : W}
            strokeWidth="1.5"
          />
          <circle cx="116" cy="136" r="9" fill={i === 0 ? A : D} />
          {line(136, 132, 220, 132, i === 0 ? W : D)}
          {line(136, 146, 190, 146, D)}
          {line(106, 170, 244, 170, D)}
        </g>
      ))}
    </>
  ),
  customsaas: () => (
    <>
      <rect x="55" y="40" width="290" height="160" rx="12" fill="#0d0d0d" stroke={W} strokeWidth="1.5" />
      {line(55, 66, 345, 66, D)}
      {[72, 88, 104].map((x) => (
        <circle key={x} cx={x} cy="53" r="4" fill={x === 72 ? A : D} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={75 + i * 88}
            y="88"
            width="76"
            height="92"
            rx="10"
            fill={i === 1 ? 'rgba(239,35,60,0.18)' : '#111'}
            stroke={i === 1 ? A : D}
            strokeWidth="1.5"
          />
          {line(88 + i * 88, 108, 138 + i * 88, 108, i === 1 ? W : D)}
          {line(88 + i * 88, 126, 126 + i * 88, 126, D)}
          {line(88 + i * 88, 140, 132 + i * 88, 140, D)}
        </g>
      ))}
    </>
  ),
  agentic: () => {
    const pts = ring(5, 82);
    return (
      <>
        {pts.map((p) => line(200, 120, p.x, p.y, 'rgba(239,35,60,0.5)', '5 4'))}
        {pts.map((p, i) => (
          <rect
            key={`${p.x}`}
            x={p.x - 13}
            y={p.y - 13}
            width="26"
            height="26"
            rx={i % 2 ? 13 : 6}
            fill="#111"
            stroke={W}
            strokeWidth="1.5"
          />
        ))}
        <circle cx="200" cy="120" r="30" fill="rgba(239,35,60,0.15)" className="animate-pulse" />
        <circle cx="200" cy="120" r="19" fill="#111" stroke={A} strokeWidth="2" />
        <circle cx="193" cy="116" r="3" fill={W} />
        <circle cx="207" cy="116" r="3" fill={W} />
        {line(192, 127, 208, 127, W)}
      </>
    );
  },
  safeai: () => (
    <>
      <rect x="60" y="60" width="150" height="120" rx="12" fill="#0d0d0d" stroke={D} strokeWidth="1.5" />
      {line(76, 90, 190, 90)}
      {line(76, 110, 160, 110)}
      {line(76, 130, 176, 130)}
      <path
        d="M270 52 L324 72 V120 C324 154 300 172 270 184 C240 172 216 154 216 120 V72 Z"
        fill="rgba(239,35,60,0.14)"
        stroke={A}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M248 120 l16 16 l28 -32" fill="none" stroke={W} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M330 48 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" fill={A} className="animate-pulse" />
    </>
  ),
  qa: () => (
    <>
      <rect x="95" y="44" width="210" height="152" rx="12" fill="#0d0d0d" stroke={W} strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="116" y={70 + i * 42} width="22" height="22" rx="5" fill="none" stroke={i < 2 ? A : D} strokeWidth="2" />
          {i < 2 && (
            <path
              d={`M120 ${81 + i * 42} l5 5 l9 -11`}
              fill="none"
              stroke={A}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}
          {line(152, 81 + i * 42, 270 - i * 28, 81 + i * 42, i < 2 ? W : D)}
        </g>
      ))}
      <circle cx="318" cy="64" r="22" fill="#111" stroke={A} strokeWidth="2" />
      {line(307, 53, 329, 75, A)}
      {line(329, 53, 307, 75, A)}
    </>
  ),
  consult: () => (
    <>
      <path d="M60 70 H190 a12 12 0 0 1 12 12 V130 a12 12 0 0 1 -12 12 H110 L84 164 V142 H60 a12 12 0 0 1 -12 -12 V82 a12 12 0 0 1 12 -12 Z" fill="#111" stroke={W} strokeWidth="1.5" />
      {line(70, 96, 176, 96)}
      {line(70, 112, 150, 112)}
      <path d="M340 100 H230 a12 12 0 0 0 -12 12 V160 a12 12 0 0 0 12 12 H300 L326 194 V172 H340 a12 12 0 0 0 12 -12 V112 a12 12 0 0 0 -12 -12 Z" fill="rgba(239,35,60,0.14)" stroke={A} strokeWidth="1.5" />
      <circle cx="285" cy="136" r="16" fill="none" stroke={W} strokeWidth="2" />
      {line(278, 154, 292, 154, W)}
      <circle cx="285" cy="136" r="26" fill={A} opacity="0.12" className="animate-pulse" />
    </>
  ),
};

type Props = {
  art: ArtId;
  className?: string;
};

export function PostCover({ art, className = '' }: Props) {
  const uid = useId().replace(/:/g, '');
  const gridId = `cover-grid-${uid}`;
  const glowId = `cover-glow-${uid}`;

  return (
    <svg
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid slice"
      className={`block h-full w-full ${className}`}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <radialGradient id={glowId} cx="70%" cy="20%" r="80%">
          <stop offset="0%" stopColor="rgba(239,35,60,0.35)" />
          <stop offset="100%" stopColor="rgba(239,35,60,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="#070707" />
      <rect width="400" height="240" fill={`url(#${glowId})`} />
      <rect width="400" height="240" fill={`url(#${gridId})`} />
      {scenes[art]()}
    </svg>
  );
}
