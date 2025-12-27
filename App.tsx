
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MassSchedules from './components/MassSchedules';
import DailyReflectionSection from './components/DailyReflectionSection';
import Services from './components/Services';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import DonationsSection from './components/DonationsSection';
import PaymentGateway from './components/PaymentGateway';
import NewsSection from './components/NewsSection';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-700">
            <Hero onNavigate={() => setCurrentView('contact')} />
            <DailyReflectionSection />
            <div id="mass-schedules">
              <MassSchedules />
            </div>
            <NewsSection />
            <div className="py-32 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-slate-950">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-20 text-center">
                    <h2 className="text-sm uppercase tracking-[0.4em] font-black text-blue-600 mb-6">Communauté</h2>
                    <h3 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-tight">
                      La <span className="serif-italic font-normal text-blue-600">Vie</span> Paroissiale
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { 
                        title: 'À Propos', 
                        desc: 'Découvrez notre histoire, notre vision et notre équipe pastorale.', 
                        view: 'about', 
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        )
                      },
                      { 
                        title: 'Services & Groupes', 
                        desc: 'Sacrements, MACs et mouvements d\'action catholique.', 
                        view: 'services', 
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20M7 7h10" /></svg>
                        )
                      },
                      { 
                        title: 'Dons & Projets', 
                        desc: 'Soutenez la construction de l\'église et nos œuvres de charité.', 
                        view: 'donations', 
                        icon: (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        )
                      }
                    ].map((card, i) => (
                      <div 
                        key={i}
                        className="p-12 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group" 
                        onClick={() => setCurrentView(card.view as ViewState)}
                      >
                        <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-blue-400 mb-8 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 border border-slate-100 dark:border-slate-700">
                          {card.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">{card.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{card.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        );
      case 'services':
        return <div className="animate-in fade-in duration-500 pt-20"><Services /></div>;
      case 'about':
        return <div className="animate-in fade-in duration-500 pt-20"><AboutSection /></div>;
      case 'contact':
        return <div className="animate-in fade-in duration-500 pt-20"><ContactSection /></div>;
      case 'donations':
        return <div className="animate-in fade-in duration-500 pt-20"><DonationsSection onDonate={() => setCurrentView('payment')} /></div>;
      case 'payment':
        return <div className="animate-in zoom-in duration-500 pt-20"><PaymentGateway onBack={() => setCurrentView('donations')} /></div>;
      default:
        return <Hero onNavigate={() => setCurrentView('contact')} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col overflow-x-hidden selection:bg-slate-900 selection:text-white dark:selection:bg-blue-600 transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <Navbar currentView={currentView} onNavigate={setCurrentView} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentView} />
      <AIChatAssistant isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      
      {!isChatOpen && currentView !== 'payment' && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 bg-slate-900 dark:bg-blue-600 text-white h-14 w-14 md:h-16 md:w-auto md:px-8 rounded-full shadow-[0_20px_40px_-10px_rgba(15,23,42,0.4)] hover:scale-105 active:scale-95 transition-all z-40 flex items-center justify-center gap-3 overflow-hidden group"
        >
          <span className="hidden md:block font-extrabold text-sm tracking-tight whitespace-nowrap">Parler à l'Abbé Etienne</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </button>
      )}
    </div>
  );
};

export default App;
