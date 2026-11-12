const base = { width: 20, height: 20, viewBox: '0 0 24 24', 'aria-hidden': true };

export const GitHubIcon = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

export const LinkedInIcon = (p) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
  </svg>
);

export const MailIcon = (p) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export const SunIcon = (p) => (
  <svg {...base} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg {...base} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const outline = { ...base, width: 24, height: 24, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

const PROJECT_ICONS = {
  // receipt with lines
  invoice: (
    <>
      <path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  // open book
  docs: (
    <>
      <path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z" />
      <path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" />
    </>
  ),
  // eye / scanning frame
  vision: (
    <>
      <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M6 12s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  // bar chart
  chart: (
    <>
      <path d="M3 21h18" />
      <rect x="5" y="11" width="3" height="7" rx="1" />
      <rect x="10.5" y="6" width="3" height="12" rx="1" />
      <rect x="16" y="13" width="3" height="5" rx="1" />
    </>
  ),
};

export const ProjectIcon = ({ name, ...p }) => <svg {...outline} {...p}>{PROJECT_ICONS[name] ?? PROJECT_ICONS.docs}</svg>;

export const StarIcon = (p) => (
  <svg {...base} width="14" height="14" fill="currentColor" {...p}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
);
