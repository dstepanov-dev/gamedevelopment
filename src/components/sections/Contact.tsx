'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/Reveal';
import { useModal } from '@/components/ModalProvider';

const INFO = [
  { label: 'Address', value: SITE.address, icon: 'pin' },
  { label: 'Call Us', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s+/g, '')}`, icon: 'phone' },
  { label: 'Email Us', value: SITE.email, href: `mailto:${SITE.email}`, icon: 'mail' },
] as const;

export function Contact(): JSX.Element {
  const { open } = useModal();

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build your next hit"
          description="Reach out through any channel below, or open the form and tell us about your project."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-3">
          <StaggerGroup className="grid gap-4 lg:col-span-1">
            {INFO.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="glass flex items-start gap-4 rounded-2xl p-5"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-light">
                  <InfoIcon name={item.icon} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</p>
                  {'href' in item ? (
                    <a href={item.href} className="mt-0.5 block break-words font-medium text-white transition-colors hover:text-brand-light">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 break-words font-medium text-white">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </StaggerGroup>

          <Reveal direction="up" delay={0.1} className="lg:col-span-2">
            <div className="glass-strong relative flex h-full flex-col justify-center overflow-hidden rounded-3xl p-8 text-center sm:p-12">
              <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">Get a Quote</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                Open our quick contact form to share your concept, scope, and target platforms. We reply within one
                business day.
              </p>
              <div className="mt-7 flex justify-center">
                <button type="button" onClick={open} className="btn-primary">
                  Open Contact Form
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoIcon({ name }: { name: 'pin' | 'phone' | 'mail' }): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      {name === 'pin' && (
        <>
          <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {name === 'phone' && (
        <path
          d="M5 4h3l2 5-2 1.5a11 11 0 005.5 5.5L20 18v3a1 1 0 01-1 1A16 16 0 014 6a1 1 0 011-2z"
          strokeLinejoin="round"
        />
      )}
      {name === 'mail' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
