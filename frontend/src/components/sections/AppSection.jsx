import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Smartphone, Fingerprint, Bell, Wifi, Battery, Signal } from 'lucide-react';
import { Badge } from '../ui/badge';

const appFeatures = [
  { icon: Fingerprint, label: 'Secure Auth', color: 'text-secondary' },
  { icon: Bell, label: 'Push Notifications', color: 'text-pink' },
  { icon: Wifi, label: 'Offline Mode', color: 'text-primary' },
];

export const AppSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-20%' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 3D phone rotation based on scroll
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -30]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.9]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(280 84% 60%) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Phone Animation - Left Side */}
          <div className="relative device-perspective order-2 lg:order-1">
            <motion.div
              className="relative device-3d mx-auto"
              style={{
                rotateY,
                rotateX,
                scale,
                transformStyle: 'preserve-3d',
                maxWidth: '280px',
              }}
            >
              {/* Phone Frame */}
              <div className="mobile-frame p-3 relative">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-4 py-2 text-foreground/80">
                  <span className="text-xs font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-3.5 h-3.5" />
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-4 h-3.5" />
                  </div>
                </div>

                {/* Screen Content */}
                <div className="bg-[#121217] rounded-2xl overflow-hidden aspect-[9/16]">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-secondary/10 to-pink/10 p-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-pink flex items-center justify-center">
                        <span className="text-white font-bold">L</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">LMK App</p>
                        <p className="text-xs text-slate-400">Welcome back!</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Feature Cards */}
                    {[
                      { title: 'Dashboard', desc: 'View your stats', color: 'from-primary/20 to-primary/5' },
                      { title: 'Projects', desc: '3 active projects', color: 'from-secondary/20 to-secondary/5' },
                      { title: 'Messages', desc: '5 new messages', color: 'from-pink/20 to-pink/5' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.15 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color} border border-white/5`}
                      >
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                      </motion.div>
                    ))}

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 }}
                      className="mt-4"
                    >
                      <div className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary to-pink text-center">
                        <span className="text-sm font-semibold text-primary-foreground">Get Started</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center py-2">
                  <div className="w-24 h-1 bg-foreground/30 rounded-full" />
                </div>
              </div>

              {/* Phone Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/30 blur-xl rounded-full" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-0 -left-4 w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center"
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Bell className="w-5 h-5 text-secondary" />
            </motion.div>

            <motion.div
              className="absolute bottom-20 -right-4 w-12 h-12 rounded-xl bg-pink/20 border border-pink/30 flex items-center justify-center"
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <Fingerprint className="w-5 h-5 text-pink" />
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full -z-10"
              style={{ background: 'radial-gradient(circle, hsl(280 84% 60% / 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
              animate={isInView ? { opacity: [0.3, 0.5, 0.3] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <Badge className="mb-4 bg-secondary hover:bg-secondary/80">
              <Smartphone className="w-3.5 h-3.5 mr-2" />
              App Development
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              <span className="text-foreground">Native </span>
              <span className="text-gradient-primary">Mobile Apps</span>
              <br />
              <span className="text-foreground">For Every Platform</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              From iOS to Android, we develop high-performance mobile applications
              that deliver seamless user experiences. Our apps are built with the
              latest technologies ensuring speed, security, and scalability.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-secondary/50 transition-colors"
                >
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-2`} />
                  <span className="text-sm font-medium text-foreground text-center">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Platforms */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Platforms:</span>
              <div className="flex gap-3">
                {['iOS', 'Android', 'Cross-Platform'].map((platform) => (
                  <span
                    key={platform}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/10 border border-secondary/30 text-secondary"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};