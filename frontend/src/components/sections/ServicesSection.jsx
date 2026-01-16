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
    color: 'teal-500',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Mode'],
    color: 'indigo-500',
  },
  {
    icon: Server,
    title: 'Software Development',
    description: 'Custom software solutions that streamline your business operations.',
    features: ['Custom CRM/ERP', 'API Development', 'Cloud Solutions', 'Database Design'],
    color: 'purple-500',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="uiverse-3d-parent">
                <div
                  className="uiverse-3d-card"
                  style={{ '--card-gradient': `linear-gradient(135deg, ${service.color === 'teal-500' ? '#14b8a6' : service.color === 'indigo-500' ? '#6366f1' : '#a855f7'} 0%, ${service.color === 'teal-500' ? '#0d9488' : service.color === 'indigo-500' ? '#4f46e5' : '#9333ea'} 100%)` }}
                >
                  <div className="uiverse-3d-logo">
                    <span className="uiverse-3d-circle uiverse-3d-circle1"></span>
                    <span className="uiverse-3d-circle uiverse-3d-circle2"></span>
                    <span className="uiverse-3d-circle uiverse-3d-circle3"></span>
                    <span className="uiverse-3d-circle uiverse-3d-circle4"></span>
                    <span className="uiverse-3d-circle uiverse-3d-circle5">
                      <service.icon className="w-8 h-8" />
                    </span>
                  </div>
                  <div className="uiverse-3d-glass"></div>
                  <div className="uiverse-3d-content">
                    <span className="title">{service.title}</span>
                    <span className="text">
                      {service.description}
                    </span>
                  </div>
                  <div className="uiverse-3d-bottom">
                    <div className="uiverse-3d-features-container">
                      {service.features.map((feature, fidx) => (
                        <span key={fidx} className="uiverse-3d-feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};