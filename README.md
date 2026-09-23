# Emmah Siameto — Professional Portfolio

A standalone, frontend-only personal portfolio website for **Emmah Siameto** (Narok, Kenya).
Built with **React + Vite + Tailwind CSS + JavaScript**. No backend, no dashboard, no auth.

> This project is completely separate from the Women Rep mobile app.

## Getting started

```bash
npm install
npm run dev      # local development server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky responsive nav + hamburger menu
│   ├── Hero.jsx          # Full-width hero, portrait placeholder
│   ├── About.jsx         # Two-column about section
│   ├── Vision.jsx        # Vision statement + value cards
│   ├── FocusAreas.jsx    # Editable focus-area cards
│   ├── Experience.jsx    # Vertical timeline
│   ├── Projects.jsx      # Filterable project showcase + details modal
│   ├── Gallery.jsx       # Masonry gallery + lightbox viewer
│   ├── Updates.jsx       # News & updates cards
│   ├── Contact.jsx       # Contact details + frontend-only form
│   ├── Footer.jsx        # Footer with nav, socials, copyright
│   ├── Icons.jsx         # Inline SVG icon set (no dependencies)
│   └── ui.jsx            # Shared: ImagePlaceholder, SectionHeading, Reveal
├── data/
│   ├── site.js           # Name, tagline, hero intro, contact, nav links
│   └── content.js        # About, vision, focus areas, experience,
│                         # projects, gallery, updates
├── App.jsx
├── index.css             # Tailwind layers + reusable component classes
└── main.jsx
```

## Editing content (important)

**All real information has NOT been invented.** Every unknown detail is marked
`[Placeholder ...]` or `YEAR`. Replace content in these two files only:

- `src/data/site.js` — hero intro, tagline, contact details, social links, footer text
- `src/data/content.js` — biography, values, vision, focus areas, experience
  timeline, projects, gallery items, updates

### Adding a project

Add an object to the `projects` array in `src/data/content.js`:

```js
{
  id: 7,
  title: 'Real project title',
  location: 'Narok, Kenya',
  date: 'Month Year',
  category: 'Community', // must match a value in projectCategories
  description: 'Short description...',
}
```

### Adding a real image

1. Drop the file in `public/images/`.
2. Set `image: '/images/your-file.jpg'` on the gallery item, or replace the
   `ImagePlaceholder` component usage with an `<img>` tag in the relevant component.

Gallery items already render `<img>` on top of the placeholder when `image` is set.

### Connecting the contact form

The form in `src/components/Contact.jsx` intentionally does **not** send messages.
Replace the `handleSubmit` body with a `fetch()` call to your chosen form service
or endpoint.

## Design system

Defined in `tailwind.config.js`:

- **Deep green (primary):** `forest-*`
- **Soft gold (accent):** `gold-*`
- **Dark charcoal text:** `charcoal-*`
- **Light background:** `mist` / white
- **Typography:** Playfair Display (headings) + Inter (body)

Animations are intentionally subtle (reveal-on-scroll, gentle hovers) and respect
`prefers-reduced-motion`.

## Copyright

© 2026 Emmah Siameto. All rights reserved.