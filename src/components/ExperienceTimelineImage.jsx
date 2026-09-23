import { portfolioImages } from '../data/site';

export default function ExperienceTimelineImage({ imageId, className = '' }) {
  if (imageId == null) {
    return (
      <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-forest-900/20 bg-mist ${className}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
      </span>
    );
  }

  const image = portfolioImages.find((img) => img.id === imageId);
  return (
    <span className={`relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-gold-400 bg-white shadow-card ${className}`}>
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-forest-900">?</span>
      )}
    </span>
  );
}