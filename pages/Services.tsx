import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { LINHAS_PRODUTOS, NUMERO_TELEFONE } from '../constants';
import { Wrench, CheckCircle, Droplet, Laptop, Settings, Truck, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
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

  const getServiceIcon = (iconName: string) => {
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
      <div className="bg-jps-main text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-jps-gold/20 mix-blend-overlay"></div>
          <img src={LINHAS_PRODUTOS[0].imageUrl} className="w-full h-full object-cover blur-sm scale-110" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="title-page mb-6 animate-fade-in-up">Peças & Soluções Diesel</h1>
          <p className="text-white max-w-2xl mx-auto text-lg font-light tracking-wide animate-fade-in-up-delay-1">
            Componentes diesel de alta qualidade com suporte técnico especializado para máxima performance.
          </p>
        </div>
      </div>

      <section className="py-32 bg-jps-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {LINHAS_PRODUTOS.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 reveal">
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 bg-jps-main/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-xs font-black uppercase tracking-widest text-center">Tecnologia Diesel de Ponta</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 reveal">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white p-4 rounded-2xl text-jps-main shadow-lg border border-jps-gold/20">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-jps-gold font-black uppercase tracking-[0.2em] text-[10px]">Especialidade JPS</span>
                  </div>
                  <h2 className="title-section text-jps-black mb-6">{service.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {['Garantia Premium', 'Peças Originais', 'Execução Técnica', 'Agilidade'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-jps-main bg-white py-3 px-5 rounded-xl border border-gray-100 shadow-sm">
                        <CheckCircle size={18} className="text-jps-gold" />
                        <span className="font-bold text-xs uppercase tracking-wide">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${NUMERO_TELEFONE}?text=${encodeURIComponent(`Olá, gostaria de agendar um serviço de ${service.title}.`)}`}
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-jps-main text-white font-black py-5 px-10 rounded-2xl uppercase tracking-widest hover:bg-jps-gold hover:text-jps-main hover:shadow-xl transition-all shadow-lg active:scale-95"
                  >
                    Agendar Agora
                    <Truck size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
