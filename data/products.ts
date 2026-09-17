export type Offer = {
  id: string;
  store: string;
  price: number;
  shipping: string;
  rating: string;
  condition: string;
  lastUpdated: string;
  url: string;
  affiliateUrl: string | null;
};

export type Product = {
  name: string;
  category: string;
  rating: string;
  image: string;
  offers: Offer[];
};

export const products: Product[] = [
  {
    name: "Apple iPhone 13 (128 GB) - Medianoche",
    category: "Smartphones",
    rating: "4.7",
    image: "📱",
    offers: [
      {
        id: "iphone13-amazon",
        store: "Amazon",
        price: 549.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.amazon.es/gp/search?keywords=Apple+iPhone+13+128GB+Medianoche",
        affiliateUrl: "https://www.amazon.es/gp/search?keywords=Apple+iPhone+13+128GB+Medianoche&tag=comparaweb08-21"
      },
      {
        id: "iphone13-pccomponentes",
        store: "PcComponentes",
        price: 559.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/buscar/?query=apple+iphone+13+128gb+medianoche",
        affiliateUrl: null
      },
      {
        id: "iphone13-mediamarkt",
        store: "MediaMarkt",
        price: 569.00,
        shipping: "Envío 1,99 €",
        rating: "4.5",
        condition: "Nuevo",
        lastUpdated: "Ayer",
        url: "https://www.mediamarkt.es/es/search.html?query=iphone%2013%20128gb%20medianoche",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Apple MacBook Air M2 (8GB RAM, 256GB SSD) - Gris Espacial",
    category: "Portátiles",
    rating: "4.8",
    image: "💻",
    offers: [
      {
        id: "macbookm2-amazon",
        store: "Amazon",
        price: 1049.00,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.amazon.es/gp/search?keywords=Apple+MacBook+Air+M2+8GB+256GB+Gris+Espacial",
        affiliateUrl: "https://www.amazon.es/gp/search?keywords=Apple+MacBook+Air+M2+8GB+256GB+Gris+Espacial&tag=comparaweb08-21"
      },
      {
        id: "macbookm2-pccomponentes",
        store: "PcComponentes",
        price: 1069.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/buscar/?query=macbook+air+m2+256gb",
        affiliateUrl: null
      },
      {
        id: "macbookm2-mediamarkt",
        store: "MediaMarkt",
        price: 1079.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Ayer",
        url: "https://www.mediamarkt.es/es/search.html?query=macbook%20air%20m2%20256gb",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Sony PlayStation 5 Slim (Chasis D - Edición Estándar con Lector)",
    category: "Consolas",
    rating: "4.9",
    image: "🎮",
    offers: [
      {
        id: "ps5slim-amazon",
        store: "Amazon",
        price: 519.00,
        shipping: "Envío gratis",
        rating: "4.9",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.amazon.es/gp/search?keywords=Sony+PlayStation+5+Slim+Estandar",
        affiliateUrl: "https://www.amazon.es/gp/search?keywords=Sony+PlayStation+5+Slim+Estandar&tag=comparaweb08-21"
      },
      {
        id: "ps5slim-pccomponentes",
        store: "PcComponentes",
        price: 529.90,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/buscar/?query=playstation+5+slim",
        affiliateUrl: null
      },
      {
        id: "ps5slim-mediamarkt",
        store: "MediaMarkt",
        price: 549.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hace 2 días",
        url: "https://www.mediamarkt.es/es/search.html?query=ps5%20slim",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Nintendo Switch OLED - Joy-Con Blanco",
    category: "Consolas",
    rating: "4.8",
    image: "🕹️",
    offers: [
      {
        id: "switcholed-amazon",
        store: "Amazon",
        price: 319.00,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.amazon.es/gp/search?keywords=Nintendo+Switch+OLED+Joy-Con+Blanco",
        affiliateUrl: "https://www.amazon.es/gp/search?keywords=Nintendo+Switch+OLED+Joy-Con+Blanco&tag=comparaweb08-21"
      },
      {
        id: "switcholed-pccomponentes",
        store: "PcComponentes",
        price: 324.95,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/buscar/?query=nintendo+switch+oled+blanca",
        affiliateUrl: null
      },
      {
        id: "switcholed-mediamarkt",
        store: "MediaMarkt",
        price: 339.00,
        shipping: "Envío 2,99 €",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Ayer",
        url: "https://www.mediamarkt.es/es/search.html?query=nintendo%20switch%20oled%20blanca",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Apple AirPods Pro (2.ª Generación) con Estuche MagSafe (USB-C)",
    category: "Auriculares",
    rating: "4.7",
    image: "🎧",
    offers: [
      {
        id: "airpodspro2-amazon",
        store: "Amazon",
        price: 239.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.amazon.es/gp/search?keywords=Apple+AirPods+Pro+2+Generacion+USB-C",
        affiliateUrl: "https://www.amazon.es/gp/search?keywords=Apple+AirPods+Pro+2+Generacion+USB-C&tag=comparaweb08-21"
      },
      {
        id: "airpodspro2-pccomponentes",
        store: "PcComponentes",
        price: 249.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/buscar/?query=apple+airpods+pro+2+generacion+usb-c",
        affiliateUrl: null
      },
      {
        id: "airpodspro2-mediamarkt",
        store: "MediaMarkt",
        price: 255.00,
        shipping: "Envío gratis",
        rating: "4.5",
        condition: "Nuevo",
        lastUpdated: "Ayer",
        url: "https://www.mediamarkt.es/es/search.html?query=airpods%20pro%202%20generacion%20usb-c",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Samsung Galaxy S24 (8GB RAM, 128GB) - Onyx Black",
    category: "Smartphones",
    rating: "4.6",
    image: "📲",
    offers: [
      {
        id: "s24-amazon",
        store: "Amazon",
        price: 749.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.amazon.es/gp/search?keywords=Samsung+Galaxy+S24+8GB+128GB+Onyx+Black",
        affiliateUrl: "https://www.amazon.es/gp/search?keywords=Samsung+Galaxy+S24+8GB+128GB+Onyx+Black&tag=comparaweb08-21"
      },
      {
        id: "s24-pccomponentes",
        store: "PcComponentes",
        price: 769.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/buscar/?query=samsung+galaxy+s24+128gb",
        affiliateUrl: null
      },
      {
        id: "s24-mediamarkt",
        store: "MediaMarkt",
        price: 779.00,
        shipping: "Envío gratis",
        rating: "4.5",
        condition: "Nuevo",
        lastUpdated: "Ayer",
        url: "https://www.mediamarkt.es/es/search.html?query=samsung%20galaxy%20s24%20128gb",
        affiliateUrl: null
      }
    ]
  }
];