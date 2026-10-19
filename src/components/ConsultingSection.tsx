import { ArrowRight, Compass, Users } from 'lucide-react';
import { Reveal, SectionHeading, ShinyButton } from './ui';
import { consultingOffers } from '../data/site';

const icons = [Compass, Users];

export function ConsultingSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Beyond delivery"
          title={
            <>
              Consulting and <span className="text-accent">expert talent</span>
            </>
          }
          sub="Not every engagement is a full build. Bring us in for advice, or add a specialist to your team."
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {consultingOffers.map((o, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal
              key={o.title}
              delay={i * 80}
              className="rounded-xl border border-white/10 bg-zinc-900/50 p-8"
            >
              <Icon className="mb-5 h-7 w-7 text-accent" />
              <h3 className="mb-2 text-2xl font-bold">{o.title}</h3>
              <p className="text-zinc-400">{o.body}</p>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-10">
        <ShinyButton to="/contact">
          Talk to an expert <ArrowRight className="h-4 w-4" />
        </ShinyButton>
      </Reveal>
    </section>
  );
}
