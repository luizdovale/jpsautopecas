import React from 'react';
import { Product } from '../types';
import { NUMERO_TELEFONE } from '../constants';
import { MessageCircle, Award } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleConsult = () => {
    const text = `Olá, gostaria de consultar o valor do produto: ${product.name} (Ref: ${product.id})`;
    window.open(`https://wa.me/${NUMERO_TELEFONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={`premium-card overflow-hidden flex flex-col h-full group ${product.isCustomMade ? 'border-jps-gold/30 shadow-jps-gold/5' : ''}`}>
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          loading="lazy"
        />
        
        {/* Badge de Categoria */}
        <div className={`absolute top-5 right-5 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.1em] z-10 shadow-lg ${product.isCustomMade ? 'bg-jps-gold text-jps-main' : 'bg-jps-main text-white'}`}>
          {product.category}
        </div>
 
        {/* Overlay Especial para Fabricação Própria */}
        {product.isCustomMade && (
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-jps-main text-[10px] font-black px-3 py-1.5 rounded-full border border-jps-gold/30 flex items-center gap-2 shadow-xl">
            <Award size={12} className="text-jps-gold" /> PROJETO JPS
          </div>
        )}
      </div>
 
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="title-card text-jps-main mb-3 line-clamp-2 group-hover:text-jps-light transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-8 flex-grow line-clamp-4 leading-relaxed font-light">
          {product.description}
        </p>
        
        <button 
          onClick={handleConsult}
          className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-95 shadow-lg ${product.isCustomMade ? 'bg-jps-gold text-jps-main hover:bg-white border-2 border-jps-gold' : 'bg-jps-main text-white hover:bg-white hover:text-jps-main border-2 border-transparent hover:border-jps-main'}`}
        >
          <MessageCircle size={20} />
          Consultar Especialista
        </button>
      </div>
    </div>
  );
};

export default ProductCard;