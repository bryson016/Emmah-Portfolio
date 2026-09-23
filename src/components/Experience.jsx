import { experience } from '../data/content';
import { portfolioImages } from '../data/site';
import { SectionHeading, Reveal } from './ui';
import ExperienceTimelineImage from './ExperienceTimelineImage';

// Vertical timeline — placeholder entries live in src/data/content.js (experience)
export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-mist">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="A professional journey"
            intro="[Placeholder] Timeline entries below are placeholders. Replace them with verified roles, dates, and descriptions."
          />
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Timeline line */}
          <span
            className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-400 via-forest-300 to-transparent sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={i} delay={i * 100} as="li" className="relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10">

                {/* Dot + reusable portfolio image thumbnail */}
                <span
                  className="absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold-400 bg-white shadow-card sm:left-1/2 sm:-translate-x-1/2 sm:h-9 sm:w-9"
                  aria-hidden="true"
                >
                  <ExperienceTimelineImage imageId={item.imageId} />
                </span>

                {/* Content — alternate sides on desktop */}
                <div className={`sm:pb-2 ${i % 2 === 0 ? 'sm:col-start-1 sm:pr-12 sm:text-right' : 'sm:col-start-2 sm:pl-12'}`}>
                  <article className="card card-hover p-7">
                    <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-600">
                      {item.year}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-forest-900">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-charcoal-muted">
                      {item.org}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
                      {item.description}
                    </p>
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}