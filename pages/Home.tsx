import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Settings, ShieldCheck, Truck, ChevronLeft, ChevronRight, Quote, Wrench, Droplet, Laptop } from 'lucide-react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { IMAGENS, PRODUTOS, DEPOIMENTOS, LINHAS_PRODUTOS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUTOS.slice(0, 3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench size={24} />;
      case 'Droplet': return <Droplet size={24} />;
      case 'Laptop': return <Laptop size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Settings': return <Settings size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <Layout>
      <SEO
        title="Home"
        description="A JPS Auto Peças é especialista em linha diesel com mais de 25 anos de experiência. Localizada em Caraguatatuba, oferecemos o melhor estoque de peças pesadas da região."
      />

      {/* Hero Section */}
      <section className="relative min-h-[560px] md:min-h-[640px] py-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGENS.FUNDO_HERO}
            alt="Caminhão em manutenção - JPS Auto Peças"
            className="w-full h-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jps-main via-jps-main/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-jps-gold text-jps-main font-black px-4 py-1.5 text-sm rounded shadow-lg mb-8 uppercase tracking-wider">
              <Star size={14} fill="currentColor" /> Desde 1992
            </div>
            <h1 className="animate-fade-in-up-delay-1 title-hero mb-6 drop-shadow-2xl">
              Peças de <span className="text-jps-gold">Alta Performance</span> Para Linha Diesel
            </h1>
            <p className="animate-fade-in-up-delay-2 text-base md:text-lg text-gray-100 mb-10 font-light border-l-4 border-jps-gold pl-6 max-w-2xl leading-relaxed">
              Há mais de 25 anos fornecendo a maior variedade de peças com excelência para toda a linha diesel em toda a região. Sua frota não pode parar.
            </p>

            <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4">
              <Link to="/catalogo" className="bg-jps-gold text-jps-main font-black text-base py-4 px-8 rounded-xl hover:bg-white transition-all shadow-xl hover:shadow-jps-gold/30 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                Explorar Catálogo <ArrowRight size={20} />
              </Link>
              <Link to="/contato" className="backdrop-blur-md bg-white/10 border-2 border-white/20 text-white font-bold text-base py-4 px-8 rounded-xl hover:bg-white hover:text-jps-main transition-all text-center">
                Atendimento Técnico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Highlights */}
      <section className="py-24 bg-white relative z-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="title-section text-jps-black mb-4">Por que escolher a JPS?</h2>
            <p className="text-gray-500 text-base md:text-lg">Tradição, estoque completo e o melhor custo-benefício para sua frota diesel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group bg-jps-gray hover:bg-white p-8 rounded-3xl transition-all duration-500 border border-transparent hover:border-gray-100 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-white group-hover:bg-jps-main p-5 rounded-2xl w-fit mb-8 text-jps-main group-hover:text-jps-gold transition-all duration-500 shadow-sm">
                <Truck size={40} strokeWidth={1.5} />
              </div>
              <h3 className="title-card text-jps-main mb-3">Especialidade Diesel</h3>
              <p className="text-gray-500 leading-relaxed">Foco total em peças pesadas para caminhões, bicos injetores e sistemas complexos.</p>
            </article>
            <article className="group bg-jps-gray hover:bg-white p-8 rounded-3xl transition-all duration-500 border border-transparent hover:border-gray-100 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-white group-hover:bg-jps-main p-5 rounded-2xl w-fit mb-8 text-jps-main group-hover:text-jps-gold transition-all duration-500 shadow-sm">
                <Settings size={40} strokeWidth={1.5} />
              </div>
              <h3 className="title-card text-jps-main mb-3">Eficiência no Estoque</h3>
              <p className="text-gray-500 leading-relaxed">Pronta entrega para os bicos, bombas e filtros das principais marcas do mercado.</p>
            </article>
            <article className="group bg-jps-gray hover:bg-white p-8 rounded-3xl transition-all duration-500 border border-transparent hover:border-gray-100 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-white group-hover:bg-jps-main p-5 rounded-2xl w-fit mb-8 text-jps-main group-hover:text-jps-gold transition-all duration-500 shadow-sm">
                <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <h3 className="title-card text-jps-main mb-3">Garantia Total</h3>
              <p className="text-gray-500 leading-relaxed">Trabalhamos apenas com o que há de melhor no setor, garantindo a sua tranquilidade.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-24 bg-jps-gray reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="eyebrow text-jps-light">Excelência Diesel</span>
              <h2 className="title-section text-jps-main mt-2">Nossas Especialidades</h2>
            </div>
            <Link to="/catalogo" className="text-jps-main font-bold flex items-center gap-2 hover:text-jps-light transition-colors mt-6 md:mt-0 group">
              Explorar todo o estoque <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {LINHAS_PRODUTOS.slice(0, 3).map((line) => (
              <Link to="/catalogo" key={line.id} className="group relative rounded-3xl overflow-hidden h-[450px] shadow-2xl cursor-pointer">
                <img
                  src={line.imageUrl}
                  alt={`Categoria: ${line.title}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jps-black/95 via-jps-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="text-jps-gold mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {getIcon(line.icon)}
                  </div>
                  <h3 className="title-card text-white mb-2">{line.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {line.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-jps-black relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-jps-main/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-jps-light/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="eyebrow text-jps-gold flex items-center gap-3">
                <div className="w-10 h-0.5 bg-jps-gold"></div> Ofertas Premium
              </span>
              <h2 className="title-section text-white mt-4">Destaques do Mês</h2>
            </div>
            <Link to="/catalogo" className="group flex items-center gap-3 text-white font-bold border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white hover:text-jps-black transition-all">
              Ver Catálogo Completo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* History Preview */}
      <section className="py-0 bg-white reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[600px] lg:h-auto overflow-hidden group">
            <img
              src={IMAGENS.SOBRE_EQUIPE}
              alt="Equipe técnica JPS Auto Peças"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-jps-main/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
          </div>
          <article className="bg-jps-gray p-8 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="eyebrow text-jps-light mb-6">Nossa História</span>
            <h2 className="title-section mb-8 text-jps-main">
              Tradição que <br /><span className="text-jps-gold">Move Cargas</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Nossa história começou há mais de duas décadas em Caraguatatuba. Hoje, somos a maior referência regional em peças diesel, unindo tecnologia de ponta com o atendimento que você já conhece.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-anton text-4xl text-jps-black mb-1">25+</h4>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Anos de Mercado</p>
              </div>
              <div>
                <h4 className="font-anton text-4xl text-jps-black mb-1">5k+</h4>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Peças em Estoque</p>
              </div>
            </div>
            <Link to="/sobre" className="text-jps-main font-bold border-b-2 border-jps-main pb-2 w-fit hover:text-jps-light hover:border-jps-light transition-all text-lg group">
              Conheça Nossa Trajetória <span className="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </article>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-white overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex justify-between items-end mb-20">
            <div>
              <span className="eyebrow text-jps-light">Depoimentos</span>
              <h2 className="title-section text-jps-black mt-2">Voz do Cliente</h2>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-jps-main hover:text-white hover:border-jps-main transition-all shadow-sm"
                aria-label="Avaliação anterior"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-jps-main hover:text-white hover:border-jps-main transition-all shadow-sm"
                aria-label="Próxima avaliação"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </header>

          <div className="relative group">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar scroll-smooth px-4 -mx-4"
            >
              {DEPOIMENTOS.map(testimonial => (
                <div
                  key={testimonial.id}
                  className="flex-none w-[85vw] md:w-[480px] snap-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20 flex flex-col min-h-[340px] relative overflow-hidden group/card hover:border-jps-gold/30 transition-all duration-500"
                >
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-jps-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover/card:bg-jps-gold/10 transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8 flex justify-between items-start">
                      <div className="w-12 h-12 bg-jps-gray rounded-2xl flex items-center justify-center text-jps-gold">
                        <Quote size={24} fill="currentColor" />
                      </div>
                      <div className="flex gap-1 text-jps-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <p className="text-jps-main/80 mb-auto text-base md:text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <footer className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                      <div className="relative">
                        <img
                          src={testimonial.imageUrl}
                          alt={`Foto de ${testimonial.name}`}
                          className="w-16 h-16 rounded-2xl object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 shadow-md"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-jps-gold rounded-lg flex items-center justify-center">
                          <ShieldCheck size={12} className="text-jps-main" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-anton text-lg text-jps-main uppercase tracking-wide leading-none mb-1">{testimonial.name}</h4>
                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">{testimonial.role}</p>
                      </div>
                    </footer>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel fade effects for desktop */}
            <div className="hidden md:block absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none -ml-4"></div>
            <div className="hidden md:block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none -mr-4"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
