import React, { useEffect, useRef } from 'react';

export default function SpaceParticlesCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // If light mode, keep the canvas inactive/minimal for pure crisp paper aesthetic
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Scroll parallax drift
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.25;
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Subtle mouse repulsion
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Sparse, refined starfield (only 35-45 delicate stars for clean luxury aesthetic)
    const particleCount = theme === 'dark' 
      ? Math.min(Math.floor((width * height) / 25000), 45)
      : 0; // completely clean in light mode

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        baseSpeedX: (Math.random() - 0.5) * 0.2,
        baseSpeedY: (Math.random() - 0.5) * 0.2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.01 + 0.003,
        twinkleDir: 1,
        color: Math.random() > 0.6 ? 'rgba(56, 189, 248, ' : 'rgba(255, 255, 255, '
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (theme !== 'dark' || particles.length === 0) return;

      scrollVelocity *= 0.94;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY + scrollVelocity * 0.5;

        p.alpha += p.twinkleSpeed * p.twinkleDir;
        if (p.alpha > 0.8) p.twinkleDir = -1;
        if (p.alpha < 0.15) p.twinkleDir = 1;

        // Subtle mouse deflection
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Screen wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw star dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.shadowBlur = 4;
        ctx.fill();

        // Connect only very close stars with ultra-thin, subtle line
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 80) {
            const lineAlpha = (1 - cdist / 80) * 0.1 * p.alpha;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  if (theme !== 'dark') return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 opacity-60"
    />
  );
}
