export interface SiteInfo {
  name: string;
  location: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialMedia: {
    instagram: string;
    linkGoogle: string;
    whatsapp: string;
  };
}

export interface Accommodation {
  title: string;
  description: string;
  icon: string;
}

export interface Amenity {
  name: string;
  icon: string;
}

export interface Activity {
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'externa' | 'lazer' | 'acomodacao' | 'natureza';
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const siteInfo: SiteInfo = {
  name: "Sítio Recanto dos Amigos",
  location: "Interior de Guarapari, ES, Brasil",
  description: "Seu refúgio perfeito em meio à natureza exuberante de Buenos Aires no Espírito Santo",
  address: "Buenos Aires na Rota da Ferradura, Próximo ao Sitío Riacho da Pedras, Guarapari - ES, CEP: 29200-000",
  phone: "(27) 99927-9173",
  email: "contato@sitiorecantodosamigos.com.br",
  socialMedia: {
    instagram: "https://www.instagram.com/recan.todosamigos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkGoogle:  "https://g.co/kgs/vSM7BFt ",
    whatsapp: "https://wa.me/5527999279173?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Sítio%20Recanto%20dos%20Amigos"
  }
};

export const accommodations: Accommodation[] = [
  {
    title: "Chalé Principal",
    description: "2 quartos aconchegantes com vista para a mata",
    icon: "🏡"
  }
];

export const amenities: Amenity[] = [
  { name: "Piscina Adulto e Infantil", icon: "🏊" },
  { name: "Churrasqueira Completa", icon: "🔥" },
  { name: "Cozinha Equipada", icon: "👨‍🍳" },
  { name: "Wi-Fi Gratuito", icon: "📶" },
  { name: "Estacionamento", icon: "🚗" },
  { name: "Área de Jogos", icon: "🎯" },
  { name: "Trilhas Ecológicas", icon: "🥾" },
  { name: "Horta Orgânica", icon: "🌱" }
];

export const activities: Activity[] = [
  {
    title: "Trilhas na Mata",
    description: "Explore as trilhas ecológicas ao redor do sítio e descubra a rica fauna e flora local",
    image: "https://picsum.photos/800/600"
  },
  {
    title: "Banho de Cachoeira",
    description: "Aproveite as cachoeiras cristalinas a poucos minutos do sítio",
    image: "https://picsum.photos/800/600"
  },
  {
    title: "Observação de Aves",
    description: "Amanheça observando as diversas espécies de aves que habitam a região",
    image: "https://picsum.photos/800/600"
  },
  {
    title: "Pesca no Açude",
    description: "Relaxe pescando no açude natural do sítio",
    image: "https://picsum.photos/800/600"
  }
];

export const gallery: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/800/600", alt: "Vista aérea do sítio", category: "externa" },
  { id: 2, src: "https://picsum.photos/800/600", alt: "Piscina com deck de madeira", category: "lazer" },
  { id: 3, src: "https://picsum.photos/800/600", alt: "Casa principal", category: "acomodacao" },
  { id: 4, src: "https://picsum.photos/800/600", alt: "Área de churrasqueira", category: "lazer" },
  { id: 5, src: "https://picsum.photos/800/600", alt: "Trilha na mata", category: "natureza" },
  { id: 6, src: "https://picsum.photos/800/600", alt: "Quarto principal", category: "acomodacao" },
  { id: 7, src: "https://picsum.photos/800/600", alt: "Nascer do sol", category: "natureza" },
  { id: 8, src: "https://picsum.photos/800/600", alt: "Área de jogos", category: "lazer" }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    comment: "Local maravilhoso! O sítio é exatamente como nas fotos. Ambiente super agradável e preço muito justo. Voltaremos com certeza!",
    date: "Dezembro 2024"
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    comment: "Perfeito para relaxar em família. As crianças adoraram a piscina e nós adultos aproveitamos muito as trilhas. Custo-benefício excelente!",
    date: "Janeiro 2025"
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 5,
    comment: "Que experiência incrível! A conexão com a natureza é única. Recomendo para quem quer fugir da correria da cidade.",
    date: "Novembro 2024"
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    rating: 5,
    comment: "Estrutura impecável, proprietários muito atenciosos. O sítio oferece tudo que promete e muito mais. Vale cada centavo!",
    date: "Outubro 2024"
  }
];

// Objeto principal com todos os dados do sítio
export const siteData = {
  siteInfo,
  accommodations,
  amenities,
  activities,
  gallery,
  testimonials
};
