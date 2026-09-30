import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { IMAGENS, LINKS_SOCIAIS, ENDERECO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jps-main text-white pt-16 pb-10 border-t-8 border-jps-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link to="/" className="mb-8 inline-block">
              <img
                src={IMAGENS.LOGO_SVG_BRANCA}
                alt="JPS Auto Peças Logo Footer"
                className="h-20 w-auto max-w-full object-contain"
                width="364"
                height="80"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Referência na venda de peças para linha diesel há mais de 25 anos. Qualidade, estoque completo e preço justo para você e sua frota.
            </p>
            <div className="flex space-x-4">
              <a href={LINKS_SOCIAIS.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/5 hover:bg-jps-gold hover:text-jps-main p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href={LINKS_SOCIAIS.FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/5 hover:bg-jps-gold hover:text-jps-main p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <nav aria-labelledby="footer-links-title" className="text-center lg:text-left">
            <h3 id="footer-links-title" className="font-anton text-lg mb-6 text-white uppercase tracking-wider border-b border-white/10 pb-3">Navegação</h3>
            <ul className="space-y-4 text-sm text-gray-300 font-bold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-jps-gold transition-colors">Início</Link></li>
              <li><Link to="/catalogo" className="hover:text-jps-gold transition-colors">Catálogo Digital</Link></li>
              <li><Link to="/servicos" className="hover:text-jps-gold transition-colors">Serviços Técnicos</Link></li>
              <li><Link to="/sobre" className="hover:text-jps-gold transition-colors">Nossa História</Link></li>
              <li><Link to="/contato" className="hover:text-jps-gold transition-colors">Central de Contato</Link></li>
            </ul>
          </nav>

          {/* Location Col */}
          <section aria-labelledby="footer-address-title" className="text-center lg:text-left">
            <h3 id="footer-address-title" className="font-anton text-lg mb-6 text-white uppercase tracking-wider border-b border-white/10 pb-3">Onde Estamos</h3>
            <div className="flex flex-col items-center lg:items-start gap-6 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={24} className="text-jps-gold flex-shrink-0" />
                <span className="leading-relaxed">{ENDERECO}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={24} className="text-jps-gold flex-shrink-0" />
                <span className="font-black text-lg text-white">(12) 97404-5244</span>
              </div>
            </div>
          </section>

          {/* Hours Col */}
          <section aria-labelledby="footer-hours-title" className="text-center lg:text-left">
            <h3 id="footer-hours-title" className="font-anton text-lg mb-6 text-white uppercase tracking-wider border-b border-white/10 pb-3">Horários</h3>
            <div className="space-y-4 text-sm text-gray-300 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Clock size={20} className="text-jps-gold flex-shrink-0" />
                <div>
                  <p className="text-white uppercase text-[10px] font-black tracking-widest mb-1">Segunda a Sexta:</p>
                  <p className="text-base">07:30 às 18:00</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Clock size={20} className="text-transparent flex-shrink-0" />
                <div>
                  <p className="text-white uppercase text-[10px] font-black tracking-widest mb-1">Sábados:</p>
                  <p className="text-base">07:30 às 12:00</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Clock size={20} className="text-transparent flex-shrink-0" />
                <div>
                  <p className="text-white uppercase text-[10px] font-black tracking-widest mb-1">Domingos:</p>
                  <p className="text-base text-jps-gold font-bold">Fechado</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} JPS Auto Peças &bull; Peças Diesel de Alta Performance</p>
          <div className="mt-4 md:mt-0 opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            DESIGN & DEV BY <span className="text-white lowercase">valetechsoluções</span>
          </div>
        </div>

      </div>
    </footer>

  );
};

export default Footer;