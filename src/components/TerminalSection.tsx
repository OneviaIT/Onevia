import { useEffect, useRef, useState } from 'react';

const ASCII = ` ██████╗ ███╗   ██╗███████╗██╗   ██╗██╗ █████╗
██╔═══██╗████╗  ██║██╔════╝██║   ██║██║██╔══██╗
██║   ██║██╔██╗ ██║█████╗  ██║   ██║██║███████║
██║   ██║██║╚██╗██║██╔══╝  ╚██╗ ██╔╝██║██╔══██║
╚██████╔╝██║ ╚████║███████╗ ╚████╔╝ ██║██║  ██║
 ╚═════╝ ╚═╝  ╚═══╝╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═╝`;

type Line =
  | { kind: 'cmd'; text: string }
  | { kind: 'info'; text: string }
  | { kind: 'ok'; text: string }
  | { kind: 'progress'; label: string; percent: number };

const DEFAULT_LINES: Line[] = [
  { kind: 'cmd', text: 'onevia engage --stack full --mode partnership' },
  { kind: 'info', text: '[PROCESS] Initializing engagement...' },
  { kind: 'ok', text: '[OK] Discovery call scheduled' },
  { kind: 'ok', text: '[OK] SaaS + BaaS scoped' },
  { kind: 'ok', text: '[OK] AIaaS integration planned' },
  { kind: 'progress', label: 'Provisioning SREaaS', percent: 82 },
];

function useTypewriter(text: string, start: boolean, speed = 38) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!start) return;
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, start, speed]);
  return out;
}

function ProgressBar({ percent, animate }: { percent: number; animate: boolean }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let raf = 0;
    const startT = performance.now();
    const tick = (t: number) => {
      const progress = Math.min(1, (t - startT) / 1400);
      setP(Math.round(progress * percent));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [percent, animate]);
  const filled = Math.round((p / 100) * 24);
  return (
    <span className="tracking-tighter">
      [{'|'.repeat(filled)}
      {'.'.repeat(24 - filled)} {p}%]
    </span>
  );
}

type Props = {
  title?: string;
  lines?: Line[];
};

export function TerminalSection({ title = 'ONEVIA ENGAGEMENT ENGINE v1.0', lines = DEFAULT_LINES }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const cmdLine = lines.find((l) => l.kind === 'cmd') as Extract<Line, { kind: 'cmd' }> | undefined;
  const typed = useTypewriter(cmdLine?.text ?? '', active);
  const typingDone = typed.length === (cmdLine?.text.length ?? 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full bg-black px-4 py-24" aria-label="Terminal demonstration">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div
          className="scanlines relative flex min-h-[460px] flex-col border border-terminal-green/30 p-6 font-mono text-terminal-green terminal-glow"
          style={{ background: '#0a0a0a' }}
        >
          <div className="mb-6 border-b border-terminal-green/20 pb-2 text-sm">
            +--- {title} ---+
          </div>

          <pre className="mb-8 overflow-x-auto text-[10px] leading-[1.15] opacity-80 sm:text-xs">
            {ASCII}
          </pre>

          <div className="flex-1 space-y-2 text-sm">
            <div className="flex flex-wrap gap-2">
              <span className="opacity-50">onevia@cloud:~$</span>
              <span>{typed}</span>
              {!typingDone && <span className="animate-blink">█</span>}
            </div>

            {typingDone &&
              lines
                .filter((l) => l.kind !== 'cmd')
                .map((l, i) => {
                  if (l.kind === 'info')
                    return (
                      <div key={i} className="text-white/60">
                        {l.text}
                      </div>
                    );
                  if (l.kind === 'ok') return <div key={i}>{l.text}</div>;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <span>{l.label}</span>
                      <ProgressBar percent={l.percent} animate={active} />
                    </div>
                  );
                })}

            {typingDone && (
              <div className="flex gap-2">
                <span className="opacity-50">onevia@cloud:~$</span>
                <span className="animate-blink">█</span>
              </div>
            )}
          </div>

          <div className="mt-10">
            <button className="border border-terminal-green px-6 py-3 uppercase transition-colors hover:bg-terminal-green hover:text-black">
              [ INITIATE ENGAGEMENT ]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
