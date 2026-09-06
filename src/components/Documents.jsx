import React from 'react';
import { FileText, ArrowRight, CheckCircle2, Files } from 'lucide-react';

export default function Documents() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const documentList = [
    { title: 'Valid Indian Passport', desc: 'Minimum 18 months validity remaining with blank visa stamp pages.' },
    { title: '10th Standard Mark Sheet & Certificate', desc: 'Proof of date of birth and secondary school completion.' },
    { title: '12th Standard Mark Sheet (PCB)', desc: 'Higher secondary certificate with Physics, Chemistry & Biology.' },
    { title: '12th School Leaving / Transfer Certificate', desc: 'Official school clearance and conduct certification.' },
    { title: 'NEET Scorecard & Admit Card', desc: 'Official NTA scorecard verifying qualified eligibility status.' },
    { title: 'Passport Size Photographs', desc: 'Recent studio photographs with clear white background.' },
    { title: 'Medical Fitness Certificate', desc: 'General physician clearance confirming physical health fitness.' },
    { title: 'Birth Certificate (Apostilled)', desc: 'Official birth registry document where applicable for student visa.' }
  ];

  return (
    <section id="documents" className="py-24 sm:py-32 bg-[#FAFAF7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Files className="w-3.5 h-3.5 text-[#0FA3A3]" />
            DOCUMENTATION CHECKLIST
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Documents Required for Admission
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ensure you have these primary academic records and certificates ready to expedite your 2026 application and student visa processing.
          </p>
        </div>

        {/* Master Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: 8 Document Checklist Cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 text-left">
            {documentList.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start gap-4 shadow-soft hover:shadow-card hover:border-[#0FA3A3]/40 transition-all duration-300"
              >
                <div className="p-2.5 bg-[#F6F1E7] rounded-xl text-[#0FA3A3] shrink-0 mt-0.5 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold font-heading text-[#0B2E6B] text-sm sm:text-base leading-snug">{doc.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Verification Support Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#071C42] via-[#0B2E6B] to-[#0FA3A3] text-white p-8 rounded-3xl text-left shadow-card relative overflow-hidden flex flex-col justify-between border border-white/15">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A29]/15 rounded-full blur-2xl"></div>
            
            <div className="space-y-5 relative z-10">
              <span className="bg-[#FF7A29] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm inline-block">
                Verification Support
              </span>

              <h3 className="text-xl font-extrabold font-heading text-white leading-tight">
                Aviate™ Document Attestation & Apostille Assistance
              </h3>

              <p className="text-xs sm:text-sm font-light text-blue-100 leading-relaxed">
                Our verification team reviews every marksheet, notarization, and medical report to prevent administrative delays and ensure flawless submission directly to UCT.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/15 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                  <span>Notary & MEA Apostille Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                  <span>Embassy Visa Documentation Compilation</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8 relative z-10">
              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="btn-coral w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-coral-glow group"
              >
                <span>Submit Documents for Pre-Check</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
