import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio file path with relative base URL for GitHub Pages compatibility
  const audioSrc = `${import.meta.env.BASE_URL}audio/qishi.mp3`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.65;

    // Attempt autoplay immediately
    const startPlay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy: listen for first user interaction
          const handleFirstInteraction = () => {
            audio
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch(() => {});
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
          };

          window.addEventListener('click', handleFirstInteraction, { once: true });
          window.addEventListener('touchstart', handleFirstInteraction, { once: true });
        });
    };

    startPlay();

    return () => {
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Audio play failed:', e));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="auto" />

      {/* Floating Audio Controller */}
      <aside aria-label="BGM 控制器" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={togglePlay}
          className="cursor-pointer group flex items-center gap-2.5 px-3.5 py-2 bg-white/95 hover:bg-neutral-900 hover:text-white backdrop-blur-md border border-neutral-300 hover:border-neutral-900 rounded-full shadow-lg transition-all duration-300 text-neutral-800"
          title={isPlaying ? '点击暂停音乐' : '点击播放音乐'}
        >
          {isPlaying ? (
            <>
              {/* Animated audio wave bars */}
              <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                <span className="w-0.5 bg-neutral-900 group-hover:bg-white animate-[pulse_0.8s_ease-in-out_infinite] h-3.5" />
                <span className="w-0.5 bg-neutral-900 group-hover:bg-white animate-[pulse_1.2s_ease-in-out_infinite] h-2" />
                <span className="w-0.5 bg-neutral-900 group-hover:bg-white animate-[pulse_0.9s_ease-in-out_infinite] h-3" />
              </div>
              <Volume2 className="w-3.5 h-3.5 text-neutral-700 group-hover:text-white" />
            </>
          ) : (
            <>
              <Music className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
              <VolumeX className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            </>
          )}

          <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider pr-1">
            <span className="font-medium">其实 · 薛之谦</span>
            <span className="text-[9px] uppercase text-neutral-400 group-hover:text-neutral-300 border-l border-neutral-200 group-hover:border-neutral-700 pl-1.5">
              {isPlaying ? '播放中' : '已暂停'}
            </span>
          </div>
        </button>
      </aside>
    </>
  );
};
