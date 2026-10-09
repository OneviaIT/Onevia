import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, SectionHeading, ShinyButton, Eyebrow } from '../components/ui';
import { services } from '../data/site';

export function Services() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:pt-44">
        <Reveal>
          <Eyebrow>Service catalog</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-tighter md:text-7xl">
            One provider for the <span className="text-accent">entire stack</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Six core “as a Service” offerings plus custom engineering and cloud. Engage a single
            service or combine several into one integrated solution with shared context.
          </p>
        </Reveal>
      </section>

      {/* Service grid */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-8 transition-all hover:border-white/20"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,35,60,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Icon className={`mb-5 h-7 w-7 ${s.accent}`} />
                  <h3 className="text-xl font-bold">{s.abbr}</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-500">{s.name}</p>
                  <p className="mt-3 flex-1 text-sm text-zinc-400">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-all group-hover:gap-3">
                    Explore <ArrowRight className="h-4 w-4 text-accent" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="w-full border-y border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why one partner"
              title={
                <>
                  Stop stitching <span className="text-accent">vendors</span> together
                </>
              }
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal className="rounded-xl border border-white/10 bg-black/40 p-8">
              <h3 className="mb-6 font-display text-2xl font-bold text-zinc-300">Many vendors</h3>
              <ul className="space-y-4 text-zinc-400">
                {[
                  'Fragmented accountability',
                  'Duplicated context & handoffs',
                  'Inconsistent quality & security',
                  'Slow coordination overhead',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <X className="h-5 w-5 shrink-0 text-zinc-600" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              delay={100}
              className="rounded-xl border-2 border-accent bg-zinc-900/50 p-8 shadow-[0_0_40px_rgba(239,35,60,0.12)]"
            >
              <h3 className="mb-6 font-display text-2xl font-bold">Onevia</h3>
              <ul className="space-y-4 text-white">
                {[
                  'One accountable partner',
                  'Shared context across services',
                  'Consistent standards everywhere',
                  'Modular — scale up or down',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-accent" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-4 py-28 text-center">
        <Reveal>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
            Book a short discovery call and we’ll propose the right mix of services for your goals.
          </p>
          <ShinyButton to="/contact">
            Book a discovery call <ArrowRight className="h-4 w-4" />
          </ShinyButton>
        </Reveal>
      </section>
    </>
  );
}
