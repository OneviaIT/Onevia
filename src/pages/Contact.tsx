import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, ChevronRight, Check } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, Eyebrow } from '../components/ui';
import { company, services, faqs } from '../data/site';

export function Contact() {
  useScrollReveal();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: wire to a backend / form service when available.
    setSent(true);
  }

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 md:pt-44">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: info */}
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-display text-5xl font-extrabold tracking-tighter md:text-6xl">
              Let’s build your <span className="text-accent">stack</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-zinc-400">
              Every engagement starts with a short discovery conversation. Tell us what you’re
              building and we’ll propose a clear scope, architecture, and plan.
            </p>

            <div className="mt-10 space-y-4">
              <a href={`mailto:${company.email}`} className="flex items-center gap-4 text-zinc-300 hover:text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                {company.email}
              </a>
              <div className="flex items-center gap-4 text-zinc-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                {company.phone}
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                {company.location}
              </div>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-600">
              Contact details are placeholders pending launch.
            </p>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-8 w-8" />
                  </span>
                  <h2 className="font-display text-2xl font-bold">Thanks — message received</h2>
                  <p className="mt-3 max-w-xs text-zinc-400">
                    This is a demo form. Once wired to a backend, we’ll reply within one business day
                    to schedule your discovery call.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-medium text-accent hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Name" id="name">
                      <input id="name" required className={inputCls} placeholder="Jane Doe" />
                    </Field>
                    <Field label="Work email" id="email">
                      <input id="email" type="email" required className={inputCls} placeholder="jane@company.com" />
                    </Field>
                  </div>
                  <Field label="Company" id="company">
                    <input id="company" className={inputCls} placeholder="Company Inc." />
                  </Field>
                  <Field label="Service interest" id="service">
                    <select id="service" className={`${inputCls} appearance-none`} defaultValue="">
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug} className="bg-zinc-900">
                          {s.abbr} — {s.name}
                        </option>
                      ))}
                      <option value="multiple" className="bg-zinc-900">
                        Multiple / not sure
                      </option>
                    </select>
                  </Field>
                  <Field label="Message" id="message">
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className={`${inputCls} resize-none`}
                      placeholder="What are you building?"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-accent py-3.5 font-bold text-white transition-all hover:brightness-110 active:scale-95"
                  >
                    Request discovery call
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Waitlist */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 text-center">
        <Reveal className="rounded-2xl border border-white/10 bg-white/[0.02] p-10">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tighter">
            Prefer to stay in the loop?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-zinc-400">
            Join the early-access list for product updates and availability.
          </p>
          <form
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-white transition-colors placeholder:text-zinc-500 focus:border-accent focus:outline-none"
            />
            <button className="rounded-full bg-accent px-8 py-3.5 font-bold text-white transition-all hover:brightness-110 active:scale-95">
              Join
            </button>
          </form>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-28">
        <Reveal>
          <h2 className="mb-10 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Common questions
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
    </>
  );
}

const inputCls =
  'w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white transition-colors placeholder:text-zinc-600 focus:border-accent focus:outline-none';

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-400">
        {label}
      </span>
      {children}
    </label>
  );
}
