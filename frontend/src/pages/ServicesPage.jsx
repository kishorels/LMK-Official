import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WebsiteSection } from '../components/sections/WebsiteSection';
import { AppSection } from '../components/sections/AppSection';
import { SoftwareSection } from '../components/sections/SoftwareSection';

const ServicesPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Our Services | LMK SoftTech - Top Software Company in Nagercoil</title>
                <meta name="description" content="Explore our wide range of services including professional web development, mobile app development (iOS/Android), and custom software solutions in Nagercoil." />
                <meta name="keywords" content="LMK, LMK Services, software company in Nagercoil, web development services Nagercoil, mobile app development Kanyakumari, custom software solutions" />
                <link rel="canonical" href="https://www.lmksofttech.in/services" />
            </Helmet>
            <ServicesSection variant="minimal" />
            <WebsiteSection />
            <AppSection />
            <SoftwareSection />
        </div>
    );
};

export default ServicesPage;
