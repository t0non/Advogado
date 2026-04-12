
"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/5531982838833?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20meu%20caso%20do%20INSS.";
  const phoneUrl = "tel:3132716997";

  return (
    <>
      {/* Desktop Version: Floating FAB */}
      <div className="hidden md:block fixed bottom-8 right-8 z-[100]">
        <Link 
          href={whatsappUrl} 
          target="_blank" 
          className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-500 ease-premium"
          aria-label="Falar no WhatsApp"
        >
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
          <WhatsAppIcon className="w-8 h-8 pointer-events-none" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-4 px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Falar com Especialista
          </span>
        </Link>
      </div>

      {/* Mobile Version: Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pb-6 pt-4 bg-white/80 backdrop-blur-xl border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3 max-w-sm mx-auto">
          <Link 
            href={phoneUrl} 
            className="flex-1 flex items-center justify-center gap-3 bg-black text-white h-14 rounded-2xl font-bold uppercase text-[10px] tracking-widest transition-transform active:scale-95 shadow-lg"
          >
            <Phone className="w-5 h-5 text-accent" />
            Ligar
          </Link>
          <Link 
            href={whatsappUrl} 
            target="_blank"
            className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white h-14 rounded-2xl font-bold uppercase text-[10px] tracking-widest transition-transform active:scale-95 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
