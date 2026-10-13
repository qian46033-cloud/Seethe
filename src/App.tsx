/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types';
import { initialProfile } from './data/initialData';
import { Navbar } from './components/Navbar';
import { CardPage1Profile } from './components/CardPage1Profile';
import { CardPage2Moments } from './components/CardPage2Moments';
import { CardPage3Connect } from './components/CardPage3Connect';
import { AudioPlayer } from './components/AudioPlayer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('profile');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#ededed] text-neutral-900 font-sans-arch">
      {/* Top Bar with tight 3 tabs */}
      <Navbar
        currentPage={currentPage}
        onSelectPage={setCurrentPage}
      />

      {/* Main Workspace Frame */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <div className="w-full max-w-5xl">
          {/* Active Page Display */}
          {currentPage === 'profile' && (
            <CardPage1Profile
              profile={initialProfile}
              onNavigate={setCurrentPage}
              onCopySuccess={showToast}
            />
          )}

          {currentPage === 'moments' && (
            <CardPage2Moments
              profile={initialProfile}
              onNavigate={setCurrentPage}
              onCopySuccess={showToast}
            />
          )}

          {currentPage === 'connect' && (
            <CardPage3Connect
              onNavigate={setCurrentPage}
            />
          )}
        </div>
      </main>

      {/* Editorial Footer */}
      <footer className="w-full py-6 text-center text-xs font-mono text-neutral-500 border-t border-neutral-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            SEETHE // 看见我 · 了解我 · 走近我
          </div>
          <div>
            SEETHE ARCHIVE · MONOCHROME EDITION · 2026
          </div>
        </div>
      </footer>

      {/* Monochrome Minimalist Toast */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-neutral-900 text-white text-xs font-mono rounded shadow-lg border border-neutral-700 transition-all flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Background Audio Player with Autoplay & Toggle */}
      <AudioPlayer />
    </div>
  );
}
