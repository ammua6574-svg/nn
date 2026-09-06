import React from 'react';
import { School, FileCheck, CheckSquare, Banknote, ShieldCheck, Home, PlaneTakeoff, HeartHandshake, PhoneCall, Headphones } from 'lucide-react';

export default function Services() {
  const serviceCards = [
    { title: 'Personalized Profile Counselling', desc: '1-on-1 guidance mapping your 12th PCB scores, NEET marks, and family budget parameters directly to UCT.', icon: <School className="w-5 h-5 text-[#FF7A29]" /> },
    { title: 'University Application Filing', desc: 'Fast-track international admission form submissions, quota allocations, and official offer letter tracking.', icon: <FileCheck className="w-5 h-5 text-[#0FA3A3]" /> },
    { title: 'Attestation & Document Checks', desc: 'Pre-submission document verification, translation authentication, and legal apostille handling.', icon: <CheckSquare className="w-5 h-5 text-[#1FAE6B]" /> },
    { title: 'Transparent Fee Remittance', desc: 'Direct, secure payment guidance to official university bank accounts with verifiable invoices.', icon: <Banknote className="w-5 h-5 text-[#0B2E6B]" /> },
    { title: 'Embassy Visa Processing', desc: 'Complete visa dossier compilation, embassy representation, and expedited student visa stamping.', icon: <ShieldCheck className="w-5 h-5 text-[#FF7A29]" /> },
    { title: 'Hostel Accommodation Booking', desc: 'Pre-arrival room reservations, food catering coordination, and roommate matching for Indian students.', icon: <Home className="w-5 h-5 text-[#0FA3A3]" /> },
    { title: 'Group Flight & Travel Booking', desc: 'Group air tickets from major Indian airports, baggage allowance coordination, and transit supervision.', icon: <PlaneTakeoff className="w-5 h-5 text-[#1FAE6B]" /> },
    { title: 'Pre-Departure Briefings', desc: 'Comprehensive orientation seminars for students and parents covering foreign currency, clothing, and culture.', icon: <HeartHandshake className="w-5 h-5 text-[#0B2E6B]" /> },
    { title: 'Post-Arrival Dili Support', desc: 'Airport pickup in Dili, local SIM card provisioning, campus registration, and local currency exchange.', icon: <PhoneCall className="w-5 h-5 text-[#FF7A29]" /> }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F1E7] relative overflow-hidden text-[#071C42]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B2E6B]/15 text-xs font-bold uppercase tracking-widest text-[#0B2E6B] shadow-sm">
            <Headphones className="w-3.5 h-3.5 text-[#0FA3A3]" />
            COMPLETE ADMISSION SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B2E6B] leading-tight">
            End-to-End Care from India to Dili
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Aviate™ Overseas Education handles every stage of your medical journey so you can focus 100% on your academic success.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCards.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 text-left flex flex-col justify-between border border-slate-200/80 shadow-soft hover:shadow-card hover:border-[#0FA3A3]/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="p-3 bg-[#F6F1E7] rounded-2xl border border-slate-200/60 shadow-sm self-start group-hover:scale-105 transition-transform inline-block">
                  {service.icon}
                </div>
                
                {/* Details */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2E6B] group-hover:text-[#FF7A29] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="w-8 h-1 bg-[#0B2E6B]/15 rounded-full mt-6 group-hover:w-full group-hover:bg-[#FF7A29] transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
