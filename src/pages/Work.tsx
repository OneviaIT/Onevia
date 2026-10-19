import { useState } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, Eyebrow, ShinyButton, GhostButton } from '../components/ui';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/site';
import { useSeo } from '../lib/useSeo';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export function Work() {
  const [cat, setCat] = useState('All');
  useScrollReveal([cat]);
  useSeo({
    title: 'Our Work | Delivered SaaS, AI, QA, DevOps & SRE Projects | Onevia Labs',
    description:
      'Explore projects delivered by Onevia Labs: SaaS platforms, AI and agentic solutions, QA automation, DevOps and SRE engagements built to customer requirements.',
    path: '/our-work',
  });

  const filtered = projects.filter((p) => cat === 'All' || p.category === cat);

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

      {projects.length > 0 && categories.length > 2 && (
        <section className="mx-auto w-full max-w-7xl px-4 pt-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  cat === c
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-white/10 text-zinc-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
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
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <ProjectCard project={p} />
              </Reveal>
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
