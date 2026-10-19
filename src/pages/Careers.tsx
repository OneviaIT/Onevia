import { ArrowRight, Heart, Globe, GraduationCap, Scale, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, ShinyButton, Eyebrow } from '../components/ui';
import { useSeo } from '../lib/useSeo';

const perks = [
  { icon: Globe, title: 'Remote friendly', body: 'Work from anywhere with async friendly collaboration.' },
  { icon: Heart, title: 'Real ownership', body: 'Accountable work with visible impact on real engagements.' },
  { icon: GraduationCap, title: 'Learning budget', body: 'Grow across the full stack, not just one silo.' },
  { icon: Scale, title: 'Balance', body: 'Sustainable pace and healthy on call practices.' },
];

export function Careers() {
  useScrollReveal();
  useSeo({
    title: 'Careers | Remote Friendly Engineering Jobs in Sri Lanka | Onevia Labs',
    description:
      'Join Onevia Labs, a remote friendly technology partner based in Sri Lanka. Learn about working with us and hear about upcoming engineering, AI, SRE, DevOps and QA roles.',
    path: '/careers',
  });

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:pt-44">
        <Reveal>
          <Eyebrow>Careers</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-tighter md:text-7xl">
            Build the one platform for <span className="text-accent">everything</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            We’re an emerging, remote friendly partner founded in 2026. Join a team that works across the
            whole stack, with real ownership and measurable impact.
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
      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <Reveal className="rounded-2xl border border-dashed border-white/15 bg-zinc-900/30 p-10 text-center md:p-14">
          <Sparkles className="mx-auto mb-5 h-8 w-8 text-accent" />
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            No open roles right now, but stay tuned
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            We are a growing team and will open new roles soon. Check back here, or introduce
            yourself and we will reach out when something fits.
          </p>
        </Reveal>
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
