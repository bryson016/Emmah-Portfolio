import { useState } from 'react';
import { site, portfolioImages } from '../data/site';
import { gallery, galleryCategories } from '../data/content';
import { SectionHeading, ImagePlaceholder, Reveal } from './ui';
import { IconClose, IconArrowRight, IconArrowLeft, IconEye } from './Icons';

// Masonry-style gallery with lightbox — add real image paths in src/data/content.js
export default function Gallery() {
  const [active, setActive] = useState('All');
  const [index, setIndex] = useState(null);

  const visible = active === 'All' ? gallery : gallery.filter((g) => g.category === active);

  const open = (i) => setIndex(i);
  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i - 1 + visible.length) % visible.length);
  const next = () => setIndex((i) => (i + 1) % visible.length);

  return (
    <section id="gallery" className="section-pad bg-mist">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Moments & engagements"
            intro="[Placeholder] Neutral placeholders are shown until real photographs are added. Portraits, events, meetings and community activities will appear here."
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                  active === cat
                    ? 'bg-forest-800 text-white shadow-soft'
                    : 'border border-forest-900/10 bg-white text-charcoal-muted hover:border-forest-700 hover:text-forest-800'
                }`}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry columns */}
        <div className="mt-12 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((item, i) => (
            <div key={item.id} className="mb-5 break-inside-avoid">
              <Reveal delay={(i % 3) * 80}>

                <button
                  type="button"
                  onClick={() => open(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  aria-label={`Open ${item.caption}`}
                >

                  <ImagePlaceholder
                    src={item.image ?? portfolioImages.find((img) => img.id === item.imageId)?.src ?? site.accentImage}
                    alt={item.image ?? portfolioImages.find((img) => img.id === item.imageId)?.alt ?? item.caption}
                    label={item.caption}
                    ratio={item.ratio}
                    className="w-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/45">
                    <span className="inline-flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/95 text-forest-800 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <IconEye className="h-5 w-5" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.category}
                  </span>
                </button>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {index !== null && visible[index] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-950/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
          >
            <IconClose className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 sm:left-8"
          >
            <IconArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 sm:right-8"
          >
            <IconArrowRight className="h-5 w-5" />
          </button>


          <figure
            className="w-full max-w-3xl animate-fadeUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <ImagePlaceholder
                src={visible[index].image ?? portfolioImages.find((img) => img.id === visible[index].imageId)?.src ?? site.accentImage}
                alt={visible[index].image ?? portfolioImages.find((img) => img.id === visible[index].imageId)?.alt ?? visible[index].caption}
                label={visible[index].caption}
                ratio="aspect-[4/3]"
                className="w-full"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-forest-100/85">
              {visible[index].caption} —{' '}
              <span className="text-gold-300">{visible[index].category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}