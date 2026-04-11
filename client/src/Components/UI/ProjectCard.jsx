import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiHome, FiMaximize, FiGrid, FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ 
    id, 
    name, 
    location, 
    area, 
    bhk, 
    startingPrice, 
    image, 
    index 
}) {
    return (
        <Link 
            to={`/projects/${id}`} 
            className="group block bg-white rounded-[1.5rem] overflow-hidden shadow-xl border border-primary/5 hover:shadow-2xl transition-all duration-500 animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-5">
                {/* Header: Name and Price */}
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-display font-bold text-primary uppercase leading-tight group-hover:text-secondary transition-colors duration-500">
                        {name}
                    </h3>
                    {startingPrice && (
                        <div className="text-right shrink-0">
                            <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Starting</div>
                            <div className="text-primary font-bold text-base">₹{startingPrice}</div>
                        </div>
                    )}
                </div>

                {/* Bullet Points Grid */}
                <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-primary/60">
                        <FiMapPin className="text-secondary shrink-0" />
                        <span className="text-[13px] font-medium truncate">{location}</span>
                    </div>
                    {area && (
                        <div className="flex items-center gap-3 text-primary/60">
                            <FiMaximize className="text-secondary shrink-0" />
                            <span className="text-[13px] font-medium truncate">{area} (Super Builtup)</span>
                        </div>
                    )}
                    {bhk && (
                        <div className="flex items-center gap-3 text-primary/60">
                            <FiGrid className="text-secondary shrink-0" />
                            <span className="text-[13px] font-medium truncate">{bhk}</span>
                        </div>
                    )}
                </div>

                {/* Footer: Explore Button */}
                <div className="pt-4 flex items-center justify-end">
                    <div className="flex items-center gap-3 text-primary font-bold text-sm tracking-wide group/btn">
                        <span>Explore</span>
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white transform group-hover/btn:translate-x-1 transition-all duration-300 shadow-lg shadow-secondary/20">
                            <FiArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
