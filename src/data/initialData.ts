import { MomentItem, ProfileInfo, GuestbookCard } from '../types';

export const initialProfile: ProfileInfo = {
  name: 'Seethe',
  handle: 'Seethe',
  title: '视觉设计与空间叙事者',
  secondaryTitle: '极简黑白灰 · 建筑摄影 · 出版物排版',
  bio: '于黑白纯粹之间，构筑静默与秩序的实体名片。以克制内敛的几何线条与低饱和度灰阶，记录光影、构造与生活之简。',
  quote: '“克制即是力量，黑白即是本源。”',
  currentRealm: '上海 / 云端归档',
  wings: 12,
  joinYear: '2021',
  status: '独立设计 · 开放交流',
  email: 'qian46033@gmail.com',
  skyId: 'SEETHE-ARCH-8942',
  wechat: 'qian46033_sky',
  xiaohongshu: 'Seethe_Design',
  bilibili: 'Seethe的设计随笔'
};

export const initialMoments: MomentItem[] = [
  {
    id: 'project-1',
    title: '荒原石亭 · 轴测构想',
    subtitle: 'Minimalist Pavilion on the Horizon',
    realm: '建筑方案 / Axonometric Plan',
    date: '2026.03',
    image: '/src/assets/images/arch_monochrome_landscape_1791771611914.jpg',
    description: '采用清水混凝土柱列与下沉式静水面，在开阔地平线上确立静止的坐标。通过光影缝隙与几何切口，让日光在素净墙面上书写时间。',
    quote: '“让空间退后，让天光与静默显现。”',
    coordinates: 'Axonometric (30°/30°) · Field Project',
    mood: '理性 / 秩序'
  },
  {
    id: 'project-2',
    title: '光之拱券 · 几何秩序',
    subtitle: 'Brutalist Concrete Pavilion',
    realm: '空间摄影 / Spatial Archive',
    date: '2025.11',
    image: '/src/assets/images/arch_monochrome_pavilion_1791771600253.jpg',
    description: '一系列混凝土半圆拱与三角形天窗构造，在阴天漫射光中呈现细腻的骨料质感。比例精准的步道赋予漫步者庄重而宁静的包裹感。',
    quote: '“纯粹的几何不需要修饰，它自身即是答卷。”',
    coordinates: 'Structure 02 · Concrete Series',
    mood: '静穆 / 纯粹'
  }
];

export const initialGuestbook: GuestbookCard[] = [
  {
    id: 'card-1',
    name: '林序 / Lin Xu',
    realm: '建筑研习者 · 杭州',
    message: '非常欣赏这种黑白灰的极简排版与建筑秩序感，干练、高级且极有呼吸感。',
    timestamp: '2026.10.08',
    stars: 5
  },
  {
    id: 'card-2',
    name: '程微 / Chen Wei',
    realm: '书籍设计师 · 北京',
    message: '递一张我的名片。字体微距和灰阶层次把控很到位，期待后续作品交流。',
    timestamp: '2026.10.05',
    stars: 5
  },
  {
    id: 'card-3',
    name: '路过同行 / Studio M',
    realm: '空间摄影 · 上海',
    message: '黑白摄影与名片版式的融合很舒服，已收录此名片。',
    timestamp: '2026.09.28',
    stars: 5
  }
];
