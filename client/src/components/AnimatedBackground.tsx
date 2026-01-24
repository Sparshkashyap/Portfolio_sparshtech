import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  colorIndex?: number;
}

const backgroundColors = [
  'from-[hsl(222,47%,5%)] via-[hsl(230,45%,8%)] to-[hsl(220,50%,6%)]',
  'from-[hsl(230,45%,7%)] via-[hsl(235,45%,8%)] to-[hsl(225,47%,6%)]',
  'from-[hsl(220,50%,6%)] via-[hsl(230,45%,7%)] to-[hsl(235,45%,6%)]',
  'from-[hsl(235,45%,6%)] via-[hsl(230,45%,7%)] to-[hsl(222,47%,5%)]',
  'from-[hsl(225,47%,5%)] via-[hsl(220,50%,6%)] to-[hsl(230,45%,7%)]',
];

const AnimatedBackground = ({ colorIndex = 0 }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = (x: number, y: number, radius: number, color1: string, color2: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      return gradient;
    };

    const draw = () => {
      time += 0.002;
      
      ctx.fillStyle = 'hsl(222, 47%, 5%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated orbs
      const orbs = [
        {
          x: canvas.width * 0.3 + Math.sin(time * 0.5) * 100,
          y: canvas.height * 0.3 + Math.cos(time * 0.4) * 80,
          radius: 400,
          color1: 'hsla(199, 89%, 48%, 0.15)',
          color2: 'transparent',
        },
        {
          x: canvas.width * 0.7 + Math.cos(time * 0.3) * 120,
          y: canvas.height * 0.6 + Math.sin(time * 0.5) * 100,
          radius: 350,
          color1: 'hsla(187, 72%, 45%, 0.12)',
          color2: 'transparent',
        },
        {
          x: canvas.width * 0.5 + Math.sin(time * 0.4) * 80,
          y: canvas.height * 0.8 + Math.cos(time * 0.3) * 60,
          radius: 300,
          color1: 'hsla(280, 60%, 50%, 0.08)',
          color2: 'transparent',
        },
      ];

      orbs.forEach((orb) => {
        ctx.fillStyle = createGradient(orb.x, orb.y, orb.radius, orb.color1, orb.color2);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-20"
        style={{ pointerEvents: 'none' }}
      />
      <motion.div
        key={colorIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`fixed inset-0 -z-10 bg-gradient-to-br ${backgroundColors[colorIndex % backgroundColors.length]} opacity-50`}
        style={{ pointerEvents: 'none' }}
      />
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 -z-5 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
};

export default AnimatedBackground;
