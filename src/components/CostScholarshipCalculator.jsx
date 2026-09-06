import React, { useState } from 'react';
import { Calculator, DollarSign, Award, ArrowRight, Sparkles, CheckCircle2, Info } from 'lucide-react';

export default function CostScholarshipCalculator() {
  const [selectedProgram, setSelectedProgram] = useState('engineering');
  const [selectedCountry, setSelectedCountry] = useState('uk');
  const [academicScore, setAcademicScore] = useState(75); // %
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'

  const exchangeRate = 86; // 1 USD ~ 86 INR

  // Pricing matrix
  const matrix = {
    engineering: {
      uk: { tuitionUsd: 18000, livingUsd: 9000, maxScholarshipPct: 35 },
      usa: { tuitionUsd: 28000, livingUsd: 12000, maxScholarshipPct: 40 },
      germany: { tuitionUsd: 1500, livingUsd: 9500, maxScholarshipPct: 20 },
      australia: { tuitionUsd: 24000, livingUsd: 11000, maxScholarshipPct: 30 },
      canada: { tuitionUsd: 20000, livingUsd: 10000, maxScholarshipPct: 30 },
      'timor-leste': { tuitionUsd: 4500, livingUsd: 3300, maxScholarshipPct: 15 }
    },
    masters: {
      uk: { tuitionUsd: 19000, livingUsd: 9500, maxScholarshipPct: 40 },
      usa: { tuitionUsd: 30000, livingUsd: 13000, maxScholarshipPct: 50 },
      germany: { tuitionUsd: 1000, livingUsd: 9500, maxScholarshipPct: 25 },
      australia: { tuitionUsd: 26000, livingUsd: 11500, maxScholarshipPct: 35 },
      canada: { tuitionUsd: 22000, livingUsd: 10500, maxScholarshipPct: 35 },
      'timor-leste': { tuitionUsd: 4500, livingUsd: 3300, maxScholarshipPct: 15 }
    },
    mbbs: {
      uk: { tuitionUsd: 35000, livingUsd: 10000, maxScholarshipPct: 15 },
      usa: { tuitionUsd: 45000, livingUsd: 14000, maxScholarshipPct: 20 },
      germany: { tuitionUsd: 3000, livingUsd: 10000, maxScholarshipPct: 15 },
      australia: { tuitionUsd: 38000, livingUsd: 12000, maxScholarshipPct: 20 },
      canada: { tuitionUsd: 32000, livingUsd: 11000, maxScholarshipPct: 15 },
      'timor-leste': { tuitionUsd: 4457, livingUsd: 3300, maxScholarshipPct: 20 }
    }
  };

  const currentData = matrix[selectedProgram]?.[selectedCountry] || matrix.engineering.uk;

  // Calculate scholarship estimate based on academic score %
  const estimatedScholarshipPct = Math.min(
    currentData.maxScholarshipPct,
    academicScore >= 85
      ? currentData.maxScholarshipPct
      : academicScore >= 75
      ? Math.round(currentData.maxScholarshipPct * 0.7)
      : Math.round(currentData.maxScholarshipPct * 0.35)
  );

  const scholarshipAmountUsd = Math.round((currentData.tuitionUsd * estimatedScholarshipPct) / 100);
  const netTuitionUsd = currentData.tuitionUsd - scholarshipAmountUsd;
  const totalAnnualCostUsd = netTuitionUsd + currentData.livingUsd;

  const formatAmount = (usd) => {
    if (currency === 'INR') {
      const inr = Math.round(usd * exchangeRate);
      return `₹${inr.toLocaleString('en-IN')}/-`;
    }
    return `$${usd.toLocaleString('en-US')} USD`;
  };

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="scholarships" className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#06152D]/15 text-xs font-bold uppercase tracking-widest text-[#06152D] shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#F59E0B]" />
            BUDGET & SCHOLARSHIP ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#06152D] leading-tight">
            Calculate Your Study Abroad Budget
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Estimate tuition fees, cost of living, and potential scholarship grants across your dream study destination.
          </p>

          {/* Currency Toggle */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-soft">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'INR' ? 'bg-[#06152D] text-white shadow-sm' : 'text-slate-600 hover:text-[#06152D]'
                }`}
              >
                Display in INR (₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'USD' ? 'bg-[#F59E0B] text-white shadow-sm' : 'text-slate-600 hover:text-[#F59E0B]'
                }`}
              >
                Display in USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Master Calculator Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-center text-left">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Program Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider block">
                1. Select Academic Program
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'engineering', label: 'B.Tech / BE' },
                  { id: 'masters', label: 'MS / MBA' },
                  { id: 'mbbs', label: 'MBBS Abroad' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProgram(p.id)}
                    className={`p-3 rounded-2xl font-bold border transition-all text-center ${
                      selectedProgram === p.id
                        ? 'bg-[#06152D] text-white border-[#06152D] shadow-sm'
                        : 'bg-[#F6F1E7] text-slate-700 border-transparent hover:border-slate-300'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Country Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider block">
                2. Select Study Destination
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-[#FAFAF7] text-sm font-semibold text-[#06152D] focus:outline-none focus:border-[#F59E0B]"
              >
                <option value="uk">United Kingdom 🇬🇧</option>
                <option value="usa">United States 🇺🇸</option>
                <option value="germany">Germany 🇩🇪</option>
                <option value="australia">Australia 🇦🇺</option>
                <option value="canada">Canada 🇨🇦</option>
                <option value="timor-leste">Timor-Leste (UCT) 🇹🇱</option>
              </select>
            </div>

            {/* Academic Score Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-[#06152D] uppercase tracking-wider">
                  3. Your Academic Percentage / GPA
                </label>
                <span className="font-black text-sm text-[#F59E0B] bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                  {academicScore}%
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                step="1"
                value={academicScore}
                onChange={(e) => setAcademicScore(Number(e.target.value))}
                className="w-full accent-[#F59E0B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>50% (Standard)</span>
                <span>75% (Good)</span>
                <span>90%+ (Distinction)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box Right Column */}
          <div className="lg:col-span-6 bg-[#06152D] text-white p-7 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden border border-white/10">
            
            <div className="flex justify-between items-center border-b border-white/15 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
                Annual Expense Breakdown
              </span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-slate-300 font-medium">
                1st Academic Year
              </span>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Standard Tuition Fee:</span>
                <span className="font-bold text-white">{formatAmount(currentData.tuitionUsd)}</span>
              </div>

              <div className="flex justify-between items-center text-[#10B981] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Estimated Scholarship ({estimatedScholarshipPct}%):
                </span>
                <span>- {formatAmount(scholarshipAmountUsd)}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Est. Living & Accommodation:</span>
                <span className="font-bold text-white">{formatAmount(currentData.livingUsd)}</span>
              </div>

              <div className="border-t border-white/20 pt-4 flex justify-between items-baseline">
                <div>
                  <p className="text-[11px] text-slate-300 font-medium uppercase">Net Estimated Annual Budget</p>
                  <p className="text-2xl sm:text-3xl font-black font-heading text-[#FBBF24] tracking-tight">
                    {formatAmount(totalAnnualCostUsd)}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={handleScrollToForm}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#F97316] hover:from-[#D97706] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all"
            >
              <span>Claim Your Scholarship Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
