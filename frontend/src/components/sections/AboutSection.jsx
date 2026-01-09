import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Award, Briefcase, Heart, Target, Rocket } from 'lucide-react';
import { Badge } from '../ui/badge';

const stats = [
  { value: '100%', label: 'Client-Focused Approach', icon: Heart },
  { value: 'Modern', label: 'Creative Design Solutions', icon: Award },
  { value: 'Fast', label: 'Quick Support & Delivery', icon: Briefcase },

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
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(330 85% 60%) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <Badge variant="gradient" className="mb-3 sm:mb-4">
            <User className="w-3 sm:w-3.5 h-3 sm:h-3.5 mr-1.5 sm:mr-2" />
            About Us
          </Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold px-2">
            <span className="text-foreground">Meet the Mind Behind </span>
            <span className="text-gradient-primary">LMK Technology</span>
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
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
              <div className="relative glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 overflow-hidden">
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center mb-4 sm:mb-8">
                  <div
                    className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-pink p-1 mb-3 sm:mb-4"
                  >
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-2xl sm:text-4xl font-display font-bold text-gradient-primary">KLM</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">Kishore L M</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Founder & Lead Developer</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-muted/30"
                    >
                      <stat.icon className="w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1 sm:mb-2 text-primary" />
                      <p className="text-lg sm:text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</p>
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 sm:mb-4">
              Passionate About Creating Digital Excellence
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              At LMK Technology, we believe in the power of technology to transform businesses.
              Founded by Kishore L M, a passionate developer with years of experience in web,
              mobile, and software development, we bring a unique blend of technical expertise
              and creative vision to every project.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Our mission is simple: to help businesses thrive in the digital age by delivering
              innovative, high-quality solutions that drive growth and success. Whether you need
              a stunning website, a powerful mobile app, or a custom software solution, we're
              here to turn your vision into reality.
            </p>

            {/* Values */}
            <div className="space-y-3 sm:space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-muted/20 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
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