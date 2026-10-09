import { useState } from 'react';
import { ArrowRight, MapPin, Clock, Heart, Globe, GraduationCap, Scale } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, ShinyButton, Eyebrow, SectionHeading } from '../components/ui';

type Role = { title: string; team: string; location: string; type: string };

const roles: Role[] = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'AI Engineer (LLM / RAG)', team: 'AI', location: 'Remote', type: 'Full-time' },
  { title: 'Site Reliability Engineer', team: 'SRE', location: 'Remote', type: 'Full-time' },
  { title: 'DevOps Engineer', team: 'DevOps', location: 'Remote', type: 'Full-time' },
  { title: 'QA Automation Engineer', team: 'QA', location: 'Remote', type: 'Contract' },
  { title: 'Partnerships Lead', team: 'Sales', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Remote', type: 'Full-time' },
];

const teams = ['All', 'Engineering', 'AI', 'SRE', 'DevOps', 'QA', 'Sales', 'Design'];

const perks = [
  { icon: Globe, title: 'Remote-first', body: 'Work from anywhere with async-friendly collaboration.' },
  { icon: Heart, title: 'Real ownership', body: 'Accountable work with visible impact on real engagements.' },
  { icon: GraduationCap, title: 'Learning budget', body: 'Grow across the full stack — not just one silo.' },
  { icon: Scale, title: 'Balance', body: 'Sustainable pace and healthy on-call practices.' },
];

export function Careers() {
  useScrollReveal();
  const [team, setTeam] = useState('All');
  const filtered = roles.filter((r) => team === 'All' || r.team === team);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:pt-44">
        <Reveal>
          <Eyebrow>Careers</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-tighter md:text-7xl">
            Build the one platform for <span className="text-accent">everything</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            We’re an emerging, remote-first partner founded in 2025. Join a team that works across the
            whole stack — with real ownership and measurable impact.
          </p>
        </Reveal>
      </section>

      {/* Perks */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 70} className="rounded-xl border border-white/10 bg-zinc-900/40 p-8">
                <Icon className="mb-5 h-7 w-7 text-accent" />
                <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Open roles */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <Reveal>
          <SectionHeading eyebrow="Open roles" title="Find your place" />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {teams.map((t) => (
            <button
              key={t}
              onClick={() => setTeam(t)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                team === t
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
          {filtered.map((r) => (
            <a
              key={r.title}
              href="#"
              className="group flex flex-col gap-3 p-6 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-bold">{r.title}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  <span className="text-accent">{r.team}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {r.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {r.type}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all group-hover:gap-3">
                Apply <ArrowRight className="h-4 w-4 text-accent" />
              </span>
            </a>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-zinc-600">
          Roles are illustrative openings for an early-stage team.
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-4 py-24 text-center">
        <Reveal>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Don’t see your role?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
            We’re always glad to meet thoughtful builders. Tell us how you’d contribute.
          </p>
          <ShinyButton to="/contact">
            Introduce yourself <ArrowRight className="h-4 w-4" />
          </ShinyButton>
        </Reveal>
      </section>
    </>
  );
}
