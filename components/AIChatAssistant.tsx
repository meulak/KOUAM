
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAbbe } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatAssistantProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "La paix du Seigneur soit avec vous. Je suis l'Abbé Etienne BAKABA. Comment puis-je éclairer votre chemin aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await chatWithAbbe(userMessage, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Une petite erreur technique. Confions cela au Seigneur et réessayez dans un instant." }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-[calc(100vw-3rem)] md:w-[420px] h-[650px] max-h-[80vh] bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] z-[100] flex flex-col border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* Header */}
      <div className="bg-slate-900 p-8 text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-slate-900 shadow-xl">
              EB
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">Abbé Etienne</h3>
              <p className="text-[10px] uppercase tracking-widest font-black text-white/40 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Assistant Spirituel
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-slate-50/50">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] p-5 rounded-[1.5rem] text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-slate-900 text-white rounded-tr-none shadow-xl' 
                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-sm font-medium'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-5 rounded-[1.5rem] rounded-tl-none border border-slate-100 shadow-sm">
               <div className="flex gap-1.5">
                 <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                 <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                 <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-6 bg-white border-t border-slate-100">
        <div className="flex gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question..."
            className="flex-grow p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 text-sm font-bold placeholder:text-slate-400"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-xl hover:bg-slate-800 disabled:opacity-50 transition-all active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatAssistant;
