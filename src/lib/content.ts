/**
 * Single source of truth for all site copy & data.
 * Content faithfully reconstructed from https://gamedevelopment.company/
 */

export type NavLink = { label: string; href: string };

export const SITE = {
  name: 'Game Development Company',
  shortName: 'GameDev',
  tagline: 'Premium Game Development Studio',
  email: 'info@gamedevelopment.company',
  phone: '+1 424 415 4758',
  address: 'Dover, Delaware, USA',
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Company', href: '#company' },
] as const;

export const HERO = {
  eyebrow: 'Full-Cycle Game Studio',
  title: 'Game Development Company',
  description:
    'From concept to launch, our video game development studio delivers stunning, high-performance games across platforms. Ready to captivate players? Let’s create your next hit game together.',
  primaryCta: 'Get Started',
  secondaryCta: 'View Portfolio',
} as const;

export type Stat = { value: string; label: string };

export const STATS: readonly Stat[] = [
  { value: '120+', label: 'Titles Shipped' },
  { value: '5', label: 'Core Platforms' },
  { value: '60+', label: 'Studio Experts' },
  { value: '12yr', label: 'In Production' },
] as const;

export type Capability = { title: string; description: string };

export const CAPABILITIES: readonly Capability[] = [
  {
    title: 'Game Development',
    description:
      'Building games from scratch, including programming, design, and component integration.',
  },
  {
    title: 'Game Art',
    description: 'Creating visual elements for games: characters, environments, and interfaces.',
  },
  {
    title: 'Outstaffing',
    description: 'Providing skilled specialists for temporary work on your project.',
  },
  {
    title: 'Game Animation',
    description: 'Crafting smooth and realistic animations for characters and objects in games.',
  },
] as const;

export type Service = {
  title: string;
  steps: readonly string[];
  accent: 'brand' | 'cyan' | 'teal';
};

export const SERVICES: readonly Service[] = [
  {
    title: 'Full-Cycle Development',
    accent: 'brand',
    steps: [
      'Concept & Design',
      'Pre-Production',
      'Production',
      'Testing',
      'Launch & Support',
      'Post-Release Support',
    ],
  },
  {
    title: 'Game Co-Development',
    accent: 'cyan',
    steps: ['Task Allocation', 'Collaborative Design', 'Production', 'Quality Control', 'Release & Support'],
  },
  {
    title: 'Game Dev Outsourcing',
    accent: 'teal',
    steps: ['Outsourced Tasks', 'Process Management', 'Integration', 'Risk Management'],
  },
] as const;

export type Platform = { name: string; note: string };

export const PLATFORMS: readonly Platform[] = [
  { name: 'PC', note: 'Steam · Epic · Native' },
  { name: 'PlayStation', note: 'PS4 · PS5' },
  { name: 'Xbox', note: 'Series X|S · One' },
  { name: 'Nintendo Switch', note: 'Console · Handheld' },
  { name: 'Mobile', note: 'iOS · Android' },
] as const;

export type PortfolioItem = { src: string; title: string; category: string };

export const PORTFOLIO: readonly PortfolioItem[] = [
  { src: '/images/portfolio/game-art-portfolio1.jpg', title: 'Neon Vanguard', category: 'PC / Console' },
  { src: '/images/portfolio/game-art-portfolio2.jpg', title: 'Ember Realms', category: 'RPG' },
  { src: '/images/portfolio/game-art-portfolio3.jpg', title: 'Apex Drift', category: 'Mobile' },
  { src: '/images/portfolio/game-art-portfolio4.jpg', title: 'Void Strikers', category: 'Shooter' },
  { src: '/images/portfolio/game-art-portfolio5.jpg', title: 'Mythic Forge', category: '3D Art' },
  { src: '/images/portfolio/game-art-portfolio6.jpg', title: 'Hyper Rush', category: 'Hyper-Casual' },
] as const;

export const ABOUT = {
  eyebrow: 'Custom Game Development',
  title: 'Games engineered to stand out',
  description:
    "Need a game that stands out? We specialize in tailored gaming experiences — whether you're targeting PC, PlayStation, Xbox, Nintendo Switch, or mobile. Our expertise covers hyper-casual, RPGs, shooters, and beyond, with a focus on engaging mechanics & polished performance.",
} as const;

export const COMPANY = {
  eyebrow: 'The Studio',
  title: 'A passionate team crafting immersive worlds',
  description:
    'We are a passionate team crafting immersive games for consoles, PCs, and mobile platforms. Let’s bring your gaming ideas to life with creativity and expertise.',
  pillars: [
    { title: '2D Game Development', detail: 'Stylized, performant 2D pipelines.' },
    { title: '3D Game Development', detail: 'AAA-grade 3D worlds and systems.' },
    { title: 'Game Porting', detail: 'Cross-platform releases, done right.' },
    { title: '3D Character Design', detail: 'Memorable, production-ready heroes.' },
  ],
} as const;

export const CTA = {
  title: 'Ready to Create Your Next Game?',
  description:
    'Partner with our studio to bring your gaming vision to life. Whether it’s a console blockbuster, a mobile hit, or a PC masterpiece, our team delivers custom solutions tailored to your needs. Let’s craft something extraordinary together.',
  button: 'Get a Quote',
} as const;
