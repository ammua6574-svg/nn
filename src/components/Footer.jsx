import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin, ShieldCheck, ArrowRight, Globe2 } from 'lucide-react';
import AviateLogo from './AviateLogo';

export default function Footer() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    if (href === '#' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#040E1E] text-white pt-20 pb-10 border-t border-white/10 text-left relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Foot Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <AviateLogo />
            
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Premier study-abroad consultancy empowering Indian students to secure admissions and high-value scholarships at top global universities for <strong>B.Tech, MS/MBA, and MBBS degrees</strong>.
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
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#F59E0B] text-slate-300 hover:text-[#06152D] flex items-center justify-center border border-white/10 transition-all"
                  aria-label="Social Link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Academic Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-heading">
              Our Academic Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-slate-300">
              <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-white transition-colors">Bachelor of Engineering (B.Tech Abroad)</a></li>
              <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-white transition-colors">Masters (MS & STEM Programs)</a></li>
              <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-white transition-colors">International MBA Programs</a></li>
              <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-white transition-colors">MBBS in Timor-Leste (UCT Dili)</a></li>
              <li><a href="#scholarships" onClick={(e) => handleScrollTo(e, '#scholarships')} className="hover:text-white transition-colors">Scholarship Assessment</a></li>
              <li><a href="#ielts-pte" onClick={(e) => handleScrollTo(e, '#ielts-pte')} className="hover:text-white transition-colors">IELTS / PTE Test Academy</a></li>
            </ul>
          </div>

          {/* Global Destinations */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-heading">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-slate-300">
              <li><a href="#destinations" onClick={(e) => handleScrollTo(e, '#destinations')} className="hover:text-white transition-colors">United Kingdom 🇬🇧</a></li>
              <li><a href="#destinations" onClick={(e) => handleScrollTo(e, '#destinations')} className="hover:text-white transition-colors">United States 🇺🇸</a></li>
              <li><a href="#destinations" onClick={(e) => handleScrollTo(e, '#destinations')} className="hover:text-white transition-colors">Germany 🇩🇪</a></li>
              <li><a href="#destinations" onClick={(e) => handleScrollTo(e, '#destinations')} className="hover:text-white transition-colors">Australia 🇦🇺</a></li>
              <li><a href="#destinations" onClick={(e) => handleScrollTo(e, '#destinations')} className="hover:text-white transition-colors">Canada 🇨🇦</a></li>
              <li><a href="#destinations" onClick={(e) => handleScrollTo(e, '#destinations')} className="hover:text-white transition-colors">Timor-Leste 🇹🇱</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] font-heading">
              Head Office Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Miracle Homes -2, MIG -7 Plot no - 2, Vivekananda Colony, Vizianagaram – 03, AP, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>+91 94189 44999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0FA3A3] shrink-0" />
                <span>Info@aviateoverseas.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer Area */}
        <div className="border-t border-white/10 pt-8 pb-4 text-[11px] text-slate-400 font-light leading-relaxed">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-left">
            <ShieldCheck className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white font-semibold">Statutory & Educational Disclaimer:</strong> Aviate™ Overseas Education is an authorized academic consultancy. University admissions, scholarships, post-study work regulations (OPT/PSW/PGWP), and visa clearances are subject to official guidelines issued by partner universities and national immigration authorities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <span>© 2026 Aviate™ Overseas Education. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-white transition-colors">Student Grievance Cell</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
