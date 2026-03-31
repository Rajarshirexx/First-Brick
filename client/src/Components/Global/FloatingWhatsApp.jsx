import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
    return (
        <a 
            href="https://wa.me/918371874510?text=Hello%20First%20Brick%20Team,%20I'm%20interested%20in%20learning%20more%20about%20your%20properties." 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5c] transition-all duration-500 group flex items-center justify-start gap-0 overflow-hidden w-[60px] h-[60px] hover:w-[200px] hover:px-5"
        >
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <FaWhatsapp className="w-8 h-8" />
            </div>
            <span className="whitespace-nowrap font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                WhatsApp Us
            </span>
        </a>
    );
}
