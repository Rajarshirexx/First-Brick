import React from 'react';
import Hero from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import ProjectsSection from './Sections/ProjectsSection';
import TestimonialSection from './Sections/TestimonialSection';

export default function Home() {
    return (
        <div className="bg-bg min-h-screen">
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <TestimonialSection />
        </div>
    );
}