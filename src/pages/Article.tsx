import { useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { TransitionLink } from '../components/TransitionLink';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { useSeo } from '../lib/useSeo';
import { Reveal, ShinyButton } from '../components/ui';
import { PostCover } from '../components/PostCover';
import { getPost, posts } from '../data/posts';

function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-accent shadow-[0_0_12px_rgba(239,35,60,0.8)]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  useScrollReveal([slug]);
  useSeo({
    title: post ? `${post.title} | Onevia Labs` : 'Resources | Onevia Labs',
    description: post ? post.excerpt : 'Guides and field notes from Onevia Labs.',
    path: post ? `/resources/${post.slug}` : '/resources',
  });

  if (!post) return <Navigate to="/resources" replace />;

  const related = [
    ...posts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  return (
    <>
      <ReadingProgress />

      <article className="mx-auto w-full max-w-4xl px-4 pb-16 pt-32 md:pt-40">
        <TransitionLink
          to="/resources"
          className="article-rise mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 text-accent" /> All resources
        </TransitionLink>

        <header>
          <div
            className="article-rise flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest"
            style={{ animationDelay: '80ms' }}
          >
            <span className="rounded-full bg-accent px-3 py-1 font-bold text-white">{post.category}</span>
            <span className="flex items-center gap-1 text-zinc-500">
              <Clock className="h-3.5 w-3.5" /> {post.readTime} read
            </span>
          </div>
          <h1
            className="article-rise mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl"
            style={{ animationDelay: '160ms' }}
          >
            {post.title}
          </h1>
          <p
            className="article-rise mt-5 text-lg text-zinc-400 md:text-xl"
            style={{ animationDelay: '240ms' }}
          >
            {post.excerpt}
          </p>
        </header>

        <div
          className="article-cover mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-white/10"
          style={{ viewTransitionName: `post-cover-${post.slug}` }}
        >
          <PostCover art={post.art} className="article-cover-art" />
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          {post.body.map((block, i) => {
            if (block.type === 'h') {
              return (
                <Reveal key={i}>
                  <h2 className="mb-4 mt-12 font-display text-2xl font-bold tracking-tight md:text-3xl">
                    <span className="mr-3 inline-block h-5 w-1 translate-y-0.5 rounded-full bg-accent" />
                    {block.text}
                  </h2>
                </Reveal>
              );
            }
            if (block.type === 'ul') {
              return (
                <Reveal key={i}>
                  <ul className="my-6 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-lg leading-relaxed text-zinc-300">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            }
            return (
              <Reveal key={i}>
                <p className="mb-6 text-lg leading-8 text-zinc-300">{block.text}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-zinc-900/50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight">Want help with this?</h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-400">
            Tell us what you are building. We will share honest advice and a clear plan.
          </p>
          <div className="mt-6 flex justify-center">
            <ShinyButton to="/contact">
              Talk to Onevia Labs <ArrowRight className="h-4 w-4" />
            </ShinyButton>
          </div>
        </Reveal>
      </article>

      <section className="mx-auto w-full max-w-7xl px-4 pb-24">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl font-bold tracking-tight md:text-3xl">Keep reading</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <TransitionLink
                to={`/resources/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 transition-all hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative h-40 overflow-hidden">
                  <PostCover
                    art={p.art}
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {p.category} · {p.readTime}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug">{p.title}</h3>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
