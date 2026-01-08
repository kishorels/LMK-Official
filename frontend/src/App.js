import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

// Layout Components
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

// Section Components
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WebsiteSection } from './components/sections/WebsiteSection';
import { AppSection } from './components/sections/AppSection';
import { SoftwareSection } from './components/sections/SoftwareSection';
import { AboutSection } from './components/sections/AboutSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Services Overview */}
          <ServicesSection />

          {/* Website Development with 3D Laptop Animation */}
          <WebsiteSection />

          {/* App Development with 3D Phone Animation */}
          <AppSection />

          {/* Software Development with Unique Animation */}
          <SoftwareSection />

          {/* About Section */}
          <AboutSection />

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'hsl(var(--card))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
