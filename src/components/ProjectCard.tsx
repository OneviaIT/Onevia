import { Check } from 'lucide-react';
import type { Project } from '../data/site';

export function ProjectCard({ project: p }: { project: Project }) {
  const cls =
    'flex h-full flex-col rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-all hover:border-white/20';
  const body = (
    <>
      {p.image && (
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="mb-5 aspect-video w-full rounded-lg border border-white/10 object-cover"
        />
      )}
      <div className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-zinc-500">
        <span className="text-accent">{p.category}</span>
        {p.year && <span>{p.year}</span>}
      </div>
      <h3 className="mb-1 text-xl font-bold">{p.title}</h3>
      {p.client && <div className="mb-3 text-sm text-zinc-500">{p.client}</div>}
      <p className="text-sm text-zinc-400">{p.summary}</p>
      {p.outcome && (
        <p className="mt-4 flex items-start gap-2 text-sm text-white">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {p.outcome}
        </p>
      )}
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );

  return p.url ? (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}
