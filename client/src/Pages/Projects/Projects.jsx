import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../Components/UI/ProjectCard';
import project1 from '../../assets/embee.png';
import skydaleCover from '../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0001.jpg';
import utsodharaCover from '../../assets/utsodhara/Utsodhaara-Brochure_page-0001.jpg';

export default function Projects() {
    const projects = [
        {
            id: "embee-delight",
            name: "Embee Delight",
            location: "Siliguri, India",
            category: "Residential Luxury",
            image: project1,
            description: "A beacon of modern residential architecture redefining urban living standards."
        },
        {
            id: "skydale",
            name: "Skydale",
            location: "Siliguri, India",
            category: "Ultra-Luxury Residential",
            image: skydaleCover,
            description: "Siliguri's tallest residential towers, soaring into the elite skies of North Bengal."
        },
        {
            id: "utsodhara",
            name: "Utsodhaara",
            location: "Siliguri, India",
            category: "Integrated Township",
            image: utsodharaCover,
            description: "An 81-acre sustainable ecosystem redefining modern town planning."
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}