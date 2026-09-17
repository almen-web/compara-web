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
        url: "https://www.amazon.es/Apple-iPhone-13-128-GB-Medianoche/dp/B09G9FPGTN",
        affiliateUrl: "https://www.amazon.es/Apple-iPhone-13-128-GB-Medianoche/dp/B09G9FPGTN?tag=comparaweb08-21"
      },
      {
        id: "iphone13-pccomponentes",
        store: "PcComponentes",
        price: 559.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-13-128gb-medianoche-libre",
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
        url: "https://www.mediamarkt.es/es/product/_apple-iphone-13-128-gb-medianoche-1518175.html",
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
        url: "https://www.amazon.es/Apple-2022-MacBook-port%C3%A1til-pantalla/dp/B0B3C9B82J",
        affiliateUrl: "https://www.amazon.es/Apple-2022-MacBook-port%C3%A1til-pantalla/dp/B0B3C9B82J?tag=comparaweb08-21"
      },
      {
        id: "macbookm2-pccomponentes",
        store: "PcComponentes",
        price: 1069.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-macbook-air-apple-m2-8gb-256gb-ssd-136-gris-espacial",
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
        url: "https://www.mediamarkt.es/es/product/_portatil-apple-macbook-air-m2-256-gb-1532890.html",
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
        url: "https://www.amazon.es/PlayStation-Consola-PS5-Slim/dp/B0CLT539VP",
        affiliateUrl: "https://www.amazon.es/PlayStation-Consola-PS5-Slim/dp/B0CLT539VP?tag=comparaweb08-21"
      },
      {
        id: "ps5slim-pccomponentes",
        store: "PcComponentes",
        price: 529.90,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/sony-playstation-5-slim",
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
        url: "https://www.mediamarkt.es/es/product/_consola-sony-ps5-slim-1565431.html",
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
        url: "https://www.amazon.es/Nintendo-Switch-Modelo-OLED-Blanco/dp/B098RJXBTY",
        affiliateUrl: "https://www.amazon.es/Nintendo-Switch-Modelo-OLED-Blanco/dp/B098RJXBTY?tag=comparaweb08-21"
      },
      {
        id: "switcholed-pccomponentes",
        store: "PcComponentes",
        price: 324.95,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/nintendo-switch-oled-blanca",
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
        url: "https://www.mediamarkt.es/es/product/_consola-nintendo-switch-oled-1514781.html",
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
        url: "https://www.amazon.es/Apple-AirPods-Generaci%C3%B3n-estuche-MagSafe/dp/B0CHWRXH8B",
        affiliateUrl: "https://www.amazon.es/Apple-AirPods-Generaci%C3%B3n-estuche-MagSafe/dp/B0CHWRXH8B?tag=comparaweb08-21"
      },
      {
        id: "airpodspro2-pccomponentes",
        store: "PcComponentes",
        price: 249.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-airpods-pro-2-generacion-estuche-de-carga-magsafe-usb-c",
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
        url: "https://www.mediamarkt.es/es/product/_auriculares-in-ear-apple-airpods-pro-2-gen-1560938.html",
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
        url: "https://www.amazon.es/Samsung-Smartphone-almacenamiento-duraci%C3%B3n-garant%C3%ADa/dp/B0CQ2W51R7",
        affiliateUrl: "https://www.amazon.es/Samsung-Smartphone-almacenamiento-duraci%C3%B3n-garant%C3%ADa/dp/B0CQ2W51R7?tag=comparaweb08-21"
      },
      {
        id: "s24-pccomponentes",
        store: "PcComponentes",
        price: 769.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/samsung-galaxy-s24-8-128gb-negro-onyx-libre",
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
        url: "https://www.mediamarkt.es/es/product/_smartphone-samsung-galaxy-s24-1568200.html",
        affiliateUrl: null
      }
    ]
  }
];