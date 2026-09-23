import { site, navLinks, contact } from '../data/site';
import { socialIcons, IconArrowRight } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-semibold tracking-wide text-white">{site.name}</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
              {site.tagline}
            </p>
            {/* Placeholder description — edit in src/data/site.js */}
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-forest-100/65">
              {site.footerDescription}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
              Navigation
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-forest-100/70 transition hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div className="md:justify-self-end">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
              Get in touch
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-gold-400 hover:text-gold-300"
            >
              Contact
              <IconArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-6 text-sm text-forest-100/70">{contact.location}</p>

            <div className="mt-5 flex gap-3">
              {contact.socials.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-forest-100/80 transition hover:border-gold-400 hover:text-gold-300"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-forest-100/55">{site.copyright}</p>
            <p className="text-[11px] text-forest-100/40">
              {site.location} • Portfolio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}