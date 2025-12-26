
import React from 'react';

const Sacraments: React.FC = () => {
  const sacraments = [
    {
      title: "Le Baptême",
      icon: "💧",
      desc: "Porte d'entrée dans la vie chrétienne. Inscriptions au secrétariat.",
      info: "Nécessite une préparation de 3 mois pour les enfants et 2 ans pour les adultes (Catéchuménat)."
    },
    {
      title: "Le Mariage",
      icon: "💍",
      desc: "Union sacrée devant Dieu. Contactez la paroisse 6 mois à l'avance.",
      info: "Sessions de préparation au mariage obligatoires (CPM)."
    },
    {
      title: "L'Eucharistie",
      icon: "🍞",
      desc: "Le cœur de notre foi. Première communion après le parcours de catéchèse.",
      info: "Messes quotidiennes et dominicales."
    },
    {
      title: "La Réconciliation",
      icon: "🕊️",
      desc: "Retrouver la paix avec Dieu. Sacrement de miséricorde.",
      info: "Confessions chaque samedi à 16h00."
    },
    {
      title: "Confirmation",
      icon: "🔥",
      desc: "Recevoir le don de l'Esprit Saint pour témoigner de sa foi.",
      info: "Parcours spécifique pour jeunes et adultes."
    },
    {
      title: "Onction des Malades",
      icon: "🌿",
      desc: "Force et réconfort pour ceux qui souffrent physiquement.",
      info: "Sur demande au presbytère."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">Les Sacrements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accompagner chaque étape de votre vie chrétienne par la grâce de Dieu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacraments.map((s, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-blue-50 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition">{s.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-6">{s.desc}</p>
              <div className="p-4 bg-blue-50 rounded-2xl text-sm text-blue-700 font-medium">
                {s.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sacraments;
