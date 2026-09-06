import React from 'react';
import { ShieldCheck, Award, UserCheck, Banknote, FileCheck, HeartHandshake, BookOpen, Compass, Sparkles } from 'lucide-react';

export default function WhyChooseAviate() {
  const pillars = [
    {
      title: 'Direct University Representation',
      desc: 'Official direct partner ties with 500+ accredited universities across UK, USA, Germany, Australia, and Timor-Leste (UCT).',
      icon: <Award className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: '98.5% Visa Success Record',
      desc: 'Expert visa filing team conducting strict financial documentation checks and embassy mock interview simulations.',
      icon: <ShieldCheck className="w-6 h-6 text-[#10B981]" />
    },
    {
      title: 'Scholarship Optimization',
      desc: 'Identified and secured over ₹12+ Crores in university merit grants, international tuition waivers, and departmental fellowships.',
      icon: <Banknote className="w-6 h-6 text-[#0FA3A3]" />
    },
    {
      title: 'End-to-End Admission Guidance',
      desc: 'From initial profile evaluation, SOP/LOR editing, application filing, to university offer acceptance with zero stress.',
      icon: <FileCheck className="w-6 h-6 text-[#F97316]" />
    },
    {
      title: 'In-House IELTS / PTE Coaching',
      desc: 'Certified language trainers offering diagnostic mock tests, score improvement strategies, and test registration fee vouchers.',
      icon: <BookOpen className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: 'Collateral-Free Education Loans',
      desc: 'Tie-ups with leading national and international education loan partners for competitive interest rates and fast disbursal.',
      icon: <Banknote className="w-6 h-6 text-[#0FA3A3]" />
    },
    {
      title: 'Pre-Departure & Forex Support',
      desc: 'Comprehensive pre-departure seminars, foreign currency cards, international SIM card setups, and flight booking assistance.',
      icon: <Compass className="w-6 h-6 text-[#10B981]" />
    },
    {
      title: 'Post-Arrival & Hostel Transition',
      desc: 'Airport reception, safe student hostel onboarding, roommate matching, and local community mentor networks in destination cities.',
      icon: <HeartHandshake className="w-6 h-6 text-[#F97316]" />
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#06152D] text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0FA3A3]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#FBBF24] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            THE AVIATE™ DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight">
            Why 2,000+ Students Choose Aviate™
          </h2>
          <p className="text-slate-300 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We do not just file applications — we architect personalized global career pathways with complete transparency and zero hidden consultation charges.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#F59E0B]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/10 rounded-2xl w-fit border border-white/10 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#FBBF24] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="w-8 h-1 bg-white/20 rounded-full mt-6 group-hover:w-full group-hover:bg-[#F59E0B] transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
