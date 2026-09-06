import React from 'react';
import { Stethoscope, ShieldAlert } from 'lucide-react';

export default function CareerPath() {
  const steps = [
    { label: '12th PCB & NEET', desc: 'Secure qualifying status in 10+2 PCB aggregate and valid NEET scorecard.', icon: '01' },
    { label: 'UCT Admission', desc: 'Complete enrollment and obtain study visa for Timor-Leste.', icon: '02' },
    { label: 'Pre-Clinical Phase', desc: 'Foundational biomedical anatomy, physiology, and biochemistry.', icon: '03' },
    { label: 'Para-Clinical Phase', desc: 'Pathology, pharmacology, microbiology, and forensic medicine.', icon: '04' },
    { label: 'Clinical Hospital Rotations', desc: 'Direct patient interaction, surgery, medicine, and ob-gyn postings.', icon: '05' },
    { label: 'MBBS Graduation', desc: 'Receive official medical degree certificate from Universidade Católica Timorense.', icon: '06' },
    { label: 'Licensing & Practice', desc: 'Clear mandatory screening/licensing exams (FMGE / NExT / USMLE / PLAB).', icon: '07' }
  ];

  return (
    <section id="career-path" className="py-24 sm:py-32 bg-[#FAFAF7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Stethoscope className="w-3.5 h-3.5 text-[#0FA3A3]" />
            CAREER PROGRESSION TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Your Roadmap from 12th Student to Medical Doctor
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Understand the complete clinical transition sequence that shapes Indian medical aspirants into skilled global healthcare practitioners.
          </p>
        </div>

        {/* Process Roadmap List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-soft hover:shadow-card hover:border-[#0FA3A3]/40 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="w-9 h-9 rounded-2xl bg-[#0B2E6B] group-hover:bg-[#FF7A29] text-white font-extrabold text-xs font-heading flex items-center justify-center shadow-sm transition-colors">
                    {step.icon}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    STAGE {idx + 1}
                  </span>
                </div>

                <h4 className="font-bold font-heading text-[#0B2E6B] text-base leading-snug">{step.label}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">{step.desc}</p>
              </div>

              <div className="w-6 h-1 bg-[#0FA3A3]/20 rounded-full mt-5 group-hover:w-full group-hover:bg-[#FF7A29] transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Regulation advisory note */}
        <div className="max-w-3xl mx-auto mt-12 p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 flex gap-3.5 items-start text-left shadow-soft">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1 leading-relaxed">
            <p className="font-bold text-amber-900">Licensing & Practice Guidelines</p>
            <p className="text-slate-700">
              Foreign Medical Graduate licensing eligibility and statutory examinations in India are governed by the National Medical Commission (NMC). Students are advised to verify latest statutory notifications before enrollment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
