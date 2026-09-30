import React from 'react';
import { NUMERO_TELEFONE } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Vim pelo site da JPS Auto Peças e gostaria de mais informações.");
    window.open(`https://wa.me/${NUMERO_TELEFONE}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        className="bg-jps-whatsapp hover:bg-[#1ebe5b] text-white p-4 rounded-full wa-pulse shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative overflow-hidden"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </button>
      <div className="absolute bottom-full mb-3 right-0 w-max origin-bottom-right scale-0 transition-transform duration-300 group-hover:scale-100 bg-white text-jps-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium border border-gray-100">
        Fale Conosco Agora!
      </div>
    </div>
  );
};

export default FloatingWhatsApp;