import { Check, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/site';

export function ProjectCard({ project: p }: { project: Project }) {
  const cls =
    'project-card group flex h-full flex-col rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_50px_-25px_rgba(239,35,60,0.45)]';
  const body = (
    <>
      {p.video ? (
        <div className="mb-5 aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black">
          <video
            src={p.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={p.title}
            className="project-img h-full w-full object-cover transition-transform duration-700"
          />
        </div>
      ) : p.image && (
        <div className="mb-5 aspect-video w-full overflow-hidden rounded-lg border border-white/10">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="project-img h-full w-full object-cover transition-transform duration-700"
          />
        </div>
      )}
      {p.year && (
        <div className="mb-3 text-right font-mono text-xs uppercase tracking-widest text-zinc-500">
          {p.year}
        </div>
      )}
      <h3 className="mb-1 flex items-center justify-between gap-2 text-xl font-bold">
        {p.title}
        {p.url && (
          <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        )}
      </h3>
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
