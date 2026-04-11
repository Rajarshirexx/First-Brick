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
import ramVatikaImg from '../../../assets/ramvatika/Ram Vatika_page-0001.jpg';
import nh10Cover from '../../../assets/nh10/E1_FINAL02.jpg';

const projects = [
    {
        id: "nh10",
        name: "NH10",
        location: "Siliguri, India",
        area: "Commercial Hub",
        bhk: "Premium Corporate Suites",
        startingPrice: "18.00 Lacs*",
        image: nh10Cover,
        category: "Commercial Landmark",
        description: "A futuristic commercial hub redefining business excellence in Siliguri."
    },
    {
        id: "embee-delight",
        name: "Embee Delight",
        location: "Siliguri, WB",
        area: "1100 - 1800 sqft",
        bhk: "1, 2, 3 & 4 BHK",
        startingPrice: "31.91 Lacs*",
        image: embeeImg,
        category: "Luxury Apartments",
        description: "A beacon of modern residential architecture redefining urban living standards."
    },
    {
        id: "skydale",
        name: "Skydale",
        location: "Uttorayon, Siliguri",
        area: "1800 - 2500 sqft",
        bhk: "3 BHK, 4 BHK",
        startingPrice: "1.22 Crores*",
        image: skydaleImg,
        category: "Ultra-Luxury Towers",
        description: "Siliguri's tallest residential towers, soaring into the elite skies of North Bengal."
    },
    {
        id: "utsodhara",
        name: "Utsodhaara",
        location: "Naukaghat, Siliguri",
        area: "1621 - 2142 sqft",
        bhk: "3 BHK, 4 BHK",
        startingPrice: "1.15 Crores*",
        image: utsodharaImg,
        category: "Integrated Township",
        description: "An 81-acre sustainable ecosystem redefining modern town planning."
    },
    {
        id: "right-angle",
        name: "Right Angle",
        location: "Siliguri, India",
        area: "Flexible Retail Space",
        bhk: "Commercial / Retail",
        startingPrice: "95.00 Lacs*",
        image: rightAngleImg,
        category: "Commercial/Retail",
        description: "The perfect intersection of ambition and lifestyle. A landmark commercial destination."
    },
    {
        id: "the-senses",
        name: "The Senses",
        location: "Siliguri, India",
        area: "1200 - 1800 sqft",
        bhk: "1, 2, 3 BHK",
        startingPrice: "31.88 Lacs*",
        image: sensesImg,
        category: "Premium Residential",
        description: "A rainbow of infinite hues. A 7.4-acre residential sanctuary with 60% open space."
    },
    {
        id: "ram-vatika",
        name: "Ram Vatika",
        location: "Siliguri, India",
        developer: "Residential Haven",
        area: "1100 - 1500 sqft",
        bhk: "2 BHK, 3 BHK",
        startingPrice: "45.00 Lacs*",
        image: ramVatikaImg,
        category: "Premium Residential",
        description: "A serene residential haven offering modern comfort and elegant living spaces."
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
                    {projects.slice(0, 6).map((project, index) => (
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
