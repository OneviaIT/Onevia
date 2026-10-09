import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, ShinyButton, GhostButton, Eyebrow } from '../components/ui';
import { TerminalSection } from '../components/TerminalSection';
import { getService, services, faqs } from '../data/site';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;
  useScrollReveal([slug]);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:pt-44">
        <Reveal>
          <nav className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-accent">{service.abbr}</span>
          </nav>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-3">
                <Icon className={`h-7 w-7 ${service.accent}`} />
              </div>
              <Eyebrow>{service.tagline}</Eyebrow>
              <h1 className="font-display text-4xl font-extrabold tracking-tighter md:text-6xl">
                {service.name}
              </h1>
              <p className="mt-6 text-lg text-zinc-400">{service.description}</p>
            </div>
            <div className="flex shrink-0 gap-3">
              <ShinyButton to="/contact">
                Get started <ArrowRight className="h-4 w-4" />
              </ShinyButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Capabilities
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c, i) => (
            <Reveal
              key={c}
              delay={(i % 3) * 60}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/40 p-5"
            >
              <Check className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-zinc-200">{c}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {service.outcomes.map((o, i) => (
            <Reveal key={o} delay={i * 80} className="rounded-xl border border-white/10 bg-zinc-900/30 p-8">
              <div className="mb-3 font-display text-4xl font-extrabold text-accent opacity-40">
                0{i + 1}
              </div>
              <p className="text-lg font-semibold">{o}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Terminal snippet */}
      <TerminalSection
        title={`ONEVIA · ${service.abbr.toUpperCase()}`}
        lines={[
          { kind: 'cmd', text: `onevia ${service.slug} --provision` },
          { kind: 'info', text: '[PROCESS] Applying best-practice blueprint...' },
          { kind: 'ok', text: `[OK] ${service.capabilities[0]}` },
          { kind: 'ok', text: `[OK] ${service.capabilities[1]}` },
          { kind: 'ok', text: `[OK] ${service.capabilities[2]}` },
          { kind: 'progress', label: 'Hardening & tests', percent: 94 },
        ]}
      />

      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 py-24">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Frequently asked
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

      {/* Other services */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-24">
        <h2 className="mb-8 font-display text-2xl font-bold">Combine with</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {others.map((s) => {
            const OIcon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/40 p-6 transition-all hover:border-white/20"
              >
                <OIcon className={`h-6 w-6 ${s.accent}`} />
                <div className="flex-1">
                  <div className="font-bold">{s.abbr}</div>
                  <div className="text-sm text-zinc-500">{s.short}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-32 text-center">
        <Reveal>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Let’s scope your <span className="text-accent">{service.abbr}</span> engagement
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShinyButton to="/contact">
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </ShinyButton>
            <GhostButton to="/pricing">See engagement models</GhostButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
