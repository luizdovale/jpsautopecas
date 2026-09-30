import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { IMAGENS, NUMERO_TELEFONE } from '../constants';
import { Award, Users, History, Target } from 'lucide-react';

const About: React.FC = () => {
  const handleWhatsApp = () => {
    const text = 'Olá! Gostaria de falar com um especialista sobre peças diesel.';
    window.open(`https://wa.me/${NUMERO_TELEFONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

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

  return (
    <Layout>
      <SEO
        title="Sobre Nós"
        description="Conheça a história da JPS Auto Peças. Tradição e confiança no mercado de peças diesel em Caraguatatuba há mais de 25 anos."
      />

      <div className="bg-jps-main text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGENS.FUNDO_HERO} className="w-full h-full object-cover grayscale" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="title-page mb-6er animate-fade-in-up">Nossa Trajetória</h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg font-light tracking-wide animate-fade-in-up-delay-1">
            Referência em distribuição de peças no Litoral Norte há mais de 25 anos.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <article className="reveal">
              <span className="text-jps-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Desde 1999</span>
              <h2 className="title-section text-jps-black mb-6">Tradição que move o Litoral</h2>
              <div className="prose prose-lg text-gray-500 font-light leading-relaxed">
                <p className="mb-6">
                  A <strong className="text-jps-main font-bold">JPS Auto Peças</strong> não é apenas uma loja; é o resultado de mais de duas décadas de dedicação ao transportador e ao frotista.
                </p>
                <p className="mb-6">
                  Fundada em <span className="text-jps-main font-semibold">Caraguatatuba</span>, nossa jornada começou com o propósito de oferecer agilidade onde o tempo é dinheiro. O que nasceu como um balcão de peças hoje é uma operação logística robusta, atendendo a toda a região com a precisão exigida pela linha diesel.
                </p>
                <p>
                  Nosso compromisso é com a sua produtividade. Trabalhamos apenas com marcas de primeira linha, garantindo que cada componente que sai de nossa prateleira contribua para a longevidade da sua frota.
                </p>
              </div>
            </article>

            <div className="relative">
              <div className="reveal absolute -top-10 -left-10 w-32 h-32 bg-jps-gold/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="reveal space-y-6">
                  <img
                    src={IMAGENS.FUNDO_HERO}
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                    alt="Interior da JPS"
                  />
                  <div className="bg-jps-main p-8 rounded-3xl text-white">
                    <h4 className="font-anton text-4xl mb-1 text-jps-gold">25+</h4>
                    <p className="text-xs uppercase tracking-widest font-bold opacity-60">Anos de estrada</p>
                  </div>
                </div>
                <div className="reveal pt-12 space-y-6">
                  <div className="bg-jps-gold p-8 rounded-3xl text-jps-main">
                    <History size={32} className="mb-4" />
                    <p className="text-sm font-black uppercase leading-tight">Estoque <br />Especializado</p>
                  </div>
                  <img
                    src={IMAGENS.CAT_PRATELEIRAS}
                    className="rounded-3xl shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
                    alt="Logística Diesel"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            {[
              { icon: History, label: "25+ Anos", desc: "História" },
              { icon: Users, label: "5000+", desc: "Clientes" },
              { icon: Award, label: "Premium", desc: "Qualidade" },
              { icon: Target, label: "Foco", desc: "Diesel" },
            ].map((stat, i) => (
              <div key={i} className={`reveal premium-card p-10 text-center group`}>
                <div className="w-16 h-16 bg-jps-gray rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-jps-gold transition-colors duration-500">
                  <stat.icon className="text-jps-main group-hover:text-white transition-colors" size={28} />
                </div>
                <div className="font-anton text-2xl text-jps-main mb-1 uppercase tracking-wide">{stat.label}</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="reveal bg-jps-main rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-jps-main/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h3 className="title-cta text-white mb-6">Pronto para rodar com confiança?</h3>
              <p className="text-gray-300 mb-10 max-w-xl mx-auto font-light text-lg">Nossos especialistas estão prontos para encontrar a solução exata para o seu motor diesel.</p>
              <button
                onClick={handleWhatsApp}
                className="bg-jps-gold text-jps-main px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl"
              >
                Falar com Especialista
              </button>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default About;
