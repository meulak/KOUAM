
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop',
    tag: 'Bienvenue à Bonamotongo',
    title: 'Une foi qui',
    italic: 'rayonne',
    description: "Ancrée dans la tradition et ouverte sur le monde, notre paroisse vous accueille au cœur de Douala."
  },
  {
    image: 'https://images.unsplash.com/photo-1548625361-12502ec32924?q=80&w=2000&auto=format&fit=crop',
    tag: 'Vie Liturgique',
    title: 'La grâce du',
    italic: 'sacré',
    description: "Vivez l'Eucharistie au rythme de la ferveur de notre communauté en marche vers le Seigneur."
  },
  {
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop',
    tag: 'Engagement Social',
    title: 'Un cœur pour',
    italic: 'servir',
    description: "Suivez l'exemple de Paul VI à travers nos œuvres de charité et notre soutien aux plus démunis."
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const scrollToSchedules = () => {
    const element = document.getElementById('mass-schedules');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] md:h-[95vh] w-full flex items-center overflow-hidden bg-slate-900">
      {/* Background Slides with smoother crossfade */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className={`absolute inset-0 scale-105 ${index === currentSlide ? 'animate-subtle-zoom' : ''}`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Content Wrapper - Added significant padding-top (pt-32) to ensure content starts below the fixed navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32">
        <div className="max-w-3xl">
          {/* Transition Wrapper */}
          <div className={`transition-all duration-700 transform ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 drop-shadow-sm">
              {slides[currentSlide].tag}
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[1.1]">
              {slides[currentSlide].title} <br />
              <span className="serif-italic font-normal text-blue-200">{slides[currentSlide].italic}</span>
            </h1>
            
            <p className="text-base md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed font-medium">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={onNavigate}
                className="group relative px-10 py-4 bg-white text-slate-900 font-extrabold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Nous Rejoindre</span>
                <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              
              <button 
                onClick={scrollToSchedules}
                className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-3 group"
              >
                Voir les Horaires
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Controls */}
      <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center z-20">
        {/* Pagination Dots */}
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx !== currentSlide) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(idx);
                    setIsTransitioning(false);
                  }, 300);
                }
              }}
              className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-10 bg-blue-400' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Minimalist Navigation */}
        <div className="hidden md:flex gap-4">
           <button 
             onClick={handlePrev}
             className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"
             aria-label="Précédent"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
           </button>
           <button 
             onClick={handleNext}
             className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"
             aria-label="Suivant"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
