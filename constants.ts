import { Product, CategoryHighlight, Testimonial } from './types';

export const IMAGENS = {
  LOGO: "/img/logo.png", // original (mantida como backup)
  LOGO_SVG: "/img/logo.svg",
  LOGO_SVG_BRANCA: "/img/logo-branca.svg",
  FUNDO_HERO: "/img/hero-fundo.png",
  SOBRE_EQUIPE: "/img/sobre-equipe.png",
  CAT_MECANICO: "/img/cat-mecanico.png",
  CAT_OLEO: "/img/cat-oleo.png",
  CAT_TECNOLOGIA: "/img/cat-tecnologia.png",
  CAT_CHASSI: "/img/cat-chassi.png",
  CAT_PRATELEIRAS: "/img/cat-prateleiras.png",
  CAT_FROTA: "/img/cat-frota.png",
  PECA_FILTRO: "/img/peca-filtro.png",
  PECA_TURBO: "/img/peca-turbo.png",
  PECA_FREIO: "/img/peca-freio.png",
  // Avatares locais da pasta public/img/testimonial
  AVATAR_1: "/img/testimonial/testimonial1.png",
  AVATAR_2: "/img/testimonial/testimonial2.png",
  AVATAR_3: "/img/testimonial/testimonial3.png",
  AVATAR_4: "/img/testimonial/testimonial4.png",
  AVATAR_5: "/img/testimonial/testimonial5.png",
};

export const NUMERO_TELEFONE = "5512974045244";
export const ENDERECO = "Avenida Marginal Esquerda, 281 - Poiares - Caraguatatuba - SP";
export const MAPA_GOOGLE_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.228919658253!2d-45.42878952377317!3d-23.63197666418858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd631024227911%3A0xc3f7a4e9b89369b7!2sAv.%20Marginal%20Esquerda%2C%20281%20-%20Poiares%2C%20Caraguatatuba%20-%20SP%2C%2011673-010!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr";

export const LINKS_SOCIAIS = {
  INSTAGRAM: "https://www.instagram.com/jpsscherer/",
  FACEBOOK: "https://www.facebook.com/joni.scherer.73"
};

export const PRODUTOS: Product[] = [
  {
    id: 1,
    name: "Mangueiras de Alta Pressão",
    category: "Hidráulica",
    description: "Mangueiras hidráulicas e de ar com fabricação própria. Resistência extrema e medidas personalizadas para sua necessidade.",
    imageUrl: "/img/peca-mangueira.png",
    isCustomMade: true
  },
  {
    id: 2,
    name: "Kit Filtros Diesel Premium",
    category: "Filtros",
    description: "Conjunto completo de filtros (ar, óleo e combustível) para proteção máxima do sistema de injeção.",
    imageUrl: "/img/peca-filtro.png"
  },
  {
    id: 3,
    name: "Kit Embreagem Linha Pesada",
    category: "Transmissão",
    description: "Conjunto de platô, disco e rolamento reforçados para alta durabilidade em caminhões e ônibus.",
    imageUrl: "/img/peca-embreagem.png"
  },
  {
    id: 4,
    name: "Bicos Injetores Common Rail",
    category: "Injeção",
    description: "Componentes de alta precisão para sistemas de injeção eletrônica diesel, garantindo economia e potência.",
    imageUrl: "/img/peca-injecao.png"
  },
  {
    id: 5,
    name: "Óleos e Lubrificantes 15W40",
    category: "Lubrificantes",
    description: "Linha completa de óleos minerais e sintéticos para motores diesel de alto desempenho.",
    imageUrl: "/img/peca-lubrificante.png"
  },
  {
    id: 6,
    name: "Kit Correias e Tensores",
    category: "Motores",
    description: "Conjunto de correias dentadas e tensores de alta resistência para sincronismo perfeito do motor.",
    imageUrl: "/img/peca-correia.png"
  }
];

export const LINHAS_PRODUTOS: CategoryHighlight[] = [
  {
    id: 1,
    title: "Motor & Performance",
    description: "Turbinas, kits de motor, bombas d'água e componentes internos para máxima potência.",
    icon: "Settings",
    imageUrl: IMAGENS.CAT_MECANICO
  },
  {
    id: 2,
    title: "Lubrificantes & Filtros",
    description: "Linha completa de óleos minerais, sintéticos e filtros para proteção total do motor.",
    icon: "Droplet",
    imageUrl: IMAGENS.CAT_OLEO
  },
  {
    id: 3,
    title: "Injeção Eletrônica",
    description: "Bicos injetores, módulos e sensores de alta precisão para sistemas Common Rail.",
    icon: "Laptop",
    imageUrl: IMAGENS.CAT_TECNOLOGIA
  },
  {
    id: 4,
    title: "Câmbio & Diferencial",
    description: "Embreagens, cruzetas e peças de transmissão robustas para suportar carga pesada.",
    icon: "Wrench",
    imageUrl: IMAGENS.CAT_CHASSI
  },
  {
    id: 5,
    title: "Peças para Frota",
    description: "Condições especiais para abastecimento de frotas de caminhões e ônibus.",
    icon: "Truck",
    imageUrl: IMAGENS.CAT_FROTA
  },
  {
    id: 6,
    title: "Acessórios e Acabamento",
    description: "Itens de acabamento e acessórios para manter seu veículo sempre novo.",
    icon: "ShieldCheck",
    imageUrl: IMAGENS.CAT_PRATELEIRAS
  },
  {
    id: 7,
    title: "Mangueiras de Alta Pressão",
    description: "Fabricação própria de mangueiras hidráulicas e de ar com terminais prensados na hora. Soluções sob medida para sua necessidade.",
    icon: "Wrench",
    imageUrl: "/img/peca-mangueira.png"
  }
];


export const DEPOIMENTOS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos 'Magrão' Silva",
    role: "Caminhoneiro Autônomo",
    text: "O Sérgio é diferenciado! Liguei precisando de um kit de embreagem pra ontem e ele resolveu na hora. Preço justo e peça de primeira linha.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_1
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    role: "Gestor de Frota - TransLitoral",
    text: "Trabalho com o Ivan há anos. A consultoria técnica que ele dá nas peças de injeção evita muita dor de cabeça. Confiança total na JPS.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_2
  },
  {
    id: 3,
    name: "Mestre Valdir",
    role: "Mecânico Diesel Expert",
    text: "As mangueiras de alta pressão que eles fazem na hora são as melhores de Caragua. O time da JPS entende do que fala, sem enrolação.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_3
  },
  {
    id: 4,
    name: "André Santos",
    role: "Transportadora Vale",
    text: "Parceria forte. O Sérgio sempre consegue as peças mais difíceis pra gente. Agilidade que quem trabalha com carga pesada precisa.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_4
  },
  {
    id: 5,
    name: "Tiago Ferreira",
    role: "Caminhoneiro Frigorífico",
    text: "Fui por indicação e não me arrependi. O Ivan me explicou a diferença dos lubrificantes e me ajudou a economizar. Atendimento nota 10.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_5
  }
];
