import React from 'react';
import { BookOpen, Calendar, Languages, ShieldAlert, Award, FileText, CheckCircle2, Stethoscope, ArrowRight } from 'lucide-react';

export default function MBBSProgram() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programHighlights = [
    {
      title: 'Program Duration',
      desc: 'Comprehensive medical education cycle including core pre-clinical, para-clinical, and clinical hospital rotations.',
      badge: 'Full-Time Degree',
      icon: <Calendar className="w-5 h-5 text-[#0FA3A3]" />
    },
    {
      title: 'Medium of Instruction',
      desc: 'English medium academic guidance and reference clinical literature designed to support international learners.',
      badge: 'English Medium',
      icon: <Languages className="w-5 h-5 text-[#0FA3A3]" />
    },
    {
      title: 'Curriculum Benchmarking',
      desc: 'Structured curriculum aligned with international medical standards and modern biomedical sciences.',
      badge: 'Global Standards',
      icon: <BookOpen className="w-5 h-5 text-[#0FA3A3]" />
    },
    {
      title: 'Clinical Hospital Rotations',
      desc: 'Practical bedside clinical attachments and patient observations sanctioned under university hospital networks.',
      badge: 'Hands-on Clinical',
      icon: <Award className="w-5 h-5 text-[#0FA3A3]" />
    }
  ];

  return (
    <section id="mbbs-program" className="py-24 sm:py-32 bg-clinical-teal relative overflow-hidden text-[#071C42]">
      
      {/* Decorative background glow elements */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#0FA3A3]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#0B2E6B]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#0FA3A3]/30 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#0C8787] shadow-sm">
            <Stethoscope className="w-3.5 h-3.5" />
            ACADEMIC CURRICULUM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            MBBS Program Overview
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive, patient-centered medical degree curriculum delivered by Universidade Católica Timorense in Dili.
          </p>
        </div>

        {/* Master Program Feature Card Floating on White */}
        <div className="bg-white rounded-3xl border border-[#0FA3A3]/25 shadow-card overflow-hidden text-left">
          
          {/* Card Header with Navy-Teal Gradient Banner */}
          <div className="bg-gradient-to-r from-[#071C42] via-[#0B2E6B] to-[#0FA3A3] p-6 sm:p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <span className="inline-block bg-[#FF7A29] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                OFFICIAL MEDICAL DEGREE PROGRAM
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-tight">
                Bachelor of Medicine, Bachelor of Surgery (MBBS)
              </h3>
              <p className="text-blue-100 text-sm font-light">
                Faculty of Medicine and Health Sciences — Universidade Católica Timorense (UCT)
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-center shrink-0">
              <p className="text-[11px] uppercase tracking-wider text-blue-200 font-semibold">Academic Intake</p>
              <p className="text-lg font-black text-[#FFA366]">2026 Batch Enrolling</p>
            </div>
          </div>

          {/* Card Body with 4 Clinical Highlight Blocks */}
          <div className="p-6 sm:p-10 space-y-10">
            
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {programHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAFAF7] rounded-2xl p-6 border border-[#0FA3A3]/20 hover:border-[#0FA3A3]/40 hover:bg-white transition-all duration-300 shadow-soft flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-white rounded-xl border border-[#0FA3A3]/20 shadow-sm group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[11px] font-bold text-[#0C8787] bg-[#EAF7F6] px-2.5 py-1 rounded-full border border-[#0FA3A3]/20">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#0B2E6B] text-lg font-heading">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Regulatory Advisory Note (NMC / Regulatory Guidelines) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 flex gap-4 items-start shadow-soft">
              <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm space-y-1.5 leading-relaxed">
                <p className="font-extrabold text-amber-900 uppercase tracking-wide text-xs">
                  Important Regulatory Advisory & Transparency Note
                </p>
                <p className="text-amber-900/90 font-normal">
                  Medical licensing rules, qualification screening frameworks (such as FMGE / NExT), internship guidelines, and eligibility requirements vary across national medical authorities (e.g., National Medical Commission in India, WHO, ECFMG). Students and parents are strongly encouraged to independently verify all current statutory criteria before finalizing enrollment.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" />
                <span>Download official university brochure & syllabus breakdown</span>
              </div>

              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="btn-coral px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-coral-glow w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>Request Detailed Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
