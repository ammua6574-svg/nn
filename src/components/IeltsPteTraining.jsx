import React from 'react';
import { BookOpen, CheckCircle2, Award, ArrowRight, Sparkles, Target, Users } from 'lucide-react';

export default function IeltsPteTraining() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      test: 'IELTS Academic',
      target: 'Target: 7.5+ Band',
      duration: '4 to 8 Weeks',
      features: ['Cambridge official study material', 'Weekly speaking 1-on-1 mocks', 'Writing task 1 & 2 evaluation with band grading', 'Free diagnostic assessment test']
    },
    {
      test: 'PTE Academic',
      target: 'Target: 79+ Score',
      duration: '3 to 6 Weeks',
      features: ['AI scoring simulation platform', 'Pronunciation & oral fluency drills', 'Real exam repeated question banks', 'Full-length sectional timed mocks']
    },
    {
      test: 'Duolingo English Test (DET)',
      target: 'Target: 125+ Score',
      duration: '2 to 4 Weeks',
      features: ['Adaptive test strategy sessions', 'Subscore breakdown mastery', 'Fast track 15-day crash courses', 'Accepted by 4,000+ global universities']
    }
  ];

  return (
    <section id="ielts-pte" className="py-24 sm:py-32 bg-[#FAFAF7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#06152D]/15 text-xs font-bold uppercase tracking-widest text-[#06152D] shadow-sm">
            <Target className="w-3.5 h-3.5 text-[#F59E0B]" />
            TEST PREPARATION ACADEMY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#06152D] leading-tight">
            IELTS • PTE • Duolingo Coaching
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Score your dream band with certified master trainers, real-time AI test simulations, and personalized 1-on-1 speaking clinics.
          </p>
        </div>

        {/* 3 Test Prep Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card hover:shadow-2xl hover:border-[#F59E0B]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold font-heading text-[#06152D] group-hover:text-[#F59E0B] transition-colors">
                      {course.test}
                    </h3>
                    <span className="text-xs font-bold text-[#10B981] bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">
                      {course.target}
                    </span>
                  </div>
                  <div className="p-3 bg-[#F6F1E7] rounded-2xl">
                    <BookOpen className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="pt-8 border-t border-slate-100 mt-6">
                <a
                  href="#contact"
                  onClick={handleScrollToForm}
                  className="w-full py-3 rounded-full bg-[#06152D] hover:bg-gradient-to-r hover:from-[#F59E0B] hover:to-[#F97316] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Book Free Diagnostic Test</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
