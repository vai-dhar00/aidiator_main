
import React, { useState } from 'react';
import { ICONS } from '../constants';

const Services: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Imagine",
      subtitle: "Strategic Consulting",
      icon: ICONS.Consulting,
      description: "Data-driven advice for business optimization and market entry. We define your trajectory from ground zero to implementation.",
      details: [
        "Business Optimization Audits",
        "Market Entry Strategy",
        "Operational Efficiency Planning",
        "M&A Strategic Advisory",
        "Executive Coaching"
      ]
    },
    {
      id: 2,
      title: "Build",
      subtitle: "Creative Design",
      icon: ICONS.Design,
      description: "UI/UX and beyond. Crafting intuitive interfaces, branding, and digital experiences that convert interest into long-term loyalty.",
      details: [
        "UI/UX Research & Design",
        "Brand Identity Systems",
        "Web & App Development",
        "Prototype Testing",
        "Conversion Optimization"
      ]
    },
    {
      id: 3,
      title: "Run",
      subtitle: "Integrated Solutions",
      icon: ICONS.Integrated,
      description: "The ultimate fusion of strategy and execution. We provide end-to-end management for holistic business elevation.",
      details: [
        "Fractional Leadership",
        "Growth Marketing Engines",
        "Scalable Digital Systems",
        "Team Upskilling",
        "Legacy Tech Modernization"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-[#004d61] uppercase mb-4">Our Methodology</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Imagine. Build. Run.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-slate-50 text-[#004d61] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#004d61] group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">{service.title}</p>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.subtitle}</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <button
              onClick={() => setActiveModal(service.id)}
              className="text-slate-900 font-bold flex items-center gap-2 group/btn"
            >
              Explore Pillar
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-[#004d61] group-hover/btn:text-white transition-all">
                →
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="bg-[#004d61] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h4 className="text-3xl font-bold text-white mb-6 relative z-10">Ready to transform your business?</h4>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-[#004d61] rounded-full font-bold text-lg hover:bg-slate-50 transition-all relative z-10"
          >
            Start a Collaboration
          </a>
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-50 text-[#004d61] rounded-xl flex items-center justify-center">
                {services.find(s => s.id === activeModal)?.icon}
              </div>
              <h4 className="text-3xl font-bold text-slate-900">
                {services.find(s => s.id === activeModal)?.subtitle}
              </h4>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-slate-600 mb-6">
                {services.find(s => s.id === activeModal)?.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.find(s => s.id === activeModal)?.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-6 h-6 bg-[#004d61] text-white rounded-full flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <span className="text-slate-700 font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                className="block w-full text-center py-4 bg-[#004d61] text-white rounded-2xl font-bold hover:bg-teal-900 transition-colors"
              >
                Inquire About This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
