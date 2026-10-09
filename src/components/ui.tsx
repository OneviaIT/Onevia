import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

/* ---------- Shiny conic-border primary CTA ---------- */
type ShinyProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function ShinyButton({ to, href, children, className = '', onClick, type }: ShinyProps) {
  const inner = (
    <span className="conic-inner px-7 py-3.5 text-sm font-bold text-white gap-2">{children}</span>
  );
  const wrapClass = `conic-border inline-flex p-[1.5px] shadow-[0_0_30px_rgba(239,35,60,0.2)] transition-transform active:scale-95 ${className}`;

  if (to) {
    return (
      <Link to={to} className={wrapClass} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={wrapClass} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? 'button'} className={wrapClass} onClick={onClick}>
      {inner}
    </button>
  );
}

/* ---------- Ghost / outline button ---------- */
export function GhostButton({ to, href, children, className = '' }: ShinyProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95 ${className}`;
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  return (
    <a href={href ?? '#'} className={cls}>
      {children}
    </a>
  );
}

/* ---------- Eyebrow label ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-4xl font-bold tracking-tighter md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-zinc-400">{sub}</p>}
    </div>
  );
}

/* ---------- Reveal wrapper (scroll-in animation) ---------- */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  return (
    <Tag className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

/* ---------- Inline arrow link ---------- */
export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 font-medium text-white transition-all hover:gap-3"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
