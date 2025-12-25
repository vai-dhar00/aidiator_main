
import React from 'react';

const Credibility: React.FC = () => {
  const cards = [
    {
      title: "Registered & Compliant",
      text: "AIDIATOR is a fully registered legal entity, ensuring total compliance and data protection.",
      badge: "LEGIT VERIFIED"
    },
    {
      title: "Proven Track Record",
      text: "Our consultants carry decades of combined experience from Fortune 500 companies and agile startups.",
      badge: "50+ PROJECTS"
    },
    {
      title: "Client Success",
      text: "We maintain a 98% client retention rate through transparent reporting and tangible ROI results.",
      badge: "TOP RATED"
    },
    {
      title: "Global Expertise",
      text: "Our impact is global, serving clients across 12 countries and 4 continents from our hubs in India and UAE.",
      badge: "GLOBAL REACH"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold tracking-[0.2em] text-teal-600 uppercase mb-4">Why AIDIATOR?</h2>
          <h3 className="text-4xl font-bold text-slate-900 leading-tight">
            Built on a Foundation of <br />Trust and Legitimacy.
          </h3>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="w-16 h-16 rounded-full border-4 border-teal-600 flex items-center justify-center text-teal-600 font-black text-xl">
              HQ
            </div>
            <div>
              <p className="font-bold text-slate-900">AIDIATOR Global</p>
              <p className="text-sm text-slate-500">Corporate Registry Verified</p>
              <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mt-1">Legally Verified Business</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full mb-6 tracking-widest border border-slate-200">
              {card.badge}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-24 border-t border-slate-100 grid md:grid-cols-3 gap-12 text-center">
        <div>
          <p className="text-5xl font-extrabold text-slate-900 mb-2">30%</p>
          <p className="text-slate-500 font-medium italic">Average ROI Increase</p>
        </div>
        <div>
          <p className="text-5xl font-extrabold text-slate-900 mb-2">24/7</p>
          <p className="text-slate-500 font-medium italic">Support & Consultation</p>
        </div>
        <div>
          <p className="text-5xl font-extrabold text-slate-900 mb-2">12+</p>
          <p className="text-slate-500 font-medium italic">Countries Served</p>
        </div>
      </div>
    </div>
  );
};

export default Credibility;
