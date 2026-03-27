import React from 'react';
import TestimonialCard from '../../../Components/UI/TestimonialCard';

const testimonials = [
    {
        id: 1,
        name: "Vikram Chatterjee",
        role: "Luxury Homeowner",
        quote: "FirstBrick's attention to detail is unparalleled. They didn't just market my property; they told its story with such elegance that we found the perfect buyer within weeks.",
        rating: 5
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Real Estate Investor",
        quote: "The professional approach and premium aesthetic of their marketing materials set them apart. My experience with FirstBrick has been nothing short of exceptional.",
        rating: 5
    },
    {
        id: 3,
        name: "Arjun Mehta",
        role: "Architectural Consultant",
        quote: "As an architect, I value visual integrity. FirstBrick captures the essence of a space like no other agency. Their presentation is truly world-class.",
        rating: 5
    }
];

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2c364a_1px,transparent_1px)] [background-size:32px_32px]"></div>
            </div>

            <div className="container px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mb-16 animate-fadeIn">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                        Success Stories
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                        Exquisite <span className="italic font-light">Experiences</span>.
                    </h2>
                    <p className="text-muted text-sm max-w-lg leading-relaxed font-medium">
                        Hear from the families and professionals who have trusted FirstBrick with their most valuable architectural journeys.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={testimonial.id}
                            className="animate-fadeIn"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <TestimonialCard 
                                name={testimonial.name}
                                role={testimonial.role}
                                quote={testimonial.quote}
                                rating={testimonial.rating}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-20 flex justify-center animate-fadeIn delay-500">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-20 bg-primary/10"></div>
                        <div className="text-secondary font-display font-black text-xl tracking-tighter">100% SATISFACTION</div>
                        <div className="h-[1px] w-20 bg-primary/10"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}