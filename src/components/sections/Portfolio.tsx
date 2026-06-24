'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerGroup, staggerItem } from '@/components/ui/Reveal';

export function Portfolio(): JSX.Element {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Our game development portfolio"
          description="A glimpse at the worlds, characters, and experiences our team has brought to life."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item) => (
            <motion.figure
              key={item.src}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-700/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              {/* Glass overlay */}
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-base-900/90 via-base-900/20 to-transparent p-5 opacity-100 transition-opacity duration-300">
                <span className="translate-y-2 text-xs font-medium uppercase tracking-wider text-brand-light opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.category}
                </span>
                <span className="font-display text-lg font-semibold text-white">{item.title}</span>
              </figcaption>
              {/* Corner bracket accents */}
              <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-white/0 transition-colors duration-300 group-hover:border-brand-light/70" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-white/0 transition-colors duration-300 group-hover:border-brand-light/70" />
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
