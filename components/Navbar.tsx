
import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparentAndWhite = currentView === 'home' && !scrolled;

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Accueil', view: 'home' },
    { label: 'À Propos', view: 'about' },
    { label: 'Services', view: 'services' },
    { label: 'Dons', view: 'donations' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
      <nav className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${!isTransparentAndWhite ? 'glass shadow-lg py-3 px-6' : 'bg-transparent py-4 px-2'}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg transition-all duration-300 ${!isTransparentAndWhite ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-white text-slate-900'}`}>
              VI
            </div>
            <div className="flex flex-col">
              <h1 className={`text-lg font-extrabold leading-none transition-colors ${!isTransparentAndWhite ? 'text-slate-900 dark:text-white' : 'text-white'}`}>Saint Paul VI</h1>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${!isTransparentAndWhite ? 'text-slate-500 dark:text-slate-400' : 'text-slate-300'}`}>Bonamotongo</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  currentView === item.view 
                    ? (!isTransparentAndWhite ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-white text-slate-900 shadow-sm')
                    : (!isTransparentAndWhite ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white/80 hover:text-white hover:bg-white/10')
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={toggleDarkMode}
              className={`ml-2 p-2 rounded-xl transition-all duration-300 ${!isTransparentAndWhite ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300' : 'bg-white/10 text-white hover:bg-white/20'}`}
              aria-label="Changer le thème"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
             <button onClick={toggleDarkMode} className={`p-2 ${!isTransparentAndWhite ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
             </button>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${!isTransparentAndWhite ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
             </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
