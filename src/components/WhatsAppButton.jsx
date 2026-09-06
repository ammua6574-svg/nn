import React from 'react';
import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Aviate Team, I am interested in studying MBBS at Universidade Católica Timorense (UCT) in Timor-Leste. Please share 2026 eligibility, fee schedule, and admission details."
    );
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919999999999', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Phone Call Button (Mobile Only) */}
      <button
        onClick={handleCallClick}
        className="sm:hidden w-12 h-12 rounded-2xl bg-[#0B2E6B] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform border border-white/20"
        aria-label="Call Counselors"
      >
        <Phone className="w-5 h-5 fill-white" />
      </button>

      {/* WhatsApp Floating Pill Button with Glow */}
      <button
        onClick={handleWhatsAppClick}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba56] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/40 animate-pulse-ring"
        aria-label="Chat on WhatsApp with MBBS Counsellor"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.202-1.362a9.92 9.92 0 004.81 1.233h.005c5.507 0 9.99-4.478 9.99-9.985C22 7.478 17.519 2 12.012 2zm5.727 14.152c-.246.69-1.2 1.258-1.656 1.304-.45.047-.905.074-2.825-.684-2.457-.968-4.004-3.468-4.126-3.63-.122-.163-1.002-1.328-1.002-2.534 0-1.206.633-1.8 1.107-1.902.474-.102.821-.128 1.096-.128.275 0 .549.002.793.013.256.012.58.016.89.76.324.777 1.11 2.724 1.205 2.92.095.197.16.425.029.673-.131.25-.262.404-.393.559-.131.155-.276.326-.395.438-.13.123-.266.257-.116.516.15.257.666 1.098 1.43 1.78.983.876 1.808 1.147 2.062 1.276.255.129.404.108.555-.067.15-.175.642-.748.814-1.002.172-.254.343-.213.578-.126.236.088 1.5.707 1.758.835.257.128.43.193.493.302.063.109.063.633-.183 1.323z" />
        </svg>
        <span className="text-xs font-bold font-heading tracking-wide hidden sm:inline-block">
          WhatsApp Counsellor
        </span>
      </button>

    </div>
  );
}
