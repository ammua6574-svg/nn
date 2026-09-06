import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function TopBar() {
  return (
    <header className="flex justify-between items-center bg-[#0B2E6B] text-white text-xs px-4 py-1.5">
      <div className="flex items-center space-x-4">
        <a href="mailto:Info@aviateoverseas.com" className="flex items-center hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
          <MdEmail className="inline-block mr-1" />Info@aviateoverseas.com
        </a>
        <a href="tel:+919418944999" className="flex items-center hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
          <MdPhone className="inline-block mr-1" />+91 94189 44999
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <MdLocationOn className="inline-block mr-1" />
        <span>Miracle Homes-2, MIG-7 Plot no-2, Vivekananda Colony, Vizianagaram-03</span>
      </div>
    </header>
  );
}
