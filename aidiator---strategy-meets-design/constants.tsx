
import React from 'react';

export const COLORS = {
  primary: '#004d61', // Deep Teal from the logo
  accent: '#fce4d6',  // Peach from the brain part
  maroon: '#9e0b3d',  // Burgundy from the alternate logo
  dark: '#0f172a',    // Dark Slate
  light: '#f8fafc',   // Ghost White
  text: '#1a1a1a',
};

export const LOGO_SVG = (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head Silhouette */}
    <path d="M20 85V30C20 15 35 5 55 5C75 5 85 15 85 30V65H70V72H75V85H20Z" fill="#004d61"/>
    {/* Brain Area */}
    <path d="M35 15C30 15 28 18 28 23C28 28 30 31 35 31C40 31 42 28 42 23C42 18 40 15 35 15Z" fill="#fce4d6" fillOpacity="0.9"/>
    {/* Circuit Lines */}
    <rect x="34" y="20" width="2" height="15" fill="#004d61" rx="1" />
    <rect x="40" y="18" width="2" height="20" fill="#004d61" rx="1" />
    <rect x="46" y="22" width="2" height="15" fill="#004d61" rx="1" />
    <circle cx="35" cy="21" r="1.5" fill="#004d61" />
    <circle cx="41" cy="35" r="1.5" fill="#004d61" />
    <circle cx="47" cy="23" r="1.5" fill="#004d61" />
  </svg>
);

export const ICONS = {
  Consulting: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Design: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  Integrated: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  )
};
