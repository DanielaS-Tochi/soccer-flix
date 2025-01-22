import { useCallback } from 'react';
import confetti from 'canvas-confetti';

const useConfetti = () => {
  const triggerConfetti = useCallback(() => {
    const duration = 3 * 1000; // Duración total del confetti (3 segundos)
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 300, // Cantidad de papelitos por ráfaga
        startVelocity: 30, // Velocidad inicial
        spread: 360, // Cubre toda la pantalla
        scalar: 2, // Tamaño de las partículas (puedes ajustar este valor)
        ticks: 100, // Duración de las partículas individuales
        origin: {
          x: Math.random(), // Dispersión horizontal aleatoria
          y: Math.random() - 0.2, // Dispersión vertical aleatoria
        },
      });
    }, 250); // Tiempo entre ráfagas
  }, []);

  return { triggerConfetti };
};

export default useConfetti;



