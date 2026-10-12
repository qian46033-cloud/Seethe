export type PageId = 'profile' | 'moments' | 'connect';

export type CardTheme = 'sky' | 'twilight' | 'mist';

export interface MomentItem {
  id: string;
  title: string;
  subtitle: string;
  realm: string;
  date: string;
  image: string;
  description: string;
  quote: string;
  coordinates: string;
  mood: string;
}

export interface GuestbookCard {
  id: string;
  name: string;
  realm: string;
  message: string;
  timestamp: string;
  stars: number;
}

export interface ProfileInfo {
  name: string;
  handle: string;
  title: string;
  secondaryTitle: string;
  bio: string;
  quote: string;
  currentRealm: string;
  wings: number;
  joinYear: string;
  status: string;
  email: string;
  skyId: string;
  wechat: string;
  xiaohongshu: string;
  bilibili: string;
}
