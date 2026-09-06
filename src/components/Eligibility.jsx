import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export default function Eligibility() {
  const [pcbScore, setPcbScore] = useState('');
  const [neetStatus, setNeetStatus] = useState('Qualified');
  const [checkedResult, setCheckedResult] = useState(null);

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickCheck = (e) => {
    e.preventDefault();
    const pcb = parseFloat(pcbScore);
    if (isNaN(pcb)) {
      alert('Please enter your 12th PCB percentage');
      return;
    }

    if (pcb >= 50 && neetStatus === 'Qualified') {
      setCheckedResult({
        status: 'eligible',
        title: 'High Eligibility Probability (Direct Pathway)',
        message: 'Your PCB percentage (>=50%) and NEET Qualified status meet the standard criteria for 2026 MBBS admission at UCT.'
      });
    } else if (pcb >= 40 && neetStatus === 'Qualified') {
      setCheckedResult({
        status: 'conditional',
        title: 'Eligible (Reserved / Category Evaluation)',
        message: 'Your profile is eligible for category-based evaluation. Contact our counsellors to verify category marksheet benchmarks.'
      });
    } else {
      setCheckedResult({
        status: 'advisory',
        title: 'Counselling Required',
        message: 'NEET qualification or specific minimum marks may be mandatory under current statutory norms. Please consult our expert medical counsellors for personalized path assessment.'
      });
    }
  };

  const checklistItems = [
    { title: 'Indian Medical Aspirant Status', desc: 'Indian national / citizen looking to pursue an international MBBS degree.' },
    { title: '12th Standard Qualification', desc: 'Completed Higher Secondary (10+2 / CBSE / ICSE / State Board) or equivalent.' },
    { title: 'PCB Core Subjects', desc: 'Physics, Chemistry, and Biology / Biotechnology as core mandatory subjects.' },
    { title: '50% Aggregate in PCB (General)', desc: 'Minimum 50% marks in PCB aggregate (40% for SC/ST/OBC category applicants).' },
    { title: 'NEET Exam Qualification', desc: 'Valid NEET qualifying scorecard matching current year/regulatory guidelines.' },
    { title: 'Valid Indian Passport', desc: 'Minimum 18 months passport validity for student visa immigration clearances.' }
  ];

  return (
    <section id="eligibility" className="py-24 sm:py-32 bg-eligibility-wash relative overflow-hidden text-[#071C42]">
      
      {/* Soft Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1FAE6B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1FAE6B]/30 text-xs font-bold uppercase tracking-widest text-[#1FAE6B] shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            ADMISSIONS CHECKLIST & CRITERIA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Who Can Apply for MBBS in Timor-Leste?
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Review the baseline academic and statutory criteria required for 2026 admissions at Universidade Católica Timorense.
          </p>
        </div>

        {/* Master Content Layout: Checklist left, Instant Checker Widget right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: 6 Checklist Cards with Green Left Accent Bar */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 text-left">
            {checklistItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-100 border-l-4 border-l-[#1FAE6B] shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CheckCircle className="w-5 h-5 text-[#1FAE6B] shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">CRITERIA {idx + 1}</span>
                  </div>
                  <h4 className="font-bold font-heading text-[#0B2E6B] text-base leading-snug">{item.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Instant Eligibility Checker Widget & Advisory Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Instant Eligibility Checker Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1FAE6B]/25 shadow-card space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="space-y-0.5">
                  <h3 className="text-lg font-bold font-heading text-[#0B2E6B] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF7A29]" />
                    Instant Eligibility Checker
                  </h3>
                  <p className="text-xs text-slate-500 font-light">Test your profile in 5 seconds</p>
                </div>
                <span className="text-[10px] font-bold text-[#1FAE6B] bg-[#F1FAF5] px-2.5 py-1 rounded-full border border-[#1FAE6B]/20">
                  2026 Rules
                </span>
              </div>

              <form onSubmit={handleQuickCheck} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                    12th Standard PCB % Aggregate *
                  </label>
                  <input
                    type="number"
                    min="35"
                    max="100"
                    placeholder="e.g. 68"
                    value={pcbScore}
                    onChange={(e) => setPcbScore(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1FAE6B] text-sm bg-[#FAFAF7]"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                    NEET Exam Status *
                  </label>
                  <select
                    value={neetStatus}
                    onChange={(e) => setNeetStatus(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1FAE6B] text-sm bg-white"
                  >
                    <option value="Qualified">NEET Qualified (Scorecard Available)</option>
                    <option value="Appearing">Appearing in Upcoming NEET</option>
                    <option value="Not Qualified">Not Qualified / Need Guidance</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1FAE6B] hover:bg-[#19945b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Check Qualification Status</span>
                </button>
              </form>

              {/* Dynamic Result Box */}
              {checkedResult && (
                <div
                  className={`p-4 rounded-2xl border text-xs space-y-1.5 animate-fade-in-up ${
                    checkedResult.status === 'eligible'
                      ? 'bg-green-50 border-green-200 text-green-950'
                      : checkedResult.status === 'conditional'
                      ? 'bg-blue-50 border-blue-200 text-blue-950'
                      : 'bg-amber-50 border-amber-200 text-amber-950'
                  }`}
                >
                  <p className="font-bold flex items-center gap-1.5 text-sm">
                    {checkedResult.status === 'eligible' ? '✅' : 'ℹ️'} {checkedResult.title}
                  </p>
                  <p className="leading-relaxed">{checkedResult.message}</p>
                </div>
              )}

            </div>

            {/* Amber Advisory Card */}
            <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 flex gap-3.5 shadow-soft">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1 leading-relaxed">
                <p className="font-bold text-amber-900">Regulatory Verification Requirement</p>
                <p className="text-slate-700">
                  Statutory guidelines of the National Medical Commission (NMC) in India mandate NEET qualification for Indian students seeking to register degrees from abroad. Check individual category cutoffs with our team.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="btn-coral w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider inline-flex justify-center items-center gap-2 shadow-coral-glow group"
              >
                <span>Speak with an Admissions Evaluator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
