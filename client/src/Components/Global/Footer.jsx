import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg"

export default function Footer() {
    return (
        <footer className="bg-primary text-white font-sans mt-20">
            <div className="container px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="mb-6 block">
                            <img src={logo} alt="FirstBrick Logo" className="w-40 rounded-md bg-white p-1" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Redefining property marketing with premium experiences and innovative solutions. <br />
                            <span className="italic">Your vision, our bricks.</span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6 text-peach underline underline-offset-8 decoration-secondary/30">Navigation</h4>
                        <ul className="flex flex-col gap-3 text-sm text-slate-300">
                            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-secondary transition-colors">About Story</Link></li>
                            <li><Link to="/projects" className="hover:text-secondary transition-colors">Premium Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">Enquire Now</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6 text-peach underline underline-offset-8 decoration-secondary/30">Registry</h4>
                        <ul className="flex flex-col gap-4 text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-slate-400">Pradhan Nagar, Siliguri, India, 734001</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <a href="tel:+918371874510" className="hover:text-secondary transition-colors">+91 83718 74510</a>
                                <a href="tel:+917001820374" className="hover:text-secondary transition-colors">+91 70018 20374</a>
                            </li>
                            <li>
                                <a href="mailto:info@firstbrickproperty.com" className="hover:text-secondary transition-colors truncate">info@firstbrickproperty.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6 text-peach underline underline-offset-8 decoration-secondary/30">Connections</h4>
                        <div className="flex gap-4">
                            <a 
                                href="https://www.facebook.com/p/First-Brick-Properties-61579283042227/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all duration-300 group"
                                title="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all duration-300 opacity-50 cursor-not-allowed group"
                                title="Instagram"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all duration-300 opacity-50 cursor-not-allowed group"
                                title="LinkedIn"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.983v-9.971c0-7.752-8.996-7.458-11.014-3.644v-2.385z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 flex flex-col md:flex-row gap-6 justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                    <p>© {new Date().getFullYear()} FirstBrick Properties. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a 
                        href="https://www.tedviser.com" 
                        className="transition-colors">
                            Powered by <span className='text-secondary font-display hover:text-accent transition-colors'>Tedviser</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}