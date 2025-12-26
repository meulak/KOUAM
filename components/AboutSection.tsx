
import React from 'react';
import { hierarchyData, timelineEvents, formerPriests, parishTeam } from '../data/aboutData';

const CrossIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18M7 9h10" />
  </svg>
);

const HierarchyIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case 'Diocèse':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'Pasteur Propre':
      return <CrossIcon className={className} />;
    case 'Zone Pastorale':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'Doyenné':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    default:
      return null;
  }
};

const TimelineIcon: React.FC<{ title: string; className?: string }> = ({ title, className = "w-6 h-6" }) => {
  if (title.includes("Pierre")) return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
  if (title.includes("Canonique")) return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
  if (title.includes("Patron")) return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
    </svg>
  );
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="bg-[#fdfdfd]">
      {/* Header & Hierarchy */}
      <section className="pt-40 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] -skew-x-12 translate-x-1/4"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Gouvernance & Identité
              </span>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
                À Propos de <br />
                <span className="serif-italic font-normal text-blue-200">notre Paroisse</span>
              </h1>
              <p className="text-white/40 text-lg font-medium leading-relaxed max-w-lg mb-12">
                Saint Paul VI de Bonamotongo est une communauté vibrante de l'Archidiocèse de Douala, unie par la foi et le service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Diocèse', value: hierarchyData.diocese },
                { label: 'Pasteur Propre', value: hierarchyData.bishop },
                { label: 'Zone Pastorale', value: hierarchyData.zone },
                { label: 'Doyenné', value: hierarchyData.dean }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform origin-left">
                    <HierarchyIcon type={item.label} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-400 block mb-2">{item.label}</span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-colors">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stylized History Timeline */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-100 to-transparent hidden md:block"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 blur-xl opacity-20 hidden md:block animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Succession des Temps</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter">
              Une histoire de <br />
              <span className="serif-italic font-normal text-blue-600">bâtisseurs</span>
            </h3>
          </div>

          <div className="space-y-12 md:space-y-0 relative">
            {timelineEvents.map((event, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0 group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Visual Connector for Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-[6px] border-slate-50 shadow-2xl z-20 hidden md:flex items-center justify-center group-hover:border-blue-50 group-hover:scale-110 transition-all duration-500">
                   <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[42%]">
                  <div className="relative p-10 md:p-14 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:-translate-y-2 overflow-hidden">
                    {/* Background Year Number */}
                    <span className="absolute -top-4 -right-4 text-9xl font-black text-slate-50 select-none group-hover:text-blue-50 transition-colors duration-500 leading-none">
                      {event.year}
                    </span>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-8 shadow-xl shadow-slate-900/20 group-hover:bg-blue-600 transition-colors">
                        <TimelineIcon title={event.title} />
                      </div>
                      <span className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4 block">{event.year}</span>
                      <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{event.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed text-lg">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block w-[42%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Former Priests Gallery */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
               <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Succession Apostolique</h2>
               <h3 className="text-5xl font-extrabold text-slate-900 tracking-tight">Nos anciens <span className="serif-italic font-normal">Curés</span></h3>
            </div>
            <p className="text-slate-500 font-medium max-w-xs">
              Ceux qui ont semé la graine de la foi et guidé le troupeau au fil des années.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {formerPriests.map((priest, i) => (
              <div key={i} className="group bg-white p-4 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8">
                  <img src={priest.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={priest.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">{priest.period}</p>
                    <h4 className="text-2xl font-black leading-tight mb-2">{priest.name}</h4>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{priest.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Current Pastor Highlighting */}
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-between relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
               <div>
                 <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-widest mb-8">
                   Actuel Pasteur
                 </span>
                 <h4 className="text-4xl font-black mb-6 tracking-tighter leading-none">Abbé Etienne <br /><span className="text-blue-400">BAKABA</span></h4>
               </div>
               <div className="relative z-10">
                 <p className="text-white/40 font-medium italic mb-8 border-l-2 border-white/10 pl-6 leading-relaxed">
                   "Servir avec joie, construire dans la paix, aimer sans mesure pour le salut de tous."
                 </p>
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Organigram Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Service & Communauté</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter">
              L'Équipe <span className="serif-italic font-normal">Paroissiale</span>
            </h3>
          </div>

          <div className="flex flex-col items-center">
            {/* Leader Cell (Curé) */}
            <div className="group relative mb-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-950 text-white p-12 rounded-[2.5rem] w-full max-w-sm text-center shadow-2xl border-b-4 border-blue-600">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-blue-400">
                    <CrossIcon className="w-8 h-8" />
                 </div>
                 <h4 className="text-2xl font-black mb-1">{parishTeam.leader.name}</h4>
                 <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">{parishTeam.leader.role}</p>
              </div>
            </div>

            {/* 3-Column Grid for Councils */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Council Card (CPP) */}
               <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conseil Paroissial Pastoral (CPP)</h5>
                  </div>
                  <div className="space-y-6">
                    {parishTeam.council.map((p, i) => (
                      <div key={i} className="flex justify-between items-center group/item">
                        <span className="font-extrabold text-slate-900 group-hover/item:text-blue-600 transition-colors">{p.name}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{p.role}</span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* CAE Card (Conseil Affaires Economiques) */}
               <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conseil Affaires Économiques (CAE)</h5>
                  </div>
                  <div className="space-y-6">
                    {parishTeam.cae.map((p, i) => (
                      <div key={i} className="flex justify-between items-center group/item">
                        <span className="font-extrabold text-slate-900 group-hover/item:text-emerald-600 transition-colors">{p.name}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{p.role}</span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* CPJ Card (Conseil Jeunes) */}
               <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conseil Paroissial des Jeunes (CPJ)</h5>
                  </div>
                  <div className="space-y-6">
                    {parishTeam.cpj.map((p, i) => (
                      <div key={i} className="flex justify-between items-center group/item">
                        <span className="font-extrabold text-slate-900 group-hover/item:text-indigo-600 transition-colors">{p.name}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{p.role}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          <div className="mt-24 p-12 rounded-[3.5rem] bg-blue-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-12 group">
             <div className="max-w-xl text-center md:text-left">
               <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Vivre la fraternité au quotidien</h4>
               <p className="text-slate-600 font-medium">L'équipe paroissiale est à votre écoute pour tout besoin spirituel ou accompagnement pastoral.</p>
             </div>
             <button className="px-12 py-5 bg-slate-900 text-white font-black rounded-3xl hover:bg-blue-600 transition-all shadow-xl group-hover:scale-105 active:scale-95">
               Consulter l'annuaire
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
