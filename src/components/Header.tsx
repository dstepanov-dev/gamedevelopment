'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/content';
import { useModal } from '@/components/ModalProvider';

export function Header(): JSX.Element {
  const { open } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (): void => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? 'my-2.5' : 'my-4'
        }`}
      >
        <div
          className={`flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled ? 'glass-strong' : 'border border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5" aria-label={SITE.name}>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan-glow shadow-glow-brand">
              <span className="font-display text-sm font-bold text-white">GD</span>
              <span className="absolute -inset-0.5 rounded-lg border border-white/20" />
            </span>
            <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.2em] text-white sm:inline">
              GameDev<span className="text-brand-light">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <button type="button" onClick={open} className="btn-primary hidden px-5 py-2.5 text-xs sm:inline-flex">
              Contact Us
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`h-0.5 w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile"
            className="mx-4 overflow-hidden rounded-2xl glass-strong lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col p-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="p-2">
                <button
                  type="button"
                  onClick={() => {
                    handleNavClick();
                    open();
                  }}
                  className="btn-primary w-full"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
