import React from 'react';
import { GraduationCap, DollarSign, Globe, CheckCircle2, MessageSquare, ArrowRight, Shield, Stethoscope } from 'lucide-react';
import studentImg from '../assets/student.jpg';

export default function Hero() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919999999999?text=Hello%20Aviate%20Team,%20I%20am%20interested%20in%20studying%20MBBS%20at%20Universidade%20Cat%C3%B3lica%20Timorense%20(UCT)%20in%20Timor-Leste.%20Please%20share%20the%202026%20eligibility,%20fee%20structure,%20and%20admission%20details.',
      '_blank'
    );
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-32 pb-20 flex items-center overflow-hidden bg-hero-mesh topo-pattern text-white">
      
      {/* Background Soft Blobs for Layered Depth */}
      <div className="hero-teal-blob -top-20 -left-20"></div>
      <div className="hero-glow-blob top-1/3 right-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#071C42]/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-white tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF7A29] animate-ping"></span>
              <span className="text-[#FF904D] font-bold">New Medical Horizon:</span>
              <span className="text-blue-100">Timor-Leste MBBS for Indian Aspirants</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.08] text-white">
                STUDY MBBS IN <br />
                <span className="bg-gradient-to-r from-[#FF7A29] via-[#FFA366] to-[#0FA3A3] bg-clip-text text-transparent">
                  TIMOR-LESTE
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-light text-blue-100 max-w-xl leading-snug">
                Universidade Católica Timorense (UCT) — Dili
              </p>
            </div>

            {/* Subtitle / Body */}
            <p className="text-blue-100 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Step into a structured international medical education pathway built for Indian student success. Experience modern clinical facilities, affordable tuition schedules, and end-to-end guidance from Aviate™.
            </p>

            {/* 4 Supporting Value Badges */}
            <div className="grid grid-cols-2 gap-3 max-w-xl pt-1">
              {[
                { label: 'Indian Syllabus Guidance', icon: <GraduationCap className="w-4 h-4 text-[#FF7A29]" />, tint: 'bg-[#FF7A29]/15 border-[#FF7A29]/30' },
                { label: 'Affordable Tuition (~$17.8k)', icon: <DollarSign className="w-4 h-4 text-[#0FA3A3]" />, tint: 'bg-[#0FA3A3]/15 border-[#0FA3A3]/30' },
                { label: 'Peaceful Island Capital', icon: <Globe className="w-4 h-4 text-[#1FAE6B]" />, tint: 'bg-[#1FAE6B]/15 border-[#1FAE6B]/30' },
                { label: 'Complete Visa & Hostel Care', icon: <Shield className="w-4 h-4 text-[#FF7A29]" />, tint: 'bg-[#FF7A29]/15 border-[#FF7A29]/30' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className={`p-2 rounded-xl ${item.tint} border shrink-0 flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="btn-coral px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-coral-glow group"
              >
                <span>Apply for 2026 Intake</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Counsellor</span>
              </button>
            </div>

            {/* Verified Pathway Note */}
            <div className="flex items-center gap-2 pt-2 text-xs text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
              <span>Transparent Admission Guidance • Direct University Account Payments • Zero Hidden Donations</span>
            </div>

          </div>

          {/* Right Column: Framed Student Portrait with Soft Glow & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Orange Radial Behind Photo */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#FF7A29]/40 via-[#0FA3A3]/25 to-transparent blur-3xl -z-10 animate-pulse-glow"></div>

            {/* Dotted Flight Arc SVG in Background */}
            <div className="absolute -top-10 -right-6 w-56 h-56 pointer-events-none opacity-40">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#FF7A29]">
                <circle cx="100" cy="100" r="80" strokeDasharray="6 6" className="flight-path-animated" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Framed Image Container with Soft Rounded Corners */}
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#071C42] z-10 group">
              <img
                src={studentImg}
                alt="Medical Aspirant studying MBBS at UCT Timor-Leste"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Bottom Gradient for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C42] via-transparent to-transparent opacity-85"></div>
              
              {/* Image Footer Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <p className="text-[11px] text-[#FF904D] font-bold uppercase tracking-wider">Universidade Católica Timorense</p>
                <p className="text-xs font-semibold text-white mt-0.5">Faculty of Medicine & Health Sciences, Dili</p>
              </div>
            </div>

            {/* Floating Card 1: 2026 Intake */}
            <div className="absolute -top-4 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md shadow-card rounded-2xl p-3 border border-white flex items-center gap-3 animate-float-slow z-20">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0B2E6B] to-[#123A82] text-white shadow-sm">
                <GraduationCap className="w-5 h-5 text-[#FF7A29]" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Admissions</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0B2E6B]">2026 Batch Open</p>
              </div>
            </div>

            {/* Floating Card 2: Degree Program */}
            <div className="absolute top-[42%] -right-4 sm:-right-6 bg-white/95 backdrop-blur-md shadow-card rounded-2xl p-3 border border-white flex items-center gap-3 animate-float-reverse z-20">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0FA3A3] to-[#0C8787] text-white shadow-sm">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Academic Degree</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0B2E6B]">MBBS Program</p>
              </div>
            </div>

            {/* Floating Card 3: Transparent Tuition */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md shadow-card rounded-2xl p-3 border border-white flex items-center gap-3 animate-float-slow z-20">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#FF7A29] to-[#E66819] text-white shadow-sm">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Estimated Cost</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0B2E6B]">$17,830 USD Total</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
