export type OfferSourceType =
  | "demo"
  | "affiliate"
  | "api"
  | "feed";

export type Offer = {
  id: string;
  store: string;
  price: number;
  shipping: string;
  rating: string;
  condition: string;
  url: string;
  affiliateUrl?: string;
  lastUpdated: string;
  sourceType: OfferSourceType;
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
    name: "iPhone 13",
    category: "Móviles",
    rating: "4,6",
    image: "📱",
    offers: [
      {
        id: "iphone-13-amazon",
        store: "Amazon",
        price: 299,
        shipping: "Envío gratis",
        rating: "4,6",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=iPhone+13+Amazon",
        affiliateUrl:
          "https://www.google.com/search?q=iPhone+13+Amazon",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "iphone-13-media-markt",
        store: "MediaMarkt",
        price: 315,
        shipping: "Envío gratis",
        rating: "4,4",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=iPhone+13+MediaMarkt",
        affiliateUrl:
          "https://www.google.com/search?q=iPhone+13+MediaMarkt",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "iphone-13-el-corte-ingles",
        store: "El Corte Inglés",
        price: 329,
        shipping: "Envío 4,99 €",
        rating: "4,7",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=iPhone+13+El+Corte+Ingles",
        affiliateUrl:
          "https://www.google.com/search?q=iPhone+13+El+Corte+Ingles",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
    ],
  },

  {
    name: "Samsung Galaxy S24",
    category: "Móviles",
    rating: "4,5",
    image: "📱",
    offers: [
      {
        id: "samsung-s24-amazon",
        store: "Amazon",
        price: 549,
        shipping: "Envío gratis",
        rating: "4,5",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=Samsung+Galaxy+S24+Amazon",
        affiliateUrl:
          "https://www.google.com/search?q=Samsung+Galaxy+S24+Amazon",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "samsung-s24-media-markt",
        store: "MediaMarkt",
        price: 569,
        shipping: "Envío gratis",
        rating: "4,4",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=Samsung+Galaxy+S24+MediaMarkt",
        affiliateUrl:
          "https://www.google.com/search?q=Samsung+Galaxy+S24+MediaMarkt",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "samsung-s24-el-corte-ingles",
        store: "El Corte Inglés",
        price: 599,
        shipping: "Envío 4,99 €",
        rating: "4,6",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=Samsung+Galaxy+S24+El+Corte+Ingles",
        affiliateUrl:
          "https://www.google.com/search?q=Samsung+Galaxy+S24+El+Corte+Ingles",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
    ],
  },

  {
    name: "MacBook Air",
    category: "Portátiles",
    rating: "4,8",
    image: "💻",
    offers: [
      {
        id: "macbook-air-amazon",
        store: "Amazon",
        price: 999,
        shipping: "Envío gratis",
        rating: "4,8",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=MacBook+Air+Amazon",
        affiliateUrl:
          "https://www.google.com/search?q=MacBook+Air+Amazon",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "macbook-air-media-markt",
        store: "MediaMarkt",
        price: 1029,
        shipping: "Envío gratis",
        rating: "4,6",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=MacBook+Air+MediaMarkt",
        affiliateUrl:
          "https://www.google.com/search?q=MacBook+Air+MediaMarkt",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "macbook-air-el-corte-ingles",
        store: "El Corte Inglés",
        price: 1049,
        shipping: "Envío 4,99 €",
        rating: "4,7",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=MacBook+Air+El+Corte+Ingles",
        affiliateUrl:
          "https://www.google.com/search?q=MacBook+Air+El+Corte+Ingles",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
    ],
  },

  {
    name: "PlayStation 5",
    category: "Gaming",
    rating: "4,7",
    image: "🎮",
    offers: [
      {
        id: "ps5-amazon",
        store: "Amazon",
        price: 499,
        shipping: "Envío gratis",
        rating: "4,7",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=PlayStation+5+Amazon",
        affiliateUrl:
          "https://www.google.com/search?q=PlayStation+5+Amazon",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "ps5-media-markt",
        store: "MediaMarkt",
        price: 509,
        shipping: "Envío gratis",
        rating: "4,6",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=PlayStation+5+MediaMarkt",
        affiliateUrl:
          "https://www.google.com/search?q=PlayStation+5+MediaMarkt",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "ps5-el-corte-ingles",
        store: "El Corte Inglés",
        price: 529,
        shipping: "Envío 4,99 €",
        rating: "4,5",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=PlayStation+5+El+Corte+Ingles",
        affiliateUrl:
          "https://www.google.com/search?q=PlayStation+5+El+Corte+Ingles",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
    ],
  },

  {
    name: "AirPods",
    category: "Audio",
    rating: "4,5",
    image: "🎧",
    offers: [
      {
        id: "airpods-amazon",
        store: "Amazon",
        price: 149,
        shipping: "Envío gratis",
        rating: "4,5",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=AirPods+Amazon",
        affiliateUrl:
          "https://www.google.com/search?q=AirPods+Amazon",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "airpods-media-markt",
        store: "MediaMarkt",
        price: 159,
        shipping: "Envío gratis",
        rating: "4,4",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=AirPods+MediaMarkt",
        affiliateUrl:
          "https://www.google.com/search?q=AirPods+MediaMarkt",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "airpods-el-corte-ingles",
        store: "El Corte Inglés",
        price: 169,
        shipping: "Envío 4,99 €",
        rating: "4,6",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=AirPods+El+Corte+Ingles",
        affiliateUrl:
          "https://www.google.com/search?q=AirPods+El+Corte+Ingles",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
    ],
  },

  {
    name: "Xiaomi Redmi Note 13",
    category: "Móviles",
    rating: "4,4",
    image: "📱",
    offers: [
      {
        id: "redmi-note-13-amazon",
        store: "Amazon",
        price: 179,
        shipping: "Envío gratis",
        rating: "4,4",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=Xiaomi+Redmi+Note+13+Amazon",
        affiliateUrl:
          "https://www.google.com/search?q=Xiaomi+Redmi+Note+13+Amazon",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "redmi-note-13-media-markt",
        store: "MediaMarkt",
        price: 189,
        shipping: "Envío gratis",
        rating: "4,3",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=Xiaomi+Redmi+Note+13+MediaMarkt",
        affiliateUrl:
          "https://www.google.com/search?q=Xiaomi+Redmi+Note+13+MediaMarkt",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
      {
        id: "redmi-note-13-el-corte-ingles",
        store: "El Corte Inglés",
        price: 199,
        shipping: "Envío 4,99 €",
        rating: "4,5",
        condition: "Nuevo",
        url: "https://www.google.com/search?q=Xiaomi+Redmi+Note+13+El+Corte+Ingles",
        affiliateUrl:
          "https://www.google.com/search?q=Xiaomi+Redmi+Note+13+El+Corte+Ingles",
        lastUpdated: "15/09/2026",
        sourceType: "demo",
      },
    ],
  },
];