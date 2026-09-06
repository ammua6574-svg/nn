import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['why-timor-leste', 'mbbs-program', 'university', 'fees', 'eligibility', 'process', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 400) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why Timor-Leste', href: '#why-timor-leste', id: 'why-timor-leste' },
    { label: 'MBBS Program', href: '#mbbs-program', id: 'mbbs-program' },
    { label: 'University (UCT)', href: '#university', id: 'university' },
    { label: 'Fees & Costs', href: '#fees', id: 'fees' },
    { label: 'Eligibility', href: '#eligibility', id: 'eligibility' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === '#' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-[#0B2E6B]/15'
          : 'bg-[#071C42]/85 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollToSection(e, '#')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 flex items-center justify-center bg-gradient-to-br from-[#0B2E6B] to-[#0FA3A3] rounded-2xl border border-white/20 shadow-md group-hover:scale-105 transition-all duration-300">
              {/* Flight Icon Symbol */}
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#FF7A29] drop-shadow">
                <path d="M15,75 L50,18 L85,75 L50,62 Z" />
                <path d="M50,18 L50,62 L15,75 Z" fill="#FFA366" opacity="0.3" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-xl font-heading tracking-tight leading-none">
                Aviate<span className="text-[#FF7A29]">™</span>
              </span>
              <span className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold mt-1">
                Overseas Education
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/15 font-semibold shadow-sm'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-1.5 text-xs text-blue-100 hover:text-white font-medium px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0FA3A3]" />
              <span>+91 99999 99999</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="btn-coral px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-coral-glow"
            >
              <span>Apply 2026</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="btn-coral px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
            >
              Apply
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#071C42]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 text-left animate-fade-in-up">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF7A29] text-white font-bold'
                      : 'text-blue-100 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="btn-coral w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Register for Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919999999999"
              className="w-full py-2.5 rounded-xl bg-white/5 text-blue-100 hover:text-white text-center text-xs font-medium flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0FA3A3]" />
              <span>Call Toll-Free: +91 99999 99999</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
