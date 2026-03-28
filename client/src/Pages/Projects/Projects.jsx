import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../assets/embee.png';

export default function Projects() {
    const projects = [
        {
            id: "embee-delight",
            name: "Embee Delight",
            location: "Siliguri, India",
            category: "Residential Luxury",
            image: project1,
            description: "A beacon of modern residential architecture redefining urban living standards."
        }
    ];

    return (
        <div className="bg-bg min-h-screen pt-32 pb-24">
            <div className="container px-6">
                
                {/* Header */}
                <div className="max-w-3xl mb-20 animate-fadeIn">
                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                        Our Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8">
                        Landmark <span className="italic font-light text-secondary">Projects</span>.
                    </h1>
                    <p className="text-muted text-lg leading-relaxed max-w-2xl font-medium">
                        Explore our curated selection of premium properties, each representing the pinnacle of architectural vision and strategic market positioning.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <Link 
                            to={`/projects/${project.id}`} 
                            key={project.id}
                            className="group animate-fadeIn"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mb-6">
                                <img 
                                    src={project.image} 
                                    alt={project.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                                
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-2">{project.name}</h3>
                                    <div className="text-white/60 text-xs font-medium flex items-center gap-2">
                                        <span>📍</span> {project.location}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="px-4">
                                <p className="text-sm text-muted font-medium leading-relaxed mb-4 line-clamp-2 italic">
                                    "{project.description}"
                                </p>
                                <div className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    View Details <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}