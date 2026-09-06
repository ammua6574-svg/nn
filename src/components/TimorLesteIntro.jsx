import React from 'react';
import { Compass, Map, Users, Sun, Sparkles } from 'lucide-react';
import diliImg from '../assets/dili.jpg';

export default function TimorLesteIntro() {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0FA3A3]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#0FA3A3]" />
            DISCOVER THE DESTINATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Explore Timor-Leste & Capital Dili
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            The Democratic Republic of Timor-Leste is a serene, picturesque Southeast Asian island nation offering peace, warmth, and growing medical infrastructure.
          </p>
        </div>

        {/* Master Layout: Framed Photo left, Details & Glance Card right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Framed landscape photo of Dili */}
          <div className="lg:col-span-7 relative group text-left">
            <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-[#071C42]">
              <img
                src={diliImg}
                alt="Scenic coastal harbor view of Dili bay in Timor-Leste"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C42]/85 via-transparent to-transparent"></div>
              
              {/* Image Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white flex items-center justify-between shadow-card">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-[#0B2E6B] flex items-center gap-1.5">
                    📍 Dili Bay Coastline, Timor-Leste
                  </p>
                  <p className="text-[11px] text-slate-500 font-light">
                    Safe, peaceful environment for international medical students
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#0FA3A3] bg-[#EAF7F6] px-2.5 py-1 rounded-full border border-[#0FA3A3]/20">
                  Tropical Climate
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Glance Panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-heading text-[#0B2E6B] leading-snug">
                An Emerging Hub for International Healthcare Learning
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                With a tranquil multicultural community, rich coastal topography, and rapid educational modernisation, Timor-Leste has become an attractive new choice for Indian students seeking accessible, high-quality MBBS pathways without excessive donation burdens.
              </p>
            </div>

            {/* Glance Information Card */}
            <div className="bg-gradient-to-br from-[#071C42] via-[#0B2E6B] to-[#0FA3A3] text-white p-7 rounded-3xl shadow-card relative overflow-hidden border border-white/15">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-5">
                <h4 className="text-base font-bold font-heading text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF904D]" />
                  Timor-Leste Quick Facts
                </h4>
                <span className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">2026 Profile</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Capital City', val: 'Dili', icon: <Map className="w-4 h-4 text-[#FF904D]" /> },
                  { label: 'Region', val: 'Southeast Asia', icon: <Compass className="w-4 h-4 text-[#0FA3A3]" /> },
                  { label: 'Currency', val: 'US Dollar (USD)', icon: <Sun className="w-4 h-4 text-[#1FAE6B]" /> },
                  { label: 'Official Language', val: 'Portuguese / Tetum', icon: <Users className="w-4 h-4 text-[#FFA366]" /> },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-blue-200 flex items-center gap-1.5 font-medium">
                      {item.icon}
                      {item.label}
                    </span>
                    <p className="font-bold text-sm sm:text-base text-white">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
