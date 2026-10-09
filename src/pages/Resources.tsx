import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Reveal, Eyebrow } from '../components/ui';

type Post = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  featured?: boolean;
};

const posts: Post[] = [
  {
    title: 'Everything as a Service: why one partner beats a dozen vendors',
    excerpt:
      'The hidden cost of multi-vendor stacks — and how a single accountable partner with shared context changes delivery economics.',
    category: 'Strategy',
    readTime: '6 min',
    featured: true,
  },
  { title: 'A pragmatic blueprint for production RAG', excerpt: 'Retrieval, evaluation, and guardrails for assistants that actually ship.', category: 'AIaaS', readTime: '8 min' },
  { title: 'SLOs without the theatre', excerpt: 'Error budgets your team will actually use to make decisions.', category: 'SREaaS', readTime: '5 min' },
  { title: 'CI/CD that stays fast as you grow', excerpt: 'Pipeline patterns that scale from first commit to platform team.', category: 'DevOpsaaS', readTime: '7 min' },
  { title: 'Modernizing legacy software, safely', excerpt: 'Strangler patterns and incremental delivery over risky rewrites.', category: 'Custom', readTime: '9 min' },
  { title: 'Cloud cost without the surprises', excerpt: 'Right-sizing, visibility, and guardrails for predictable spend.', category: 'Cloud', readTime: '6 min' },
  { title: 'Designing multi-tenant SaaS from day one', excerpt: 'Isolation, billing, and onboarding decisions that compound.', category: 'SaaS', readTime: '7 min' },
];

const categories = ['All', 'Strategy', 'SaaS', 'AIaaS', 'DevOpsaaS', 'SREaaS', 'Cloud', 'Custom'];

export function Resources() {
  useScrollReveal();
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');

  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    return rest.filter(
      (p) =>
        (cat === 'All' || p.category === cat) &&
        (query === '' || p.title.toLowerCase().includes(query.toLowerCase())),
    );
  }, [cat, query, rest]);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-36 md:pt-44">
        <Reveal>
          <Eyebrow>Resources</Eyebrow>
          <h1 className="max-w-3xl font-display text-5xl font-extrabold tracking-tighter md:text-7xl">
            Field notes on building <span className="text-accent">the whole stack</span>
          </h1>
          <div className="relative mt-8 max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search articles"
              aria-label="Search articles"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white transition-colors placeholder:text-zinc-500 focus:border-accent focus:outline-none"
            />
          </div>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8">
        <Reveal>
          <article className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 md:grid-cols-2">
            <div className="relative min-h-[240px] bg-gradient-to-br from-noir via-black to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,35,60,0.25),transparent_70%)]" />
              <span className="absolute left-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {featured.category} · {featured.readTime}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-zinc-400">{featured.excerpt}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-medium text-white transition-all hover:gap-3"
              >
                Read article <ArrowRight className="h-4 w-4 text-accent" />
              </a>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-6">
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

      {/* Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        {filtered.length === 0 ? (
          <p className="py-16 text-center font-mono text-sm uppercase tracking-widest text-zinc-500">
            No articles match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <a
                  href="#"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 transition-all hover:border-white/20"
                >
                  <div className="relative h-40 bg-gradient-to-br from-noir via-black to-zinc-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,35,60,0.18),transparent_70%)]" />
                    <span className="absolute left-4 top-4 rounded-full bg-accent/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-zinc-400">{p.excerpt}</p>
                    <span className="mt-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                      {p.readTime} read
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="mx-auto w-full max-w-4xl px-4 py-24 text-center">
        <Reveal>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tighter md:text-5xl">
            Get new field notes
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-zinc-400">
            Occasional, practical writing on building and operating software. No spam.
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
              Subscribe
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
