import React from 'react';
import { Link } from 'react-router-dom';

// Import project images
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img5 from '../../../assets/img5.jpg';
import img7 from '../../../assets/img7.jpg';
import img8 from '../../../assets/img8.jpg';
import img9 from '../../../assets/img9.jpg';

const projects = [
    {
        id: 1,
        title: "Embee Delight",
        location: "Siliguri, WB",
        image: img1,
        category: "Luxury Apartments"
    },
    {
        id: 2,
        title: "The Heritage Villa",
        location: "Siliguri, WB",
        image: img5,
        category: "Boutique Living"
    },
    {
        id: 3,
        title: "Urban Square",
        location: "New Town, Kolkata",
        image: img7,
        category: "Commercial Hub"
    },
    {
        id: 4,
        title: "Orchid Heights",
        location: "Lake Town, Kolkata",
        image: img8,
        category: "Residential Excellence"
    },
    {
        id: 5,
        title: "Coastal Meadows",
        location: "Digha, WB",
        image: img9,
        category: "Vacation Homes"
    },
    {
        id: 6,
        title: "The Grand Atrium",
        location: "Salt Lake, Kolkata",
        image: img2,
        category: "Premium Suites"
    }
];

export default function ProjectsSection() {
    return (
        <section className="py-24 bg-bg">
            <div className="container px-6">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-16 animate-fadeIn">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                        Our Portfolio
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                        Featured <span className="italic font-light">Masterpieces</span>.
                    </h2>
                    <div className="w-20 h-1 bg-secondary"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/5] overflow-hidden bg-primary/5">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-peach text-[10px] uppercase tracking-widest mb-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-1">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 text-white/70 text-xs mb-6 font-light">
                                    <span className="text-secondary">●</span> {project.location}
                                </div>
                                <Link 
                                    to={`/projects/${project.id}`}
                                    className="inline-flex items-center gap-3 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-200"
                                >
                                    <span className="border-b border-white pb-1">View Project</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="mt-20 text-center animate-fadeIn delay-500">
                    <Link 
                        to="/projects" 
                        className="btn-primary py-4 px-10 group"
                    >
                        Explore Complete Portfolio
                        <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block">→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
