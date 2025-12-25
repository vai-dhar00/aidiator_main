
import React from 'react';
import { LOGO_SVG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              {LOGO_SVG}
              <span className="text-2xl font-black tracking-tight text-[#004d61] uppercase">AIDIATOR</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Elevating businesses through strategic consulting and inspired design. 
              AIDEAS that scale, globally.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-bold text-slate-900">Direct Inquiries:</p>
              <a href="mailto:vaibhav@aidiator.com" className="text-teal-600 font-medium hover:text-teal-800 transition-colors">vaibhav@aidiator.com</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-teal-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-teal-600 transition-colors">About</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-teal-600 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-teal-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Stay updated on industry insights and case studies.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg outline-none focus:ring-1 focus:ring-teal-600 text-sm w-full"
              />
              <button className="bg-[#004d61] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-900 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-slate-400 text-xs font-medium">
              © 2025 AIDIATOR. All rights reserved. 
            </p>
            <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">
              India — Bangalore | UAE — Dubai
            </p>
          </div>
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black">
            AIDEAS THAT SCALE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
