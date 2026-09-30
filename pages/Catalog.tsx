import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { PRODUTOS } from '../constants';
import { Search, Sparkles, Package } from 'lucide-react';

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredProducts = PRODUTOS.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Layout>
      <SEO
        title="Catálogo Demonstrativo"
        description="Confira nossos principais itens em destaque: filtros, embreagens, injeção, mangueiras e muito mais com a qualidade JPS."
      />

      <div className="bg-jps-main text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-jps-gold rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-jps-light rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-3 bg-jps-gold/20 text-jps-gold px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
            <Sparkles size={14} /> Principais Destaques
          </span>
          <h1 className="title-page mb-6er animate-fade-in-up-delay-1">Linha Diesel Premium</h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg font-light leading-relaxed animate-fade-in-up-delay-2">
            As melhores peças diesel para garantir desempenho e continuidade da sua operação.
          </p>
        </div>
      </div>

      <section className="pt-0 pb-20 bg-jps-gray/30 min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Barra de Busca Refinada */}
          <div className="reveal bg-white p-2 rounded-3xl shadow-2xl shadow-jps-main/5 -mt-8 mb-14 flex flex-col md:flex-row gap-4 items-center justify-between border border-white max-w-3xl mx-auto relative z-20">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Qual peça você procura?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-5 bg-transparent border-none rounded-[2rem] focus:outline-none focus:ring-0 transition-all text-jps-main text-lg font-medium placeholder:text-gray-300"
                aria-label="Buscar peça"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-jps-gold" size={28} />
            </div>
          </div>

          <div className="mb-16">
            <div className="reveal flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="h-10 w-2 bg-jps-gold rounded-full"></div>
                <h2 className="title-section text-jps-main">Itens em Destaque</h2>
              </div>
              <div className="hidden md:flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                <Package size={14} /> {filteredProducts.length} Peças encontradas
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((product, i) => (
                  <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="reveal text-center py-32 bg-white rounded-3xl shadow-2xl shadow-jps-main/5 border-2 border-dashed border-gray-100 max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-jps-gray rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300">
                  <Search size={40} />
                </div>
                <p className="title-card text-jps-main mb-4">Nenhum item encontrado</p>
                <p className="text-gray-400 font-light mb-10 max-w-xs mx-auto">Tente outro termo ou fale agora com um especialista em injeção diesel.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-jps-main text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-jps-gold hover:text-jps-main transition-all shadow-lg"
                >
                  Ver todos os itens
                </button>
              </div>
            )}
          </div>

          {/* Call to Action Final */}
          <div className="reveal bg-jps-main rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl shadow-jps-main/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-jps-gold/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h3 className="title-cta mb-4">Não encontrou o que precisava?</h3>
                <p className="text-gray-300 max-w-lg text-lg">
                  Nosso estoque físico conta com mais de <span className="text-jps-gold font-black">5.000 itens</span> para pronta entrega.
                </p>
              </div>
              <a
                href="https://wa.me/5512974045244"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-jps-gold text-jps-main font-black py-5 px-10 rounded-2xl hover:bg-white transition-all shadow-xl shadow-jps-gold/10 transform hover:-translate-y-1 text-center whitespace-nowrap text-base uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Falar com Consultor
                <Sparkles size={24} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
