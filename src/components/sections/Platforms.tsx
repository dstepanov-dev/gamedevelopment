'use client';

import { motion } from 'framer-motion';
import { PLATFORMS } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerGroup, staggerItem } from '@/components/ui/Reveal';

export function Platforms(): JSX.Element {
  return (
    <section id="platforms" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Platforms"
          title="Ship everywhere players are"
          description="One codebase vision, every screen. We build, optimize, and port across the platforms that matter."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PLATFORMS.map((platform) => (
            <motion.div
              key={platform.name}
              variants={staggerItem}
              className="glass group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl px-4 py-8 text-center transition-colors duration-300 hover:border-brand-light/40"
            >
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <PlatformGlyph name={platform.name} />
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">{platform.name}</p>
                <p className="mt-1 text-xs text-slate-500">{platform.note}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function PlatformGlyph({ name }: { name: string }): JSX.Element {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-light transition-colors duration-300 group-hover:text-white">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        {name === 'PC' && <rect x="3" y="4" width="18" height="12" rx="1.5" />}
        {name === 'PC' && <path d="M8 20h8M12 16v4" strokeLinecap="round" />}
        {name === 'Mobile' && <rect x="7" y="3" width="10" height="18" rx="2" />}
        {name === 'Mobile' && <path d="M11 18h2" strokeLinecap="round" />}
        {(name === 'PlayStation' || name === 'Xbox' || name === 'Nintendo Switch') && (
          <>
            <rect x="2.5" y="7" width="19" height="10" rx="5" />
            <path d="M7 10v4M5 12h4" strokeLinecap="round" />
            <circle cx="16" cy="11" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="18" cy="13" r="0.9" fill="currentColor" stroke="none" />
          </>
        )}
      </svg>
    </span>
  );
}
