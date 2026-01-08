import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Smartphone, Server } from 'lucide-react';
import { Badge } from '../ui/badge';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Stunning, responsive websites that captivate your audience and drive conversions.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
    color: 'primary',
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Mode'],
    color: 'secondary',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: Server,
    title: 'Software Development',
    description: 'Custom software solutions that streamline your business operations.',
    features: ['Custom CRM/ERP', 'API Development', 'Cloud Solutions', 'Database Design'],
    color: 'accent',
    gradient: 'from-accent to-accent/50',
  },
];

export const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-20" />
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
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            <span className="text-foreground">What We </span>
            <span className="text-gradient-primary">Offer</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. 
            From concept to launch, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full glass-card rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
                  style={{ background: `radial-gradient(circle at center, hsl(var(--${service.color}) / 0.1) 0%, transparent 70%)`, filter: 'blur(20px)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};