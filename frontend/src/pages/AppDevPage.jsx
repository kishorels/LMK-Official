import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppSection } from '../components/sections/AppSection';
import { ContactSection } from '../components/sections/ContactSection';

const AppDevPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Mobile App Development in Nagercoil | iOS & Android - LMK SoftTech</title>
                <meta name="description" content="Expert mobile app development in Nagercoil and Kanyakumari. We build custom iOS and Android applications with Flutter and React Native for startups and businesses." />
                <meta name="keywords" content="mobile app development nagercoil, app developers kanyakumari, android app development tamil nadu, flutter app development nagercoil" />
                <link rel="canonical" href="https://www.lmksofttech.in/mobile-app-development-nagercoil" />
            </Helmet>
            <AppSection />
            <ContactSection />
        </div>
    );
};

export default AppDevPage;
