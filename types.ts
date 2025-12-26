
export interface MassSchedule {
  day: string;
  time: string;
  description: string;
}

export interface ParishEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface DailyReflection {
  verse: string;
  reference: string;
  reflection: string;
  prayer: string;
}

export interface NewsItem {
  id: string;
  type: 'facebook' | 'youtube' | 'live' | 'article';
  title: string;
  date: string;
  thumbnail: string;
  link: string;
  duration?: string;
}

export interface SacramentInfo {
  title: string;
  icon: string;
  description: string;
  schedule: string;
  documents: string[];
}

export interface ParishGroup {
  name: string;
  description: string;
  meetings: string;
  category: 'jeunesse' | 'adulte' | 'spiritualité' | 'service';
}

export type ViewState = 'home' | 'services' | 'about' | 'contact' | 'donations' | 'payment';
