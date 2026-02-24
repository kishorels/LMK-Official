import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppSection } from '../components/sections/AppSection';
import { ContactSection } from '../components/sections/ContactSection';

const AppDevPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>LMK | Mobile App Development in Nagercoil | iOS & Android</title>
                <meta name="description" content="Searching for LMK? Expert mobile app development in Nagercoil and Kanyakumari. We build custom iOS and Android applications with LMK SoftTech expertise." />
                <meta name="keywords" content="LMK, lmk, mobile app development nagercoil, app developers kanyakumari, android app developers tamil nadu, flutter app development nagercoil" />
                <link rel="canonical" href="https://www.lmksofttech.in/mobile-app-development-nagercoil" />
            </Helmet>
            <AppSection />
            <ContactSection />
        </div>
    );
};

export default AppDevPage;
