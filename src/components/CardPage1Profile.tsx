import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProfileInfo, PageId } from '../types';

interface CardPage1ProfileProps {
  profile: ProfileInfo;
  onNavigate: (page: PageId) => void;
  onCopySuccess?: (text: string) => void;
}

export const CardPage1Profile: React.FC<CardPage1ProfileProps> = ({
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
          <span>看见我</span>
        </div>
        <div>
          <span className="text-neutral-900 font-semibold">01 / 03 页</span>
        </div>
      </div>

      {/* Main Architectural Card Body */}
      <div
        className="w-full arch-card rounded-xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
      >
        {/* Card Header hairline row */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200 text-xs font-mono text-neutral-400">
          <div className="tracking-widest uppercase">
            Seethe · 看见我
          </div>
          <div>
            № 2026-ARCH / 01
          </div>
        </div>

        {/* Card Content - Only Front Side */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[420px]">
          {/* Left Typographic Column */}
          <div className="md:col-span-6 flex flex-col justify-center h-full space-y-6 pr-0 md:pr-4">
            <div>
              {/* Large Serif Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif-arch font-light text-neutral-900 tracking-tight leading-none">
                Seethe.
              </h1>
              {/* Spaced Chinese subtitle */}
              <div className="text-xs sm:text-sm font-serif-arch font-light tracking-[0.6em] text-neutral-700 mt-4 pl-1">
                恰如一只飞鸟
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mt-3 pl-1">
                / VISITING CARD · SEETHE
              </div>
            </div>
          </div>

          {/* Right Graphic Column with Circular Cutout */}
          <div className="md:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-square flex items-center justify-center">
              {/* Circle Mask with flying white birds photo */}
              <div className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden border border-neutral-300 shadow-sm relative bg-black group">
                <img
                  src="/src/assets/images/staggered_flying_birds_monochrome_1791798212408.jpg"
                  alt="恰如一只飞鸟"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Action Bar */}
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] sm:text-xs font-serif-arch font-light tracking-[0.18em] text-neutral-600">
            命运是水 淹死我们
          </div>

          <button
            onClick={() => onNavigate('moments')}
            className="cursor-pointer px-4 py-2 text-xs font-mono uppercase tracking-wider bg-neutral-900 hover:bg-black text-white rounded transition-colors flex items-center gap-2"
          >
            <span>进入第 2 页 · About me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
