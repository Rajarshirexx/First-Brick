import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, name, location, category, image, description, index }) {
    return (
        <Link 
            to={`/projects/${id}`} 
            className="group block bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/5 hover:shadow-placeholder transition-all duration-700 animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Visual Header */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Floating Tag */}
                <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-primary shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-7 space-y-4">
                <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-500">
                        {name}
                    </h3>
                    <div className="flex items-center gap-2 text-primary/40 text-[9px] font-bold uppercase tracking-widest">
                        <span className="text-secondary italic">●</span> {location}
                    </div>
                </div>

                <p className="text-muted text-[13px] leading-relaxed font-medium italic opacity-80 line-clamp-2">
                    "{description}"
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-primary/5">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                        View Details
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
