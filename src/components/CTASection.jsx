import React from 'react';
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919999999999?text=Hello%20Aviate%20Overseas,%20I%20want%20to%20apply%20for%20MBBS%20at%20UCT%20Timor-Leste%20for%20the%202026%20intake.%20Please%20guide%20me.',
      '_blank'
    );
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-[#071C42] via-[#0B2E6B] to-[#0FA3A3] text-white relative overflow-hidden text-center">
      
      {/* Background Dotted Flight Route Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 300" fill="none">
          <path
            d="M 50,250 Q 500,-50 950,150"
            stroke="#FF7A29"
            strokeWidth="3"
            strokeDasharray="8 8"
            className="flight-path-animated"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#FF904D] shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          LIMITED SEATS FOR 2026 INTAKE
        </div>

        {/* Title & Subtext */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight">
            Ready to Take Flight Toward Your Medical Career?
          </h2>
          <p className="text-blue-100 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Speak directly with Aviate™ medical education counsellors. Understand your eligibility, receive official UCT brochures, and lock in your 2026 admission seat.
          </p>
        </div>

        {/* Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-xl mx-auto">
          <a
            href="#contact"
            onClick={handleScrollToForm}
            className="btn-coral px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-coral-glow"
          >
            <span>Apply Now for 2026</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleWhatsApp}
            className="px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Counsellor</span>
          </button>
        </div>

        {/* Verified assurances */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-2 text-xs text-blue-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" /> Official UCT Representative
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" /> Free Profile Assessment
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" /> Visa & Flight Assistance
          </span>
        </div>

      </div>
    </section>
  );
}
