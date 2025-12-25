
import React from 'react';
import { ICONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image/Graphic */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-teal-600/5 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Strategic Collaboration"
            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#004d61] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div>
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">AIDEAS THAT SCALE</p>
                <p className="text-sm text-slate-600 italic">"Design with purpose, strategy with scale."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Bridging High-Level Strategy <br />
            with <span className="text-[#004d61]">Inspired Execution.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Led by seasoned professionals in business transformation, AIDIATOR operates out of
            strategic hubs in <span className="font-bold text-slate-900">India (Bangalore)</span> and the <span className="font-bold text-slate-900">UAE (Dubai)</span> to serve a global clientele. We are your partner
            in turning complex business problems into intuitive digital solutions.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#004d61]">
                {ICONS.Consulting}
              </div>
              <h3 className="font-bold text-xl text-slate-900">Strategic Arm</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert navigation through market complexities and scaling operations across borders.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#004d61]">
                {ICONS.Design}
              </div>
              <h3 className="font-bold text-xl text-slate-900">Creative Arm</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Crafting interfaces that resonate and products that users love to engage with.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-[#004d61] transition-colors group"
          >
            Connect with our team
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
