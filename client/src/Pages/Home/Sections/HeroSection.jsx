import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import slider images
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img5 from '../../../assets/img5.jpg';
/* import img6 from '../../../assets/img6.jpg'; */
import img7 from '../../../assets/img7.jpg';
import img8 from '../../../assets/img8.jpg';
import img9 from '../../../assets/img9.jpg';
import img10 from '../../../assets/img10.jpg';

const sliderImages = [img1, img2, img5, img7, img8, img9, img10];

export default function HeroSection() {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-primary py-12 lg:py-20 overflow-hidden">
            <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Left Side: Clean Branding Content */}
                <div className="flex-1 text-center lg:text-left animate-fadeIn">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-widest font-bold mb-6">
                        Premium Property Marketing
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-slideDown">
                        Where <span className="text-accent italic">Luxury</span> <br />
                        Meets Foundation.
                    </h1>
                    
                    <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-90 animate-fadeIn delay-300">
                        Crafting high-impact digital experiences for professional property marketers. 
                        We blend architectural vision with cutting-edge technology.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fadeIn delay-500">
                        <button className="btn-accent px-10 py-3.5 text-sm font-bold uppercase tracking-widest hover:-translate-y-1 transition-transform">
                            Explore Projects
                        </button>
                        <button className="px-10 py-3.5 border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1">
                            Our Vision
                        </button>
                    </div>

                    {/* Stats Summary */}
                    <div className="mt-12 flex justify-center lg:justify-start gap-10 opacity-60 animate-fadeIn delay-700">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">500+</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-400">Marketed</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">15+</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-400">Years Exp</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Premium Card Slider */}
                <div className="flex-1 w-full max-w-xl group">
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/5">
                        {sliderImages.map((img, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Property ${index + 1}`}
                                    className="w-full h-full object-contain bg-[#122136]" 
                                />
                            </div>
                        ))}
                        {/* Subtle inner shadow for depth */}
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}