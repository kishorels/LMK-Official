import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SoftwareSection } from '../components/sections/SoftwareSection';
import { ContactSection } from '../components/sections/ContactSection';

const SoftwareDevPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Custom Software Development in Nagercoil | ERP & CRM - LMK SoftTech</title>
                <meta name="description" content="Get custom software solutions in Nagercoil. From ERP and CRM systems to specialized business software, LMK SoftTech delivers scalable and secure solutions in Kanyakumari." />
                <meta name="keywords" content="software development nagercoil, custom software kanyakumari, ERP development tamil nadu, CRM solutions nagercoil" />
                <link rel="canonical" href="https://www.lmksofttech.in/custom-software-development-nagercoil" />
            </Helmet>
            <SoftwareSection />
            <ContactSection />
        </div>
    );
};

export default SoftwareDevPage;
