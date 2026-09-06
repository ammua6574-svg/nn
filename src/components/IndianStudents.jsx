import React from 'react';
import { Compass, GraduationCap, DollarSign, Globe, ShieldCheck, HeartHandshake, MessageSquare, Plane } from 'lucide-react';

export default function IndianStudents() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919999999999?text=Hello%20Aviate%20Overseas,%20I%20am%20an%20Indian%20student%20planning%20for%20MBBS%20at%20UCT%20Timor-Leste.%20Please%20guide%20me%20on%20admissions.',
      '_blank'
    );
  };

  const points = [
    { label: 'Tailored for Indian Aspirants', desc: 'Curriculum delivery, learning resources, and counseling structured for CBSE/State Board backgrounds.', icon: <GraduationCap className="w-5 h-5 text-[#FF7A29]" /> },
    { label: 'Affordable Total Budget', desc: 'Complete 4-year tuition of ~$17,830 USD payable in annual/semester installments with no donations.', icon: <DollarSign className="w-5 h-5 text-[#0FA3A3]" /> },
    { label: 'Peaceful Island Topography', desc: 'Secure environment in Dili with welcoming local people and close maritime proximity to Asia.', icon: <Globe className="w-5 h-5 text-[#1FAE6B]" /> },
    { label: 'English Clinical Medium', desc: 'Lectures and textbooks conducted in English to ensure clear comprehension for Indian students.', icon: <Compass className="w-5 h-5 text-[#FF7A29]" /> },
    { label: 'Full Documentation & Visa Care', desc: 'Aviate™ manages your apostilles, embassy filings, and travel bookings end-to-end.', icon: <ShieldCheck className="w-5 h-5 text-[#0FA3A3]" /> },
    { label: 'Indian Food & Community Living', desc: 'Hostel meal catering adapted with Indian dietary items and supervised pastoral guidance.', icon: <HeartHandshake className="w-5 h-5 text-[#1FAE6B]" /> },
  ];

  return (
    <section id="indian-students" className="py-24 sm:py-32 bg-hero-mesh topo-pattern relative overflow-hidden text-white">
      
      {/* Background radial glow */}
      <div className="hero-teal-blob -top-20 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#FF904D] shadow-sm">
            <Plane className="w-3.5 h-3.5" />
            INDIAN ASPIRANTS CORNER
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight">
            Why Indian Students Choose Timor-Leste
          </h2>
          <p className="text-blue-100 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover why Universidade Católica Timorense is emerging as the premier choice for Indian 12th PCB students seeking international MBBS pathways.
          </p>
        </div>

        {/* Master Layout: Left Interactive Route Map Visual, Right Points Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Flight Route Visual Block */}
          <div className="lg:col-span-5 glass-card-navy p-8 sm:p-10 rounded-3xl text-center shadow-card relative overflow-hidden flex flex-col justify-between min-h-[420px] text-left border border-white/15">
            
            <div className="space-y-2">
              <span className="bg-[#FF7A29] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm inline-block">
                International Flight Route
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                Seamless Academic Route: India ✈ Timor-Leste
              </h3>
            </div>

            {/* Flight Path Connection Graphics */}
            <div className="my-8 flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              
              {/* India Hub */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-lg backdrop-blur-md">
                  🇮🇳
                </div>
                <span className="text-xs font-bold mt-2 tracking-widest uppercase text-white font-heading">INDIA</span>
                <span className="text-[10px] text-blue-200">Origin Hub</span>
              </div>

              {/* Dotted Connection line with animated flight path */}
              <div className="flex flex-col sm:flex-row items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF7A29] animate-ping"></span>
                <span className="w-20 h-0.5 border-t-2 border-dashed border-[#FF7A29] hidden sm:block"></span>
                <span className="w-0.5 h-12 border-l-2 border-dashed border-[#FF7A29] block sm:hidden"></span>
                <span className="text-[11px] text-[#FFA366] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/10 rounded-full">Direct Path</span>
                <span className="w-20 h-0.5 border-t-2 border-dashed border-[#0FA3A3] hidden sm:block"></span>
                <span className="w-0.5 h-12 border-l-2 border-dashed border-[#0FA3A3] block sm:hidden"></span>
                <span className="w-2 h-2 rounded-full bg-[#0FA3A3] animate-ping"></span>
              </div>

              {/* Timor-Leste Hub */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-lg backdrop-blur-md">
                  🇹🇱
                </div>
                <span className="text-xs font-bold mt-2 tracking-widest uppercase text-[#FF904D] font-heading">TIMOR-LESTE</span>
                <span className="text-[10px] text-blue-200">UCT Campus (DIL)</span>
              </div>

            </div>

            <p className="text-xs text-blue-100 font-light leading-relaxed">
              Coordinated group departures, arrival assistance at Dili Presidente Nicolau Lobato International Airport, and instant transit to hostel rooms.
            </p>
          </div>

          {/* Right Column: 6 Value Points Grid */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-card hover:shadow-card-hover transition-all duration-300 text-[#071C42] flex items-start gap-4"
                >
                  <div className="p-2.5 bg-[#F6F1E7] rounded-xl shrink-0 mt-0.5">
                    {pt.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold font-heading text-[#0B2E6B] text-sm sm:text-base leading-snug">{pt.label}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="btn-coral px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2.5 shadow-coral-glow"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Talk with an Indian Student MBBS Advisor</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
