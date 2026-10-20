import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, ShinyButton, GhostButton, Eyebrow, SectionHeading } from '../components/ui';
import { company, values, engagement } from '../data/site';
import { useSeo } from '../lib/useSeo';

const timeline = [
  { year: '2026', title: 'Onevia Labs founded', body: 'Started with one conviction: companies need one accountable partner, not a dozen vendors.' },
  { year: '2026', title: 'Service catalog defined', body: 'Six core “as a Service” offerings plus custom engineering and cloud, built to combine.' },
  { year: 'Now', title: 'Taking on partners', body: 'Working with early teams to build, modernize, scale, and operate software end to end.' },
  { year: 'Next', title: 'Published case studies', body: 'Real outcomes from real engagements, shared as our partnerships mature.' },
];

export function About() {
  useScrollReveal();
  useSeo({
    title: 'About Onevia Labs | One Accountable Technology Partner in Sri Lanka',
    description:
      'Onevia Labs is a Sri Lanka based technology partner, consolidating software, AI, cloud, QA, DevOps and SRE into one accountable team so you can build, scale and operate without juggling vendors.',
    path: '/about',
  });

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:pt-44">
        <Reveal>
          <Eyebrow>About Onevia Labs</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tighter md:text-7xl">
            One company. Every service. <span className="text-accent">One via.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            {company.name} is a single, consolidated technology partner delivering the full spectrum
            of modern software and infrastructure capabilities “as a service”, so you can build,
            scale, and innovate without stitching together many specialized vendors.
          </p>
        </Reveal>
      </section>

      {/* Manifesto */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Why we converge every layer
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-4 text-lg text-zinc-400">
            <p>
              Most teams juggle separate vendors for engineering, AI, cloud, QA, and operations.
              Context gets lost in the gaps, accountability blurs, and coordination becomes the job.
            </p>
            <p>
              Onevia Labs acts as <span className="text-white">one partner</span> across the whole
              lifecycle. Engage a single service or combine several into one integrated solution with
              shared context, and scale the relationship up or down as you grow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <Reveal>
          <SectionHeading eyebrow="Our story" title="An emerging partner, built deliberately" />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 80} className="relative rounded-xl border border-white/10 bg-zinc-900/40 p-6">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">{t.year}</div>
              <h3 className="mb-2 text-lg font-bold">{t.title}</h3>
              <p className="text-sm text-zinc-400">{t.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="w-full border-y border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <SectionHeading eyebrow="How we work" title="Principles over hype" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="rounded-xl border border-white/10 bg-black/40 p-8">
                <h3 className="mb-3 font-display text-xl font-bold text-accent">{v.title}</h3>
                <p className="text-sm text-zinc-400">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement recap */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24">
        <Reveal>
          <SectionHeading eyebrow="How we engage" title="Discovery first, always" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {engagement.map((s, i) => (
            <Reveal key={s.n} delay={i * 70} className="flex flex-col">
              <span className="mb-4 font-display text-4xl font-extrabold text-accent opacity-40">{s.n}</span>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-zinc-400">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-32 text-center">
        <Reveal>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Build with one partner
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShinyButton to="/contact">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </ShinyButton>
            {/* <GhostButton to="/careers">Join the team</GhostButton> */}
          </div>
        </Reveal>
      </section>
    </>
  );
}
