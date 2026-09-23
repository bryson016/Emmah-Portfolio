import { useEffect, useRef } from 'react';

// Image frame — renders the real photo when `src` is provided,
// otherwise shows an elegant neutral placeholder.
export function ImagePlaceholder({
  src,
  alt = '',
  label = 'Image placeholder',
  className = '',
  ratio = 'aspect-[4/5]',
}) {
  return (
    <div className={`placeholder-frame ${ratio} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || label}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="placeholder-label">{label}</span>
      )}
    </div>
  );
}

// Consistent section heading: eyebrow + title (+ optional intro text).
export function SectionHeading({ eyebrow, title, intro, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      <span className={`eyebrow ${light ? '!text-gold-300' : ''}`}>{eyebrow}</span>
      <h2 className={`heading max-w-3xl ${light ? '!text-white' : ''}`}>{title}</h2>
      {intro && (
        <p className={`max-w-2xl text-base leading-relaxed ${light ? 'text-forest-100/80' : 'text-charcoal-muted'}`}>
          {intro}
        </p>
      )}
      <span className="mt-1 h-px w-16 bg-gold-500" />
    </div>
  );
}

// Subtle reveal-on-scroll: adds `is-visible` when the element enters the viewport.
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}