import React from 'react';

export default function FloatingWhatsApp() {
    return (
        <a 
            href="https://wa.me/918371874510?text=Hello%20First%20Brick%20Team,%20I'm%20interested%20in%20learning%20more%20about%20your%20properties." 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5c] transition-all duration-500 group flex items-center justify-start gap-0 overflow-hidden w-[60px] h-[60px] hover:w-[200px] hover:px-5"
        >
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.123.554 4.197 1.604 6.023L0 24l6.111-1.605A11.79 11.79 0 0012.046 24h.005c6.64 0 12.035-5.405 12.038-12.041a11.85 11.85 0 00-3.327-8.512z"/>
                </svg>
            </div>
            <span className="whitespace-nowrap font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                WhatsApp Us
            </span>
        </a>
    );
}
