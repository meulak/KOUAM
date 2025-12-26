
import { DailyReflection, NewsItem } from "../types";

export const weeklyPastoralMessage: DailyReflection = {
  verse: "Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",
  reference: "Jean 14, 6",
  reflection: "Chers paroissiens, cette semaine, nous sommes invités à redécouvrir la présence du Christ dans nos foyers. Que chaque acte de charité soit une pierre vivante pour notre communauté de Bonamotongo. Portons ensemble le fardeau des plus faibles et rendons grâce pour la joie de nous retrouver en famille paroissiale.",
  prayer: "Seigneur, par l'intercession de Saint Paul VI, bénis notre paroisse et guide nos pas vers la sainteté. Amen."
};

export const latestNews: NewsItem[] = [
  {
    id: '1',
    type: 'live',
    title: 'Messe du Dimanche - En Direct',
    date: 'En ce moment',
    thumbnail: 'https://images.unsplash.com/photo-1515518552692-23746614480c?q=80&w=1200&auto=format&fit=crop',
    link: 'https://youtube.com',
  },
  {
    id: '2',
    type: 'facebook',
    title: 'Retour sur la kermesse paroissiale 2024',
    date: 'Il y a 2 jours',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    link: 'https://facebook.com',
  },
  {
    id: '3',
    type: 'youtube',
    title: 'Enseignement : Saint Paul VI et le Concile',
    date: 'La semaine dernière',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    link: 'https://youtube.com',
    duration: '15:42'
  },
  {
    id: '4',
    type: 'article',
    title: 'Inscriptions au Catéchisme : Tout ce qu\'il faut savoir',
    date: 'Hier',
    thumbnail: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  }
];
