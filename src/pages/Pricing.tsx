import { useState } from 'react';
import { ArrowRight, Check, ChevronRight, Minus } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, ShinyButton, Eyebrow } from '../components/ui';
import { Link } from 'react-router-dom';
import { tiers, faqs } from '../data/site';

const matrix: { feature: string; project: boolean; partnership: boolean; enterprise: boolean }[] = [
  { feature: 'Discovery & delivery plan', project: true, partnership: true, enterprise: true },
  { feature: 'Single or combined services', project: true, partnership: true, enterprise: true },
  { feature: 'Dedicated accountable team', project: false, partnership: true, enterprise: true },
  { feature: 'Shared context across services', project: false, partnership: true, enterprise: true },
  { feature: 'Proactive reliability & support', project: false, partnership: true, enterprise: true },
  { feature: 'Custom SLAs & compliance', project: false, partnership: false, enterprise: true },
  { feature: 'Security & governance reviews', project: false, partnership: false, enterprise: true },
  { feature: 'Executive reporting', project: false, partnership: false, enterprise: true },
];

function Cell({ on }: { on: boolean }) {
  return on ? (
    <Check className="mx-auto h-5 w-5 text-accent" />
  ) : (
    <Minus className="mx-auto h-5 w-5 text-zinc-700" />
  );
}

export function Pricing() {
  useScrollReveal();
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-36 text-center md:pt-44">
        <Reveal>
          <Eyebrow>Engagement models</Eyebrow>
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-extrabold tracking-tighter md:text-7xl">
            Simple models for the <span className="text-accent">whole stack</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Flexible, modular engagements scoped per project or offered as an ongoing service. Every
            engagement begins with a discovery call.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1 font-mono text-xs uppercase tracking-widest">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-2 transition-colors ${!annual ? 'bg-accent text-white' : 'text-zinc-400'}`}
            >
              Per project
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-2 transition-colors ${annual ? 'bg-accent text-white' : 'text-zinc-400'}`}
            >
              Ongoing
            </button>
          </div>
        </Reveal>
      </section>

      {/* Tiers */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className={`relative flex flex-col rounded-xl p-8 ${
                t.featured
                  ? 'scale-[1.03] border-2 border-accent bg-zinc-900/60 shadow-[0_0_40px_rgba(239,35,60,0.15)]'
                  : 'border border-white/10 bg-zinc-900/40'
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="mt-2 h-10 text-sm text-zinc-400">{t.blurb}</p>
              <div className="mb-8 mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold">{t.price}</span>
                {t.cadence && <span className="text-sm text-zinc-500">{t.cadence}</span>}
              </div>
              <ul className="mb-10 flex-1 space-y-4">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              {t.featured ? (
                <ShinyButton to="/contact" className="w-full">
                  {t.cta}
                </ShinyButton>
              ) : (
                <Link
                  to="/contact"
                  className="w-full rounded-full border border-white/10 py-3 text-center text-sm font-bold uppercase tracking-wider transition-all hover:bg-white/5"
                >
                  {t.cta}
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16">
        <Reveal>
          <h2 className="mb-10 text-center font-display text-3xl font-bold tracking-tight md:text-4xl">
            Compare models
          </h2>
        </Reveal>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02] font-mono text-xs uppercase tracking-widest text-zinc-400">
                <th className="p-4 font-medium">Feature</th>
                <th className="p-4 text-center font-medium">Project</th>
                <th className="p-4 text-center font-medium text-accent">Partnership</th>
                <th className="p-4 text-center font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.feature} className="border-b border-white/5 last:border-0">
                  <td className="p-4 text-zinc-300">{row.feature}</td>
                  <td className="p-4">
                    <Cell on={row.project} />
                  </td>
                  <td className="p-4">
                    <Cell on={row.partnership} />
                  </td>
                  <td className="p-4">
                    <Cell on={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Pricing questions
          </h2>
        </Reveal>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {f.q}
                <ChevronRight className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-4 py-24 text-center">
        <Reveal>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Get a transparent proposal
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
            After a short discovery call, you’ll receive a clear scope, plan, and price — before any
            build work begins.
          </p>
          <ShinyButton to="/contact">
            Book a discovery call <ArrowRight className="h-4 w-4" />
          </ShinyButton>
        </Reveal>
      </section>
    </>
  );
}
