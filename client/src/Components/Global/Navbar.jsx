import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
    ];

    const aboutLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Company Directors', path: '/about/directors' },
    ];

    const projectLinks = [
        { name: 'All Projects', path: '/projects' },
        { name: 'Embee Delight', path: '/projects/embee-delight' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-accent/20">
            <div className="container px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-display font-bold text-primary flex items-center gap-2">
                    <img src={logo} alt="" className='w-40 rounded-md' />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm font-semibold transition-colors hover:text-accent ${isActive ? 'text-accent border-b-2 border-accent' : 'text-primary'}`
                        }
                    >
                        Home
                    </NavLink>

                    {/* About Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                    >
                        <button 
                            className={`text-sm font-semibold transition-colors flex items-center gap-1 py-2 ${isAboutOpen ? 'text-accent' : 'text-primary'}`}
                        >
                            About
                            <svg className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-2xl rounded-xl border border-primary/5 py-4 transition-all duration-300 origin-top ${isAboutOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                            {aboutLinks.map((subLink) => (
                                <NavLink
                                    key={subLink.name}
                                    to={subLink.path}
                                    className={({ isActive }) =>
                                        `block px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-secondary/5 ${isActive ? 'text-secondary' : 'text-primary/70'}`
                                    }
                                >
                                    {subLink.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Projects Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setIsProjectsOpen(true)}
                        onMouseLeave={() => setIsProjectsOpen(false)}
                    >
                        <button 
                            className={`text-sm font-semibold transition-colors flex items-center gap-1 py-2 ${isProjectsOpen ? 'text-accent' : 'text-primary'}`}
                        >
                            Projects
                            <svg className={`w-4 h-4 transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-2xl rounded-xl border border-primary/5 py-4 transition-all duration-300 origin-top ${isProjectsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                            {projectLinks.map((subLink) => (
                                <NavLink
                                    key={subLink.name}
                                    to={subLink.path}
                                    className={({ isActive }) =>
                                        `block px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-secondary/5 ${isActive ? 'text-secondary' : 'text-primary/70'}`
                                    }
                                >
                                    {subLink.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-sm font-semibold transition-colors hover:text-accent ${isActive ? 'text-accent border-b-2 border-accent' : 'text-primary'}`
                        }
                    >
                        Contact
                    </NavLink>

                    <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
                        Enquire Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-accent/20 animate-fadeIn h-screen overflow-y-auto">
                    <div className="flex flex-col p-6 gap-6">
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `text-xl font-display font-bold ${isActive ? 'text-accent' : 'text-primary'}`}
                        >
                            Home
                        </NavLink>

                        {/* Mobile About Dropdown */}
                        <div className="flex flex-col gap-4">
                            <button 
                                onClick={() => setIsAboutOpen(!isAboutOpen)}
                                className={`text-xl font-display font-bold flex justify-between items-center ${isAboutOpen ? 'text-accent' : 'text-primary'}`}
                            >
                                About
                                <svg className={`w-6 h-6 transform ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isAboutOpen && (
                                <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary/5 animate-fadeIn">
                                    {aboutLinks.map((subLink) => (
                                        <NavLink
                                            key={subLink.name}
                                            to={subLink.path}
                                            onClick={() => { setIsOpen(false); setIsAboutOpen(false); }}
                                            className={({ isActive }) => `text-sm font-semibold uppercase tracking-widest ${isActive ? 'text-secondary font-black' : 'text-primary/60'}`}
                                        >
                                            {subLink.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Projects Dropdown */}
                        <div className="flex flex-col gap-4">
                            <button 
                                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                                className={`text-xl font-display font-bold flex justify-between items-center ${isProjectsOpen ? 'text-accent' : 'text-primary'}`}
                            >
                                Projects
                                <svg className={`w-6 h-6 transform ${isProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isProjectsOpen && (
                                <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary/5 animate-fadeIn">
                                    {projectLinks.map((subLink) => (
                                        <NavLink
                                            key={subLink.name}
                                            to={subLink.path}
                                            onClick={() => { setIsOpen(false); setIsProjectsOpen(false); }}
                                            className={({ isActive }) => `text-sm font-semibold uppercase tracking-widest ${isActive ? 'text-secondary font-black' : 'text-primary/60'}`}
                                        >
                                            {subLink.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `text-xl font-display font-bold ${isActive ? 'text-accent' : 'text-primary'}`}
                        >
                            Contact
                        </NavLink>

                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-secondary text-white text-center py-4 rounded-full font-display font-bold uppercase tracking-widest text-sm"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}