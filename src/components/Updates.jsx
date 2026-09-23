import { site, portfolioImages } from '../data/site';
import { updates } from '../data/content';
import { SectionHeading, ImagePlaceholder, Reveal } from './ui';
import { IconArrowRight, IconCalendar } from './Icons';

// News & updates cards — placeholder articles in src/data/content.js (updates)
export default function Updates() {
  return (
    <section id="updates" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="News & Updates"
            title="Latest from Emmah"
            intro="[Placeholder] Three placeholder articles below. Replace them with real updates in src/data/content.js."
          />
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {updates.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <article className="group card card-hover flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">


                <ImagePlaceholder
                    src={post.image ?? portfolioImages.find((img) => img.id === post.imageId)?.src ?? site.accentImage}
                    alt={post.image ?? portfolioImages.find((img) => img.id === post.imageId)?.alt ?? site.accentAlt}
                    label="Article image"
                    ratio="aspect-[16/9]"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-forest-800">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="inline-flex items-center gap-2 text-xs text-charcoal-muted">
                    <IconCalendar className="h-3.5 w-3.5 text-gold-600" />
                    {post.date}
                  </span>

                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-forest-900 transition-colors group-hover:text-forest-700">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-muted">
                    {post.description}
                  </p>

                  <a
                    href="#updates"
                    className="mt-6 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.18em] text-forest-800 transition-colors hover:text-gold-600"
                  >
                    Read More
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}