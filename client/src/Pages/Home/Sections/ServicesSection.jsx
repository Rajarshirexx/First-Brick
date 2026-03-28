import React from 'react';

const services = [
    {
        title: "Strategic Marketing",
        description: "Bespoke digital campaigns and visual storytelling to position your property at the pinnacle of the market.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        )
    },
    {
        title: "Digital Showcase",
        description: "High-end cinematic tours and ultra-HD photography that capture the soul of every architectural masterpiece.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Strategic Sales",
        description: "Expert market positioning and high-intent lead generation focused on maximizing asset valuation.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-bg border-t border-primary/5">
            <div className="container px-6 text-center">
                
                {/* Header */}
                <div className="max-w-2xl mx-auto mb-16 animate-fadeIn">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                        Our Expertise
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                        Bespoke <span className="italic font-light">Solutions</span>.
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-16 h-16 bg-bg rounded-xl flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500 mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-500">
                                {service.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
