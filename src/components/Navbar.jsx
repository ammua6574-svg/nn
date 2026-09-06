import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight, Globe2, BookOpen, GraduationCap, Stethoscope, Sparkles } from 'lucide-react';
import AviateLogo from './AviateLogo';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDestinationsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const destinationsList = [
    { name: 'United Kingdom', flag: '🇬🇧', tag: '2-Yr PSW Visa', href: '#destinations' },
    { name: 'United States', flag: '🇺🇸', tag: 'STEM 3-Yr OPT', href: '#destinations' },
    { name: 'Canada', flag: '🇨🇦', tag: 'PGWP & PR Pathway', href: '#destinations' },
    { name: 'Australia', flag: '🇦🇺', tag: 'Group of Eight', href: '#destinations' },
    { name: 'Germany', flag: '🇩🇪', tag: 'Free/Low Tuition', href: '#destinations' },
    { name: 'Ireland', flag: '🇮🇪', tag: 'EU Tech Capital', href: '#destinations' },
    { name: 'Timor-Leste (UCT)', flag: '🇹🇱', tag: 'Affordable MBBS', href: '#destinations' },
    { name: 'New Zealand', flag: '🇳🇿', tag: 'High Quality of Life', href: '#destinations' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setDestinationsOpen(false);
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
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06152D]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
          : 'bg-[#06152D]/90 backdrop-blur-sm border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo with Exact Match paper plane mark */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-3 focus:outline-none shrink-0 group"
          >
            <AviateLogo />
            <span className="text-white font-semibold text-lg ml-2">Aviate Overseas Education</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2 text-[13px] text-slate-200 font-medium">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors font-semibold"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              About Us
            </a>

            {/* Destinations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 focus:outline-none"
              >
                <span>Destinations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destinationsOpen ? 'rotate-180 text-[#F59E0B]' : ''}`} />
              </button>

              {destinationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#091E42] border border-white/15 rounded-2xl shadow-2xl p-3 grid grid-cols-1 gap-1 animate-fade-in-up z-50">
                  <div className="px-3 py-1.5 border-b border-white/10 text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider">
                    Study Abroad Destinations
                  </div>
                  {destinationsList.map((dest, i) => (
                    <a
                      key={i}
                      href={dest.href}
                      onClick={(e) => handleNavClick(e, dest.href)}
                      className="px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 hover:text-white flex items-center justify-between transition-colors text-xs"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <span>{dest.flag}</span>
                        <span>{dest.name}</span>
                      </span>
                      <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                        {dest.tag}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#programs"
              onClick={(e) => handleNavClick(e, '#programs')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Programs
            </a>

            <a
              href="#universities"
              onClick={(e) => handleNavClick(e, '#universities')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Universities
            </a>

            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Services
            </a>

            <a
              href="#scholarships"
              onClick={(e) => handleNavClick(e, '#scholarships')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Scholarships
            </a>

            <a
              href="#visa"
              onClick={(e) => handleNavClick(e, '#visa')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Visa
            </a>

            <a
              href="#ielts-pte"
              onClick={(e) => handleNavClick(e, '#ielts-pte')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              IELTS / PTE
            </a>

            <a
              href="#success-stories"
              onClick={(e) => handleNavClick(e, '#success-stories')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Success Stories
            </a>

            <a
              href="#blog"
              onClick={(e) => handleNavClick(e, '#blog')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Blog
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Action Bar: Dark/Light Toggle + Book Consultation Pill CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-slate-200 hover:text-white transition-all focus:outline-none"
              aria-label="Toggle Dark/Light Mode"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>

            {/* Book Free Consultation Pill Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#F59E0B] hover:from-[#D97706] hover:to-[#EA580C] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Open Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#06152D] border-b border-white/15 px-4 pt-3 pb-6 space-y-3 text-left animate-fade-in-up">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="p-2.5 rounded-xl bg-white/5 text-white font-semibold">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">About Us</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, '#programs')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Programs</a>
            <a href="#destinations" onClick={(e) => handleNavClick(e, '#destinations')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Destinations</a>
            <a href="#universities" onClick={(e) => handleNavClick(e, '#universities')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Universities</a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Services</a>
            <a href="#scholarships" onClick={(e) => handleNavClick(e, '#scholarships')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Scholarships</a>
            <a href="#visa" onClick={(e) => handleNavClick(e, '#visa')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Visa</a>
            <a href="#ielts-pte" onClick={(e) => handleNavClick(e, '#ielts-pte')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">IELTS / PTE</a>
            <a href="#success-stories" onClick={(e) => handleNavClick(e, '#success-stories')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Success Stories</a>
            <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="p-2.5 rounded-xl bg-white/5 text-slate-200">Blog</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="p-2.5 rounded-xl bg-white/5 text-slate-200 col-span-2">Contact</a>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-white text-center font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
