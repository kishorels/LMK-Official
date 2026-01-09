import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Code2, Smartphone, Server } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const LOGO_URL = '/lmk-logo.png';

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements - Simplified on mobile for performance */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-20 sm:opacity-30" />

        {/* Gradient Orbs - Smaller on mobile */}
        <div
          className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(280 84% 60% / 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-32 sm:w-64 h-32 sm:h-64 rounded-full hidden sm:block"
          style={{
            background: 'radial-gradient(circle, hsl(35 92% 55% / 0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-16"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="gradient" className="mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-1.5">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 mr-1.5 sm:mr-2" />
              Crafting Digital Excellence
            </Badge>
          </motion.div>

          {/* Logo Animation - Reduced animation on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-8"
          >
            <img
              src={LOGO_URL}
              alt="LMK Technology Logo"
              className="mx-auto h-24 sm:h-40 lg:h-48 w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 0 20px hsl(217 91% 60% / 0.5))',
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
          >
            <span className="text-foreground">Building the </span>
            <span className="text-gradient-primary">Future</span>
            <br />
            <span className="text-foreground">of Digital Solutions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2"
          >
            We specialize in Website, App & Software Development.
            Transform your vision into reality with cutting-edge technology
            and exceptional design by Kishore L M.
          </motion.p>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-6"
          >
            {[
              { icon: Code2, label: 'Web Development', color: 'text-primary' },
              { icon: Smartphone, label: 'App Development', color: 'text-secondary' },
              { icon: Server, label: 'Software Solutions', color: 'text-accent' },
            ].map((service, index) => (
              <motion.div
                key={service.label}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted/50 border border-border/50"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <service.icon className={`w-4 sm:w-5 h-4 sm:h-5 ${service.color}`} />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              variant="glow"
              size="lg"
              onClick={scrollToServices}
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.button
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};