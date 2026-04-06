import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

export default function FloatingCall() {
    return (
        <a 
            href="tel:+917001820374" 
            className="fixed bottom-28 right-8 z-[9999] bg-accent text-white rounded-full shadow-2xl hover:bg-secondary transition-all duration-500 group flex items-center justify-start gap-0 overflow-hidden w-[60px] h-[60px] hover:w-[200px] hover:px-5"
        >
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <FiPhoneCall className="w-8 h-8" />
            </div>
            <span className="whitespace-nowrap font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                Call Us Now
            </span>
        </a>
    );
}
