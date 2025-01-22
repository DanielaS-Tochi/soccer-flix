import { useCallback } from 'react';
import confetti from 'canvas-confetti';

const useConfetti = () => {
  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 500,
      spread: 360,
      scalar: 2,
      origin: { y: 0.6 },
    });
  }, []);

  return { triggerConfetti };
};

export default useConfetti;


