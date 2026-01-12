import React, { useState, useEffect } from 'react';
import { Sparkles, Code2, Smartphone, Server, ArrowRight } from 'lucide-react';

const LOGO_URL = '/lmk-logo.png';

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const opacity = Math.max(0, 1 - scrollY / 500);
  const translateY = scrollY * 0.4;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark Overlay to dim background */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      />

      {/* Sophisticated Background Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(148 163 184 / 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(148 163 184 / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Premium Gradient Overlays - Hidden on mobile for performance */}
        <div
          className="hidden md:block absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(59 130 246 / 0.3), transparent 70%)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="hidden md:block absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(139 92 246 / 0.3), transparent 70%)',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Accent Glow */}
        <div
          className="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgb(96 165 250), transparent 60%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`
        }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center py-8 sm:py-12">

          {/* Compact Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 mb-6 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold text-white">Crafting Digital Excellence</span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          {/* Compact Logo */}
          <div
            className="w-full flex justify-center mb-6 sm:mb-8 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <img
              src={LOGO_URL}
              alt="LMK Technology Logo"
              className="h-20 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Refined Headline - Smaller */}
          <div className="mb-4 sm:mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="block text-white">Building the </span>
              <span
                className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent my-1"
                style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s linear infinite'
                }}
              >
                Future
              </span>
              <span className="block text-white">of Digital Solutions</span>
            </h1>
          </div>

          {/* Compact Subheadline */}
          <div className="mb-6 sm:mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              We specialize in <span className="font-semibold text-white">Website</span>, <span className="font-semibold text-white">App</span> & <span className="font-semibold text-white">Software Development</span>.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
              Transform your vision into reality with cutting-edge technology and exceptional design.
            </p>
          </div>

          {/* Compact Service Pills */}
          <div
            className="w-full flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-3xl mx-auto opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            {[
              { icon: Code2, label: 'Web Development', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Smartphone, label: 'App Development', gradient: 'from-violet-500 to-purple-500' },
              { icon: Server, label: 'Software Solutions', gradient: 'from-cyan-500 to-blue-500' },
            ].map((service) => (
              <div
                key={service.label}
                className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-white/25 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${service.gradient} shadow-sm`}>
                  <service.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-white transition-colors whitespace-nowrap">
                  {service.label}
                </span>
              </div>
            ))}
          </div>

          {/* Compact CTA Buttons */}
          <div
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-8 sm:mb-10 opacity-0 animate-fadeIn"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={scrollToServices}
              className="group relative w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto px-8 py-3 rounded-full bg-white/15 backdrop-blur-md border-2 border-white/40 text-white font-bold text-sm sm:text-base hover:bg-white/25 hover:border-white/60 hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-100"
            >
              <span className="flex items-center justify-center gap-2">
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Minimal Scroll Indicator */}
          <div
            className="opacity-0 animate-fadeIn"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={scrollToServices}
              className="flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
              <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5 group-hover:border-white/60 transition-colors bg-white/10">
                <div className="w-1 h-2 rounded-full bg-white/70 animate-bounce" />
              </div>
            </button>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};