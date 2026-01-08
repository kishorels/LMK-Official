import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Award, Briefcase, Heart, Target, Rocket } from 'lucide-react';
import { Badge } from '../ui/badge';

const stats = [
  { value: '50+', label: 'Projects Completed', icon: Briefcase },
  { value: '5+', label: 'Years Experience', icon: Award },
  { value: '30+', label: 'Happy Clients', icon: Heart },
];

const values = [
  { icon: Target, title: 'Client-Focused', description: 'Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.' },
  { icon: Rocket, title: 'Innovation', description: 'We stay at the forefront of technology, bringing cutting-edge solutions to every project.' },
  { icon: Heart, title: 'Passion', description: 'We love what we do. Every line of code is crafted with care and dedication.' },
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(330 85% 60%) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            <User className="w-3.5 h-3.5 mr-2" />
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            <span className="text-foreground">Meet the Mind Behind </span>
            <span className="text-gradient-primary">LMK Technology</span>
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-pink/20 rounded-3xl blur-3xl" />
              
              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center mb-8">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-pink p-1 mb-4"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-gradient-primary">KLM</span>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Kishore L M</h3>
                  <p className="text-muted-foreground">Founder & Lead Developer</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-3 rounded-xl bg-muted/30"
                    >
                      <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-secondary/10 blur-xl"
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Passionate About Creating Digital Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At LMK Technology, we believe in the power of technology to transform businesses. 
              Founded by Kishore L M, a passionate developer with years of experience in web, 
              mobile, and software development, we bring a unique blend of technical expertise 
              and creative vision to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is simple: to help businesses thrive in the digital age by delivering 
              innovative, high-quality solutions that drive growth and success. Whether you need 
              a stunning website, a powerful mobile app, or a custom software solution, we're 
              here to turn your vision into reality.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};