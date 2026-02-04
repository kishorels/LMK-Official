import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = '/lmk-logo.webp';

const footerLinks = {
  services: [
    { label: 'Website Development', href: '/services' },
    { label: 'App Development', href: '/services' },
    { label: 'Software Development', href: '/services' },
  ],
  locations: [
    { label: 'Software Company in Nagercoil', href: '/nagercoil' },
    { label: 'Web Development Nagercoil', href: '/software-company-nagercoil' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/50 border-t border-border/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={LOGO_URL}
                alt="LMK SoftTech"
                className="h-24 w-auto object-contain"
                width="144"
                height="96"
                loading="lazy"
              />
            </motion.a>
            <p className="mt-4 text-muted-foreground max-w-md">
              Transforming ideas into digital reality. We create innovative websites,
              mobile apps, and software solutions that drive business growth through
              cutting-edge technology and user-centric design.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:kishorepa64@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                kishorepa64@gmail.com
              </a>
              <a
                href="tel:+916374308218"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone size={16} className="text-secondary" />
                </div>
                +91 6374308218
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm group">
                <div className="w-8 h-8 rounded-lg bg-pink/10 flex items-center justify-center">
                  <MapPin size={16} className="text-pink" />
                </div>
                Nagercoil, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Hidden SEO Links (for indexing only) */}
          <div className="sr-only">
            {footerLinks.locations.map((link) => (
              <Link key={link.label} to={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} LMK SoftTech. All rights reserved. Developed by Kishore L M.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-2.5 rounded-xl bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/50 hover:border-primary/50 transition-all"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};