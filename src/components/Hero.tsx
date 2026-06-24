'use client';

import { motion } from 'framer-motion';
import { CAPABILITIES, HERO, STATS } from '@/lib/content';
import { useModal } from '@/components/ModalProvider';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero(): JSX.Element {
  const { open } = useModal();

  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Hero ambient image, masked into the mid-tone background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/images/hero-bg-abstract.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25 mask-fade-edges"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base-800/40 via-base-800/60 to-base-800" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="eyebrow justify-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="h-px w-8 bg-brand-light/60" />
            {HERO.eyebrow}
            <span className="h-px w-8 bg-brand-light/60" />
          </motion.p>

          <motion.h1
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            <span className="text-gradient">Game Development</span>
            <br />
            Company
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
          >
            {HERO.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
          >
            <button type="button" onClick={open} className="btn-primary w-full sm:w-auto">
              {HERO.primaryCta}
            </button>
            <a href="#portfolio" className="btn-ghost w-full sm:w-auto">
              {HERO.secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Capability cards */}
        <motion.ul
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { delayChildren: 0.4, staggerChildren: 0.1 } } }}
        >
          {CAPABILITIES.map((cap) => (
            <motion.li
              key={cap.title}
              variants={{
                hidden: { opacity: 0, y: 26 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-brand-light/40"
            >
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="font-display text-xs text-brand-light/70">0{CAPABILITIES.indexOf(cap) + 1}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-white">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{cap.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Stat strip */}
        <motion.dl
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-base-700/40 px-4 py-6 text-center backdrop-blur-sm">
              <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
