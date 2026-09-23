import { about } from '../data/content';
import { site } from '../data/site';
import { ImagePlaceholder, SectionHeading, Reveal } from './ui';
import { IconQuote } from './Icons';

export default function About() {
  return (
    <section id="about" className="section-pad bg-mist">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="About Emmah"
            title="A profile rooted in service and community"
            intro="[Placeholder] Section introduction — a short line about Emmah Siameto to be added here."
          />
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait placeholder */}
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <ImagePlaceholder
                src={site.profileImage}
                alt={site.profileAlt}
                label="Photo placeholder — to be added"
                ratio="aspect-[4/5]"
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-forest-800 px-6 py-4 text-white shadow-lift sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">Profile</p>
              <p className="mt-1 font-display text-base">Emmah Siameto</p>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120} className="flex flex-col gap-8">
            <div>
              <span className="eyebrow">Biography</span>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-charcoal-muted">
                {about.biography.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-600">
                  Background
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{about.background}</p>
              </div>
              <div className="card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-600">
                  Professional Journey
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{about.journey}</p>
              </div>
            </div>

            <div>
              <span className="eyebrow">Values</span>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {about.values.map((value) => (
                  <li
                    key={value.title}
                    className="group flex items-start gap-3 rounded-2xl border border-forest-900/10 bg-white px-5 py-4 transition hover:border-gold-300"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500 transition group-hover:scale-125" />
                    <div>
                      <p className="font-display text-base font-semibold text-forest-900">{value.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-charcoal-muted">{value.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-l-4 border-gold-500 bg-white p-6 shadow-card">
              <IconQuote className="h-7 w-7 shrink-0 text-forest-700" />
              <p className="text-sm italic leading-relaxed text-charcoal-light">
                [Placeholder] A short quote or guiding principle from Emmah can be featured here.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}