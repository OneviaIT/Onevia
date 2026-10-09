import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { company, services } from '../data/site';

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

const resourceLinks = [
  { label: 'Resources', to: '/resources' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Services', to: '/services' },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 px-4 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" aria-label="Onevia home">
              <Logo size={44} wordmarkClassName="text-2xl" />
            </Link>
            <p className="mt-6 max-w-xs text-zinc-500">
              Everything as a Service. One partner. Infinite possibilities — your vision, our
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
        <div className="relative select-none py-6" aria-hidden="true">
          <div className="text-stroke font-display text-[15vw] font-extrabold leading-none">
            ONEVIA
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:flex-row">
          <div>
            © {company.founded} Onevia · Founded {company.founded} · All rights reserved
          </div>
          <div className="flex gap-6">
            <a href={company.social.x} className="hover:text-zinc-300">
              X / Twitter
            </a>
            <a href={company.social.github} className="hover:text-zinc-300">
              GitHub
            </a>
            <a href={company.social.linkedin} className="hover:text-zinc-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
