import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, GraduationCap, CheckCircle2, Shield, Globe2, Compass } from 'lucide-react';
import AviateLogo from './AviateLogo';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'UNITED KINGDOM — BIG BEN & LONDON EYE',
      titlePrimary: 'Your Gateway to a',
      titleHighlight: 'Global Education',
      subtext: 'World-class education & 2-year post-study work visa. Expert guidance from Aviate Overseas to turn your study-abroad dream into reality.',
      bgImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80', // London
      highlights: ['Russell Group Universities', '2-Year Post Study Work', 'No SAT / GRE Mandatory']
    },
    {
      badge: 'UNITED STATES — IVY LEAGUE & SILICON VALLEY',
      titlePrimary: 'Pioneer Your Career in',
      titleHighlight: 'USA & STEM Hubs',
      subtext: '3-Year STEM OPT extension, top-tier research universities, and comprehensive MS, MBA & B.Tech admissions with scholarship guidance.',
      bgImage: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1920&q=80', // New York
      highlights: ['3-Year STEM OPT', 'Top Ranked Universities', 'Generous Assistantships']
    },
    {
      badge: 'GERMANY — TU9 & ZERO TUITION ADVANTAGE',
      titlePrimary: 'World-Class Engineering at',
      titleHighlight: 'Public Universities',
      subtext: 'Study cutting-edge Automotive, AI, and Mechanical Engineering in Germany with zero/low tuition and 18-month job seeker visa.',
      bgImage: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1920&q=80', // Berlin
      highlights: ['Free / Low Tuition Fees', '18-Month Job Seeker Visa', 'Global Engineering Hub']
    },
    {
      badge: 'AUSTRALIA — GROUP OF EIGHT & COASTAL LIFE',
      titlePrimary: 'Unlock Limitless Future in',
      titleHighlight: 'Australia & NZ',
      subtext: 'Explore world-renowned Group of Eight universities, up to 4-year post-study work rights, and high standard of living.',
      bgImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=80', // Sydney
      highlights: ['Group of Eight Admits', 'Up to 4-Yr Post Study Visa', 'High Minimum Wage & PR']
    },
    {
      badge: 'TIMOR-LESTE — UCT ACCREDITED MBBS',
      titlePrimary: 'Affordable International',
      titleHighlight: 'MBBS Medical Degree',
      subtext: 'Structured medical education pathway at Universidade Católica Timorense in Dili for Indian PCB students with direct hospital clinical rotations.',
      bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80', // Coastline Dili
      highlights: ['~$17.8k USD 4-Yr Tuition', 'English Medium Guidance', 'Dedicated Indian Hostel']
    }
  ];

  // Auto rotate carousel every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = slides[currentSlide];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#06152D] text-white">
      
      {/* Background Image Slides with Smooth Fade Transition */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.bgImage}
            alt={slide.badge}
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          />
        </div>
      ))}

      {/* Signature Deep Navy-to-Indigo Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06152D]/95 via-[#06152D]/80 to-[#0A2246]/75 z-0 backdrop-blur-[1.5px]"></div>
      
      {/* Topographic and Flight-Line Ambient Motif */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M 50,450 Q 400,50 800,250 T 1150,100"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            className="flight-path-animated"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Rotating Destination Badge, Hero Headline, Subtitle, Dual CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Pill Badge Top-Left */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#FBBF24] shadow-md animate-fade-in-up">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{current.badge}</span>
            </div>

            {/* Main Headline (Bold Two-Tone) */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-heading tracking-tight leading-[1.08] text-white">
                {current.titlePrimary} <br />
                <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F97316] bg-clip-text text-transparent drop-shadow-sm">
                  {current.titleHighlight}
                </span>
              </h1>
            </div>

            {/* Supporting Line */}
            <p className="text-slate-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              {current.subtext}
            </p>

            {/* Key Value Points for Selected Destination */}
            <div className="flex flex-wrap gap-2 pt-1">
              {current.highlights.map((point, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-white"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  {point}
                </span>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#destinations"
                onClick={(e) => handleScrollTo(e, '#destinations')}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#F59E0B] hover:from-[#D97706] hover:to-[#EA580C] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-amber-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 group"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Book Free Consultation</span>
              </a>
            </div>

          </div>

          {/* Right Column: Floating Logo Trust Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#091E42]/85 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center space-y-6 group hover:border-[#F59E0B]/40 transition-all duration-500">
              
              {/* Subtle ambient corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59E0B]/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0FA3A3]/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Exact Aviate Logo Mark in Large Hero Size */}
              <div className="py-2">
                <AviateLogo size="hero" />
              </div>

              {/* Trust Badge Subtext */}
              <div className="border-t border-white/15 pt-6 w-full space-y-2">
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  Trusted by <strong className="text-[#FBBF24] font-extrabold text-base">2,000+</strong> students for study abroad journeys
                </p>
                <div className="flex justify-center items-center gap-4 text-xs text-slate-300 pt-2">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-[#10B981]" /> 100% Verified
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#F59E0B]" /> 500+ Universities
                  </span>
                </div>
              </div>

              {/* Direct Assessment CTA inside Card */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <span>Free Profile Assessment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Carousel Left / Right Circle Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 z-20 focus:outline-none hidden sm:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 z-20 focus:outline-none hidden sm:flex"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Bottom Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
              i === currentSlide
                ? 'w-8 bg-gradient-to-r from-[#F59E0B] to-[#F97316]'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
