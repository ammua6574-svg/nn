import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin, Clock, Sparkles, Lock } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    whatsapp: '',
    email: '',
    city: '',
    pcb: '',
    neetStatus: 'Qualified',
    neetScore: '',
    intake: '2026',
    country: 'Timor-Leste (UCT)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
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
      name: '',
      mobile: '',
      whatsapp: '',
      email: '',
      city: '',
      pcb: '',
      neetStatus: 'Qualified',
      neetScore: '',
      intake: '2026',
      country: 'Timor-Leste (UCT)',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-hero-mesh topo-pattern relative overflow-hidden text-white">
      
      {/* Background radial glow */}
      <div className="hero-teal-blob bottom-0 right-0"></div>
      <div className="hero-glow-blob top-10 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-[#FF904D] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            FREE 1-ON-1 MEDICAL COUNSELLING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight">
            Begin Your MBBS Journey Today
          </h2>
          <p className="text-blue-100 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Submit your profile details below. Our senior medical education advisors will evaluate your eligibility and share complete 2026 admission brochures.
          </p>
        </div>

        {/* Master Layout: Left Frosted Glass Contact Info, Right Elevated Form Card */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Frosted Glass Navy Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="glass-card-navy rounded-3xl p-7 sm:p-8 space-y-6 shadow-card">
              
              <div className="space-y-2">
                <span className="text-[#FF904D] text-xs font-bold uppercase tracking-wider">
                  Official India Guidance Desk
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Aviate™ Overseas Education
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm font-light leading-relaxed">
                  Dedicated admission representatives for Universidade Católica Timorense (UCT) in Dili.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2 border-t border-white/15">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#0FA3A3] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 font-bold uppercase">Headquarters</p>
                    <p className="text-sm font-semibold text-white mt-0.5">Aviate Tower, MG Road, Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#FF7A29] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 font-bold uppercase">Toll-Free Helpline</p>
                    <p className="text-sm font-semibold text-white mt-0.5">+91 99999 99999 / +91 98888 88888</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#1FAE6B] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 font-bold uppercase">Official Inquiries</p>
                    <p className="text-sm font-semibold text-white mt-0.5">admissions@aviateoverseas.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#FF904D] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 font-bold uppercase">Counselling Timings</p>
                    <p className="text-sm font-semibold text-white mt-0.5">Mon – Sat: 9:30 AM – 7:00 PM IST</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Privacy & Trust Badge */}
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 text-xs text-blue-100 flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#1FAE6B] shrink-0" />
              <span>100% Data Privacy Guaranteed. We never sell your personal information to third-party telemarketers.</span>
            </div>

          </div>

          {/* Right Column: Floating Clean White Card with High-Focus Form Fields */}
          <div className="lg:col-span-7 bg-white text-[#071C42] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white text-left relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in-up">
                <div className="w-20 h-20 bg-[#F1FAF5] text-[#1FAE6B] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2E6B]">
                    Registration Successfully Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A dedicated medical education advisor has been assigned to your profile and will contact you via WhatsApp/Phone shortly.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F6F1E7] border border-slate-200 max-w-sm mx-auto text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-[#0B2E6B]">Application Summary</p>
                  <p>Target University: Universidade Católica Timorense (UCT)</p>
                  <p>Intake Batch: 2026 Academic Session</p>
                </div>
                <button
                  onClick={handleReset}
                  className="btn-navy px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                  <h3 className="text-lg font-bold font-heading text-[#0B2E6B]">Student Profile Details</h3>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">* Required Fields</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="WhatsApp contact"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      City of Residence
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hyderabad / Delhi / Pune"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* 12th PCB */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      12th PCB % Aggregate
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 72"
                      value={formData.pcb}
                      onChange={(e) => setFormData({ ...formData, pcb: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-[#FAFAF7]"
                    />
                  </div>

                  {/* NEET Status */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      NEET Exam Status
                    </label>
                    <select
                      value={formData.neetStatus}
                      onChange={(e) => setFormData({ ...formData, neetStatus: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-white"
                    >
                      <option value="Qualified">Qualified (Scorecard Ready)</option>
                      <option value="Appearing">Appearing in Upcoming NEET</option>
                      <option value="Not Qualified">Not Qualified / Need Guidance</option>
                    </select>
                  </div>

                  {/* Preferred Intake */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                      Admission Intake
                    </label>
                    <select
                      value={formData.intake}
                      onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-white"
                    >
                      <option value="2026">2026 Academic Batch</option>
                      <option value="2027">2027 Academic Batch</option>
                    </select>
                  </div>
                </div>

                {/* Additional Queries */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0B2E6B] uppercase tracking-wider">
                    Questions or Specific Requests
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your NEET score, preferred hostel type, or specific questions regarding UCT..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B2E6B] text-sm bg-[#FAFAF7]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-coral w-full py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-coral-glow"
                >
                  {loading ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free MBBS Counselling</span>
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
