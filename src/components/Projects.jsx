import { useState } from 'react';
import { site, portfolioImages } from '../data/site';
import { projects, projectCategories } from '../data/content';
import { SectionHeading, ImagePlaceholder, Reveal } from './ui';
import { IconArrowRight, IconPin, IconCalendar, IconClose, IconEye } from './Icons';

// Project showcase with category filtering — data lives in src/data/content.js
export default function Projects() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Projects & Impact"
            title="Work in focus"
            intro="[Placeholder] All project entries below are placeholders. Add verified projects in src/data/content.js."
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
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

        {/* Cards */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <article className="group card card-hover flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">

                  <ImagePlaceholder
                    src={project.image ?? portfolioImages.find((img) => img.id === project.imageId)?.src ?? site.accentImage}
                    alt={project.image ?? portfolioImages.find((img) => img.id === project.imageId)?.alt ?? site.accentAlt}
                    label="Project image"
                    ratio="aspect-[16/10]"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-forest-800/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300 backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-forest-900">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-charcoal-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <IconPin className="h-3.5 w-3.5 text-gold-600" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <IconCalendar className="h-3.5 w-3.5 text-gold-600" />
                      {project.date}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-muted">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="mt-6 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.18em] text-forest-800 transition-colors hover:text-gold-600"
                  >
                    View Details
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Details modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/60 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-lift animate-fadeUp"
            onClick={(e) => e.stopPropagation()}
          >


            <ImagePlaceholder
              src={selected.image ?? portfolioImages.find((img) => img.id === selected.imageId)?.src ?? site.accentImage}
              alt={selected.image ?? portfolioImages.find((img) => img.id === selected.imageId)?.alt ?? site.accentAlt}
              label="Project image"
              ratio="aspect-[16/9]"
              className="w-full"
            />
            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
                    {selected.category}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-forest-900">
                    {selected.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close details"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest-900/10 text-charcoal-muted transition hover:bg-forest-50"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-charcoal-muted">
                <span className="inline-flex items-center gap-1.5">
                  <IconPin className="h-3.5 w-3.5 text-gold-600" /> {selected.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <IconCalendar className="h-3.5 w-3.5 text-gold-600" /> {selected.date}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-charcoal-muted">
                {selected.description}
              </p>

              <p className="mt-5 flex items-center gap-2 rounded-xl bg-mist px-4 py-3 text-xs text-charcoal-muted">
                <IconEye className="h-4 w-4 text-forest-700" />
                Extended project details can be added here later.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}