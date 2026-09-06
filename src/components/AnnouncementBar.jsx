import React from 'react';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function AnnouncementBar() {
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside aria-label="Admissions Alert" className="bg-gradient-to-r from-[#0B2E6B] via-[#0FA3A3] to-[#FF7A29] p-[1px] shadow-sm relative z-20">
      <div className="bg-[#071C42] py-2.5 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Left badge & message */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF7A29] text-white text-[11px] font-bold uppercase tracking-wider animate-pulse">
              <Sparkles className="w-3 h-3" />
              2026 Admissions Open
            </span>
            <p className="font-medium text-blue-100">
              <strong className="text-white">Universidade Católica Timorense (UCT)</strong> — Official MBBS Admissions Pathway for Indian Students.
              <span className="hidden md:inline text-blue-200 ml-1">Limited clinical batch seats.</span>
            </p>
          </div>

          {/* Right action link */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:flex items-center gap-1 text-amber-300 text-[11px]">
              <Clock className="w-3 h-3" /> Priority Review
            </span>
            <a
              href="#eligibility"
              onClick={(e) => handleScrollToSection(e, '#eligibility')}
              className="inline-flex items-center gap-1 text-[#FF7A29] hover:text-white font-semibold text-xs transition-colors group"
            >
              <span>Check Eligibility Criteria</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </aside>
  );
}
