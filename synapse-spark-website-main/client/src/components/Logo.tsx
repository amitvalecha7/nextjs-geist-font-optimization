
import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Glowing Outer Circle */}
      <circle cx="24" cy="24" r="22" stroke="hsl(var(--primary))" strokeWidth="1.5" filter="url(#glow)" />

      {/* Isometric Cube */}
      <g stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Top face */}
        <path d="M24 8L38 16L24 24L10 16L24 8Z" />
        {/* Left face */}
        <path d="M10 16V32L24 40V24L10 16Z" />
        {/* Right face */}
        <path d="M38 16V32L24 40V24L38 16Z" />
      </g>
    </svg>
    <span className="text-2xl font-sans tracking-tighter text-foreground">
      <span className="font-extrabold">Vitron</span>
      <span className="font-normal">tech</span>
    </span>
  </div>
);

export default Logo;
