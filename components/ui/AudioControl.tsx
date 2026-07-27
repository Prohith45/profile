'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '@/lib/audio';

export const AudioControl: React.FC = () => {
  const [muted, setMuted] = useState(soundFx.getMuted());

  const handleToggle = () => {
    const nextState = soundFx.toggleMute();
    setMuted(nextState);
    if (!nextState) {
      soundFx.playRelayClick();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-cardBorder text-xs text-gray-300 hover:text-white hover:border-electric-cyan/40 transition-all duration-300 shadow-glass"
      title={muted ? "Enable Sci-Fi Lab Audio Effects" : "Mute Sci-Fi Lab Audio Effects"}
    >
      {muted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-gray-500" />
          <span className="hidden sm:inline">AUDIO: OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-electric-cyan animate-pulse" />
          <span className="hidden sm:inline text-electric-cyan font-mono">AUDIO: ACTIVE</span>
        </>
      )}
    </button>
  );
};
