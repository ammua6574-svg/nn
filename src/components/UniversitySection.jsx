import React from 'react';
import { Landmark, MapPin, Calendar, DollarSign, Home, ShieldAlert, ArrowRight, CheckCircle2, Building2, Stethoscope } from 'lucide-react';

export default function UniversitySection() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const universityDetails = [
    { label: 'Official Institution', val: 'Universidade Católica Timorense (UCT)', sub: 'São João Paulo II Campus', icon: <Landmark className="w-5 h-5 text-[#0FA3A3]" /> },
    { label: 'Campus Location', val: 'Dili, Timor-Leste', sub: 'Capital City Central District', icon: <MapPin className="w-5 h-5 text-[#FF7A29]" /> },
    { label: 'Faculty', val: 'Medicine & Health Sciences', sub: 'Dedicated Anatomy & Clinical Labs', icon: <Stethoscope className="w-5 h-5 text-[#1FAE6B]" /> },
    { label: 'Intake Period', val: '2026 Academic Cycle', sub: 'Allocated Seats for Indian Students', icon: <Calendar className="w-5 h-5 text-[#0B2E6B]" /> },
    { label: '4-Year Tuition Cost', val: '$17,830 USD Total', sub: 'Structured installment schedule', icon: <DollarSign className="w-5 h-5 text-[#FF7A29]" /> },
    { label: 'Hostel Residency', val: '$1,650 USD / 6 Months', sub: 'Catering & accommodation support', icon: <Home className="w-5 h-5 text-[#0FA3A3]" /> },
  ];

  return (
    <section id="university" className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0FA3A3]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#0FA3A3]" />
            FEATURED MEDICAL INSTITUTION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Universidade Católica Timorense (UCT)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            São João Paulo II Campus, Dili — Timor-Leste's prestigious private higher education institution providing dedicated medical degree programs.
          </p>
        </div>

        {/* Master Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Navy-to-Deep-Teal Architectural Hero Block with Campus Silhouette */}
          <div className="lg:col-span-5 bg-uct-panel rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-card border border-white/15">
            
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A29]/15 rounded-full blur-3xl"></div>
            
            <div className="space-y-6 relative z-10 text-left">
              
              {/* Institution Icon */}
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-sm">
                <Landmark className="w-8 h-8 text-[#FF904D]" />
              </div>

              <div className="space-y-2">
                <span className="text-[#FF904D] text-xs font-bold uppercase tracking-widest">
                  Represented University
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                  Universidade Católica Timorense
                </h3>
                <p className="text-blue-100 font-light text-sm leading-relaxed pt-1">
                  Located in the capital city of Dili, UCT provides modern lecture halls, clinical skills laboratories, anatomical specimen facilities, and international student advisory cells.
                </p>
              </div>

              {/* Institution Highlights */}
              <div className="space-y-3 pt-4 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1FAE6B] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">English Curriculum & Study Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1FAE6B] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">Hospital Clinical Rotations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1FAE6B] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">Dedicated International Student Support</span>
                </div>
              </div>

            </div>

            {/* Bottom Tag */}
            <div className="pt-8 border-t border-white/15 mt-8 relative z-10 flex items-center justify-between text-xs text-blue-200">
              <span>📍 Dili, Timor-Leste</span>
              <span className="text-[#FF904D] font-bold">2026 Intake Open</span>
            </div>

          </div>

          {/* Right Column: Info Grid Cards on Soft Sand Foundation */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 text-left">
            
            <div className="grid sm:grid-cols-2 gap-4">
              {universityDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#0B2E6B]/10 hover:border-[#0FA3A3]/40 transition-all duration-300 shadow-soft hover:shadow-card flex items-start gap-4"
                >
                  <div className="p-3 bg-[#F6F1E7] rounded-xl shrink-0 flex items-center justify-center shadow-sm">
                    {detail.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">{detail.label}</h4>
                    <p className="font-extrabold text-[#0B2E6B] text-sm sm:text-base font-heading leading-tight">{detail.val}</p>
                    <p className="text-xs text-slate-500 font-normal">{detail.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advisory disclaimer */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-200 text-amber-950 flex gap-3.5 shadow-soft">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed text-slate-700">
                <strong className="text-amber-900 font-bold">Admissions Note:</strong> Specific seat allocation, syllabus matrices, and academic term dates are subject to official confirmation sheets issued by the university registrar at the time of formal application processing.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="btn-coral px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-coral-glow group"
              >
                <span>Enquire About UCT Admissions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
