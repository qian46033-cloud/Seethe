import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface CardPage3ConnectProps {
  onNavigate: (page: PageId) => void;
}

interface DocLinkItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  url: string;
}

const docLinks: DocLinkItem[] = [
  {
    id: 'script',
    code: '01',
    title: '话术',
    subtitle: 'Scripts',
    url: 'https://www.kdocs.cn/l/cpRZqwwKnXDi'
  },
  {
    id: 'appreciation',
    code: '02',
    title: '你对我的夸赞',
    subtitle: 'Your Praise for Me',
    url: 'https://www.kdocs.cn/l/cp8RX8Zd7HU6'
  },
  {
    id: 'cards',
    code: '03',
    title: '卡类',
    subtitle: 'Card Types',
    url: 'https://www.kdocs.cn/l/cqd5AXmLiDZX'
  },
  {
    id: 'notice',
    code: '04',
    title: '须知',
    subtitle: 'Notice',
    url: 'https://www.kdocs.cn/l/cjF6tWSoKBFM'
  }
];

export const CardPage3Connect: React.FC<CardPage3ConnectProps> = ({
  onNavigate
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Top Header Strip outside Card */}
      <div className="w-full flex items-center justify-between mb-4 px-2 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-3">
          <span className="text-neutral-800 font-medium">Seethe</span>
          <span className="text-neutral-300">|</span>
          <span>走近我 · 索引</span>
        </div>
        <span className="text-neutral-900 font-semibold">03 / 03 页</span>
      </div>

      {/* Main Architectural Card Body */}
      <div className="w-full arch-card rounded-xl p-6 sm:p-8 md:p-10 relative overflow-hidden space-y-6">
        {/* Card Header hairline row */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 text-xs font-mono text-neutral-400">
          <div className="tracking-widest uppercase">
            Seethe · 走近我
          </div>
          <div>
            № 2026-ARCH / 03
          </div>
        </div>

        {/* Compact Section Header */}
        <div className="flex items-baseline justify-between pt-1">
          <h3 className="text-base sm:text-lg font-serif-arch font-light tracking-tight text-neutral-900">
            Drowning us
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            KDOCS
          </span>
        </div>

        {/* 4 Ultra-Compact Clickable Doc Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {docLinks.map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer px-4 py-2.5 rounded border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-50 transition-all flex items-center justify-between shadow-2xs"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-[10px] font-mono text-neutral-400">
                    {doc.code}
                  </span>
                  <span className="text-xs sm:text-sm font-serif-arch font-normal text-neutral-900 group-hover:text-black">
                    {doc.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 mt-0.5">
                  {doc.subtitle}
                </span>
              </div>

              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-3" />
            </a>
          ))}
        </div>

        {/* Card Footer Navigation Bar */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('moments')}
            className="cursor-pointer px-4 py-2 text-xs font-mono uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded border border-neutral-300 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>返回第 2 页 · About me</span>
          </button>

          <button
            onClick={() => onNavigate('profile')}
            className="cursor-pointer px-4 py-2 text-xs font-mono uppercase tracking-wider bg-neutral-900 hover:bg-black text-white rounded transition-colors flex items-center gap-2"
          >
            <span>重回第 1 页 · 看见我</span>
          </button>
        </div>
      </div>
    </div>
  );
};
