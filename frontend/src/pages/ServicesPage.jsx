import React from 'react';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WebsiteSection } from '../components/sections/WebsiteSection';
import { AppSection } from '../components/sections/AppSection';
import { SoftwareSection } from '../components/sections/SoftwareSection';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <ServicesSection />
            <WebsiteSection />
            <AppSection />
            <SoftwareSection />
        </div>
    );
};

export default ServicesPage;
