import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, Star } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { ShinyButton, GhostButton, Reveal, SectionHeading, ArrowLink } from '../components/ui';
import { TerminalSection } from '../components/TerminalSection';
import { services, engagement, integrations, stats, company } from '../data/site';

export function Home() {
  useScrollReveal();

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-32">
        <div className="absolute inset-0 -z-[1]" aria-hidden="true">
          <video
            className="h-full w-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/hero-convergence.jpg"
          >
            <source src="/media/hero-convergence.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
          <div className="absolute inset-0 bg-accent/5" />
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
              Onevia · one partner, every service
            </span>
          </div>

          <h1 className="animate-fade-in-up mb-8 font-display text-6xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
            <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              <span className="relative inline-block text-accent">
                Everything
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 15C100 5 200 5 295 15"
                    stroke="#ef233c"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="swish-path"
                  />
                </svg>
              </span>{' '}
              as a Service.
            </span>
          </h1>

          <p className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
            From SaaS and backends to AI, QA, DevOps, SRE, cloud and custom engineering — Onevia is
            one accountable partner across the entire software lifecycle: build, scale, and operate.
          </p>

          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShinyButton to="/contact">
              Start building <ArrowRight className="h-4 w-4" />
            </ShinyButton>
            <GhostButton to="/services">Explore services</GhostButton>
          </div>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 md:text-sm">
            Everything as a Service · One Partner · <span className="text-accent">Infinite Possibilities</span>
          </p>
        </div>
      </section>

      {/* ---------------- LOGO / INTEGRATION STRIP ---------------- */}
      <section className="w-full border-y border-white/5 px-4 py-14">
        <p className="mb-10 text-center font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          We build and operate on the tools you already trust
        </p>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {integrations.map((name) => (
            <span
              key={name}
              className="font-display text-lg font-semibold text-zinc-600 transition-colors hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- SERVICES BENTO ---------------- */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Service catalog"
            title={
              <>
                One provider for the <span className="text-accent">entire stack</span>
              </>
            }
            sub="Eight ways to engage — as a single service or combined into one integrated solution with shared context."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const large = i === 0;
            return (
              <Reveal
                key={s.slug}
                delay={(i % 3) * 80}
                className={large ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-8 transition-all hover:border-white/20"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,35,60,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Icon className={`mb-5 h-7 w-7 ${s.accent}`} />
                  <h3 className={`font-bold ${large ? 'text-3xl' : 'text-xl'} mb-2`}>
                    {large ? `${s.abbr} — ${s.tagline}` : s.abbr}
                  </h3>
                  <p className={`text-zinc-400 ${large ? 'max-w-md text-lg' : 'text-sm'}`}>
                    {large ? s.description : s.short}
                  </p>
                  <span className="mt-auto pt-6">
                    <ArrowRight className="h-4 w-4 text-accent opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </span>
                  {large && (
                    <Icon className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 opacity-[0.04]" />
                  )}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------- TERMINAL ---------------- */}
      <TerminalSection />

      {/* ---------------- ENGAGEMENT MODEL ---------------- */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How we engage"
            title={
              <>
                Modular engagements, <span className="text-accent">one shared context</span>
              </>
            }
            sub="Every engagement starts with a short discovery conversation — then a clear scope, architecture, and delivery plan before any build work begins."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
          {engagement.map((step, i) => (
            <Reveal key={step.n} delay={i * 80} className="flex flex-col">
              <span className="mb-5 font-display text-5xl font-extrabold text-accent opacity-40">
                {step.n}
              </span>
              <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
              <p className="text-zinc-400">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- ONE PARTNER VS MANY VENDORS ---------------- */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="rounded-xl border border-white/10 bg-zinc-900/30 p-10">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              The old way
            </span>
            <h3 className="mb-8 mt-3 font-display text-3xl font-bold">A dozen vendors</h3>
            <ul className="space-y-4 text-zinc-400">
              {[
                'Separate contracts, bills, and SLAs',
                'Context lost between specialists',
                'Finger-pointing when things break',
                'Hiring specialist teams in-house',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <X className="h-5 w-5 shrink-0 text-zinc-600" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={100}
            className="rounded-xl border-2 border-accent bg-zinc-900/50 p-10 shadow-[0_0_40px_rgba(239,35,60,0.12)]"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              With Onevia
            </span>
            <h3 className="mb-8 mt-3 font-display text-3xl font-bold">One partner</h3>
            <ul className="space-y-4 text-white">
              {[
                'One accountable team, one plan',
                'Shared context across every service',
                'Build, scale, and operate end-to-end',
                'Modular — scale up or down anytime',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="w-full border-y border-white/5 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="mb-2 font-display text-3xl font-extrabold text-accent md:text-5xl">
                {s.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIAL ---------------- */}
      <section className="w-full bg-accent px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-black text-black" />
            ))}
          </div>
          <h3 className="mb-8 font-display text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">
            “One partner across our product, backend, and reliability work — with shared context, we
            move faster and spend less time coordinating vendors.”
          </h3>
          <div className="font-mono text-sm font-bold uppercase tracking-widest text-black/80">
            Illustrative — engagement outcomes vary by scope
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="mx-auto w-full max-w-4xl px-4 py-32 text-center">
        <Reveal>
          <h2 className="mb-6 font-display text-5xl font-bold tracking-tighter md:text-7xl">
            Ready to go <span className="text-accent">all-in-one?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">{company.altTagline}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShinyButton to="/contact">
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </ShinyButton>
            <ArrowLink to="/pricing">See engagement models</ArrowLink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Start with a free discovery call · No obligation
          </p>
        </Reveal>
      </section>
    </>
  );
}
