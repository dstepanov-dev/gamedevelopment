import { ABOUT } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';

export function About(): JSX.Element {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-14">
          {/* Decorative bounding-box corners */}
          <span className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l border-t border-brand-light/40" />
          <span className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b border-r border-brand-light/40" />
          <span className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-8 bg-brand-light/60" />
              {ABOUT.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {ABOUT.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{ABOUT.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
