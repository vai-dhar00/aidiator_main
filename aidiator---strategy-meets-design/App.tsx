
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Credibility from './components/Credibility';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-teal-100 selection:text-teal-900">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="about" className="py-24 bg-white fade-in scroll-mt-20">
          <About />
        </section>

        <section id="services" className="py-24 bg-slate-50 fade-in scroll-mt-20">
          <Services />
        </section>

        <section id="credibility" className="py-24 bg-white fade-in scroll-mt-20">
          <Credibility />
        </section>

        <section id="contact" className="py-24 bg-slate-900 text-white fade-in scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
      <CookieConsent />
      <ChatBot />
    </div>
  );
};

export default App;
