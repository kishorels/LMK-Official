import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Monitor, Code2, Layers, Zap, Database, Cloud } from 'lucide-react';
import { Badge } from '../ui/badge';

const features = [
  { icon: Code2, label: 'Clean Code', color: 'text-primary' },
  { icon: Layers, label: 'Responsive Design', color: 'text-secondary' },
  { icon: Zap, label: 'Fast Loading', color: 'text-accent' },
  { icon: Database, label: 'SEO Optimized', color: 'text-pink' },
  { icon: Cloud, label: 'Cloud Ready', color: 'text-primary' },
];

export const WebsiteSection = () => {
  const sectionRef = useRef(null);
  const laptopRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-20%' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 3D rotation transforms based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -50]);

  return (
    <section
      ref={sectionRef}
      id="website-section"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="default" className="mb-4">
              <Monitor className="w-3.5 h-3.5 mr-2" />
              Website Development
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              <span className="text-foreground">Stunning </span>
              <span className="text-gradient-primary">Websites</span>
              <br />
              <span className="text-foreground">That Convert</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              We create responsive, fast-loading websites that not only look beautiful
              but also drive results. From corporate websites to e-commerce platforms,
              we deliver digital experiences that captivate your audience.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-sm text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Laptop Animation */}
          <div className="relative device-perspective">
            <motion.div
              ref={laptopRef}
              className="relative device-3d"
              style={{
                rotateX,
                rotateY,
                scale,
                z,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Laptop Screen */}
              <motion.div
                className="relative mx-auto"
                style={{ maxWidth: '500px' }}
              >
                {/* Screen */}
                <div className="relative laptop-screen aspect-[16/10] overflow-hidden">
                  {/* Screen Content - Code Animation */}
                  <div className="absolute inset-2 bg-[#0d1117] rounded overflow-hidden">
                    {/* Code Lines */}
                    <div className="p-4 font-mono text-[10px] sm:text-xs space-y-1.5 sm:space-y-2">
                      {[
                        { indent: 0, color: 'text-[#ff79c6]', text: 'const' }, // Pink
                        { indent: 0, color: 'text-[#8be9fd]', text: 'LMK_Success = () => {' }, // Cyan
                        { indent: 2, color: 'text-slate-400', text: '// Crafting digital excellence' },
                        { indent: 2, color: 'text-[#bd93f9]', text: 'return (' }, // Purple
                        { indent: 4, color: 'text-[#f1fa8c]', text: '<Website' }, // Yellow
                        { indent: 6, color: 'text-white', text: 'mode="premium"' },
                        { indent: 6, color: 'text-white', text: 'speed="fast"' },
                        { indent: 4, color: 'text-[#f1fa8c]', text: '/>' },
                        { indent: 2, color: 'text-[#bd93f9]', text: ');' },
                        { indent: 0, color: 'text-[#8be9fd]', text: '};' },
                      ].map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          style={{ paddingLeft: `${line.indent * 8}px` }}
                          className={line.color}
                        >
                          {line.text}
                        </motion.div>
                      ))}
                      {/* Cursor */}
                      <motion.span
                        className="inline-block w-2 h-4 bg-primary"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Laptop Base */}
                <div className="laptop-base h-4 mx-4">
                  <div className="mx-auto w-16 h-1.5 bg-border/40 rounded-b-lg mt-1" />
                </div>

                {/* Keyboard Hint */}
                <div className="h-2 bg-gradient-to-b from-border to-muted mx-8 rounded-b-lg" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code2 className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-8 w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <Layers className="w-6 h-6 text-secondary" />
              </motion.div>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full"
                style={{ background: 'radial-gradient(circle, hsl(217 91% 60% / 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
                animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};