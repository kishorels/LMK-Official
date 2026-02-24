import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SoftwareSection } from '../components/sections/SoftwareSection';
import { ContactSection } from '../components/sections/ContactSection';

const SoftwareDevPage = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>LMK | Custom Software Development in Nagercoil | ERP & CRM</title>
                <meta name="description" content="LMK | LMK SoftTech provides custom software solutions in Nagercoil. From ERP and CRM systems to specialized business software, we deliver scalable solutions." />
                <meta name="keywords" content="LMK, lmk, software development nagercoil, custom software kanyakumari, ERP development tamil nadu, CRM solutions nagercoil" />
                <link rel="canonical" href="https://www.lmksofttech.in/custom-software-development-nagercoil" />
            </Helmet>
            <SoftwareSection />
            <ContactSection />
        </div>
    );
};

export default SoftwareDevPage;
