import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'programs', label: 'Programs' },
  { id: 'engineering', label: 'Engineering Abroad' },
  { id: 'masters', label: 'Masters Abroad' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'universities', label: 'Universities' },
  { id: 'services', label: 'Services' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'visa', label: 'Visa' },
  { id: 'ielts-pte', label: 'IELTS / PTE' },
  { id: 'success-stories', label: 'Success Stories' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-navy text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">Overseas Education</div>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-accentGold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="md:hidden bg-navy pb-4">
          <ul className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 hover:text-accentGold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
