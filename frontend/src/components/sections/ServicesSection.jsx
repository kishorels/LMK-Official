import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Smartphone, Server, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Stunning, responsive websites that captivate your audience and drive conversions.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Mode'],
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Server,
    title: 'Software Development',
    description: 'Custom software solutions that streamline your business operations.',
    features: ['Custom CRM/ERP', 'API Development', 'Cloud Solutions', 'Database Design'],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
  },
];

// Minimal Card for Services Page
const MinimalServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    {/* Gradient border effect */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />

    <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-100 transition-all duration-500">
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features as pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.features.map((feature, fidx) => (
          <span
            key={fidx}
            className={`px-3 py-1 text-xs font-medium rounded-full bg-${service.color}-50 text-${service.color}-700 border border-${service.color}-100`}
            style={{
              backgroundColor: service.color === 'teal' ? '#f0fdfa' : service.color === 'indigo' ? '#eef2ff' : '#faf5ff',
              color: service.color === 'teal' ? '#0f766e' : service.color === 'indigo' ? '#4338ca' : '#7e22ce',
              borderColor: service.color === 'teal' ? '#99f6e4' : service.color === 'indigo' ? '#c7d2fe' : '#e9d5ff',
            }}
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-teal-600 transition-colors cursor-pointer">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

// 3D Animated Card for Homepage
const Animated3DCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group"
  >
    <div className="uiverse-3d-parent">
      <div
        className="uiverse-3d-card"
        style={{ '--card-gradient': `linear-gradient(135deg, ${service.color === 'teal' ? '#14b8a6' : service.color === 'indigo' ? '#6366f1' : '#a855f7'} 0%, ${service.color === 'teal' ? '#0d9488' : service.color === 'indigo' ? '#4f46e5' : '#9333ea'} 100%)` }}
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
);

export const ServicesSection = ({ variant = 'animated' }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`relative py-32 overflow-hidden ${variant === 'minimal' ? 'bg-gradient-to-b from-slate-50 to-white' : ''}`}
    >
      {/* Background */}
      {variant === 'animated' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
      )}

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
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 ${variant === 'minimal' ? 'gap-8' : 'gap-y-16 gap-x-8'}`}>
          {services.map((service, index) => (
            variant === 'minimal'
              ? <MinimalServiceCard key={service.title} service={service} index={index} />
              : <Animated3DCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};