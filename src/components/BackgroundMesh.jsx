import React, { useEffect, useState, useRef } from 'react';

export default function BackgroundMesh() {
  const [mousePos, setMousePos] = useState({ x: 600, y: 400 });
  const particleCanvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Full-Bleed Edge-to-Edge Floating Canvas Particle Engine
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      color: Math.random() > 0.5 ? '#7C5CFF' : '#4F7CFF'
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Background Radial Gradient Base */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#05070A',
        backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 124, 255, 0.09) 0%, rgba(124, 92, 255, 0.03) 30%, transparent 65%)`,
        transition: 'background 0.1s ease-out'
      }} />

      {/* Full-Bleed Particle Canvas */}
      <canvas ref={particleCanvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.75 }} />

      {/* Floating Blurred Ambient Light Orbs */}
      <div 
        aria-hidden="true" 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 124, 255, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(90px)',
          animation: 'pulse-slow 12s infinite ease-in-out'
        }}
      />
      <div 
        aria-hidden="true" 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 92, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(110px)',
          animation: 'pulse-slow 16s infinite ease-in-out',
          animationDelay: '4s'
        }}
      />

      {/* Subtle Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 80%)'
      }} />

      {/* Edge Vignette Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(5, 7, 10, 0.85) 100%)'
      }} />
    </div>
  );
}
