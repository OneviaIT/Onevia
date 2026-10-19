import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { AtomLogo } from './AtomLogo';
import { company, services } from '../data/site';

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

const resourceLinks = [
  { label: 'Resources', to: '/resources' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Services', to: '/services' },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 px-4 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" aria-label="Onevia Labs home">
              <AtomLogo size={52} wordmarkClassName="text-2xl" />
            </Link>
            <p className="mt-6 max-w-xs text-zinc-500">
              Everything as a Service. One partner. Infinite possibilities. Your vision, our
              technology.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-zinc-600">
              Founded {company.founded} · Emerging premium technology partner
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-accent">Platform</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.abbr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-accent">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-accent">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              {resourceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative select-none overflow-hidden py-6" aria-hidden="true">
          <div
            className="text-stroke flex items-baseline gap-[0.15em] whitespace-nowrap font-display font-extrabold leading-none"
            style={{ fontSize: 'min(13vw, 11rem)' }}
          >
            <span>ONEVIA</span>
            <span className="text-[0.4em]">LABS</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:flex-row">
          <div>
            © {company.founded} Onevia Labs · Founded {company.founded} · All rights reserved
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Onevia Labs on LinkedIn"
              className="inline-flex items-center gap-2 hover:text-zinc-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
