import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, Sparkles, ShieldCheck, Lock } from 'lucide-react';
import AviateLogo from './AviateLogo';

export default function ConsultationLeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    program: 'Bachelor of Engineering (B.Tech)',
    targetCountry: 'United Kingdom',
    intakeYear: '2026',
    testStatus: 'Planning to Take',
    message: ''
  });

  const EMAILJS_SERVICE_ID = 'service_xxx';
  const EMAILJS_TEMPLATE_ID = 'template_xxx';
  const EMAILJS_PUBLIC_KEY = 'public_key_xxx';
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) {
      alert('Please fill out all required fields marked with *');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      city: '',
      program: 'Bachelor of Engineering (B.Tech)',
      targetCountry: 'United Kingdom',
      intakeYear: '2026',
      testStatus: 'Planning to Take',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#06152D] text-white relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0FA3A3]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#FBBF24] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            START YOUR APPLICATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight">
            Book Your Free 1-on-1 Consultation
          </h2>
          <p className="text-slate-300 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get personalized university shortlists, scholarship probability scores, and complete visa roadmap guidance from expert counsellors.
          </p>
        </div>

        {/* Master Layout: Office Cards left, Lead Form right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Office Details & Brand Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl p-7 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="space-y-2">
                <AviateLogo />
                <p className="text-xs text-slate-300 font-light leading-relaxed pt-2">
                  Headquartered in Andhra Pradesh with dedicated study-abroad liaison offices across India.
                </p>
              </div>

              {/* Office Contact Channels */}
              <div className="space-y-4 pt-2 border-t border-white/15">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#F59E0B] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-bold uppercase">Main Campus Office</p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      Miracle Homes -2, MIG -7 Plot no - 2, Vivekananda Colony, Vizianagaram – 03, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#10B981] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-bold uppercase">Phone & WhatsApp</p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">+91 94189 44999</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#0FA3A3] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-bold uppercase">Official Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Info@aviateoverseas.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#FBBF24] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-bold uppercase">Working Hours</p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Mon – Sat: 9:30 AM – 7:00 PM IST</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Privacy Badge */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#10B981] shrink-0" />
              <span>We value your privacy. All details are kept 100% confidential and never shared with third parties.</span>
            </div>

          </div>

          {/* Right Column: High-Converting White Consultation Card */}
          <div className="lg:col-span-7 bg-white text-[#071C42] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-50 text-[#10B981] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#06152D]">
                    Consultation Request Confirmed!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. An expert senior study abroad advisor from Aviate Overseas Education will contact you via WhatsApp / Phone within 2 hours.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F6F1E7] border border-slate-200 max-w-sm mx-auto text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-[#06152D]">Your Selected Program</p>
                  <p>{formData.program} • {formData.targetCountry}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#06152D] hover:bg-[#0B2E6B] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                  <h3 className="text-lg font-bold font-heading text-[#06152D]">Free Consultation Booking</h3>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">* Required</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                      City of Residence
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vizianagaram / Visakhapatnam / Hyderabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* Program of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                      Program of Interest *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-white"
                    >
                      <option value="Bachelor of Engineering (B.Tech)">Bachelor of Engineering (BE / B.Tech)</option>
                      <option value="Masters (MS / MBA)">Masters (MS / MBA Abroad)</option>
                      <option value="MBBS Abroad">MBBS Abroad (UCT Timor-Leste / Others)</option>
                    </select>
                  </div>

                  {/* Target Destination */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                      Preferred Destination
                    </label>
                    <select
                      value={formData.targetCountry}
                      onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-white"
                    >
                      <option value="United Kingdom">United Kingdom 🇬🇧</option>
                      <option value="United States">United States 🇺🇸</option>
                      <option value="Germany">Germany 🇩🇪</option>
                      <option value="Australia">Australia 🇦🇺</option>
                      <option value="Canada">Canada 🇨🇦</option>
                      <option value="Timor-Leste (UCT)">Timor-Leste (UCT MBBS) 🇹🇱</option>
                      <option value="Ireland">Ireland 🇮🇪</option>
                      <option value="New Zealand">New Zealand 🇳🇿</option>
                      <option value="Singapore">Singapore 🇸🇬</option>
                    </select>
                  </div>
                </div>

                {/* Intake Year */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                    Intended Intake Year *
                  </label>
                  <select
                    value={formData.intakeYear}
                    onChange={(e) => setFormData({ ...formData, intakeYear: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-white"
                  >
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>

                {/* Test Status */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                    Test Status *
                  </label>
                  <select
                    value={formData.testStatus}
                    onChange={(e) => setFormData({ ...formData, testStatus: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-white"
                  >
                    <option value="Planning to Take">Planning to Take</option>
                    <option value="Taken - Pending Results">Taken - Pending Results</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                {/* Additional Queries */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#06152D] uppercase tracking-wider">
                    Questions / Academic Background Details
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Share your current GPA / marks %, test scores (IELTS/GRE/NEET), or specific university goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#F59E0B] text-sm bg-[#FAFAF7]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#F59E0B] hover:from-[#D97706] hover:to-[#EA580C] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Book Free 1-on-1 Consultation</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
