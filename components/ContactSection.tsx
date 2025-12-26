
import React from 'react';

const ContactInfoCard: React.FC<{ icon: React.ReactNode; title: string; detail: string; subDetail?: string; color: string }> = ({ icon, title, detail, subDetail, color }) => (
  <div className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{title}</h4>
    <p className="text-xl font-black text-slate-900 mb-1">{detail}</p>
    {subDetail && <p className="text-sm font-medium text-slate-500">{subDetail}</p>}
  </div>
);

const ContactSection: React.FC = () => {
  return (
    <div className="bg-[#fdfdfd] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Secrétariat Paroissial
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-slate-900">
              Toujours à votre <br />
              <span className="serif-italic font-normal text-blue-600">écoute</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Que ce soit pour une intention de messe, une demande de sacrement ou simplement pour échanger, nos portes vous sont ouvertes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactInfoCard 
            color="bg-blue-50 text-blue-600"
            title="Adresse Physique"
            detail="Bonamotongo"
            subDetail="Douala, Face École Publique"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          />
          <ContactInfoCard 
            color="bg-emerald-50 text-emerald-600"
            title="Téléphone Secrétariat"
            detail="+237 600 00 00 00"
            subDetail="Lun - Ven, 09h00 - 17h00"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
          />
          <ContactInfoCard 
            color="bg-indigo-50 text-indigo-600"
            title="Email Officiel"
            detail="contact@paulvi-bona.cm"
            subDetail="Réponse sous 24h ouvrées"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          />
          <ContactInfoCard 
            color="bg-orange-50 text-orange-600"
            title="Urgences Pastorales"
            detail="+237 6XX XX XX XX"
            subDetail="Disponible 24h/24 pour l'onction"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M7 9h10" /></svg>}
          />
        </div>
      </section>

      {/* Main Form & Map Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-5 bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Envoyer un message</h3>
            <p className="text-slate-500 font-medium mb-10">Confiez-nous vos intentions ou vos questions.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Votre Nom Complet" 
                    className="w-full p-6 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="w-full p-6 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="relative">
                  <select className="w-full p-6 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 transition-all appearance-none">
                    <option>Sujet du message</option>
                    <option>Demande de baptême</option>
                    <option>Intention de messe</option>
                    <option>Rencontre avec le Curé</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div className="relative">
                  <textarea 
                    placeholder="Votre message ici..." 
                    rows={4}
                    className="w-full p-6 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-slate-300"
                  ></textarea>
                </div>
              </div>
              
              <button className="w-full py-6 bg-slate-900 text-white font-black rounded-3xl shadow-xl hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center gap-3">
                Envoyer le message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-7 h-[600px] lg:h-auto rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-2xl relative group">
            {/* Overlay Info for Map */}
            <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl max-w-xs transition-transform group-hover:translate-x-2">
               <h4 className="text-lg font-black text-slate-900 mb-2">Comment venir ?</h4>
               <p className="text-sm font-medium text-slate-500 mb-4 leading-relaxed">Située dans le quartier Bonamotongo, la paroisse est facilement reconnaissable à son architecture moderne.</p>
               <a 
                 href="https://www.google.com/maps/dir//Bonamotongo,+Douala" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
               >
                 Ouvrir dans Google Maps
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
               </a>
            </div>

            {/* Actual Google Map Iframe */}
            <iframe 
              title="Localisation Paroisse Saint Paul VI"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.066487802804!2d9.670692797652784!3d4.067891963212871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106111f97472f10b%3A0xc0f1710928a30647!2sBonab%C3%A9ri%2C%20Douala!5e0!3m2!1sfr!2scm!4v1715421234567!5m2!1sfr!2scm"
              className="w-full h-full border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Support Banner */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto p-12 rounded-[4rem] bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
          <div className="max-w-xl">
             <h4 className="text-3xl font-extrabold mb-4 tracking-tight">Suivez-nous sur les réseaux</h4>
             <p className="text-white/40 font-medium">Rejoignez la communauté en ligne pour ne manquer aucune annonce paroissiale et vivre les directs.</p>
          </div>
          <div className="flex gap-4">
             <a href="#" className="px-8 py-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white hover:text-slate-950 transition-all font-black text-sm">Facebook</a>
             <a href="#" className="px-8 py-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white hover:text-slate-950 transition-all font-black text-sm">YouTube</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
