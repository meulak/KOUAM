
import React from 'react';

interface DonationsSectionProps {
  onDonate: (category: string) => void;
}

const ProjectCard: React.FC<{ title: string; image: string; progress: number; goal: string }> = ({ title, image, progress, goal }) => (
  <div className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700">
    <div className="aspect-video relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-blue-400 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] font-black uppercase text-blue-200">{progress}% collectés</span>
          <span className="text-[10px] font-black uppercase text-white/60">Objectif: {goal}</span>
        </div>
      </div>
    </div>
  </div>
);

const SocialIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case 'orphans':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'health':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7v10m-5-5h10" />
        </svg>
      );
    case 'widows':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'schooling':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    default:
      return null;
  }
};

const DonationsSection: React.FC<DonationsSectionProps> = ({ onDonate }) => {
  return (
    <div className="bg-[#fcfcfc]">
      {/* 1. SECTION : LE DENIER DE L'ÉGLISE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Soutien à la Mission
              </span>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-slate-900">
                Le Denier <br />
                <span className="serif-italic font-normal text-orange-600">de l'Église</span>
              </h1>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg mb-12">
                Le Denier est la contribution volontaire des catholiques. Il permet d'assurer la vie matérielle des prêtres et le fonctionnement quotidien de notre paroisse. C'est le socle de notre mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onDonate('denier')}
                  className="px-12 py-5 bg-orange-600 text-white font-black rounded-3xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 hover:scale-105 active:scale-95"
                >
                  Contribuer au Denier
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-50 rounded-[4rem] rotate-3"></div>
              <div className="relative aspect-[4/3] bg-white rounded-[3.5rem] p-12 border border-orange-100 shadow-2xl flex flex-col justify-center text-center">
                <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-8">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl font-serif italic text-slate-800 mb-6 leading-relaxed serif-italic">
                  "Chacun doit donner comme il a décidé dans son cœur, sans regret et sans contrainte, car Dieu aime celui qui donne avec joie."
                </p>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">— 2 Corinthiens 9, 7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION : TRAVAUX D'ENVERGURE */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-400 mb-6">Patrimoine & Avenir</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
              Bâtir notre <br />
              <span className="serif-italic font-normal text-blue-300">maison commune</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            <ProjectCard 
              title="Construction de la Grande Nef" 
              image="https://images.unsplash.com/photo-1548625361-12502ec32924?q=80&w=1000&auto=format&fit=crop"
              progress={65}
              goal="150,000,000 FCFA"
            />
            <ProjectCard 
              title="Réfection du Presbytère" 
              image="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop"
              progress={40}
              goal="25,000,000 FCFA"
            />
            <ProjectCard 
              title="Aménagement de la Cour" 
              image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
              progress={15}
              goal="12,000,000 FCFA"
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[3.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12 group">
             <div className="max-w-xl text-center md:text-left">
               <h4 className="text-2xl font-black mb-4 tracking-tight">Devenez bâtisseur de Saint Paul VI</h4>
               <p className="text-white/40 font-medium">Chaque pierre apportée aujourd'hui est un héritage pour les générations de demain à Bonamotongo.</p>
             </div>
             <button 
                onClick={() => onDonate('travaux')}
                className="px-12 py-5 bg-white text-slate-900 font-black rounded-3xl hover:bg-blue-400 hover:text-white transition-all shadow-xl shadow-white/5 group-hover:scale-105 active:scale-95"
             >
               Participer aux travaux
             </button>
          </div>
        </div>
      </section>

      {/* 3. SECTION : OEUVRES SOCIALES */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Soutien aux Orphelins", icon: "orphans", color: "bg-emerald-50 text-emerald-600" },
                  { title: "Santé Communautaire", icon: "health", color: "bg-blue-50 text-blue-600" },
                  { title: "Aide aux Veuves", icon: "widows", color: "bg-purple-50 text-purple-600" },
                  { title: "Scolarité pour tous", icon: "schooling", color: "bg-orange-50 text-orange-600" }
                ].map((item, i) => (
                  <div key={i} className={`p-8 rounded-[2.5rem] ${item.color} border border-transparent hover:border-current transition-all group`}>
                    <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform origin-left">
                      <SocialIcon type={item.icon} className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black mb-2">{item.title}</h4>
                    <p className="opacity-70 text-sm font-medium leading-relaxed">Soutien direct aux membres les plus fragiles de notre communauté de Bonamotongo.</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Charité Chrétienne
              </span>
              <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                La main <br />
                <span className="serif-italic font-normal text-emerald-600">tendue</span>
              </h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                L'amour de Dieu se manifeste par nos actes envers notre prochain. Vos dons permettent d'alimenter notre fonds de solidarité paroissial pour ne laisser personne au bord du chemin.
              </p>
              <button 
                onClick={() => onDonate('social')}
                className="w-full sm:w-auto px-12 py-5 bg-emerald-600 text-white font-black rounded-3xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 hover:scale-105 active:scale-95"
              >
                Faire un don social
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS OVERVIEW */}
      <section className="pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 rounded-[3.5rem] p-12 border border-slate-100 text-center">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Modes de paiement acceptés</h4>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <div className="flex flex-col items-center gap-4">
                 <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center font-black text-white text-xs">OM</div>
                 <span className="text-[10px] font-black uppercase tracking-widest">Orange Money</span>
               </div>
               <div className="flex flex-col items-center gap-4">
                 <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center font-black text-white text-xs text-yellow-800">MoMo</div>
                 <span className="text-[10px] font-black uppercase tracking-widest">MTN MoMo</span>
               </div>
               <div className="flex flex-col items-center gap-4">
                 <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center font-black text-white text-xs italic">Bancaire</div>
                 <span className="text-[10px] font-black uppercase tracking-widest">Virement / CB</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationsSection;
