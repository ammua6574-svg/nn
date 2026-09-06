import React from 'react';
import engineeringImg from '../assets/engineering_section_image.jpg'; // place generated image here

const MastersBEngSection = () => {
  return (
    <section
      id="masters-beng"
      className="bg-gradient-to-r from-navy via-blue-800 to-indigo-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text column */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-accentGold mb-6">
            Masters &amp; Bachelors of Engineering
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Embark on a world‑class engineering journey with Aviate Overseas Education. Our seasoned counselors
            tailor the perfect program, secure scholarships, and handle every visa step so you can focus on
            learning.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Top‑ranked global universities</li>
            <li>Personalized program matching</li>
            <li>Comprehensive scholarship assistance</li>
            <li>End‑to‑end visa support</li>
          </ul>
          <button
            className="bg-accentGold hover:bg-accentDarkGold text-navy font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Free Consultation
          </button>
        </div>
        {/* Image column */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={engineeringImg}
            alt="Engineering study abroad"
            className="rounded-2xl shadow-xl hover:scale-105 transition transform"
          />
        </div>
      </div>
    </section>
  );
};

export default MastersBEngSection;
import engineeringImg from '../assets/engineering_section_image.jpg'; // place generated image here

const MastersBEngSection = () => {
  return (
    <section id="masters-beng" className="bg-navy text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-accentGold mb-4">
            Masters &amp; Bachelors of Engineering
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Pursue world‑class engineering degrees with Aviate Overseas Education. Our expert counselors guide you through program selection, admission requirements, scholarships, and visa processes for a seamless journey.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Top‑ranked global universities</li>
            <li>Personalized program matching</li>
            <li>Comprehensive scholarship assistance</li>
            <li>End‑to‑end visa support</li>
          </ul>
          <button
            className="bg-accentGold hover:bg-accentDarkGold text-navy font-semibold px-6 py-3 rounded-xl transition"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Free Consultation
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={engineeringImg} alt="Engineering study abroad" className="rounded-xl shadow-glass max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default MastersBEngSection;
