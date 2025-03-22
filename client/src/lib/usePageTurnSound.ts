import { useRef, useEffect } from 'react';

// This hook creates an audio element for page turning sound
export const usePageTurnSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element only on client side
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio();
      audioRef.current.src = '/page-turn.mp3';
      audioRef.current.preload = 'auto';
      audioRef.current.volume = 0.5;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const play = () => {
    if (audioRef.current) {
      // Reset audio to start
      audioRef.current.currentTime = 0;
      
      // Play the sound
      const playPromise = audioRef.current.play();
      
      // Handle play promise to avoid uncaught errors
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Audio play failed:', error);
        });
      }
    }
  };

  return { play };
};