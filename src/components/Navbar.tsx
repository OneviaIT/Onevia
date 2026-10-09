import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems } from '../data/site';

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <Link to="/" aria-label="Onevia home" onClick={() => setOpen(false)}>
          <Logo size={28} wordmarkClassName="text-lg" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden text-sm font-medium text-zinc-300 hover:text-white md:block"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-accent/60 md:inline-flex"
          >
            Get Started
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-3 max-w-5xl rounded-3xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/5 text-white' : 'text-zinc-300 hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
            >
              Get Started <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
