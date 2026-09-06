import React from 'react';
import ConsultationLeadForm from './ConsultationLeadForm';
import heroImg from '../assets/hero-image.jpg'; // placeholder image

export default function Home() {
  return (
    <section className="bg-white py-20" id="home-section">
      <div className="max-w-7xl mx-auto px-4 md:flex md:items-center md:gap-8">
        {/* Textual content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Study Abroad with Confidence
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Expert guidance for engineering, masters, MBBS and more. Let us help you achieve your dreams.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="px-6 py-3 bg-accentGold text-white rounded-lg hover:bg-orange-600 transition-colors">
              Book Free Consultation
            </a>
            <a href="#programs" className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-700 transition-colors">
              Explore Programs
            </a>
          </div>
        </div>
        {/* Hero image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={heroImg} alt="Happy international students" className="w-full rounded-lg shadow-glass" />
        </div>
      </div>
      {/* Lead capture form */}
      <div className="mt-12 max-w-3xl mx-auto">
        <ConsultationLeadForm />
      </div>
    </section>
  );
}
