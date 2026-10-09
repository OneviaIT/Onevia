import { ArrowLeft } from 'lucide-react';
import { ShinyButton } from '../components/ui';

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <div
        className="scanlines relative mb-10 w-full max-w-lg border border-terminal-green/30 p-6 font-mono text-terminal-green terminal-glow"
        style={{ background: '#0a0a0a' }}
      >
        <div className="mb-4 border-b border-terminal-green/20 pb-2 text-sm">
          +--- ONEVIA SHELL ---+
        </div>
        <div className="space-y-1 text-left text-sm">
          <div>
            <span className="opacity-50">onevia@cloud:~$</span> cd {window.location.pathname}
          </div>
          <div className="text-terminal-error">[ERR] 404 — route not found</div>
          <div className="flex gap-2">
            <span className="opacity-50">onevia@cloud:~$</span>
            <span className="animate-blink">█</span>
          </div>
        </div>
      </div>

      <h1 className="font-display text-6xl font-extrabold tracking-tighter md:text-8xl">
        4<span className="text-accent">0</span>4
      </h1>
      <p className="mt-4 max-w-md text-zinc-400">
        This page drifted out of orbit. Let’s get you back to the convergence point.
      </p>
      <div className="mt-8">
        <ShinyButton to="/">
          <ArrowLeft className="h-4 w-4" /> Back home
        </ShinyButton>
      </div>
    </section>
  );
}
