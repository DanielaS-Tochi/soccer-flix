import { useCallback } from 'react';
import confetti from 'canvas-confetti';

const useConfetti = () => {
  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return { triggerConfetti };
};

export default useConfetti;


