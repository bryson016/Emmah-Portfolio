import { vision } from '../data/content';
import { SectionHeading, Reveal } from './ui';
import { focusIcons, IconQuote } from './Icons';

export default function Vision() {
  return (
    <section id="vision" className="section-pad bg-forest-900 text-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Vision & Values"
            title="The principles that guide the work"
            light
          />
        </Reveal>

        {/* Large vision statement */}
        <Reveal delay={100}>
          <blockquote className="mx-auto mt-14 max-w-4xl rounded-3xl border border-gold-400/30 bg-white/[0.04] px-7 py-10 text-center shadow-soft sm:px-12 sm:py-14">
            <IconQuote className="mx-auto h-9 w-9 text-gold-400" />
            <p className="mt-6 font-display text-xl italic leading-relaxed text-forest-50 sm:text-2xl">
              {vision.statement}
            </p>
            <footer className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              Vision Statement — placeholder
            </footer>
          </blockquote>
        </Reveal>

        {/* Value cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vision.pillars.map((pillar, i) => {
            const Icon = focusIcons[pillar.icon] || focusIcons.compass;
            return (
              <Reveal key={pillar.title} delay={i * 90}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.05] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-white/[0.08]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 transition group-hover:bg-gold-400/25">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-100/75">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}