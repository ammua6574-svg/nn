import React, { useState } from 'react';
import { ShieldAlert, FileSpreadsheet, Info, ArrowRight, Calculator, ReceiptText } from 'lucide-react';

export default function FeeStructure() {
  const [currency, setCurrency] = useState('USD'); // 'USD' or 'INR'
  const exchangeRate = 86; // 1 USD ~ 86 INR

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatPrice = (usdAmount, isFixedInr = false, inrValue = 0) => {
    if (isFixedInr) {
      if (currency === 'INR') {
        return `₹${inrValue.toLocaleString('en-IN')}/-`;
      }
      return `~$${Math.round(inrValue / exchangeRate).toLocaleString('en-US')} USD`;
    }
    if (currency === 'INR') {
      const inr = Math.round(usdAmount * exchangeRate);
      return `₹${inr.toLocaleString('en-IN')}/-*`;
    }
    return `$${usdAmount.toLocaleString('en-US')} USD`;
  };

  const feeData = [
    { year: '1st Year Tuition', usd: 6200, note: 'Foundational Biomedical & Pre-clinical studies' },
    { year: '2nd Year Tuition', usd: 3680, note: 'Para-clinical pathology, pharmacology & micro' },
    { year: '3rd Year Tuition', usd: 3180, note: 'Clinical disciplines & initial hospital attachments' },
    { year: '4th Year Tuition (18 Months)', usd: 4770, note: 'Extended clinical rotations & advanced clinical training' }
  ];

  const totalTuitionUsd = 17830;

  const additionalCharges = [
    { label: 'Enrollment Fee', usd: 1350, note: 'One-time admission registration' },
    { label: 'Application & Processing Fee', usd: 300, note: 'Document matching & verification' },
    { label: 'Clinical Uniform & Lab Kit', usd: 180, note: 'Medical coat, stethoscope kit & scrubs' },
    { label: 'Air Ticket & Visa Processing', isFixedInr: true, inrValue: 150000, note: 'Flight transit & embassy clearance estimate' }
  ];

  return (
    <section id="fees" className="py-24 sm:py-32 bg-fee-ledger relative overflow-hidden text-[#071C42]">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#0FA3A3]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <ReceiptText className="w-3.5 h-3.5 text-[#FF7A29]" />
            FINANCIAL TRANSPARENCY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            MBBS Tuition & Living Cost Structure
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Transparent fee schedules with direct payment pathways to official university accounts. Zero hidden donation fees.
          </p>

          {/* Interactive Currency Switcher */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-slate-200 shadow-soft">
              <span className="text-xs font-semibold text-slate-500 px-3 flex items-center gap-1">
                <Calculator className="w-3.5 h-3.5 text-[#0FA3A3]" /> Display in:
              </span>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-[#0B2E6B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0B2E6B]'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'INR'
                    ? 'bg-[#FF7A29] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#FF7A29]'
                }`}
              >
                INR (₹ Estimate)
              </button>
            </div>
          </div>
        </div>

        {/* Master Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Fee Table Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden text-left">
            
            {/* Table Header */}
            <div className="bg-[#0B2E6B] text-white p-6 sm:p-7 flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold font-heading text-white">Tuition Installment Schedule</h3>
                <p className="text-xs text-blue-200 font-light">
                  Standard degree curriculum schedule at Universidade Católica Timorense
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-2xl border border-white/15">
                <FileSpreadsheet className="w-6 h-6 text-[#FF904D]" />
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {feeData.map((row, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 hover:bg-[#F6F1E7]/40 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-2"
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#0B2E6B] text-base font-heading">{row.year}</span>
                    <p className="text-xs text-slate-500 font-normal">{row.note}</p>
                  </div>
                  <span className="font-extrabold text-[#0B2E6B] text-lg sm:text-xl font-heading shrink-0">
                    {formatPrice(row.usd)}
                  </span>
                </div>
              ))}

              {/* Total Tuition Callout Card with Solid Coral-to-Orange Gradient Block */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FF7A29] via-[#FF8E47] to-[#FF7A29] text-white flex flex-col sm:flex-row justify-between sm:items-center gap-4 shadow-coral-glow">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-widest text-white/90 font-extrabold bg-black/15 px-2.5 py-0.5 rounded-full inline-block">
                    Total Estimated Tuition
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black font-heading text-white">
                    Complete 4-Year Academic Program
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight drop-shadow-sm">
                    {formatPrice(totalTuitionUsd)}
                  </span>
                  {currency === 'INR' && (
                    <p className="text-[10px] text-white/80 font-light mt-0.5">*Based on ₹86/USD conversion</p>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Additional Expenses & Hostel Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Additional Charges Box */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-5">
              
              <h3 className="text-lg font-bold font-heading text-[#0B2E6B] flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <Info className="w-5 h-5 text-[#0FA3A3]" />
                Admission & Registration Expenses
              </h3>
              
              <div className="space-y-4">
                {additionalCharges.map((charge, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start text-sm border-b border-dashed border-slate-100 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[#071C42] font-semibold">{charge.label}</span>
                      <p className="text-[11px] text-slate-500 font-light">{charge.note}</p>
                    </div>
                    <span className="font-bold text-[#0B2E6B] shrink-0 ml-4">
                      {formatPrice(charge.usd, charge.isFixedInr, charge.inrValue)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hostel Living Box */}
              <div className="p-4 sm:p-5 bg-[#F6F1E7] rounded-2xl border border-[#0B2E6B]/10 flex justify-between items-center">
                <div className="space-y-0.5">
                  <h4 className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Hostel Accommodation</h4>
                  <p className="text-sm font-bold text-[#0B2E6B]">Food & Lodging (Standard)</p>
                </div>
                <span className="text-base font-extrabold text-[#0B2E6B] font-heading">
                  {currency === 'INR' ? `₹${Math.round(1650 * exchangeRate).toLocaleString('en-IN')}/-*` : '$1,650 USD'} <span className="text-xs font-normal text-slate-600 block sm:inline">/ 6 Mo</span>
                </span>
              </div>

            </div>

            {/* Disclaimer Alert */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 flex gap-3.5 shadow-soft">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed text-slate-700">
                <strong className="text-amber-900 font-bold">Important Fee Notice:</strong> University fees are payable directly in official currency accounts as per university notifications. Currency exchange values are indicative. Please verify latest intake schedules with our admissions desk.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                onClick={handleScrollToForm}
                className="btn-coral w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider inline-flex justify-center items-center gap-2 shadow-coral-glow group"
              >
                <span>Request Official 2026 Fee Breakdown</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
