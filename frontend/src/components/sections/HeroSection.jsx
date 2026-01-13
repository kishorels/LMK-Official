import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Code2, Smartphone, Server } from 'lucide-react';

// Simulating tsparticles - in your actual app, import from @tsparticles/react
const Particles = ({ options }) => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = options.particles.number.value || 50;
    const mouse = { x: null, y: null, radius: 200 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * (options.particles.move.speed || 1);
        this.vy = (Math.random() - 0.5) * (options.particles.move.speed || 1);
        this.size = Math.random() * 2 + 1;
        const colors = ['#14b8a6', '#6366f1', '#a855f7', '#22d3ee']; // Teal, Indigo, Purple, Cyan
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Mouse repulse effect
        if (mouse.x && mouse.y) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 10;
            this.y += Math.sin(angle) * force * 10;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = options.particles.opacity.value;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      const linkDistance = options.particles.links.distance || 150;
      const linkOpacity = options.particles.links.opacity;
      const linkDistSq = linkDistance * linkDistance;

      for (let i = 0; i < particles.length; i++) {
        // Use the particle's own color for its outgoing links
        ctx.strokeStyle = particles[i].color;
        ctx.lineWidth = options.particles.links.width;

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < linkDistSq) {
            const distance = Math.sqrt(distanceSq);
            ctx.globalAlpha = linkOpacity * (1 - distance / linkDistance);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      if (options.particles.links.enable) {
        connectParticles();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e) => {
      for (let i = 0; i < 4; i++) {
        particles.push(new Particle());
        particles[particles.length - 1].x = e.clientX;
        particles[particles.length - 1].y = e.clientY;
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [options]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default function HeroSection() {
  const services = [
    { icon: Code2, label: 'Web Development', desc: 'Modern & Responsive', gradient: 'from-teal-500 to-cyan-500' },
    { icon: Smartphone, label: 'App Development', desc: 'iOS & Android', gradient: 'from-indigo-500 to-purple-500' },
    { icon: Server, label: 'Software Solutions', desc: 'Custom Built', gradient: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#020617] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-teal-500/10 blur-[80px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[60px]" />

        {/* Particles */}
        <Particles
          options={{
            particles: {
              links: {
                distance: 120,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
              },
              number: {
                value: typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 120,
              },
              opacity: {
                value: 0.4,
              },
            },
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen px-4 sm:px-6 lg:px-12 py-20 flex flex-col justify-between"
      >
        {/* Status Badge */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-semibold text-slate-200">Freelance Developer</span>
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8">
          {/* Left Column - Hero Text */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-2">
                Hi, I'm <br />
                <span
                  className="bg-gradient-to-r from-teal-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% auto', animation: 'gradient 4s linear infinite' }}
                >
                  Your Developer
                </span>
              </h1>
            </div>

            <div className="mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed">
                I build <span className="font-semibold text-white">Websites</span>, <span className="font-semibold text-white">Apps</span> & <span className="font-semibold text-white">Software</span>.
              </p>
            </div>

            <div className="mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-100 overflow-hidden"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="flex-1 max-w-md w-full opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <div
                  key={service.label}
                  className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`relative p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-white font-bold group-hover:text-teal-300 transition-colors duration-300">{service.label}</h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">{service.desc}</p>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes gradient { 
          0%, 100% { background-position: 0% 50%; } 
          50% { background-position: 100% 50%; } 
        }
        .animate-fadeIn { 
          animation: fadeIn 0.8s ease-out; 
        }
      `}</style>
    </section>
  );
}