
import React from 'react';

const MassSchedules: React.FC = () => {
  const weeklyMasses = [
    { day: 'Lundi - Vendredi', time: '06:15', desc: 'Messe de l\'Aurore' },
    { day: 'Mercredi', time: '18:30', desc: 'Messe & Adoration' },
    { day: 'Samedi', time: '07:00', desc: 'Messe de la Vierge Marie' },
  ];

  const sundayMasses = [
    { time: '07:00', desc: 'Messe Jeunes' },
    { time: '09:30', desc: 'Grande Messe' },
    { time: '18:00', desc: 'Messe du Soir' },
  ];

  return (
    <section className="py-32 bg-[#fafafa] dark:bg-slate-900/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
           <span className="text-sm font-black uppercase tracking-[0.4em] text-blue-500 mb-6 block">Calendrier Liturgique</span>
           <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
             Les rendez-vous avec <br />
             <span className="serif-italic font-normal text-blue-600">le Seigneur</span>
           </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-xl">
            <h4 className="text-2xl font-black mb-10 text-slate-900 dark:text-white flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              Semaine Paroissiale
            </h4>
            <div className="space-y-4">
              {weeklyMasses.map((m, idx) => (
                <div key={idx} className="flex justify-between items-center py-6 px-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-blue-500/20 hover:bg-white dark:hover:bg-white/10 transition-all group">
                  <div>
                    <p className="font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{m.day}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{m.desc}</p>
                  </div>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{m.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-10 italic serif-italic text-white">Dimanche</h4>
              <div className="space-y-10">
                {sundayMasses.map((m, idx) => (
                  <div key={idx} className="flex flex-col border-l-2 border-white/20 pl-6 group-hover:border-white transition-colors">
                    <span className="text-4xl font-black text-white mb-1">{m.time}</span>
                    <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">{m.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
               <p className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-2">Sacrement de Pénitence</p>
               <p className="text-lg font-bold text-white">Samedi à partir de 16h00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassSchedules;
