import { focusAreas } from '../data/content';
import { SectionHeading, Reveal } from './ui';
import { focusIcons } from './Icons';

// Design placeholders only — editable categories in src/data/content.js
export default function FocusAreas() {
  return (
    <section id="focus" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Areas of Focus"
            title="Where attention and energy are directed"
            intro="[Placeholder] These focus areas are editable categories for the portfolio. Replace or refine them to reflect verified areas of work."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = focusIcons[area.icon] || focusIcons.impact;
            return (
              <Reveal key={area.title} delay={(i % 3) * 90}>
                <article className="group card card-hover h-full p-8">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-gold-300">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-forest-900">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{area.text}</p>
                  <span className="mt-6 block h-px w-10 bg-gold-500 transition-all duration-300 group-hover:w-20" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}