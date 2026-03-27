import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-accent/20">
            <div className="container px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-display font-bold text-primary flex items-center gap-2">
                    <img src={logo} alt="" className='w-40 rounded-md' />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-semibold transition-colors hover:text-accent ${isActive ? 'text-accent border-b-2 border-accent' : 'text-primary'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
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
                <div className="md:hidden bg-white border-b border-accent/20 animate-fadeIn">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-lg font-semibold ${isActive ? 'text-accent' : 'text-primary'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="btn-accent text-center mt-2"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}