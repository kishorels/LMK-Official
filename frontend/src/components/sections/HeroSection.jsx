import React, { useState, useEffect, useCallback, memo } from 'react';
import { Sparkles, Code2, Smartphone, Server } from 'lucide-react';

// Optimized Particles - Reduced count and complexity for better performance
const Particles = memo(({ id, options }) => {
  const canvasRef = React.useRef(null);
  const animationRef = React.useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });

    // Use a smaller scale for the canvas to reduce pixel processing
    const dpr = window.devicePixelRatio || 1;
    const updateSize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    updateSize();

    const particles = [];
    // Drastically reduced particle count for performance (53 -> 90+ target)
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 1024 ? 20 : 40;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 1.5 + 0.5;
        const colors = ['#14b8a6', '#6366f1'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        // Optimized connection logic - only draw lines for nearby particles
        // Limit to 20 connections per frame to prevent TBT issues
        let connections = 0;
        for (let j = i + 1; j < particles.length && connections < 5; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 150 * 150) {
            connections++;
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = (1 - Math.sqrt(distSq) / 150) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation with a delay to prioritize initial LCP
    const startDelay = setTimeout(() => {
      animate();
    }, 1000);

    const handleResize = () => {
      updateSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(startDelay);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }} />;
});

export default function HeroSection() {
  const services = [
    { icon: Code2, label: 'Web Development', desc: 'Modern & Responsive', gradient: 'from-teal-500 to-cyan-500' },
    { icon: Smartphone, label: 'App Development', desc: 'iOS & Android', gradient: 'from-indigo-500 to-purple-500' },
    { icon: Server, label: 'Software Solutions', desc: 'Custom Built', gradient: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#020617]">
      {/* Simplified Background to reduce paint complexity and LCP */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px]" />
        <Particles />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen px-4 sm:px-6 lg:px-12 py-20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column - Hero Text (Instantly visible for LCP) */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Top Rated Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
              Crafting Digital <br />
              <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              We transform complex ideas into <span className="text-white font-medium">high-performance</span> digital solutions that scale.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-teal-500 text-white font-bold transition-all hover:bg-teal-600 hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/20"
              >
                Start Your Project
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 transition-all hover:bg-white/10"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Column - Service Cards (Slightly delayed to prioritize text) */}
          <div className="flex-1 max-w-md w-full grid gap-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
            {services.map((service, index) => (
              <div
                key={service.label}
                className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient}`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{service.label}</h3>
                  <p className="text-slate-400 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fadeIn { 
          animation: fadeIn 0.5s ease-out forwards; 
        }
      `}</style>
    </section>
  );
}