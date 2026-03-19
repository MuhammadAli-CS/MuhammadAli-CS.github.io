import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];

    const COUNT = 55;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const randBetween = (a, b) => a + Math.random() * (b - a);

    // Particle colours: soft purples, blues, whites — match aurora palette
    const COLORS = [
      'rgba(99, 60, 220, ',   // indigo-violet
      'rgba(56, 120, 220, ',  // electric blue
      'rgba(180, 100, 255, ', // soft purple
      'rgba(200, 200, 255, ', // icy white-blue
    ];

    const makeParticle = () => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        x: randBetween(0, W),
        y: randBetween(0, H),
        r: randBetween(0.4, 1.6),         // radius
        alpha: randBetween(0.15, 0.6),
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        alphaSpeed: randBetween(0.003, 0.008),
        vx: randBetween(-0.12, 0.12),
        vy: randBetween(-0.18, -0.04),    // drift slowly upward
        color,
      };
    };

    for (let i = 0; i < COUNT; i++) {
      particles.push(makeParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        // Twinkle
        p.alpha += p.alphaDir * p.alphaSpeed;
        if (p.alpha >= 0.65 || p.alpha <= 0.05) p.alphaDir *= -1;

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap vertically, reset randomly on x when going off the top
        if (p.y < -5) {
          p.y = H + 5;
          p.x = randBetween(0, W);
        }
        if (p.x < -5)  p.x = W + 5;
        if (p.x > W + 5) p.x = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  );
}
