
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Consulting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Collaborate.</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed text-balance">
            Ready to scale your ideas? From Bangalore to Dubai, our global presence ensures
            your business gets the world-class strategy and design it deserves.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">Direct Access</p>
                <p className="text-slate-400 font-medium">vaibhav@aidiator.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">Office Hubs</p>
                <p className="text-slate-400">India — Bangalore</p>
                <p className="text-slate-400">UAE — Dubai</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl relative overflow-hidden">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-in fade-in duration-700">
              <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-[#004d61]">Message Received!</h4>
              <p className="text-slate-500">Vaibhav will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#004d61] focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#004d61] focus:border-transparent outline-none transition-all"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Company</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#004d61] focus:border-transparent outline-none transition-all"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Service</label>
                  <select
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#004d61] focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Strategic Consulting</option>
                    <option>Creative Design</option>
                    <option>Integrated Solution</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#004d61] focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your project goals..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#004d61] text-white rounded-xl font-bold text-lg hover:bg-teal-900 transition-all shadow-xl shadow-teal-900/20 active:scale-95"
              >
                Scale My Idea
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
