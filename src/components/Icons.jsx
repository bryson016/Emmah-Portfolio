// Lightweight inline SVG icon set — consistent stroke style, no dependencies.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Svg({ children, className = 'h-6 w-6', ...rest }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...rest}>
      {children}
    </svg>
  );
}

export const IconMenu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const IconClose = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const IconArrowRight = (p) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const IconArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
);

export const IconArrowDown = (p) => (
  <Svg {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Svg>
);

export const IconMail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Svg>
);

export const IconPhone = (p) => (
  <Svg {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </Svg>
);

export const IconPin = (p) => (
  <Svg {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const IconQuote = (p) => (
  <Svg {...p}>
    <path d="M9 7H5v5h4l-2 5M19 7h-4v5h4l-2 5" />
  </Svg>
);

export const IconCompass = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </Svg>
);

export const IconSpark = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    <path d="M18 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
  </Svg>
);

export const IconCommunity = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="9" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0111 0" />
    <circle cx="17" cy="8" r="2.5" />
    <path d="M15 13.5a5 5 0 015.5 5.5" />
  </Svg>
);

export const IconOpportunity = (p) => (
  <Svg {...p}>
    <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
  </Svg>
);

export const IconWomen = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="5" />
    <path d="M12 13v8M9 18h6" />
  </Svg>
);

export const IconYouth = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="7" r="3.5" />
    <path d="M5 20a7 7 0 0114 0" />
  </Svg>
);

export const IconEducation = (p) => (
  <Svg {...p}>
    <path d="M3 8l9-4 9 4-9 4-9-4z" />
    <path d="M7 10.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-5.5" />
  </Svg>
);

export const IconEconomy = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9.5c-.6-.8-1.6-1.2-2.6-1.2-1.4 0-2.4.8-2.4 1.9 0 2.6 5 1.4 5 4 0 1.2-1.1 2-2.6 2-1.1 0-2.1-.4-2.7-1.2M12 6.5v11" />
  </Svg>
);

export const IconImpact = (p) => (
  <Svg {...p}>
    <path d="M12 21s-7-4.4-7-10a4.5 4.5 0 018-2.8A4.5 4.5 0 0119 11c0 5.6-7 10-7 10z" />
  </Svg>
);

export const IconCalendar = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
  </Svg>
);

export const IconLocation = IconPin;

export const IconEye = (p) => (
  <Svg {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const IconX = (p) => (
  <Svg {...p}>
    <path d="M4 4l16 16M20 4L4 20" />
  </Svg>
);

export const IconFacebook = (p) => (
  <Svg {...p}>
    <path d="M14.5 8.5H17V5h-2.5A3.5 3.5 0 0011 8.5V11H9v3.5h2V21h3.5v-6.5H17L17.5 11h-3V8.5c0-.6.4-1 1-1z" />
  </Svg>
);

export const IconInstagram = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.75" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconLinkedin = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M8 10.5V17M8 7.6v.1M12 17v-3.6a2.2 2.2 0 014.4 0V17" />
  </Svg>
);

export const socialIcons = {
  x: IconX,
  facebook: IconFacebook,
  instagram: IconInstagram,
  linkedin: IconLinkedin,
};

export const focusIcons = {
  women: IconWomen,
  youth: IconYouth,
  education: IconEducation,
  community: IconCommunity,
  economy: IconEconomy,
  impact: IconImpact,
  compass: IconCompass,
  spark: IconSpark,
  opportunity: IconOpportunity,
};