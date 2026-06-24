'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the element travels from while fading in. */
  direction?: Direction;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Travel distance in px. */
  distance?: number;
  /** Render as a list/grid container that staggers its children. */
  as?: 'div' | 'ul' | 'section';
};

const offset = (direction: Direction, distance: number): { x: number; y: number } => {
  switch (direction) {
    case 'up':
      return { x: 0, y: distance };
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 28,
  as = 'div',
}: RevealProps): JSX.Element {
  const { x, y } = offset(direction, distance);

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // All three share the props we use; cast keeps strict typing happy.
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers direct <Reveal>/motion children. */
export function StaggerGroup({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}): JSX.Element {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Child variant matching StaggerGroup; use inside a StaggerGroup. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
