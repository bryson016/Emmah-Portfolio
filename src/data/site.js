import profileImage from '../assets/REPPP.PNG.png';

// ---------------------------------------------------------------------------
// SITE-WIDE CONTENT — easy to edit, no invented facts.
// Replace placeholder text marked with "[Placeholder ...]" later.
// ---------------------------------------------------------------------------

export const site = {
  name: 'EMMAH SIAMETO',
  // Profile photo (from src/assets) — used in the Hero and About sections.
  profileImage,
  profileAlt: 'Portrait of Emmah Siameto',
  // Optional accent image (e.g. project sleeves, gallery, updates) — change later.
  accentImage: profileImage,
  accentAlt: 'Emmah Siameto — portfolio image',
  tagline: 'Leadership • Community • Empowerment',
  location: 'Narok, Kenya',
  // TEMPORARY placeholder copy — replace with Emmah's real introduction later.
  heroIntro:
    'Building meaningful connections, supporting communities, and creating opportunities for positive change.',
  // Placeholder description used in the footer — replace later.
  footerDescription:
    '[Placeholder] A short profile description for Emmah Siameto will be added here. Leadership, community and empowerment at the heart of every engagement.',
  copyright: '© 2026 Emmah Siameto. All rights reserved.',
};

export const contact = {
  email: '[placeholder] email@domain.com',
  phone: '[placeholder] +254 000 000 000',
  location: 'Narok, Kenya',
  socials: [
    { label: 'Twitter / X', href: '#', icon: 'x' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Focus Areas', href: '#focus' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Updates', href: '#updates' },
  { label: 'Contact', href: '#contact' },
];

// Shared portfolio image set (used across gallery / projects / updates / experience).
export { portfolioImages } from './portfolioImages';