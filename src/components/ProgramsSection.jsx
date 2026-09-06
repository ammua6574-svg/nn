import React, { useState } from 'react';
import { Cpu, GraduationCap, Stethoscope, ArrowRight, CheckCircle2, Sparkles, Building2, Globe2, DollarSign, Clock } from 'lucide-react';

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 'engineering',
      category: 'Undergraduate Degrees',
      title: 'Bachelor of Engineering (BE / B.Tech) Abroad',
      shortTitle: 'BE / B.Tech Abroad',
      badge: '4-Year UG Degrees',
      icon: <Cpu className="w-7 h-7 text-[#F59E0B]" />,
      accentColor: 'from-[#F59E0B] to-[#EA580C]',
      tagline: 'Launch an international tech & engineering career with industry-integrated co-op curricula.',
      destinations: ['United States 🇺🇸', 'Germany 🇩🇪', 'United Kingdom 🇬🇧', 'Australia 🇦🇺', 'Canada 🇨🇦'],
      specializations: [
        'Artificial Intelligence & Machine Learning',
        'Computer Science & Cybersecurity',
        'Robotics & Automation Engineering',
        'Mechanical & Automotive Engineering',
        'Aerospace & Renewable Energy'
      ],
      highlights: [
        'Paid Co-op internships during study',
        'High starting salaries ($75k–$110k USD)',
        'Direct admission without entrance stress',
        'Up to 3-year post-study work authorization'
      ],
      tuitionGuide: 'From $12,000 / year (Germany tuition-free options available)',
      ctaText: 'Explore Engineering Programs'
    },
    {
      id: 'masters',
      category: 'Postgraduate Degrees',
      title: 'Masters (MS & MBA) Abroad',
      shortTitle: 'MS / MBA Abroad',
      badge: '1–2 Year PG Degrees',
      icon: <GraduationCap className="w-7 h-7 text-[#0FA3A3]" />,
      accentColor: 'from-[#0FA3A3] to-[#0C8787]',
      tagline: 'Accelerate your leadership and specialized domain expertise at top global universities.',
      destinations: ['United States 🇺🇸', 'United Kingdom 🇬🇧', 'Canada 🇨🇦', 'Ireland 🇮🇪', 'Germany 🇩🇪'],
      specializations: [
        'Data Science & Business Analytics',
        'International MBA & Strategic Management',
        'Cloud Computing & Software Engineering',
        'Finance & FinTech Leadership',
        'Supply Chain & Healthcare Analytics'
      ],
      highlights: [
        'STEM-designated programs with 3-year OPT in USA',
        'GRE / GMAT waiver options available',
        'Merit-based scholarships up to 100% tuition',
        '2-year stay-back visa in UK & Ireland'
      ],
      tuitionGuide: 'From $15,000 / year with high ROI career placements',
      ctaText: 'Explore Masters & MBA'
    },
    {
      id: 'mbbs',
      category: 'Medical Degrees',
      title: 'MBBS / Doctor of Medicine Abroad',
      shortTitle: 'MBBS Abroad',
      badge: 'Clinical Medical Degrees',
      icon: <Stethoscope className="w-7 h-7 text-[#10B981]" />,
      accentColor: 'from-[#10B981] to-[#059669]',
      tagline: 'Affordable, accredited international medical education with hands-on hospital training.',
      destinations: ['Timor-Leste (UCT) 🇹🇱', 'Georgia 🇬🇪', 'Philippines 🇵🇭', 'Uzbekistan 🇺🇿'],
      specializations: [
        'General Medicine & Human Anatomy',
        'Clinical Pathology & Pharmacology',
        'Internal Medicine & Surgery',
        'Pediatrics & Obstetrics/Gynecology',
        'Hospital Bedside Rotations & Clinical Postings'
      ],
      highlights: [
        'Complete 4-Year Tuition at UCT Timor-Leste: ~$17,830 USD',
        'English medium instruction with Indian student hostels',
        'NMC / WHO / ECFMG compliant curriculum parameters',
        'Zero donation & zero capitation fee model'
      ],
      tuitionGuide: 'From ~$4,000 USD / year with direct university payment',
      ctaText: 'Explore MBBS Programs'
    }
  ];

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#FAFAF7] relative overflow-hidden text-[#071C42]">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0FA3A3]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#06152D]/15 text-xs font-bold uppercase tracking-widest text-[#06152D] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            FLAGSHIP ACADEMIC PATHWAYS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#06152D] leading-tight">
            Choose Your Study Abroad Program
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Aviate™ Overseas Education specializes in three world-class higher education verticals tailored for Indian aspirants.
          </p>
        </div>

        {/* 3 Master Program Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#F59E0B]/50 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group text-left relative"
            >
              {/* Top Colored Accent Stripe */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${prog.accentColor}`}></div>

              <div className="p-7 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-[#F6F1E7] border border-slate-200/60 shadow-sm group-hover:scale-105 transition-transform">
                      {prog.icon}
                    </div>
                    <span className="text-[11px] font-bold text-[#06152D] bg-[#F6F1E7] px-3 py-1 rounded-full border border-slate-200">
                      {prog.badge}
                    </span>
                  </div>

                  {/* Program Title */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-extrabold font-heading text-[#06152D] group-hover:text-[#F59E0B] transition-colors leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {prog.tagline}
                    </p>
                  </div>

                  {/* Top Study Destinations */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Popular Destinations</p>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.destinations.map((dest, i) => (
                        <span key={i} className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* In-Demand Specializations */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Specializations</p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {prog.specializations.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Program Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 bg-[#F6F1E7]/50 -mx-7 -mb-6 p-6 rounded-b-2xl">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#06152D]">Aviate™ Program Advantages</p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {prog.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0 mt-1.5"></span>
                          <span className="font-medium text-slate-800">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6">
                  <a
                    href="#contact"
                    onClick={handleScrollToForm}
                    className="w-full py-3.5 rounded-full bg-[#06152D] group-hover:bg-gradient-to-r group-hover:from-[#F59E0B] group-hover:to-[#F97316] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md group-hover:shadow-amber-500/30"
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
