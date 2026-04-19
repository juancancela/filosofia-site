import { useState, useRef } from 'react';

interface Props {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-stone-100 rounded-lg p-4 flex items-center gap-4">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={() => setProgress(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={toggle}
        className="w-10 h-10 flex-shrink-0 rounded-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center transition-colors"
        aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-stone-700 truncate">{title}</p>
        <div className="mt-1 flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={duration || 1}
            value={progress}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (audioRef.current) audioRef.current.currentTime = val;
              setProgress(val);
            }}
            className="flex-1 h-1 accent-amber-600 cursor-pointer"
          />
          <span className="text-xs text-stone-400 tabular-nums w-16 text-right">
            {fmt(progress)} / {fmt(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
