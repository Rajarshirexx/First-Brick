import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../../Components/UI/ProjectCard';

// Import project images
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img5 from '../../../assets/img5.jpg';
import img7 from '../../../assets/img7.jpg';
import img8 from '../../../assets/img8.jpg';
import img9 from '../../../assets/img9.jpg';
import embeeImg from '../../../assets/embee.png';
import skydaleImg from '../../../assets/skydale/SKYDALE E-BROCHURE REVISED_page-0001.jpg';
import utsodharaImg from '../../../assets/utsodhara/Utsodhaara-Brochure_page-0001.jpg';
import rightAngleImg from '../../../assets/RIGHT ANGLE BROCHURE/RIGHT ANGLE BROCHURE V2_page-0001.jpg';
import sensesImg from '../../../assets/senses/The SENSES_page-0001.jpg';

const projects = [
    {
        id: "embee-delight",
        name: "Embee Delight",
        location: "Siliguri, WB",
        image: embeeImg,
        category: "Luxury Apartments",
        description: "A beacon of modern residential architecture redefining urban living standards."
    },
    {
        id: "skydale",
        name: "Skydale",
        location: "Siliguri, WB",
        image: skydaleImg,
        category: "Ultra-Luxury Towers",
        description: "Siliguri's tallest residential towers, soaring into the elite skies of North Bengal."
    },
    {
        id: "utsodhara",
        name: "Utsodhaara",
        location: "Siliguri, WB",
        image: utsodharaImg,
        category: "Integrated Township",
        description: "An 81-acre sustainable ecosystem redefining modern town planning."
    },
    {
        id: "right-angle",
        name: "Right Angle",
        location: "Siliguri, WB",
        image: rightAngleImg,
        category: "Commercial/Retail",
        description: "The perfect intersection of ambition and lifestyle. A landmark commercial destination."
    },
    {
        id: "the-senses",
        name: "The Senses",
        location: "Siliguri, WB",
        image: sensesImg,
        category: "Premium Residential",
        description: "A rainbow of infinite hues. A 7.4-acre residential sanctuary with 60% open space."
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
                        <ProjectCard 
                            key={project.id}
                            {...project}
                            index={index}
                        />
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
