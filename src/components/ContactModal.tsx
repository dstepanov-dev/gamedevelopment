'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { SITE } from '@/lib/content';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Status = 'idle' | 'sending' | 'success';

export function ContactModal({ isOpen, onClose }: ContactModalProps): JSX.Element {
  const [status, setStatus] = useState<Status>('idle');
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  // Reset to the form view shortly after the modal fully closes.
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => setStatus('idle'), 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStatus('sending');
    // Simulated submission — no network, no page refresh.
    setTimeout(() => setStatus('success'), 1100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close contact form"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-base-900/80 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            className="glass-strong relative z-10 w-full max-w-lg overflow-hidden rounded-3xl p-7 sm:p-9"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          >
            {/* Accent glow + corner brackets */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/30 blur-3xl" />
            <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-brand-light/50" />
            <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-brand-light/50" />

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="eyebrow mb-3">Get a Quote</p>
                  <h2 id="contact-modal-title" className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Start your project
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Tell us about your game. We’ll get back within one business day.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field id="name" label="Your Name" type="text" placeholder="Jane Doe" />
                      <Field id="email" label="Email" type="email" placeholder="jane@studio.com" />
                    </div>
                    <Field id="subject" label="Subject" type="text" placeholder="New RPG for PC & console" />
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Share scope, platforms, and timeline…"
                        className="w-full resize-none rounded-xl border border-white/10 bg-base-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-brand-light/70 focus:ring-2 focus:ring-brand/30"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Sending…
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center py-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/15 shadow-glow-brand"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 280, damping: 16 }}
                  >
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-brand-light" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <motion.path
                        d="M4 12.5l5 5L20 6.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
                      />
                    </svg>
                  </motion.div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">
                    Successfully Sent
                  </h2>
                  <p className="mt-3 max-w-sm text-sm text-slate-400">
                    Thank you for reaching out. Our team will review your project and reply at{' '}
                    <span className="text-brand-light">{SITE.email}</span> shortly.
                  </p>
                  <button type="button" onClick={onClose} className="btn-ghost mt-7">
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: 'text' | 'email';
  placeholder: string;
}): JSX.Element {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-base-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-brand-light/70 focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
