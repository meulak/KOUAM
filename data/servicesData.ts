
import { SacramentInfo, ParishGroup } from "../types";

export const sacramentsData: SacramentInfo[] = [
  {
    title: "Le Baptême",
    icon: "baptism",
    description: "Porte d'entrée dans la vie chrétienne et naissance à la vie de Dieu.",
    schedule: "2ème et 4ème Samedi du mois à 10h00.",
    documents: [
      "Copie d'acte de naissance de l'enfant",
      "Certificat de baptême des parrains",
      "Participation aux frais de préparation"
    ]
  },
  {
    title: "Le Mariage",
    icon: "marriage",
    description: "Union sacrée de l'homme et de la femme devant Dieu.",
    schedule: "Préparation : 6 mois avant la date prévue.",
    documents: [
      "Extraits de baptême (moins de 6 mois)",
      "Certificat de mariage civil",
      "Attestation de formation au CPM"
    ]
  },
  {
    title: "La Confirmation",
    icon: "confirmation",
    description: "Le don du Saint-Esprit pour témoigner de sa foi.",
    schedule: "Célébration annuelle (Visite Pastorale).",
    documents: [
      "Certificat de baptême",
      "Fiche d'inscription complétée",
      "Suivi régulier du catéchisme"
    ]
  },
  {
    title: "Pénitence",
    icon: "penance",
    description: "Sacrement du pardon et de la miséricorde divine.",
    schedule: "Samedis à 16h00 ou sur rendez-vous.",
    documents: [
      "Examen de conscience sincère",
      "Désir réel de conversion"
    ]
  },
  {
    title: "Onction des malades",
    icon: "anointing",
    description: "Force et réconfort pour ceux qui traversent l'épreuve de la maladie.",
    schedule: "Urgence 24h/24 ou messe communautaire.",
    documents: [
      "Localisation exacte du malade",
      "Carnet de vie chrétienne",
      "Présence d'un proche"
    ]
  },
  {
    title: "Demande de Messe",
    icon: "mass-request",
    description: "Offrez une messe pour une intention particulière ou pour un défunt.",
    schedule: "Messes quotidiennes et dominicales.",
    documents: [
      "Nom du bénéficiaire",
      "Type d'intention",
      "Offrande de messe (Tarif diocésain)"
    ]
  }
];

export const groupsData: ParishGroup[] = [
  {
    name: "CVA / ÉCHO",
    description: "Épanouissement spirituel et humain des enfants à travers le jeu et la prière.",
    meetings: "Samedis à 14h00",
    category: "jeunesse"
  },
  {
    name: "Légion de Marie",
    description: "Service apostolique et évangélisation sous le patronage de la Vierge.",
    meetings: "Dimanches à 08h30",
    category: "spiritualité"
  },
  {
    name: "Scoutisme",
    description: "Formation du caractère par le service, la nature et la fraternité chrétienne.",
    meetings: "Samedis à 15h00",
    category: "jeunesse"
  },
  {
    name: "Chorale Sainte Cécile",
    description: "Animation liturgique et louange par le chant sacré polyphonique.",
    meetings: "Mardis & Jeudis 18h30",
    category: "service"
  },
  {
    name: "Hommes Catholiques",
    description: "Groupe de réflexion et d'action pour le témoignage des pères de famille.",
    meetings: "1er Dimanche du mois",
    category: "adulte"
  },
  {
    name: "Dames Apostoliques",
    description: "Engagement caritatif et soutien matériel aux œuvres de la paroisse.",
    meetings: "2ème Dimanche du mois",
    category: "adulte"
  }
];
