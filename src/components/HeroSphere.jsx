import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function HeroSphere() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = 380);
    let height = (canvas.height = 380);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 95;

    // Motion State Variables
    let rotationY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    // Orbiting Particles State
    let particle1Angle = 0;
    let particle2Angle = Math.PI;

    // Light Source Direction Vector (Upper-Left Light Source)
    const lightDir = { x: -0.5, y: -0.6, z: 0.8 };
    const lightLen = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z);
    lightDir.x /= lightLen;
    lightDir.y /= lightLen;
    lightDir.z /= lightLen;

    // Mouse Parallax Pointer Handler
    const handleMouseMove = (e) => {
      if (shouldReduceMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      // Max 9 degree tilt (~0.15 rad)
      targetTiltY = relX * 0.16;
      targetTiltX = -relY * 0.16;
    };

    const handleMouseLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Main 60 FPS Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update Rotation & Parallax Lerp
      if (!shouldReduceMotion) {
        rotationY += 0.006; // Slow ~75s rotation
        currentTiltX += (targetTiltX - currentTiltX) * 0.08;
        currentTiltY += (targetTiltY - currentTiltY) * 0.08;

        particle1Angle += 0.009;
        particle2Angle -= 0.007;
      }

      // Draw 3D Shaded Sphere
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;

      // Color Palette: Gradient interpolated between #4F7CFF (79, 124, 255) & #7C5CFF (124, 92, 255)
      const baseR1 = 79, baseG1 = 124, baseB1 = 255;
      const baseR2 = 124, baseG2 = 92, baseB2 = 255;

      const cosY = Math.cos(rotationY + currentTiltY);
      const sinY = Math.sin(rotationY + currentTiltY);
      const cosX = Math.cos(currentTiltX);
      const sinX = Math.sin(currentTiltX);

      for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
          const distSq = x * x + y * y;
          if (distSq <= radius * radius) {
            const z = Math.sqrt(radius * radius - distSq);
            
            // Sphere Normal Vector
            let nx = x / radius;
            let ny = y / radius;
            let nz = z / radius;

            // Apply 3D Y & X Tilt Rotations to Normals
            let rx = nx * cosY + nz * sinY;
            let ry = ny * cosX - nz * sinX;
            let rz = -nx * sinY + nz * cosY;

            // Diffuse Lighting Calculation (Dot Product N · L)
            const dot = Math.max(0.08, rx * lightDir.x + ry * lightDir.y + rz * lightDir.z);
            
            // Specular Highlight (Upper Left Light Source Falloff)
            const spec = Math.pow(dot, 14);

            // Interpolate Gradient Base Color along sphere surface
            const factor = (rx + 1) / 2;
            let r = baseR1 * (1 - factor) + baseR2 * factor;
            let g = baseG1 * (1 - factor) + baseG2 * factor;
            let b = baseB1 * (1 - factor) + baseB2 * factor;

            // Apply Lighting Falloff & Specular Highlight
            r = Math.min(255, r * dot + spec * 220);
            g = Math.min(255, g * dot + spec * 220);
            b = Math.min(255, b * dot + spec * 240);

            const px = Math.floor(centerX + x);
            const py = Math.floor(centerY + y);
            const idx = (py * width + px) * 4;

            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            // Smooth Rim Alpha Anti-aliasing
            const rimAlpha = Math.min(1, (radius - Math.sqrt(distSq)) / 1.8);
            data[idx + 3] = Math.floor(rimAlpha * 255);
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // Render 3D Dashed Orbital Rings & Traveling Particles
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(currentTiltX * 0.5);

      // Orbit 1: Tilted Ellipse Radius 145px
      const rx1 = 145;
      const ry1 = 50;

      ctx.beginPath();
      ctx.ellipse(0, 0, rx1, ry1, -Math.PI / 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(124, 92, 255, 0.22)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 9]);
      ctx.stroke();

      // Traveling Particle 1 Along Orbit 1
      const p1X = rx1 * Math.cos(particle1Angle);
      const p1Y = ry1 * Math.sin(particle1Angle);
      const rotAngle1 = -Math.PI / 8;
      const finalP1X = p1X * Math.cos(rotAngle1) - p1Y * Math.sin(rotAngle1);
      const finalP1Y = p1X * Math.sin(rotAngle1) + p1Y * Math.cos(rotAngle1);

      ctx.beginPath();
      ctx.arc(finalP1X, finalP1Y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#00C896';
      ctx.shadowColor = '#00C896';
      ctx.shadowBlur = 10;
      ctx.fill();

      // Orbit 2: Tilted Ellipse Radius 125px
      const rx2 = 125;
      const ry2 = 42;

      ctx.beginPath();
      ctx.ellipse(0, 0, rx2, ry2, Math.PI / 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(79, 124, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();

      // Traveling Particle 2 Along Orbit 2
      const p2X = rx2 * Math.cos(particle2Angle);
      const p2Y = ry2 * Math.sin(particle2Angle);
      const rotAngle2 = Math.PI / 6;
      const finalP2X = p2X * Math.cos(rotAngle2) - p2Y * Math.sin(rotAngle2);
      const finalP2Y = p2X * Math.sin(rotAngle2) + p2Y * Math.cos(rotAngle2);

      ctx.beginPath();
      ctx.arc(finalP2X, finalP2Y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#4F7CFF';
      ctx.shadowColor = '#4F7CFF';
      ctx.shadowBlur = 8;
      ctx.fill();

      ctx.restore();

      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '380px',
        height: '380px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      }}
    >
      {/* Background Soft Breathing Radial Glow */}
      <div 
        className={shouldReduceMotion ? '' : 'animate-celestial-breathe'}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 92, 255, 0.35) 0%, rgba(79, 124, 255, 0.12) 50%, transparent 75%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      {/* 3D WebGL Canvas Renderer */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'relative', zIndex: 2, display: 'block' }}
      />
    </div>
  );
}
