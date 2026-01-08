import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Server, Cpu, Database, Shield, GitBranch, Terminal, Settings, Cloud } from 'lucide-react';
import { Badge } from '../ui/badge';

const softwareFeatures = [
  { icon: Database, label: 'Database Design' },
  { icon: Shield, label: 'Security First' },
  { icon: GitBranch, label: 'Version Control' },
  { icon: Cloud, label: 'Cloud Deployment' },
];

const codeBlocks = [
  { x: -120, y: -80, delay: 0, icon: Terminal },
  { x: 120, y: -60, delay: 0.2, icon: Database },
  { x: -100, y: 80, delay: 0.4, icon: Settings },
  { x: 100, y: 100, delay: 0.6, icon: Shield },
];

export const SoftwareSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-20%' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Central server rotation
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(35 92% 55%) 0%, transparent 70%)', filter: 'blur(100px)' }}
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
            <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/80">
              <Server className="w-3.5 h-3.5 mr-2" />
              Software Development
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              <span className="text-foreground">Enterprise </span>
              <span className="text-gradient-primary">Software</span>
              <br />
              <span className="text-foreground">Solutions</span>
            </h2>
            
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              We architect and build robust software systems that power businesses. 
              From custom CRM solutions to complex enterprise applications, 
              our software is built for scalability, security, and performance.
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {softwareFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <span className="text-sm text-muted-foreground">Technologies we use:</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Python', 'Node.js', 'Java', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Azure'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/30 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3D Animation - Server/System Visualization */}
          <div className="relative device-perspective min-h-[400px] flex items-center justify-center">
            {/* Central Server Unit */}
            <motion.div
              className="relative"
              style={{
                rotateY,
                scale,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Main Server Box */}
              <motion.div
                className="relative w-32 h-40 rounded-xl border-2 border-accent/50"
                style={{
                  background: 'linear-gradient(145deg, hsl(240 10% 12%), hsl(240 10% 8%))',
                  boxShadow: '0 0 40px hsl(35 92% 55% / 0.2)',
                }}
                animate={isInView ? {
                  boxShadow: [
                    '0 0 40px hsl(35 92% 55% / 0.2)',
                    '0 0 60px hsl(35 92% 55% / 0.4)',
                    '0 0 40px hsl(35 92% 55% / 0.2)',
                  ],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Server LEDs */}
                <div className="absolute top-4 left-4 right-4 space-y-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-accent"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                          animate={{ width: ['20%', '80%', '20%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Server Icon */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <Cpu className="w-10 h-10 text-accent/60" />
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {codeBlocks.map((block, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-14 h-14 rounded-xl bg-muted/80 border border-border flex items-center justify-center"
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={isInView ? {
                    x: block.x,
                    y: block.y,
                    opacity: 1,
                  } : {}}
                  transition={{
                    delay: block.delay,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <block.icon className="w-6 h-6 text-foreground" />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                {codeBlocks.map((block, index) => (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${block.x}px)`}
                    y2={`calc(50% + ${block.y}px)`}
                    stroke="hsl(35 92% 55% / 0.3)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ delay: block.delay + 0.3, duration: 0.5 }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Particle Effects */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-accent"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={isInView ? {
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.2, 0.8, 0.2],
                } : {}}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Background Glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full -z-10"
              style={{ background: 'radial-gradient(circle, hsl(35 92% 55% / 0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
              animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};