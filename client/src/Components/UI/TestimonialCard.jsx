import React from 'react';

export default function TestimonialCard({ name, role, quote, image, rating = 5 }) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-primary/5 relative group h-full flex flex-col">
            
            {/* Decorative Quote Mark */}
            <div className="absolute top-6 right-8 text-secondary/10 font-display text-8xl leading-none select-none group-hover:text-secondary/20 transition-colors">
                "
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
                {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-sm">★</span>
                ))}
            </div>

            {/* Quote Content */}
            <blockquote className="relative z-10 text-primary/80 leading-relaxed mb-8 flex-grow italic font-medium">
                "{quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/5 flex-shrink-0 border-2 border-primary/10">
                    {image ? (
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary font-bold text-lg bg-bg">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
                <div>
                    <div className="font-display font-bold text-primary text-sm uppercase tracking-wider">{name}</div>
                    <div className="text-muted text-[10px] uppercase tracking-widest font-bold mt-0.5">{role}</div>
                </div>
            </div>

        </div>
    );
}