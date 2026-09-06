import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rohan Deshmukh & Parents',
      city: 'Pune, Maharashtra',
      course: '2026 MBBS Aspirant at UCT',
      quote: 'We were looking for an affordable MBBS destination with English instruction and zero donation. Aviate counsellors explained the entire UCT fee installment schedule and living costs in Dili with complete transparency.',
      verified: 'Verified Counselling Candidate'
    },
    {
      name: 'Ananya S. & Dr. Suresh (Father)',
      city: 'Hyderabad, Telangana',
      course: '2026 Medical Batch Applicant',
      quote: 'The direct university account payment structure and peaceful environment in Timor-Leste gave our family immense confidence. Aviate assisted us with mark sheet verification and visa pre-checks within 48 hours.',
      verified: 'Verified Admission Applicant'
    },
    {
      name: 'Karthik Nair',
      city: 'Kochi, Kerala',
      course: 'NEET Qualified Aspirant',
      quote: 'Comparing with high private college fees in India, Timor-Leste’s ~$17.8k USD total tuition is extraordinarily budget-friendly. The syllabus aligns directly with what Indian students need.',
      verified: 'Verified Aspirant Profile'
    }
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Star className="w-3.5 h-3.5 text-[#FF7A29]" />
            STUDENT & PARENT EXPERIENCES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            What Aspirants Say About Aviate™
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real feedback from Indian PCB students and parents planning their medical degree admissions with Aviate™.
          </p>
        </div>

        {/* Testimonials List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-7 sm:p-8 rounded-3xl flex flex-col justify-between shadow-soft hover:shadow-card hover:border-[#0FA3A3]/40 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                
                {/* Header Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FF7A29]/30" />
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>

              </div>

              {/* User Profile */}
              <div className="border-t border-slate-100 pt-5 mt-6 space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0B2E6B] to-[#0FA3A3] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-[#0B2E6B] text-sm leading-snug">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 font-normal">{item.city} • {item.course}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#1FAE6B] font-semibold pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
