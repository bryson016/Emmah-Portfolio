import { useEffect, useState } from 'react';
import { navLinks, site } from '../data/site';
import { IconMenu, IconClose } from './Icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-forest-900/10 bg-white/95 shadow-soft backdrop-blur'
          : 'border-b border-transparent bg-white/70 backdrop-blur'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between py-4" aria-label="Main navigation">
        {/* Logo / name */}
        <a href="#home" onClick={close} className="group flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-wide text-forest-900 sm:text-xl">
            {site.name}
          </span>
          <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.3em] text-gold-600 sm:block">
            {site.tagline}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[13px] font-medium text-charcoal-light transition-colors duration-200 hover:text-forest-800 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden !px-5 !py-2.5 text-[13px] btn-primary lg:inline-flex">
            Contact
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/10 text-forest-900 transition hover:bg-forest-50 lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-forest-900/10 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-5">
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 30}ms` }}>
              <a
                href={link.href}
                onClick={close}
                className="block rounded-xl px-4 py-3 text-[15px] font-medium text-charcoal-light transition hover:bg-forest-50 hover:text-forest-800"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a href="#contact" onClick={close} className="btn-primary w-full">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}