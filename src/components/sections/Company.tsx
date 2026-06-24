'use client';

import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/content';
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/Reveal';

export function Company(): JSX.Element {
  return (
    <section id="company" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: narrative */}
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-brand-light/60" />
              {COMPANY.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {COMPANY.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{COMPANY.description}</p>
          </Reveal>
        </div>

        {/* Right: capability pillars */}
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COMPANY.pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-brand-light/40"
            >
              <span className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-light" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" strokeLinejoin="round" />
                  <path d="M12 2v18M4 6.5l8 4.5 8-4.5" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{pillar.title}</h3>
              <p className="mt-1.5 text-sm text-slate-400">{pillar.detail}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
