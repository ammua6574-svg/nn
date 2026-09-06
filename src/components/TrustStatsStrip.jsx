import React from 'react';
import { Award, GraduationCap, ShieldCheck, Globe2, Banknote, Sparkles } from 'lucide-react';

export default function TrustStatsStrip() {
  const stats = [
    { number: '2,000+', label: 'Students Counselled & Placed', icon: <GraduationCap className="w-5 h-5 text-[#F59E0B]" /> },
    { number: '98.5%', label: 'Visa Success Rate', icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" /> },
    { number: '500+', label: 'Global Partner Universities', icon: <Award className="w-5 h-5 text-[#0FA3A3]" /> },
    { number: '35+', label: 'Countries Covered', icon: <Globe2 className="w-5 h-5 text-[#F97316]" /> },
    { number: '₹12+ Cr', label: 'Scholarships Secured', icon: <Banknote className="w-5 h-5 text-[#FBBF24]" /> },
  ];

  return (
    <section className="bg-[#06152D] text-white py-12 relative overflow-hidden border-y border-white/10">
      
      {/* Background Animated Flight Path Line */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none">
          <path
            d="M 0,60 Q 300,10 600,60 T 1200,60"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="flight-path-animated"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#F59E0B]/30 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2 transition-all duration-300 transform hover:-translate-y-1 shadow-card group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight group-hover:text-[#FBBF24] transition-colors">
                {stat.number}
              </p>
              <p className="text-xs text-slate-300 font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
