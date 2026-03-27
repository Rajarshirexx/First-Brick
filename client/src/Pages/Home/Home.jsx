import React from 'react';
import Hero from './Sections/HeroSection';

export default function Home() {
    return (
        <div className="bg-bg min-h-screen">
            <Hero />
            
            {/* Additional content sections can be added here later */}
            <section className="py-24 container px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-display font-bold text-primary mb-6 animate-fadeIn delay-500">
                        Modern Solutions for <span className="text-accent italic">Modern</span> Properties
                    </h2>
                    <p className="text-secondary text-lg animate-fadeIn delay-500">
                        Elevate your brand with high-end digital experiences tailored for the luxury real estate market.
                    </p>
                </div>
            </section>
        </div>
    );
}