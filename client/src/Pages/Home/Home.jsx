import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import ProjectsSection from './Sections/ProjectsSection';
import TestimonialSection from './Sections/TestimonialSection';
import ServicesSection from './Sections/ServicesSection';
import CTASection from './Sections/CTASection';

export default function Home() {
    return (
        <div className="bg-bg min-h-screen">
            <Helmet>
                <title>Premium Property Marketing | First Brick Properties</title>
                <meta name="description" content="Experience the pinnacle of property marketing with First Brick Properties. Specialized in luxury residential and landmark commercial projects in North Bengal." />
            </Helmet>
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <TestimonialSection />
            <ServicesSection />
            <CTASection />
        </div>
    );
}