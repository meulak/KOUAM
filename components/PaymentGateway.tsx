
import React, { useState } from 'react';

interface PaymentGatewayProps {
  onBack: () => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState<'orange' | 'momo' | 'card' | null>(null);
  const [motif, setMotif] = useState<string | null>(null);
  const [amount, setAmount] = useState('');

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const motifs = [
    { 
      id: 'denier', 
      label: "Denier de l'Église", 
      desc: "Soutien aux prêtres et vie paroissiale", 
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 'travaux', 
      label: "Travaux & Construction", 
      desc: "Bâtiment, rénovation et projets d'envergure", 
      color: "orange",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      id: 'social', 
      label: "Œuvres Sociales", 
      desc: "Charité, aide aux démunis et solidarité", 
      color: "emerald",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      id: 'messe', 
      label: "Intention de Messe", 
      desc: "Action de grâce ou repos éternel", 
      color: "indigo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M7 9h10" />
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={step === 1 ? onBack : handleBack}
          className="flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-all mb-12 font-black uppercase text-[10px] tracking-[0.3em] group"
        >
          <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
            <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          {step === 1 ? 'Retour aux projets' : 'Étape précédente'}
        </button>

        <div className="bg-white rounded-[4rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden relative">
          {/* Header Step Counter */}
          <div className="px-12 pt-12 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Donation sécurisée</span>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Étape {step} sur 4</span>
          </div>

          {/* Progress Bar */}
          <div className="px-12 mt-6">
            <div className="h-1.5 bg-slate-50 w-full rounded-full overflow-hidden">
              <div className="h-full bg-slate-900 transition-all duration-1000 ease-out" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
          </div>

          <div className="p-12 md:p-16">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight">
                  Définir mon <br />
                  <span className="serif-italic font-normal text-blue-600">offrande</span>
                </h3>
                <p className="text-slate-500 font-medium mb-12 leading-relaxed">Saisissez le montant que vous souhaitez consacrer à l'œuvre de Dieu.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['2000', '5000', '10000', '25000'].map(val => (
                    <button 
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`py-8 rounded-[2rem] font-black text-xl transition-all ${amount === val ? 'bg-slate-900 text-white shadow-2xl scale-[1.03]' : 'bg-slate-50 text-slate-400 hover:bg-white hover:shadow-xl hover:border-slate-100 border border-transparent'}`}
                    >
                      {Number(val).toLocaleString()} <span className="text-[10px] uppercase opacity-60 ml-1">FCFA</span>
                    </button>
                  ))}
                </div>
                
                <div className="relative mb-12">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-slate-300 uppercase text-[10px] tracking-widest">Montant Libre</div>
                  <input 
                    type="number" 
                    placeholder="Saisir ici..." 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-8 pl-32 bg-slate-50 border border-transparent rounded-[2rem] font-black text-xl focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-200"
                  />
                </div>

                <button 
                  disabled={!amount}
                  onClick={handleNext}
                  className="w-full py-8 bg-slate-900 text-white font-black rounded-[2rem] shadow-2xl shadow-slate-900/20 hover:bg-blue-600 disabled:opacity-20 transition-all active:scale-95 text-lg tracking-tight"
                >
                  Continuer vers le motif
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight">
                  Motif de mon <br />
                  <span className="serif-italic font-normal text-blue-600">intention</span>
                </h3>
                <p className="text-slate-500 font-medium mb-12">Précisez la destination de votre générosité.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {motifs.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => setMotif(item.id)}
                      className={`p-8 rounded-[2.5rem] flex flex-col items-start text-left border-2 transition-all duration-500 group/btn ${motif === item.id ? 'border-slate-900 bg-slate-900 text-white shadow-2xl' : 'border-slate-50 hover:border-slate-200 bg-white shadow-sm'}`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${motif === item.id ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-400 group-hover/btn:bg-slate-900 group-hover/btn:text-white'}`}>
                        {item.icon}
                      </div>
                      <p className={`font-black text-sm mb-2 ${motif === item.id ? 'text-white' : 'text-slate-900'}`}>{item.label}</p>
                      <p className={`text-[10px] font-bold uppercase tracking-widest leading-relaxed ${motif === item.id ? 'text-white/40' : 'text-slate-400'}`}>{item.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button onClick={handleBack} className="flex-1 py-7 bg-slate-50 text-slate-400 font-black rounded-[2rem] hover:bg-slate-100 transition-all">Retour</button>
                  <button 
                    disabled={!motif}
                    onClick={handleNext}
                    className="flex-[2] py-7 bg-slate-900 text-white font-black rounded-[2rem] shadow-2xl shadow-slate-900/20 hover:bg-blue-600 disabled:opacity-20 transition-all active:scale-95"
                  >
                    Valider le motif
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight">
                  Moyen de <br />
                  <span className="serif-italic font-normal text-blue-600">paiement</span>
                </h3>
                <p className="text-slate-500 font-medium mb-12">Sélectionnez votre mode de transaction préféré.</p>
                
                <div className="space-y-4 mb-12">
                  <button 
                    onClick={() => setMethod('orange')}
                    className={`w-full p-8 rounded-[2.5rem] flex items-center justify-between border-2 transition-all duration-500 group/pay ${method === 'orange' ? 'border-orange-500 bg-orange-50' : 'border-slate-50 hover:border-slate-200 bg-white'}`}
                  >
                    <div className="flex items-center gap-6 text-left">
                       <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-orange-200">OM</div>
                       <div>
                         <p className="font-black text-slate-900">Orange Money</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Paiement Mobile National</p>
                       </div>
                    </div>
                    {method === 'orange' && (
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center animate-in zoom-in duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                    )}
                  </button>

                  <button 
                    onClick={() => setMethod('momo')}
                    className={`w-full p-8 rounded-[2.5rem] flex items-center justify-between border-2 transition-all duration-500 group/pay ${method === 'momo' ? 'border-yellow-500 bg-yellow-50' : 'border-slate-50 hover:border-slate-200 bg-white'}`}
                  >
                    <div className="flex items-center gap-6 text-left">
                       <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-yellow-200 text-yellow-900">MoMo</div>
                       <div>
                         <p className="font-black text-slate-900">MTN MoMo</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Compte Mobile Sécurisé</p>
                       </div>
                    </div>
                    {method === 'momo' && (
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center animate-in zoom-in duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                    )}
                  </button>

                  <button 
                    onClick={() => setMethod('card')}
                    className={`w-full p-8 rounded-[2.5rem] flex items-center justify-between border-2 transition-all duration-500 group/pay ${method === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50 hover:border-slate-200 bg-white'}`}
                  >
                    <div className="flex items-center gap-6 text-left">
                       <div className="w-14 h-14 bg-gradient-to-br from-indigo-800 to-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xs italic shadow-lg shadow-indigo-200">VISA</div>
                       <div>
                         <p className="font-black text-slate-900">Carte Bancaire</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">International & Virement</p>
                       </div>
                    </div>
                    {method === 'card' && (
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center animate-in zoom-in duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                    )}
                  </button>
                </div>

                <div className="flex gap-4">
                  <button onClick={handleBack} className="flex-1 py-7 bg-slate-50 text-slate-400 font-black rounded-[2rem] hover:bg-slate-100 transition-all">Retour</button>
                  <button 
                    disabled={!method}
                    onClick={handleNext}
                    className="flex-[2] py-7 bg-slate-900 text-white font-black rounded-[2rem] shadow-2xl shadow-slate-900/20 hover:bg-blue-600 disabled:opacity-20 transition-all active:scale-95"
                  >
                    Confirmer le paiement
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in zoom-in duration-700 text-center py-8">
                <div className="relative inline-block mb-12">
                   <div className="absolute inset-0 bg-emerald-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                   <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-2xl border-4 border-emerald-50">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                   </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight">
                  Merci pour votre <br />
                  <span className="serif-italic font-normal text-emerald-600">générosité</span>
                </h3>
                
                <p className="text-slate-500 font-medium mb-12 max-w-md mx-auto leading-relaxed">
                  Votre offrande de <span className="text-slate-900 font-black">{Number(amount).toLocaleString()} FCFA</span> pour le motif <span className="font-black text-slate-900">"{motifs.find(m => m.id === motif)?.label}"</span> est en cours de traitement.
                </p>
                
                <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 mb-12 text-left space-y-5 max-w-sm mx-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Référence</span>
                    <span className="text-xs font-black text-slate-900 tracking-tight">#P6-BONA-{Math.floor(Math.random() * 90000) + 10000}</span>
                  </div>
                  <div className="h-[1px] bg-slate-100 w-full"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Statut</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">En attente</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={onBack}
                  className="w-full py-8 bg-slate-900 text-white font-black rounded-[2rem] shadow-2xl shadow-slate-900/20 hover:bg-slate-800 transition-all active:scale-95 tracking-tight"
                >
                  Terminer et retourner à l'accueil
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center space-y-6">
           <div className="flex justify-center items-center gap-4 opacity-30">
              <div className="h-[1px] w-12 bg-slate-300"></div>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" /></svg>
              <div className="h-[1px] w-12 bg-slate-300"></div>
           </div>
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 leading-relaxed">
             Sécurité Bancaire Certifiée • Paroisse Saint Paul VI • Bonamotongo
           </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
