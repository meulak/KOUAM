
import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-950 font-black text-xl">
              VI
            </div>
            <div>
              <h1 className="text-xl font-black leading-tight">Saint Paul VI</h1>
              <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-bold">Bonamotongo</p>
            </div>
          </div>
          <p className="text-slate-400 max-w-sm mb-10 leading-relaxed font-medium">
            Notre paroisse est un lieu de paix et de prière ouvert à tous. 
            Venez vivre la fraternité chrétienne au cœur de Douala.
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
               </svg>
             </a>
             <a href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
               </svg>
             </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 tracking-tight">Navigation</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Accueil</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">À Propos</button></li>
            <li><button onClick={() => onNavigate('donations')} className="hover:text-white transition-colors">Faire un Don</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Nous Contacter</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8 tracking-tight">Secrétariat</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li>Lun - Ven : 09h00 - 17h00</li>
            <li>Samedi : 09h00 - 12h00</li>
            <li className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Fermé le Dimanche
            </li>
          </ul>
          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 text-xs text-slate-300">
             Urgence sacrement : <br />
             <span className="text-white font-black text-lg">+237 6XX XXX XXX</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-white/5 text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Paroisse Saint Paul VI de Bonamotongo. Design Moderne & Foi Rayonnante.</p>
      </div>
    </footer>
  );
};

export default Footer;
