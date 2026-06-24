import { Reveal } from '@/components/ui/Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps): JSX.Element {
  const isCenter = align === 'center';
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <Reveal direction="up">
        <p className={`eyebrow ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-brand-light/60" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
