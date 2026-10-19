import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Sparkles,
  Code2,
  PenTool,
  Clapperboard,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, Eyebrow, ShinyButton, GhostButton } from '../components/ui';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/site';
import { useSeo } from '../lib/useSeo';

const groups: { name: string; icon: LucideIcon }[] = [
  { name: 'All', icon: LayoutGrid },
  { name: 'AI & Agents', icon: Sparkles },
  { name: 'Software & Web', icon: Code2 },
  { name: 'UI/UX Design', icon: PenTool },
  { name: '3D & Animation', icon: Clapperboard },
];

export function Work() {
  useScrollReveal();
  const [cat, setCat] = useState('All');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const visibleGroups = groups.filter(
    (g) => g.name === 'All' || projects.some((p) => p.category === g.name),
  );
  const filtered = projects.filter((p) => cat === 'All' || p.category === cat);

  useLayoutEffect(() => {
    const el = tabRefs.current[cat];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [cat]);

  useEffect(() => {
    const onResize = () => {
      const el = tabRefs.current[cat];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [cat]);
  useSeo({
    title: 'Our Work | Delivered SaaS, AI, QA, DevOps & SRE Projects | Onevia Labs',
    description:
      'Explore projects delivered by Onevia Labs: SaaS platforms, AI and agentic solutions, QA automation, DevOps and SRE engagements built to customer requirements.',
    path: '/our-work',
  });

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-36 md:pt-44">
        <Reveal>
          <Eyebrow>Our work</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-tighter md:text-7xl">
            Projects we have <span className="text-accent">delivered</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            SaaS platforms, AI and agentic solutions, QA automation, DevOps and SRE engagements, built
            to our customers&apos; requirements and operated with one accountable team.
          </p>
        </Reveal>
      </section>

      {projects.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 pt-4">
          <div className="max-w-full overflow-x-auto pb-2">
            <div className="relative inline-flex rounded-full border border-white/10 bg-zinc-900/60 p-1.5 backdrop-blur">
              <span
                aria-hidden
                className="absolute bottom-1.5 top-1.5 rounded-full bg-accent shadow-[0_0_30px_-4px_rgba(239,35,60,0.8)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ left: pill.left, width: pill.width }}
              />
              {visibleGroups.map(({ name, icon: Icon }) => {
                const count =
                  name === 'All' ? projects.length : projects.filter((p) => p.category === name).length;
                const active = cat === name;
                return (
                  <button
                    key={name}
                    ref={(el) => {
                      tabRefs.current[name] = el;
                    }}
                    onClick={() => setCat(name)}
                    aria-pressed={active}
                    className={`relative z-10 flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                      active ? 'text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-transform duration-500 ${active ? 'rotate-[360deg] scale-110' : ''}`} />
                    {name}
                    <span
                      className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                        active ? 'bg-black/25' : 'bg-white/10'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        {projects.length === 0 ? (
          <Reveal className="rounded-xl border border-dashed border-white/15 bg-zinc-900/30 p-12 text-center">
            <Briefcase className="mx-auto mb-4 h-8 w-8 text-accent" />
            <h2 className="mb-2 text-2xl font-bold">Case studies coming soon</h2>
            <p className="mx-auto max-w-md text-zinc-400">
              We are preparing case studies for our delivered projects. Get in touch and we will share
              relevant examples for your use case.
            </p>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <div
                key={`${cat}-${p.title}`}
                className="project-in"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-24 text-center">
        <Reveal>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
            Tell us your requirements. We build SaaS, AI, QA, DevOps and SRE solutions to order, and
            can also provide consultation or expert resource persons.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShinyButton to="/contact">
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </ShinyButton>
            <GhostButton to="/services">Explore services</GhostButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
