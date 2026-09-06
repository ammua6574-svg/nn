import React from 'react';
import { Home, Utensils, Users, ShieldCheck, CheckCircle2, BedDouble, ArrowRight } from 'lucide-react';

export default function Accommodation() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const amenities = [
    {
      title: 'Furnished Living Rooms',
      desc: 'Shared dormitories and room setups equipped with individual study desks, wardrobes, bedding fixtures, and clean utilities.',
      icon: <BedDouble className="w-5 h-5 text-[#FF7A29]" />,
      tag: 'Fully Furnished'
    },
    {
      title: 'Indian & Regional Dining',
      desc: 'Structured hygienic meal plans catering to Indian dietary preferences including vegetarian and non-vegetarian selections.',
      icon: <Utensils className="w-5 h-5 text-[#0FA3A3]" />,
      tag: 'Hygienic Food'
    },
    {
      title: 'Collaborative Study Lounges',
      desc: 'Quiet group revision halls and high-speed Wi-Fi connectivity supporting online medical research and peer study circles.',
      icon: <Users className="w-5 h-5 text-[#1FAE6B]" />,
      tag: 'Study Focus'
    },
    {
      title: '24/7 Safety & Warden Support',
      desc: 'Secure residential premises with 24/7 CCTV surveillance, biometric campus access, and dedicated international student wardens.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0B2E6B]" />,
      tag: 'Secure & Safe'
    }
  ];

  return (
    <section id="accommodation" className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      {/* Soft background radial */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7A29]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Home className="w-3.5 h-3.5 text-[#0FA3A3]" />
            STUDENT RESIDENCE & LIFESTYLE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Comfortable Student Accommodation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Safe, structured hostel facilities in Dili designed to ensure comfort, focus, and cultural belonging for Indian medical aspirants.
          </p>
        </div>

        {/* Master Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Premium Highlight Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#071C42] via-[#0B2E6B] to-[#0FA3A3] text-white p-8 sm:p-10 rounded-3xl shadow-card flex flex-col justify-between relative overflow-hidden border border-white/15 text-left">
            
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF7A29]/15 rounded-full blur-2xl"></div>
            
            <div className="space-y-6 relative z-10">
              <span className="bg-[#FF7A29] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm inline-block">
                Hostel & Food Package
              </span>
              
              <div className="space-y-1">
                <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold">Standard International Package</p>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  $1,650 <span className="text-lg font-light text-blue-100">USD / 6 Months</span>
                </h3>
              </div>

              <p className="text-sm font-light text-blue-100 leading-relaxed border-t border-white/15 pt-4">
                The comprehensive residency package combines secure housing, 3 daily meals, water & electricity utilities, and dedicated airport reception during initial arrival in Timor-Leste.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                  <span>Proximity to UCT medical lecture halls & labs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                  <span>Separate boys and girls accommodation wings</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                  <span>Indian student coordinator on campus</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8 relative z-10">
              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="w-full py-3.5 rounded-full bg-white hover:bg-blue-50 text-[#0B2E6B] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Check Hostel Room Availability</span>
                <ArrowRight className="w-4 h-4 text-[#FF7A29]" />
              </a>
            </div>

          </div>

          {/* Right Column: 4 Feature Grid Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 text-left">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#0B2E6B]/10 hover:border-[#0FA3A3]/40 transition-all duration-300 shadow-soft hover:shadow-card flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#F6F1E7] rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-[#0B2E6B] bg-[#F6F1E7] px-2.5 py-0.5 rounded-full border border-slate-200">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#0B2E6B]">{item.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
