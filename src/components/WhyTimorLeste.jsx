import React from 'react';
import { GraduationCap, BookOpen, Wallet, Globe, Landmark, Headset, Plane, ArrowRight } from 'lucide-react';
import diliImg from '../assets/dili.jpg';

export default function WhyTimorLeste() {
  const cards = [
    {
      title: 'Indian Student Friendly',
      text: 'A welcoming, supportive environment tailored to provide a smooth cultural transition for Indian medical aspirants.',
      icon: <GraduationCap className="w-6 h-6 text-[#FF7A29]" />,
      iconBg: 'bg-[#FF7A29]/10 border-[#FF7A29]/20'
    },
    {
      title: 'Indian-Syllabus Oriented',
      text: 'Structured academic curriculum guidance aligned with international medical competencies required by Indian aspirants.',
      icon: <BookOpen className="w-6 h-6 text-[#0FA3A3]" />,
      iconBg: 'bg-[#0FA3A3]/10 border-[#0FA3A3]/20'
    },
    {
      title: 'Affordable Fee Structure',
      text: 'Total estimated 4-year tuition fee of ~$17,830 USD payable in manageable installment schedules with zero capitation or hidden donations.',
      icon: <Wallet className="w-6 h-6 text-[#1FAE6B]" />,
      iconBg: 'bg-[#1FAE6B]/10 border-[#1FAE6B]/20'
    },
    {
      title: 'International Exposure',
      text: 'Study in a peaceful island nation capital (Dili), interacting with diverse faculty, international peers, and community clinical rotations.',
      icon: <Globe className="w-6 h-6 text-[#FF7A29]" />,
      iconBg: 'bg-[#FF7A29]/10 border-[#FF7A29]/20'
    },
    {
      title: 'Catholic University Excellence',
      text: 'Represented at Universidade Católica Timorense (UCT São João Paulo II), featuring modern clinical lab infrastructure and hospital networks.',
      icon: <Landmark className="w-6 h-6 text-[#0FA3A3]" />,
      iconBg: 'bg-[#0FA3A3]/10 border-[#0FA3A3]/20'
    },
    {
      title: 'Complete Admission Care',
      text: 'Aviate™ manages your end-to-end pathway: free counselling, credential checks, visa filings, travel bookings, and hostel onboarding.',
      icon: <Headset className="w-6 h-6 text-[#1FAE6B]" />,
      iconBg: 'bg-[#1FAE6B]/10 border-[#1FAE6B]/20'
    }
  ];

  return (
    <section id="why-timor-leste" className="relative py-24 sm:py-32 overflow-hidden text-white">
      
      {/* Full-bleed Aerial Coastline Photo Background with High-Contrast Navy/Teal Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={diliImg}
          alt="Aerial panoramic view of Dili coastline, Timor-Leste"
          className="w-full h-full object-cover filter blur-[2px] scale-105"
        />
        {/* Navy-to-Teal Deep Gradient Overlay (65-75% opacity for WCAG AA compliance) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071C42]/90 via-[#0B2E6B]/80 to-[#071C42]/95 backdrop-blur-sm"></div>
      </div>

      {/* Signature Dotted Flight Path Motif (India ✈ Timor-Leste) in Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M50,150 Q350,50 600,200 T1150,450"
            stroke="#FF7A29"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            className="flight-path-animated"
          />
          {/* Waypoints */}
          <circle cx="50" cy="150" r="8" fill="#FF7A29" />
          <circle cx="600" cy="200" r="6" fill="#0FA3A3" />
          <circle cx="1150" cy="450" r="10" fill="#FF7A29" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase text-[#FF904D] shadow-sm">
            <Plane className="w-3.5 h-3.5" />
            BENEFITS & ADVANTAGES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight">
            Why Choose Timor-Leste for MBBS?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            An emerging, peaceful Southeast Asian destination offering world-class medical learning environments, accessible costs, and strong student safety.
          </p>
        </div>

        {/* 6 High-Contrast Modern Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 text-left space-y-4 border border-white/80 shadow-card hover:shadow-card-hover transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Container with Soft Tinted Circle */}
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${card.iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <span className="text-4xl font-extrabold font-heading text-slate-200 select-none group-hover:text-[#FF7A29]/20 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold font-heading text-[#0B2E6B] group-hover:text-[#FF7A29] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {card.text}
                </p>
              </div>

              {/* Bottom accent indicator */}
              <div className="pt-2">
                <div className="w-8 h-1 bg-[#0B2E6B]/20 rounded-full group-hover:w-full group-hover:bg-[#FF7A29] transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Flight Route Indicator Bar */}
        <div className="mt-14 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#FF7A29] text-white font-bold flex items-center justify-center shrink-0">
              ✈
            </span>
            <div className="text-left">
              <p className="font-bold text-white">Direct Academic Highway</p>
              <p className="text-blue-200">India → Southeast Asia Transit → Dili Airport (DIL)</p>
            </div>
          </div>
          <a
            href="#process"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors flex items-center gap-1.5"
          >
            <span>View Process</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
