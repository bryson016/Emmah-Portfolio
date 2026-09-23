import { site } from '../data/site';
import { ImagePlaceholder, Reveal } from './ui';
import { IconArrowRight, IconArrowDown } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Subtle decorative accents — no flashy gradients */}
      <div className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-gold-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-forest-100/70 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">{site.location}</span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.05] text-forest-900 sm:text-6xl lg:text-[4.25rem]">
              {site.name}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.32em] text-gold-600">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            {/* TEMPORARY placeholder copy — replace in src/data/site.js (heroIntro) */}
            <p className="mt-7 text-lg leading-relaxed text-charcoal-muted">
              {site.heroIntro}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#about" className="btn-primary group">
                Discover Her Story
                <IconArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#projects" className="btn-outline">
                Explore Her Work
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — portrait placeholder */}
        <Reveal delay={200} className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold-300/50" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-lift">
            <ImagePlaceholder
              src={site.profileImage}
              alt={site.profileAlt}
              label="Portrait photo — coming soon"
              ratio="aspect-[4/5]"
              className="w-full"
            />
            {/* Gold accent bar */}
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-forest-800 via-gold-500 to-forest-800" />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-forest-900/10 bg-white px-5 py-4 shadow-soft sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-600">Based in</p>
            <p className="mt-1 font-display text-base font-semibold text-forest-900">{site.location}</p>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-forest-700 transition-colors hover:text-gold-600 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <IconArrowDown className="h-5 w-5 animate-scrollDot" />
      </a>
    </section>
  );
}