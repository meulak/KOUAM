
import React from 'react';
import { latestNews } from '../data/pastoralData';
import { NewsItem } from '../types';

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'live':
        return (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600">En Direct</span>
          </div>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 2v4h4" />
          </svg>
        );
    }
  };

  return (
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={item.thumbnail} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Play button overlay for video/live */}
        {(item.type === 'youtube' || item.type === 'live') && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-300">
               <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M8 5v14l11-7z" />
               </svg>
            </div>
          </div>
        )}

        {item.duration && (
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg">
            {item.duration}
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
            {getIcon()}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {item.date}
          </span>
        </div>
        <h4 className="text-xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>
      </div>
    </a>
  );
};

const NewsSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.4em] font-black text-blue-600 mb-6">Média & Vie</h2>
            <h3 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900">
              L'Actualité de <br />
              <span className="serif-italic font-normal">notre paroisse</span>
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-slate-500 font-medium max-w-xs">
              Restez connectés à la vie de la communauté à travers nos réseaux sociaux et nos directs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 group">
                Tout voir
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        
        {/* Social Feed Banner */}
        <div className="mt-20 p-12 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-16 h-16 rounded-2xl border-4 border-slate-900 overflow-hidden shadow-2xl">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">Rejoignez nos 1,500 abonnés</h4>
                <p className="text-white/50 text-sm font-medium">Partagez votre foi sur nos plateformes digitales.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:scale-105 transition-all">S'abonner sur Facebook</button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-all">Voir sur YouTube</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
