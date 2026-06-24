'use client';

import { SERVICES, type Service } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerGroup, staggerItem } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

const accentMap: Record<Service['accent'], { ring: string; dot: string; glow: string; num: string }> = {
  brand: { ring: 'hover:border-brand/50', dot: 'bg-brand', glow: 'bg-brand/20', num: 'text-brand-light' },
  cyan: { ring: 'hover:border-cyan-glow/50', dot: 'bg-cyan-glow', glow: 'bg-cyan-glow/20', num: 'text-cyan-glow' },
  teal: { ring: 'hover:border-teal-glow/50', dot: 'bg-teal-glow', glow: 'bg-teal-glow/20', num: 'text-teal-glow' },
};

export function Services(): JSX.Element {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Game Development Services"
          title="Comprehensive game dev services"
          description="We guide your project from initial idea to polished release — pick the engagement model that fits your studio."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const a = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className={`glass group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-colors duration-300 ${a.ring}`}
              >
                <span className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${a.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="flex items-center justify-between">
                  <span className={`font-display text-4xl font-bold opacity-30 ${a.num}`}>0{i + 1}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${a.dot} shadow-[0_0_14px] shadow-current`} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{service.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {service.steps.map((step) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${a.dot}`} />
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
