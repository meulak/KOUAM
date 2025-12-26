
import React from 'react';
import { sacramentsData, groupsData } from '../data/servicesData';

const ServiceIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-8 h-8" }) => {
  switch (type) {
    case 'baptism':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11v6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'marriage':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
          <path d="M12 7l1-1m0 0l1 1m-1-1v4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'confirmation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L9.5 7h5L12 2zM12 10v12M8 14l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 20c2-2 12-2 14 0" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'penance':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'anointing':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'mass-request':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v10m0 0l-3-3m3 3l3-3M5 12h14l-2 10H7L5 12z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

const Services: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* Dynamic Header */}
      <section className="pt-40 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Services & Vie Paroissiale
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              La grâce au cœur de <br />
              <span className="serif-italic font-normal text-blue-200">notre quotidien</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              De l'accompagnement spirituel aux engagements communautaires, découvrez comment notre paroisse vous soutient dans votre marche de foi.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Sacraments Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Sacrements & Liturgie</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Préparer vos <span className="serif-italic font-normal">célébrations</span></h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">
            Retrouvez ici les conditions, documents requis et horaires pour chaque étape de votre vie chrétienne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacramentsData.map((s, idx) => (
            <div key={idx} className="group bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -translate-y-4 translate-x-4 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-8 shadow-2xl shadow-slate-900/20 group-hover:bg-blue-600 transition-colors duration-500">
                  <ServiceIcon type={s.icon} />
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10">{s.description}</p>
                
                <div className="space-y-6">
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Disponibilité</span>
                    <span className="text-sm font-extrabold text-slate-800">{s.schedule}</span>
                  </div>
                  
                  <div className="px-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 block mb-4">Dossier à constituer</span>
                    <ul className="space-y-3">
                      {s.documents.map((doc, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Groups Section with Modern Cards */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Engagement & Action</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-8">
              La vie des <span className="serif-italic font-normal">mouvements</span>
            </h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupsData.map((group, idx) => (
              <div key={idx} className="group p-1 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-full p-10 rounded-[2.8rem] border border-slate-50 group-hover:border-blue-100 transition-colors">
                  <div className="flex justify-between items-start mb-10">
                    <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      group.category === 'jeunesse' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      group.category === 'spiritualité' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                      group.category === 'service' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                      'bg-orange-50 text-orange-600 border border-orange-100'
                    }`}>
                      {group.category}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:translate-x-1 transition-transform">{group.name}</h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-12">
                    {group.description}
                  </p>
                  
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-slate-400">Réunions</span>
                      <span className="text-xs font-black text-slate-900">{group.meetings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-32 relative rounded-[4rem] overflow-hidden bg-slate-900 p-12 md:p-20 group">
             <div className="absolute top-0 right-0 w-full h-full bg-blue-600/10 transition-opacity opacity-50 group-hover:opacity-100"></div>
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
               <div className="max-w-2xl">
                 <h4 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                   Besoin de plus d'<span className="serif-italic font-normal text-blue-300 underline decoration-blue-500/30">informations</span> ?
                 </h4>
                 <p className="text-white/40 text-lg font-medium">
                   Notre secrétariat est à votre disposition pour vous guider dans vos démarches spirituelles et administratives.
                 </p>
               </div>
               <button className="px-12 py-5 bg-white text-slate-900 font-black rounded-3xl hover:scale-105 transition-all shadow-2xl hover:shadow-blue-500/20">
                 Prendre rendez-vous
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
