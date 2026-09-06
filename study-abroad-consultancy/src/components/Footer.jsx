import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Brand & Social */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Overseas Education</h2>
          <p className="text-sm mb-4">Your trusted partner for studying abroad.</p>
          <div className="flex space-x-3 text-gray-300">
            <a href="#" aria-label="Facebook" className="hover:text-accentGold">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-accentGold">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accentGold">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accentGold">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-accentGold">Home</a></li>
            <li><a href="#about" className="hover:text-accentGold">About Us</a></li>
            <li><a href="#programs" className="hover:text-accentGold">Programs</a></li>
            <li><a href="#destinations" className="hover:text-accentGold">Destinations</a></li>
            <li><a href="#contact" className="hover:text-accentGold">Contact</a></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Visa Assistance</li>
            <li>IELTS / PTE Coaching</li>
            <li>Scholarship Guidance</li>
            <li>University Application</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-1">Phone: +1 234 567 890</p>
          <p className="text-sm mb-1">Email: info@overseaseducation.com</p>
          <p className="text-sm">Address: 123 Education St, City, Country</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Overseas Education. All rights reserved.
      </div>
    </footer>
  );
}
