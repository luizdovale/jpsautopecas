import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Clock, Instagram, Facebook, Menu, X } from 'lucide-react';
import { IMAGENS, LINKS_SOCIAIS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-jps-main text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-jps-gold" /> Caraguatatuba - SP</span>
            <span className="flex items-center gap-1"><Clock size={12} className="text-jps-gold" /> Seg-Sex: 7:30-18:00 | Sáb: 7:30-12:00</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKS_SOCIAIS.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-jps-gold transition-colors"><Instagram size={14} /></a>
            <a href={LINKS_SOCIAIS.FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-jps-gold transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur shadow-lg py-2.5' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="block group">
              <img 
                src={IMAGENS.LOGO_SVG} 
                alt="JPS Auto Peças Logo" 
                className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-[4.75rem]'}`} 
                width="346"
                height="76"
              />
            </Link>
 
            <nav className="hidden lg:flex items-center space-x-7 whitespace-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active text-jps-main' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contato" className="bg-jps-gold hover:bg-jps-main hover:border-jps-main hover:text-white border-2 border-jps-gold text-jps-main font-black text-sm uppercase tracking-wider py-2.5 px-6 rounded-lg shadow-md hover:shadow-jps-gold/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Orçamento
              </Link>
            </nav>

            <button
              onClick={toggleMenu}
              className="lg:hidden text-jps-main focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={`block px-3 py-3 text-base font-bold uppercase w-full text-center hover:bg-gray-50 rounded ${location.pathname === link.path ? 'text-jps-main' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;