export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  content: {
    intro: string;
    sections: {
      title: string;
      body: string;
      productId?: string;
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'iphone-13-en-2026-merece-la-pena',
    title: 'iPhone 13 en 2026: ¿Merece la pena comprarlo reacondicionado?',
    description: 'Analizamos si el iPhone 13 sigue siendo una buena compra en 2026 comparando su rendimiento, batería, cámara y precio en el mercado reacondicionado.',
    date: '18 Sep 2026',
    author: 'Redacción ComparaWeb',
    readTime: '4 min de lectura',
    category: 'Móviles',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&auto=format&fit=crop&q=80',
    content: {
      intro: 'Con la llegada de las nuevas generaciones de iPhone, los modelos anteriores sufren bajadas de precio drásticas. El iPhone 13 se ha posicionado en 2026 como uno de los terminales más buscados en el mercado reacondicionado.',
      sections: [
        {
          title: '1. Rendimiento del chip A15 Bionic',
          body: 'A pesar de tener varios años en el mercado, el procesador A15 Bionic sigue moviendo iOS con total fluidez. Las aplicaciones actuales, juegos y multitarea no representan ningún problema.',
          productId: 'iphone-13-128gb-reacondicionado'
        },
        {
          title: '2. Cámaras y pantalla',
          body: 'Su pantalla Super Retina XDR OLED de 6.1 pulgadas ofrece un brillo y contraste excepcionales. Las cámaras de 12 MP con Modo Cine siguen ofreciendo una calidad de vídeo superior a muchos gama media actuales.'
        },
        {
          title: '3. Precio vs Valor',
          body: 'Por debajo de los 300€ en estado reacondicionado excelente, el iPhone 13 ofrece una relación calidad-precio imbatible para quienes buscan un terminal de Apple fiable sin desembolsar más de 800€.'
        }
      ],
      conclusion: 'En conclusión: Sí, merece totalmente la pena comprar el iPhone 13 en 2026 si lo encuentras reacondicionado y con garantía. Es el equilibrio perfecto entre precio y prestaciones.'
    }
  },
  {
    slug: 'mejores-portatiles-oferta-estudiantes-trabajo',
    title: 'Las 5 mejores ofertas en portátiles para trabajar o estudiar',
    description: 'Guía de compra con los portátiles con mejor relación calidad/precio del momento en Amazon, PcComponentes y MediaMarkt.',
    date: '15 Sep 2026',
    author: 'Redacción ComparaWeb',
    readTime: '5 min de lectura',
    category: 'Portátiles',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80',
    content: {
      intro: 'Elegir un portátil puede ser complicado entre tantas opciones de procesadores, RAM y almacenamiento. Hemos seleccionado las opciones con mejor descuento actualmente.',
      sections: [
        {
          title: 'MacBook Air M1 y M2: Los reyes de la autonomía',
          body: 'Tanto el chip M1 como el M2 siguen ofreciendo una duración de batería imbatible de hasta 18 horas y potencia de sobra para tareas de oficina, edición y desarrollo.',
          productId: 'macbook-air-m1-reacondicionado'
        },
        {
          title: 'Qué buscar en un portátil en 2026',
          body: 'Prioriza al menos 16 GB de memoria RAM para garantizar la fluidez en el futuro y un disco SSD de mínimo 256 GB o 512 GB.'
        }
      ],
      conclusion: 'Revisa siempre las ofertas reacondicionadas en plataformas como PcComponentes o Amazon para ahorrar hasta un 40% adicional.'
    }
  }
];