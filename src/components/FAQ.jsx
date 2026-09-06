import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0); // first item open by default
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Admissions & NEET', 'Fees & Hostel', 'Recognition & Licensing', 'Student Living'];

  const allFaqs = [
    {
      category: 'Admissions & NEET',
      q: 'Why should I consider MBBS in Timor-Leste for my medical education?',
      a: 'Timor-Leste offers an emerging, affordable, and safe international medical education pathway with dedicated English instruction at Universidade Católica Timorense (UCT) in Dili. It features reasonable living costs and strong pastoral support tailored for Indian students.'
    },
    {
      category: 'Recognition & Licensing',
      q: 'Is the medical degree recognized in India and globally?',
      a: 'Universidade Católica Timorense is a licensed higher education university in Timor-Leste. For Indian students, practicing eligibility upon graduation depends on adhering to the current statutory guidelines of the National Medical Commission (NMC / FMGE / NExT regulations). We advise every student to verify current statutory requirements before final enrollment.'
    },
    {
      category: 'Fees & Hostel',
      q: 'What is the total tuition fee for the 4-year MBBS program?',
      a: 'The total estimated tuition across the complete 4-year curriculum is approximately $17,830 USD (~₹15.3 Lakhs INR indicative). Year 1 is $6,200 USD, Year 2 is $3,680 USD, Year 3 is $3,180 USD, and Year 4 (18 months) is $4,770 USD, paid in direct installments to the university.'
    },
    {
      category: 'Fees & Hostel',
      q: 'What are the hostel and food arrangements for Indian students?',
      a: 'Structured hostel accommodation with student catering is provided at an estimated cost of $1,650 USD per 6 months (~$275/month including food & room utilities). Vegetarian and non-vegetarian meal preferences are accommodated.'
    },
    {
      category: 'Admissions & NEET',
      q: 'Is NEET qualification mandatory for Indian applicants?',
      a: 'Yes, under current regulations prescribed by the National Medical Commission (NMC) in India, qualifying status in the NEET exam is required for Indian citizens seeking to pursue medical education abroad and later appear for licensing exams in India.'
    },
    {
      category: 'Admissions & NEET',
      q: 'What is the minimum 12th standard percentage required?',
      a: 'Applicants must have completed 10+2 with Physics, Chemistry, and Biology (PCB). Standard eligibility generally requires a minimum of 50% aggregate in PCB for General category and 40% aggregate for reserved categories (SC/ST/OBC).'
    },
    {
      category: 'Student Living',
      q: 'What is the medium of instruction at UCT?',
      a: 'The medical program curriculum, lecture frameworks, and academic literature for international cohorts are delivered in English, accompanied by basic local language orientation to support hospital patient interactions during clinical rotations.'
    },
    {
      category: 'Admissions & NEET',
      q: 'How does Aviate Overseas Education assist in the admission and visa process?',
      a: 'Aviate™ provides full end-to-end support: from profile evaluation, university application filing, document attestation/apostille guidance, student visa clearances with the embassy, flight arrangements, to airport reception and hostel onboarding in Dili.'
    },
    {
      category: 'Student Living',
      q: 'Is Timor-Leste safe for Indian students?',
      a: 'Yes, Timor-Leste is a peaceful Southeast Asian country with warm bilateral relations with India. Dili is a welcoming coastal capital with secure university campuses and peaceful community surroundings.'
    }
  ];

  const filteredFaqs = activeCategory === 'All'
    ? allFaqs
    : allFaqs.filter((f) => f.category === activeCategory);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAFAF7] relative overflow-hidden text-[#071C42]">
      
      {/* Corner Watermark Graphic for Calm, Scanning Experience */}
      <div className="faq-watermark">?</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#0FA3A3]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Get clear, verified answers regarding eligibility, fees, university recognitions, and student lifestyle in Timor-Leste.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIdx(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0B2E6B] text-white shadow-soft'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0B2E6B]/30 hover:text-[#0B2E6B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List with Soft Hover Shadows */}
        <div className="space-y-3.5 text-left">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#0FA3A3]/50 shadow-card'
                    : 'border-slate-200/80 hover:border-slate-300 hover:shadow-soft'
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none gap-4"
                >
                  <span className="font-bold font-heading text-[#0B2E6B] text-sm sm:text-base flex items-start gap-3">
                    <span className="text-[#FF7A29] font-black text-sm">Q{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#0B2E6B] text-white rotate-180' : 'bg-[#F6F1E7] text-[#0B2E6B]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Row */}
                <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                  <div className="faq-inner px-5 sm:px-6 pb-6 pt-1">
                    <div className="border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <span>Still have questions about Timor-Leste MBBS?</span>
          <a href="#contact" className="font-bold text-[#FF7A29] hover:underline">
            Talk to an Aviate™ Advisor →
          </a>
        </div>

      </div>
    </section>
  );
}
