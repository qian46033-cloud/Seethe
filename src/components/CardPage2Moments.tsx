import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProfileInfo, PageId } from '../types';

interface CardPage2MomentsProps {
  profile: ProfileInfo;
  onNavigate: (page: PageId) => void;
  onCopySuccess: (text: string) => void;
}

export const CardPage2Moments: React.FC<CardPage2MomentsProps> = ({
  profile,
  onNavigate
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Top Header Strip outside Card */}
      <div className="w-full flex items-center justify-between mb-4 px-2 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-3">
          <span className="text-neutral-800 font-medium">Seethe</span>
          <span className="text-neutral-300">|</span>
          <span>了解我 · About me</span>
        </div>
        <span className="text-neutral-900 font-semibold">02 / 03 页</span>
      </div>

      {/* Main Architectural Card Body */}
      <div className="w-full arch-card rounded-xl p-6 sm:p-10 md:p-12 relative overflow-hidden space-y-8">
        {/* Card Header hairline row */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200 text-xs font-mono text-neutral-400">
          <div className="tracking-widest uppercase">
            About me · 了解我
          </div>
          <div>
            № 2026-ARCH / 02
          </div>
        </div>

        {/* Clean Centered Personal Dossier */}
        <div className="flex flex-col items-center justify-center min-h-[340px] py-6 max-w-md mx-auto text-center space-y-6">
          {/* Portrait / Flying Birds Avatar */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-neutral-300 shadow-2xs bg-black">
            <img
              src="/src/assets/images/staggered_flying_birds_monochrome_1791798212408.jpg"
              alt={profile.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-serif-arch font-medium text-neutral-900">
              {profile.name}
            </h2>
          </div>

          <div className="w-48 h-px arch-dotted" />

          {/* Personal Info Lines */}
          <div className="space-y-2.5 text-xs sm:text-sm font-serif-arch text-neutral-800 leading-relaxed tracking-wider">
            <div>十八岁｜土象金牛｜Le｜INTJ</div>
            <div>曾用名：恃雾行</div>
            <div>常驻：耳鸟</div>
          </div>
        </div>

        {/* Card Footer Navigation Bar */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('profile')}
            className="cursor-pointer px-4 py-2 text-xs font-mono uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded border border-neutral-300 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>返回第 1 页 · 看见我</span>
          </button>

          <button
            onClick={() => onNavigate('connect')}
            className="cursor-pointer px-4 py-2 text-xs font-mono uppercase tracking-wider bg-neutral-900 hover:bg-black text-white rounded transition-colors flex items-center gap-2"
          >
            <span>进入第 3 页 · 走近我</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
