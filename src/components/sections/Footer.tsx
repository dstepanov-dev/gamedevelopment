import { NAV_LINKS, SITE } from '@/lib/content';

const PROVIDE = [
  '2D Game Development',
  '3D Game Development',
  'Game Porting',
  '3D Characters Design',
  'Game Dev Outsourcing',
];

const SERVICES = ['Concept & Game Design', 'Prototyping', 'Art & Animation', 'Development', 'Testing & QA'];

const SOCIALS = ['x', 'facebook', 'instagram', 'linkedin'] as const;

export function Footer(): JSX.Element {
  return (
    <footer className="relative border-t border-white/10 bg-base-900/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan-glow shadow-glow-brand">
                <span className="font-display text-sm font-bold text-white">GD</span>
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
                GameDev<span className="text-brand-light">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              We are a passionate team crafting immersive games for consoles, PCs, and mobile platforms. Let’s bring
              your gaming ideas to life with creativity and expertise.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-brand-light/50 hover:text-white"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn className="lg:col-span-2" title="We Provide" items={PROVIDE} />
          <FooterColumn className="lg:col-span-2" title="Our Services" items={SERVICES} />

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="mt-5 space-y-2 text-sm text-slate-400">
              <li>{SITE.address}</li>
              <li className="pt-2">
                <span className="text-slate-500">Phone: </span>
                <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="hover:text-brand-light">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-500">Email: </span>
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-light">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-brand-light">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center border-t border-white/10 pt-7 text-center text-xs text-slate-500">
          <p>© {SITE.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}): JSX.Element {
  return (
    <div className={className}>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-5 space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <a href="#services" className="text-sm text-slate-400 transition-colors hover:text-brand-light">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }: { name: 'x' | 'facebook' | 'instagram' | 'linkedin' }): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      {name === 'x' && <path d="M18 2h3l-7.5 8.6L22 22h-6.8l-4.7-6.2L4.9 22H2l8-9.2L2 2h6.9l4.3 5.7L18 2zm-2.4 18h1.9L8.5 4H6.5l9.1 16z" />}
      {name === 'facebook' && <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V12H8v3h2.5v7h3v-7H16l.5-3h-3V9.8c0-.5.4-.8 1-.8z" />}
      {name === 'instagram' && (
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 5 5 .06 1.3.07 1.6.07 4.8s0 3.6-.07 4.9c-.15 3.2-1.7 4.8-5 5-1.3.06-1.6.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.7-5-5C2.04 15.6 2 15.2 2 12s0-3.6.07-4.9c.15-3.3 1.7-4.8 5-5C8.4 2.04 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 100 10.4 5.2 5.2 0 000-10.4zm0 8.6a3.4 3.4 0 110-6.8 3.4 3.4 0 010 6.8zm5.4-8.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
      )}
      {name === 'linkedin' && (
        <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM21 21h-3.37v-6.1c0-1.45-.03-3.3-2-3.3-2.02 0-2.33 1.57-2.33 3.2V21H9.93V8.5h3.24v1.7h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V21z" />
      )}
    </svg>
  );
}
