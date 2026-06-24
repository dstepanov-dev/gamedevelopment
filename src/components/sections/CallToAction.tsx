'use client';

import { CTA } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { useModal } from '@/components/ModalProvider';

export function CallToAction(): JSX.Element {
  const { open } = useModal();

  return (
    <section className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
          {/* Ambient glows */}
          <span className="pointer-events-none absolute left-1/4 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />
          <span className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 translate-x-1/2 rounded-full bg-cyan-glow/20 blur-3xl" />
          <span className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-fade-edges" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {CTA.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {CTA.description}
            </p>
            <button type="button" onClick={open} className="btn-primary mt-9">
              {CTA.button}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
