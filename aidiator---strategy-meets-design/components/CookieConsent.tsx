
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[200] animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-white/10">
        <h5 className="font-bold mb-2">Privacy & Cookies</h5>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          We use essential cookies to ensure our site works correctly and to analyze traffic for a better experience.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={accept}
            className="flex-1 py-2 bg-white text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors"
          >
            Accept All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 py-2 bg-white/10 text-white rounded-lg text-sm font-bold hover:bg-white/20 transition-colors"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
