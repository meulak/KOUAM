
import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Notre Saint Patron : Paul VI</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Giovanni Battista Montini, devenu Paul VI, fut le Pape de la conclusion du Concile Vatican II. 
              Canonisé en 2018, il est connu pour son courage, son dialogue avec le monde moderne et son amour 
              immense pour l'Église.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Il nous enseigne que "l'homme contemporain écoute plus volontiers les témoins que les maîtres, 
              ou s'il écoute les maîtres, c'est parce qu'ils sont des témoins."
            </p>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/id/1025/800/1000" alt="Saint Paul VI" className="w-full h-auto" />
          </div>
        </div>

        <div className="bg-blue-50 p-12 rounded-[3rem]">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Histoire de la Paroisse</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">2010</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Première Pierre</h3>
                <p className="text-gray-600">Début des travaux et constitution de la petite communauté de base à Bonamotongo.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">2015</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Érection Canonique</h3>
                <p className="text-gray-600">La paroisse est officiellement créée par l'Archidiocèse de Douala sous le patronage de Paul VI.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">2024</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Aujourd'hui</h3>
                <p className="text-gray-600">Une communauté vibrante de plus de 2000 fidèles engagés dans de nombreuses œuvres caritatives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
