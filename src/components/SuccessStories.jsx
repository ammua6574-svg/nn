import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, ArrowRight, ChevronLeft, ChevronRight, Award, GraduationCap, Building2 } from 'lucide-react';

export default function SuccessStories() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const stories = [
    {
      name: 'Sneha Reddy',
      from: 'Visakhapatnam, Andhra Pradesh',
      program: 'M.S. in Data Science',
      university: 'Northeastern University, Boston (USA 🇺🇸)',
      scholarship: '$12,000 Dean’s Merit Fellowship',
      visaStatus: 'F-1 Visa Approved in First Attempt',
      quote: 'Aviate Overseas made my US application seamless. Their advisors guided my SOP drafting and conducted 3 rigorous mock visa rounds. I secured admits from both NYU and Northeastern with scholarship!'
    },
    {
      name: 'Aditya Varma & Dr. Srinivas (Father)',
      from: 'Vizianagaram, Andhra Pradesh',
      program: 'Bachelor of Engineering (Automotive & AI)',
      university: 'RWTH Aachen University (Germany 🇩🇪)',
      scholarship: '100% Tuition Waiver (Public University)',
      visaStatus: 'German National Student Visa Granted',
      quote: 'Studying engineering in Germany was our dream, but German admission paperwork seemed daunting. Aviate managed our APS verification, blocked account, and university portal filings flawlessly.'
    },
    {
      name: 'Meghana R. Pillai',
      from: 'Hyderabad, Telangana',
      program: 'M.Sc. International Business Management',
      university: 'University of Leeds (United Kingdom 🇬🇧)',
      scholarship: '£5,000 International Excellence Award',
      visaStatus: 'UK Tier-4 Student Visa (Priority Stamp)',
      quote: 'From IELTS 7.5 prep to university shortlisting and visa processing, the team at Aviate was available 24/7. Now studying in the UK with a 2-year post-study work visa!'
    },
    {
      name: 'Rohan Sharma',
      from: 'Bengaluru, Karnataka',
      program: 'MBBS / Doctor of Medicine',
      university: 'Universidade Católica Timorense (UCT Timor-Leste 🇹🇱)',
      scholarship: 'Affordable Direct Institutional Fee Structure',
      visaStatus: 'Student Residence Visa Cleared',
      quote: 'Aviate provided authentic, transparent guidance for medical education abroad. Complete hostel accommodations, Indian food, and English medium clinical rotations made UCT the perfect choice.'
    }
  ];

  const nextStory = () => {
    setCurrentIdx((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="success-stories" className="py-24 sm:py-32 bg-[#FAFAF7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#06152D]/15 text-xs font-bold uppercase tracking-widest text-[#06152D] shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
            STUDENT SUCCESS & VISA GRANTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#06152D] leading-tight">
            Real Stories, Real Global Admits
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Hear from students and parents across India who trusted Aviate™ to achieve their study abroad ambitions.
          </p>
        </div>

        {/* Testimonials Carousel Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Rating & Admit Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#10B981] bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">
                    {item.visaStatus}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>

                {/* University & Scholarship callouts */}
                <div className="p-3.5 rounded-2xl bg-[#F6F1E7] space-y-1">
                  <p className="text-xs font-bold text-[#06152D] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#F59E0B]" /> {item.university}
                  </p>
                  <p className="text-[11px] font-semibold text-[#0FA3A3] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> {item.scholarship}
                  </p>
                </div>

              </div>

              {/* Student Profile Info */}
              <div className="border-t border-slate-100 pt-5 mt-5 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#06152D] to-[#0FA3A3] text-white flex items-center justify-center font-bold text-base shadow-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold font-heading text-[#06152D] text-sm leading-snug">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 font-normal">{item.from} • <strong className="text-slate-700">{item.program}</strong></p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
