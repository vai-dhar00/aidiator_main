
import React from 'react';

const Hero: React.FC = () => {
  const handleBookCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-teal-800 uppercase bg-teal-100/50 rounded-full">
            AIDIATOR: AIDEAS THAT SCALE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight text-balance">
            Where Strategy <br />
            Meets <span className="text-[#004d61]">Design Excellence.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed text-balance">
            Empowering businesses with elite strategic consulting and 
            award-winning UI/UX solutions. We bridge high-level vision with scalable execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              onClick={handleServicesClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#004d61] text-white rounded-full font-bold text-lg hover:bg-teal-900 transition-all hover:scale-105 shadow-xl shadow-teal-900/30"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              onClick={handleBookCallClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
