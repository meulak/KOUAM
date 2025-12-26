
import React from 'react';
import { weeklyPastoralMessage } from '../data/pastoralData';

const DailyReflectionSection: React.FC = () => {
  const reflection = weeklyPastoralMessage;

  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 dark:bg-slate-900/20 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Message Pastoral
            </span>
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-10 leading-[0.85]">
              Le mot <br />
              <span className="serif-italic font-normal text-blue-600 dark:text-blue-400">du curé</span>
            </h3>

            <div className="relative mb-10 group max-w-sm">
              <div className="absolute -inset-4 bg-blue-50 dark:bg-blue-900/20 rounded-[3.5rem] -rotate-2 group-hover:rotate-0 transition-all duration-500"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white dark:border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1000&auto=format&fit=crop" 
                  alt="Abbé Etienne BAKABA" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Abbé Etienne BAKABA</p>
              </div>
            </div>
            
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm">
              Une parole de sagesse hebdomadaire pour éclairer le chemin des fidèles de Bonamotongo.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] p-12 md:p-20 border border-slate-100 dark:border-white/5 shadow-2xl relative">
              <div className="absolute top-10 right-10 text-8xl text-slate-200 dark:text-white/5 font-serif select-none">”</div>
              
              <div className="mb-12">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6">Écriture Sainte</p>
                <p className="text-3xl md:text-5xl font-serif italic text-slate-800 dark:text-slate-200 leading-tight mb-6 serif-italic">
                  {reflection.verse}
                </p>
                <p className="text-sm font-bold text-slate-400 dark:text-slate-500">
                  — {reflection.reference}
                </p>
              </div>

              <div className="h-[1px] w-12 bg-slate-200 dark:bg-white/10 mb-12"></div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-xl italic mb-12">
                {reflection.reflection}
              </p>
              
              <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 relative group transition-all">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 rounded-full"></div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6 flex items-center gap-3">
                  Prière du Jour
                </h4>
                <p className="text-slate-900 dark:text-slate-300 italic font-semibold text-2xl leading-relaxed serif-italic">
                  {reflection.prayer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyReflectionSection;
