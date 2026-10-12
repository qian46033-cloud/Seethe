import React from 'react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onSelectPage: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onSelectPage
}) => {
  return (
    <header className="w-full border-b border-neutral-300 bg-white sticky top-0 z-40 transition-colors">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5 gap-3">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelectPage('profile');
          }}
          className="text-sm sm:text-base font-serif-arch tracking-tight text-neutral-900 whitespace-nowrap shrink-0 hover:text-black transition-colors"
        >
          Seethe
        </a>

        {/* 3 Nav Tabs - Placed closer together */}
        <nav className="flex items-center gap-3 sm:gap-5 text-xs font-mono uppercase tracking-normal sm:tracking-wider text-neutral-500 shrink-0">
          <button
            onClick={() => onSelectPage('profile')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors relative py-1 text-[11px] sm:text-xs ${
              currentPage === 'profile'
                ? 'text-neutral-900 font-semibold'
                : 'hover:text-neutral-900'
            }`}
          >
            01 // 看见我
            {currentPage === 'profile' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-900" />
            )}
          </button>

          <button
            onClick={() => onSelectPage('moments')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors relative py-1 text-[11px] sm:text-xs ${
              currentPage === 'moments'
                ? 'text-neutral-900 font-semibold'
                : 'hover:text-neutral-900'
            }`}
          >
            02 // 了解我
            {currentPage === 'moments' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-900" />
            )}
          </button>

          <button
            onClick={() => onSelectPage('connect')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors relative py-1 text-[11px] sm:text-xs ${
              currentPage === 'connect'
                ? 'text-neutral-900 font-semibold'
                : 'hover:text-neutral-900'
            }`}
          >
            03 // 走近我
            {currentPage === 'connect' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-900" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
