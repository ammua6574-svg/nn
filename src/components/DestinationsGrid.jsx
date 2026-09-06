import React from 'react';
import { Globe2, ArrowRight, Clock, DollarSign, Award, CheckCircle2 } from 'lucide-react';

export default function DestinationsGrid() {
  const destinations = [
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
      pswVisa: '2 Years Post-Study Work',
      avgTuition: '£14,000 – £26,000 / yr',
      intakes: 'Sep / Jan / May',
      topUnis: ['Imperial College', 'Univ of Manchester', 'King’s College London', 'Univ of Leeds'],
      highlight: '1-Year Fast Track Masters'
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80',
      pswVisa: '3 Years STEM OPT',
      avgTuition: '$20,000 – $45,000 / yr',
      intakes: 'Fall (Aug) / Spring (Jan)',
      topUnis: ['NYU', 'UT Dallas', 'Northeastern', 'Purdue University'],
      highlight: 'High Tech & Research Grants'
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
      pswVisa: '18 Months Job Seeker Visa',
      avgTuition: '€0 – €3,000 / yr (Public)',
      intakes: 'Winter (Oct) / Summer (Apr)',
      topUnis: ['TU Munich', 'RWTH Aachen', 'TU Berlin', 'Univ of Stuttgart'],
      highlight: 'Tuition-Free Engineering'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
      pswVisa: 'Up to 4 Years Post-Study',
      avgTuition: 'AUD $25,000 – $42,000 / yr',
      intakes: 'Feb / Jul / Nov',
      topUnis: ['Univ of Melbourne', 'UNSW Sydney', 'Univ of Sydney', 'Monash Univ'],
      highlight: 'Group of Eight Top Ranks'
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
      pswVisa: 'Up to 3 Years PGWP',
      avgTuition: 'CAD $18,000 – $32,000 / yr',
      intakes: 'Sep / Jan / May',
      topUnis: ['Univ of Toronto', 'UBC Vancouver', 'McGill', 'Univ of Waterloo'],
      highlight: 'Co-op Work Terms & PR'
    },
    {
      country: 'Timor-Leste (UCT)',
      flag: '🇹🇱',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      pswVisa: 'Clinical Hospital Postings',
      avgTuition: '~$17,830 USD Total (4-Yrs)',
      intakes: '2026 Academic Batch',
      topUnis: ['Universidade Católica Timorense (UCT São João Paulo II)'],
      highlight: 'Affordable English MBBS'
    },
    {
      country: 'Ireland',
      flag: '🇮🇪',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80',
      pswVisa: '2 Years Third-Level Visa',
      avgTuition: '€12,000 – €24,000 / yr',
      intakes: 'Sep / Jan',
      topUnis: ['Trinity College Dublin', 'UCD', 'Univ of Galway', 'UCC'],
      highlight: 'Silicon Docks Tech Careers'
    },
    {
      country: 'New Zealand',
      flag: '🇳🇿',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
      pswVisa: '3 Years Post-Study Work',
      avgTuition: 'NZD $24,000 – $36,000 / yr',
      intakes: 'Feb / Jul',
      topUnis: ['Univ of Auckland', 'Univ of Otago', 'Victoria Univ of Wellington'],
      highlight: 'High Safety & Nature'
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
      pswVisa: 'Long-Term Social Visit Pass',
      avgTuition: 'SGD $22,000 – $38,000 / yr',
      intakes: 'Aug / Jan',
      topUnis: ['NUS', 'NTU Singapore', 'SMU', 'SUTD'],
      highlight: 'Global Financial & AI Hub'
    }
  ];

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#06152D]/15 text-xs font-bold uppercase tracking-widest text-[#06152D] shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-[#0FA3A3]" />
            GLOBAL STUDY DESTINATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#06152D] leading-tight">
            Top Countries for Indian Students
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Compare post-study work rights, average tuition fees, and admission intakes across premier study abroad destinations.
          </p>
        </div>

        {/* 9 Country Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#F59E0B]/50 shadow-card hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image with Navy Tinted Overlay */}
              <div className="relative h-48 overflow-hidden bg-[#06152D]">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06152D] via-[#06152D]/30 to-transparent"></div>
                
                {/* Country Flag & Name Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#06152D]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold shadow-md">
                  <span className="text-base">{dest.flag}</span>
                  <span>{dest.country}</span>
                </div>

                {/* Highlight Tag */}
                <div className="absolute bottom-4 right-4 bg-[#F59E0B] text-[#06152D] px-3 py-1 rounded-full text-[11px] font-extrabold shadow-md">
                  {dest.highlight}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F6F1E7]">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">PSW Visa</span>
                      <span className="font-bold text-[#06152D]">{dest.pswVisa}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F6F1E7]">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Est. Tuition</span>
                      <span className="font-bold text-[#06152D]">{dest.avgTuition}</span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Top Partner Universities</p>
                    <p className="text-xs text-slate-700 font-medium">
                      {dest.topUnis.join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Intakes: {dest.intakes}</span>
                  <a
                    href="#contact"
                    onClick={handleScrollToForm}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F59E0B] hover:text-[#EA580C] group-hover:translate-x-1 transition-all"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
