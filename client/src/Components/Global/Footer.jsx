import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-primary text-light font-sans mt-20">
            <div className="container px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-light/10 pb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-3xl font-display font-bold text-light flex items-center gap-2 mb-4">
                            <span className="text-accent italic">First</span>Brick
                        </Link>
                        <p className="text-secondary-foreground/70 max-w-sm mb-6 font-medium text-slate-300">
                            Redefining property marketing with premium experiences and innovative solutions. Your vision, our bricks.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-display font-semibold mb-4 text-accent">Quick Links</h4>
                        <ul className="flex flex-col gap-2">
                            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
                            <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-display font-semibold mb-4 text-accent">Contact</h4>
                        <ul className="flex flex-col gap-2 text-slate-300">
                            <li>Marketing City, MC 12345</li>
                            <li>
                                <a href="tel:+918371874510" className="hover:text-accent transition-colors">+91 83718 74510</a>
                            </li>
                            <li>
                                <a href="tel:+917001820374" className="hover:text-accent transition-colors">+91 70018 20374</a>
                            </li>
                            <li>
                                <a href="mailto:info@firstbrickproperty.com" className="hover:text-accent transition-colors">info@firstbrickproperty.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:row gap-4 justify-between items-center text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} FirstBrick. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}