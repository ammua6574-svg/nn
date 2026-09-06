opimport React from 'react';

export default function AviateLogo({ size = 'default', light = false, showTagline = true, className = '' }) {
  // size options: 'sm', 'default', 'lg', 'hero'
  const isHero = size === 'hero';
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  const iconSizeClass = isHero
    ? 'w-24 h-24 sm:w-28 sm:h-28'
    : isLg
      ? 'w-14 h-14 sm:w-16 sm:h-16'
      : isSm
        ? 'w-8 h-8'
        : 'w-10 h-10 sm:w-11 sm:h-11';

  const mainTextClass = isHero
    ? 'text-4xl sm:text-5xl font-black'
    : isLg
      ? 'text-2xl sm:text-3xl font-black'
      : isSm
        ? 'text-base font-extrabold'
        : 'text-xl sm:text-2xl font-black';

  const subTextClass = isHero
    ? 'text-xs sm:text-sm tracking-[0.25em] font-medium mt-1.5'
    : isLg
      ? 'text-[10px] sm:text-xs tracking-[0.22em] font-medium mt-1'
      : isSm
        ? 'text-[8px] tracking-[0.18em] font-normal mt-0.5'
        : 'text-[9px] sm:text-[10px] tracking-[0.2em] font-medium mt-0.5';

  return (
    <div className={`flex ${isHero ? 'flex-col items-center text-center gap-4' : 'items-center gap-3'} ${className}`}>
      {/* 3D Geometric Origami Paper Plane Icon */}
      <div className={`relative shrink-0 flex items-center justify-center ${iconSizeClass}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          {/* Main Top Triangular Wing (Bright Golden Amber) */}
          <polygon points="12,78 52,14 88,72" fill="url(#aviate-gold-grad)" />
          {/* Left Folded Wing Facet (Warm Orange) */}
          <polygon points="12,78 52,14 52,62" fill="url(#aviate-orange-grad)" />
          {/* Bottom Keel / Shadow Fold (Deep Amber/Brown) */}
          <polygon points="52,62 88,72 52,78" fill="#B45309" />
          {/* Center Spine Crease */}
          <line x1="52" y1="14" x2="52" y2="78" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

          <defs>
            <linearGradient id="aviate-gold-grad" x1="52" y1="14" x2="88" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="0.6" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="aviate-orange-grad" x1="12" y1="78" x2="52" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA580C" />
              <stop offset="0.7" stopColor="#F97316" />
              <stop offset="1" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={`flex flex-col ${isHero ? 'items-center text-center' : 'text-left'}`}>
        <span
          className={`font-heading tracking-tight leading-none ${light ? 'text-[#06152D]' : 'text-white'
            } ${mainTextClass}`}
        >
          Aviate
          <span className="text-[#F59E0B] text-[0.6em] font-bold align-top ml-0.5">™</span>
        </span>
        {showTagline && (
          <span
            className={`uppercase font-sans font-medium select-none ${light ? 'text-slate-600' : 'text-slate-300'
              } ${subTextClass}`}
          >
            OVERSEAS EDUCATION
          </span>
        )}
      </div>
    </div>
  );
}
