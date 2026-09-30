import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { NUMERO_TELEFONE, ENDERECO, MAPA_GOOGLE_EMBED } from '../constants';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${formData.name}. Telefone: ${formData.phone}. Mensagem: ${formData.message}. Enviado pelo site da JPS Auto Peças.`;
    window.open(`https://wa.me/${NUMERO_TELEFONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <Layout>
      <SEO
        title="Contato"
        description="Fale com a JPS Auto Peças. Solicite orçamentos, consulte estoque e tire suas dúvidas sobre peças diesel em Caraguatatuba via WhatsApp ou telefone."
      />

      <div className="bg-jps-main text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-jps-main to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="title-page mb-6 animate-fade-in-up">Canais de Atendimento</h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg font-light tracking-wide animate-fade-in-up-delay-1">
            Suporte técnico especializado para sua frota diesel.
          </p>
        </div>
      </div>

      <section className="py-24 bg-jps-gray/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-8 reveal">
              <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-jps-main/5 border border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-jps-gold/5 rounded-full blur-3xl"></div>

                <h3 className="title-section text-jps-main mb-8">Onde nos encontrar</h3>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="bg-jps-gray p-4 rounded-2xl text-jps-main group-hover:bg-jps-gold group-hover:text-white transition-all duration-500 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Endereço Principal</p>
                      <p className="text-lg text-jps-black font-medium leading-tight">{ENDERECO}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="bg-jps-gray p-4 rounded-2xl text-jps-main group-hover:bg-jps-gold group-hover:text-white transition-all duration-500 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Central de Vendas</p>
                      <p className="text-lg text-jps-black font-black">(12) 97404-5244</p>
                      <p className="text-xs text-jps-whatsapp font-bold uppercase tracking-tight mt-1 animate-pulse">Atendimento via WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="bg-jps-gray p-4 rounded-2xl text-jps-main group-hover:bg-jps-gold group-hover:text-white transition-all duration-500 shadow-sm">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Horário de Funcionamento</p>
                      <div className="text-sm text-jps-black space-y-1 mt-1 font-medium">
                        <p className="flex justify-between w-56"><span>Segunda a Sexta:</span> <span>07:30 - 18:00</span></p>
                        <p className="flex justify-between w-56"><span>Sábados:</span> <span>07:30 - 12:00</span></p>
                        <p className="flex justify-between w-56 text-red-600 font-bold"><span>Domingos:</span> <span>Fechado</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social CTA */}
              <div className="bg-jps-gold p-10 rounded-3xl shadow-2xl shadow-jps-gold/20 flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
                <div>
                  <h4 className="title-card text-jps-main">Redes Sociais</h4>
                  <p className="text-jps-main/60 text-sm font-bold uppercase tracking-widest">Siga nossa loja</p>
                </div>
                <div className="bg-white/20 p-4 rounded-full group-hover:bg-white transition-colors">
                  <MessageSquare className="text-jps-main" size={24} />
                </div>
              </div>

            </div>

            {/* Form Side */}
            <div className="lg:col-span-7 reveal">
              <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl shadow-jps-main/5 border border-white">
                <header className="mb-12">
                  <h2 className="title-section text-jps-black mb-4">Solicite um Orçamento</h2>
                  <p className="text-gray-500 font-light text-lg">Preencha os campos abaixo e entraremos em contato imediatamente.</p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Seu Nome</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-8 py-5 bg-jps-gray border-2 border-transparent rounded-[2rem] focus:outline-none focus:border-jps-gold focus:bg-white transition-all text-jps-main font-medium placeholder:text-gray-300"
                        placeholder="Ex: Pedro Oliveira"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-8 py-5 bg-jps-gray border-2 border-transparent rounded-[2rem] focus:outline-none focus:border-jps-gold focus:bg-white transition-all text-jps-main font-medium placeholder:text-gray-300"
                        placeholder="(12) 99999-9999"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Peça ou Serviço de Interesse</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-8 py-6 bg-jps-gray border-2 border-transparent rounded-3xl focus:outline-none focus:border-jps-gold focus:bg-white transition-all text-jps-main font-medium placeholder:text-gray-300 resize-none"
                      placeholder="Descreva aqui o que você precisa..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-jps-main text-white font-black py-6 rounded-[2rem] shadow-xl flex items-center justify-center gap-4 transition-all hover:bg-jps-gold hover:text-jps-main hover:-translate-y-1 active:scale-95 text-lg uppercase tracking-[0.2em]"
                  >
                    <Send size={24} />
                    Enviar via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <section className="mt-24 reveal">
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-white h-[550px] relative">
              <div className="absolute top-8 left-8 z-20 bg-jps-main text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                Visite nossa unidade física
              </div>
              <iframe
                src={MAPA_GOOGLE_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '2.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização JPS Auto Peças"
              ></iframe>
            </div>
          </section>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;
