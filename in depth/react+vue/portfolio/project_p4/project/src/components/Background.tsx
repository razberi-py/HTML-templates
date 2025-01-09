import { useEffect, useRef, useState } from 'react';
import { useThrottledCallback } from '../hooks/useThrottledCallback';

interface Layer {
  speed: number;
  opacity: number;
  points: { x: number; y: number; }[];
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fps, setFps] = useState<number>(30);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Layer configurations
  const layers: Layer[] = [
    { speed: 0.125, opacity: 0.3, points: [] }, // Slow waves
    { speed: 0.2, opacity: 0.5, points: [] },   // Medium waves
    { speed: 0.333, opacity: 0.7, points: [] }  // Quick ripples
  ];

  // Initialize points for each layer
  useEffect(() => {
    layers.forEach(layer => {
      const pointCount = window.innerWidth < 768 ? 50 : 100;
      layer.points = Array.from({ length: pointCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      }));
    });
  }, []);

  // Animation frame handling
  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    
    const animate = (currentTime: number) => {
      if (!canvasRef.current) return;
      
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      // FPS calculation
      const delta = currentTime - lastTime;
      frameCount++;
      
      if (delta >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / delta);
        setFps(currentFps);
        frameCount = 0;
        lastTime = currentTime;
      }

      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Render layers
      layers.forEach((layer, index) => {
        if (window.innerWidth < 768 && index > 0) return; // Mobile: single layer
        if (window.innerWidth < 1024 && index > 1) return; // Tablet: two layers

        ctx.beginPath();
        ctx.fillStyle = `rgba(100, 255, 218, ${layer.opacity})`;
        
        layer.points.forEach(point => {
          point.x += layer.speed;
          if (point.x > window.innerWidth) point.x = 0;
          
          const offsetY = Math.sin(point.x * 0.01 + currentTime * 0.001 * layer.speed) * 20;
          ctx.moveTo(point.x, point.y + offsetY);
          ctx.arc(point.x, point.y + offsetY, 2, 0, Math.PI * 2);
        });
        
        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Mouse/touch handling
  const handleMouseMove = useThrottledCallback((e: MouseEvent) => {
    const bounds = canvasRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (e.clientX - bounds.left) / bounds.width;
    const y = (e.clientY - bounds.top) / bounds.height;
    
    setMousePosition({ x, y });
  }, 16);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      width={window.innerWidth}
      height={window.innerHeight}
      aria-hidden="true"
    />
  );
}