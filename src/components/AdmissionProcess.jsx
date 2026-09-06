import React, { useState } from 'react';
import { HelpCircle, ClipboardCheck, FileCheck2, Send, FileText, Landmark, ShieldCheck, Plane, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AdmissionProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: '01', title: 'Free Medical Counselling', desc: '1-on-1 counseling with expert medical advisors to review career goals, budget parameters, and UCT campus facilities.', icon: <HelpCircle className="w-5 h-5 text-[#FF7A29]" /> },
    { num: '02', title: 'Eligibility Assessment', desc: 'Detailed academic evaluation of 12th PCB marks, NEET scorecard status, and statutory eligibility checklist.', icon: <ClipboardCheck className="w-5 h-5 text-[#0FA3A3]" /> },
    { num: '03', title: 'Document Verification', desc: 'Apostille assistance and certification reviews on marksheets, passport copies, and health declarations.', icon: <FileCheck2 className="w-5 h-5 text-[#1FAE6B]" /> },
    { num: '04', title: 'University Application', desc: 'Formal submission of international application to the Faculty of Medicine at Universidade Católica Timorense.', icon: <Send className="w-5 h-5 text-[#0B2E6B]" /> },
    { num: '05', title: 'Official Admission Letter', desc: 'Receipt of official UCT provisional admission letter and allocated student seat confirmation.', icon: <FileText className="w-5 h-5 text-[#FF7A29]" /> },
    { num: '06', title: 'Tuition Fee Payment', desc: 'Transparent fee transfer directly to official university bank accounts with verifiable institutional receipts.', icon: <Landmark className="w-5 h-5 text-[#0FA3A3]" /> },
    { num: '07', title: 'Visa Processing', desc: 'Embassy file documentation compilation and issuance of official student visa approvals for Timor-Leste.', icon: <ShieldCheck className="w-5 h-5 text-[#1FAE6B]" /> },
    { num: '08', title: 'Travel & Departure', desc: 'Group flight booking, pre-departure briefing in India, and airport transit coordination directly to Dili.', icon: <Plane className="w-5 h-5 text-[#0B2E6B]" /> },
    { num: '09', title: 'Campus Onboarding', desc: 'Airport pickup in Dili, hostel room allocation, local SIM cards, currency exchange, and university orientation.', icon: <UserCheck className="w-5 h-5 text-[#FF7A29]" /> }
  ];

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0FA3A3]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Plane className="w-3.5 h-3.5 text-[#FF7A29]" />
            STEP-BY-STEP ADMISSION ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Your Structured Journey to Becoming a Doctor
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A clear, transparent 9-step roadmap taking Indian students smoothly from initial inquiry to classroom onboarding in Dili.
          </p>
        </div>

        {/* Connected Flight Roadmap Journey Visual */}
        <div className="relative">
          
          {/* SVG Flight Path Curved Connector (visible on desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 -translate-y-1/2 pointer-events-none z-0 opacity-20">
            <svg viewBox="0 0 1200 400" fill="none" className="w-full h-40">
              <path
                d="M 50,80 C 300,10 600,150 900,50 C 1050,0 1150,80 1180,80"
                stroke="#0B2E6B"
                strokeWidth="3"
                strokeDasharray="8 8"
                className="flight-path-animated"
              />
            </svg>
          </div>

          {/* 9 Process Cards Grid with Connected Flow */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-soft hover:shadow-card flex flex-col justify-between text-left group cursor-pointer ${
                  activeStep === idx
                    ? 'border-[#0B2E6B] ring-2 ring-[#0B2E6B]/10 -translate-y-1'
                    : 'border-slate-200/80 hover:border-[#0FA3A3]/40'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full bg-[#0B2E6B] text-white text-xs font-black font-heading flex items-center justify-center shadow-sm">
                        {step.num}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        PHASE {idx + 1}
                      </span>
                    </div>

                    <div className="p-2.5 bg-[#F6F1E7] rounded-xl border border-slate-100 group-hover:scale-110 transition-transform shadow-sm">
                      {step.icon}
                    </div>
                  </div>

                  {/* Info Content */}
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2E6B] group-hover:text-[#FF7A29] transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Aviate™ Verified Step</span>
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B]" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#0B2E6B]/10 shadow-card max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold font-heading text-[#0B2E6B]">Ready to begin Step 01?</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Schedule your free 1-on-1 MBBS admission counselling session with Aviate™ today.
            </p>
          </div>
          <a
            href="#contact"
            onClick={handleScrollToForm}
            className="btn-coral px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-2 shadow-coral-glow"
          >
            <span>Start Step 01 Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
