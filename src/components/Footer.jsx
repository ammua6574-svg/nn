import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#071C42] text-white pt-20 pb-10 border-t border-white/10 text-left relative overflow-hidden">
      
      {/* Background Topo Texture */}
      <div className="absolute inset-0 topo-pattern pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Foot Grid Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-[#0B2E6B] to-[#0FA3A3] rounded-2xl border border-white/20 shadow-md">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#FF7A29]">
                  <path d="M15,75 L50,18 L85,75 L50,62 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl font-heading tracking-tight leading-none text-white">
                  Aviate<span className="text-[#FF7A29]">™</span>
                </span>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold mt-1">
                  Overseas Education
                </span>
              </div>
            </div>
            
            <p className="text-blue-100 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Helping Indian medical aspirants pursue credible, transparent, and affordable international MBBS degrees at Universidade Católica Timorense (UCT) in Dili, Timor-Leste.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: <Facebook className="w-4 h-4" />, link: '#' },
                { icon: <Instagram className="w-4 h-4" />, link: '#' },
                { icon: <Youtube className="w-4 h-4" />, link: '#' },
                { icon: <Linkedin className="w-4 h-4" />, link: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#FF7A29] text-blue-100 hover:text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all"
                  aria-label="Social Link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links: MBBS Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF904D] font-heading">
              Study MBBS in Timor-Leste
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-blue-100">
              <li><a href="#why-timor-leste" onClick={(e) => handleScrollToSection(e, '#why-timor-leste')} className="hover:text-white transition-colors">Why Timor-Leste</a></li>
              <li><a href="#mbbs-program" onClick={(e) => handleScrollToSection(e, '#mbbs-program')} className="hover:text-white transition-colors">MBBS Program Curriculum</a></li>
              <li><a href="#university" onClick={(e) => handleScrollToSection(e, '#university')} className="hover:text-white transition-colors">Universidade Católica Timorense (UCT)</a></li>
              <li><a href="#fees" onClick={(e) => handleScrollToSection(e, '#fees')} className="hover:text-white transition-colors">Tuition Fees & Living Costs</a></li>
              <li><a href="#eligibility" onClick={(e) => handleScrollToSection(e, '#eligibility')} className="hover:text-white transition-colors">Eligibility & NEET Requirements</a></li>
              <li><a href="#process" onClick={(e) => handleScrollToSection(e, '#process')} className="hover:text-white transition-colors">9-Step Admission Process</a></li>
            </ul>
          </div>

          {/* Quick Links: Student Support */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF904D] font-heading">
              Student Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-blue-100">
              <li><a href="#accommodation" onClick={(e) => handleScrollToSection(e, '#accommodation')} className="hover:text-white transition-colors">Hostel & Food Provisions</a></li>
              <li><a href="#documents" onClick={(e) => handleScrollToSection(e, '#documents')} className="hover:text-white transition-colors">Required Documents</a></li>
              <li><a href="#services" onClick={(e) => handleScrollToSection(e, '#services')} className="hover:text-white transition-colors">Aviate™ Advisory Services</a></li>
              <li><a href="#faq" onClick={(e) => handleScrollToSection(e, '#faq')} className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="hover:text-white transition-colors">Free Profile Counselling</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF904D] font-heading">
              Admissions Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0FA3A3] shrink-0 mt-0.5" />
                <span>Aviate Tower, MG Road, Bengaluru, Karnataka 560001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF7A29] shrink-0" />
                <span>+91 99999 99999 / +91 98888 88888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1FAE6B] shrink-0" />
                <span>admissions@aviateoverseas.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FF904D] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer Compliance Area */}
        <div className="border-t border-white/10 pt-8 pb-4 text-[11px] text-blue-200 font-light leading-relaxed">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-left">
            <ShieldCheck className="w-5 h-5 text-[#FF7A29] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white font-semibold">Statutory & Educational Disclaimer:</strong> Information provided on this website is for general educational counselling and facilitation purposes. University admission parameters, tuition structures, course modules, licensing requirements, screening test mandates (such as FMGE/NExT by NMC in India), and visa regulations are subject to official confirmation by the university and relevant national regulatory bodies. Prospective candidates must verify all current statutory criteria before enrollment.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-200">
          <span>© 2026 Aviate™ Overseas Education. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Admission Guidance</a>
            <span>•</span>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="hover:text-white transition-colors">Student Grievance Cell</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
