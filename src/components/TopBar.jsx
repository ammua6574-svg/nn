import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <aside aria-label="Contact Information" className="bg-[#06152D] text-white border-b border-white/10 text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Email & Phone */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
          <a
            href="mailto:Info@aviateoverseas.com"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#F59E0B] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Info@aviateoverseas.com</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          <a
            href="tel:+919418944999"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#F59E0B] transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>+91 94189 44999</span>
          </a>
        </div>

        {/* Right: Vizianagaram Address */}
        <div className="flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs text-center md:text-right">
          <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
          <span className="truncate max-w-md">
            Miracle Homes -2, MIG -7 Plot no - 2, Vivekananda Colony, Vizianagaram – 03
          </span>
        </div>

      </div>
    </aside>
  );
}
