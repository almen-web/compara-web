export interface Offer {
  store: 'Amazon' | 'PcComponentes' | 'MediaMarkt';
  price: number;
  originalPrice?: number;
  shippingPrice: number | string;
  inStock: boolean;
  affiliateUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Móviles' | 'Portátiles' | 'Audio' | 'Gaming';
  brand: string;
  image: string;
  rating: number;
  numReviews: number;
  specs: {
    ram?: string;
    storage?: string;
    [key: string]: string | undefined;
  };
  offers: Offer[];
}

export const products: Product[] = [
  // ================= GAMING / CONSOLAS =================
  {
    id: 'nintendo-switch-2022',
    name: 'Nintendo Switch (Modelo 2022) Joy-Con Azul/Rojo Neón',
    category: 'Gaming',
    brand: 'Nintendo',
    image: 'https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 14250,
    specs: { storage: '32 GB', screen: '6.2" LCD' },
    offers: [
      { store: 'Amazon', price: 287, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0f6plycO?tag=comparaweb08-21' },
      { store: 'MediaMarkt', price: 287, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-nintendo-switch-modelo-2022-6-2-joy-con-azul-y-rojo-ne%C3%B3n-1542432.html' }
    ]
  },
  {
    id: 'nintendo-switch-oled',
    name: 'Nintendo Switch OLED',
    category: 'Gaming',
    brand: 'Nintendo',
    image: 'https://m.media-amazon.com/images/I/81S6-J-38iL._AC_SL1500_.jpg',
    rating: 4.9,
    numReviews: 18900,
    specs: { storage: '64 GB', screen: '7.0" OLED' },
    offers: [
      { store: 'Amazon', price: 316, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0iH9t0KE?tag=comparaweb08-21' },
      { store: 'MediaMarkt', price: 316, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_nintendo-nintendo-switch-oled-blanca-1512119.html' },
      { store: 'PcComponentes', price: 357.81, shippingPrice: 3.95, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/nintendo-switch-oled-azul-neon-rojo-neon-plus-turtle-beach-realmz-wireless-sonic-green-hill-zone' }
    ]
  },
  {
    id: 'ps4-slim-1tb-reacondicionado',
    name: 'Sony PlayStation 4 Slim 1TB (Reacondicionado)',
    category: 'Gaming',
    brand: 'Sony',
    image: 'https://m.media-amazon.com/images/I/71PGv3p4zL._AC_SL1500_.jpg',
    rating: 4.3,
    numReviews: 3120,
    specs: { storage: '1 TB' },
    offers: [
      { store: 'Amazon', price: 179.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/00bvRnRi?tag=comparaweb08-21' },
      { store: 'MediaMarkt', price: 211.57, shippingPrice: 2.99, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-ps4-sony-9856764-ps4-1tb-slim-negra-1-tb-negro-107803089.html' }
    ]
  },
  {
    id: 'xbox-series-x-digital-1tb',
    name: 'Microsoft Xbox Series X Digital 1TB Blanco',
    category: 'Gaming',
    brand: 'Microsoft',
    image: 'https://m.media-amazon.com/images/I/61-2A1B4G6L._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 5400,
    specs: { storage: '1 TB SSD' },
    offers: [
      { store: 'Amazon', price: 817.17, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/07OMaiMb?tag=comparaweb08-21' },
      { store: 'MediaMarkt', price: 940.09, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-xbox-series-microsoft-xbox-series-x-1-tb-blanco-145968037.html' }
    ]
  },
  {
    id: 'xbox-series-s-digital',
    name: 'Microsoft Xbox Series S Digital',
    category: 'Gaming',
    brand: 'Microsoft',
    image: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 12800,
    specs: { storage: '512 GB / 1 TB' },
    offers: [
      { store: 'Amazon', price: 566.70, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0dZx3u6N?tag=comparaweb08-21' },
      { store: 'MediaMarkt', price: 576.26, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consolas-microsoft-xbox-series-s-512-gb-white-158242719.html' },
      { store: 'PcComponentes', price: 829.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/xbox-series-s-1tb-blanco-robot' }
    ]
  },

  // ================= AUDIO =================
  {
    id: 'apple-airpods-3',
    name: 'Apple AirPods 3ª Generación con estuche MagSafe',
    category: 'Audio',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg',
    rating: 4.5,
    numReviews: 8900,
    specs: { chip: 'Apple H1' },
    offers: [
      { store: 'PcComponentes', price: 152.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-airpods-3a-generacion-con-estuche-de-carga-magsafe-blancos' },
      { store: 'MediaMarkt', price: 219, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-airpods-pro-3-2025-3a-gen-inalambricos-cancelacion-de-ruido-medicion-frecuencia-cardiaca-live-translation-chip-h2-usb-c-blanco-1606182.html' },
      { store: 'Amazon', price: 225, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/04pZKPWk?tag=comparaweb08-21' }
    ]
  },
  {
    id: 'apple-airpods-4-anc',
    name: 'Apple AirPods 4 con Cancelación Activa de Ruido',
    category: 'Audio',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61m1aP3-YpL._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 3200,
    specs: { chip: 'Apple H2' },
    offers: [
      { store: 'MediaMarkt', price: 129, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-airpods-4-con-cancelacion-activa-de-ruido-2024-4a-gen-inalambricos-bluetoothr-estuche-de-carga-inalambrico-chip-h2-siri-usb-c-blanco-1582271.html' },
      { store: 'Amazon', price: 161.45, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/04unC1No?tag=comparaweb08-21' },
      { store: 'PcComponentes', price: 183.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-airpods-4-con-cancelacion-activa-de-ruido-auriculares-inalambricos-con-estuche-de-carga' }
    ]
  },
  {
    id: 'apple-airpods-5',
    name: 'Apple AirPods 5 con Cancelación Activa de Ruido',
    category: 'Audio',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/51Q8D18CsbL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 950,
    specs: { chip: 'Apple H2' },
    offers: [
      { store: 'PcComponentes', price: 149, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/auriculares-apple-airpods-5-inalambricos-bluetooth-con-cancelacion-activa-de-ruido-usb-c-blancos' },
      { store: 'MediaMarkt', price: 149, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-airpods-5-2026-cancelacion-activa-de-ruido-traduccion-tiempo-real-audio-adaptativo-chip-h2-usb-c-blanco-1674431.html' },
      { store: 'Amazon', price: 169, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0fgs6NMZ?tag=comparaweb08-21' }
    ]
  },

  // ================= MÓVILES (CON RAM) =================
  {
    id: 'samsung-galaxy-s23-128gb',
    name: 'Samsung Galaxy S23 5G 128GB',
    category: 'Móviles',
    brand: 'Samsung',
    image: 'https://m.media-amazon.com/images/I/71qG45u6ljL._AC_SL1500_.jpg',
    rating: 4.6,
    numReviews: 4500,
    specs: { ram: '8 GB', storage: '128 GB', screen: '6.1" Dynamic AMOLED 2X' },
    offers: [
      { store: 'MediaMarkt', price: 398.50, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_movil-galaxy-s23-samsung-negro-128-gb-61-qualcomm-snapdragon-8-gen-2-103027163.html' },
      { store: 'Amazon', price: 429, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/029ErgEk?tag=comparaweb08-21' },
      { store: 'PcComponentes', price: 429.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s23-5g-8gb-128gb-61-negro' }
    ]
  },
  {
    id: 'samsung-galaxy-s24-128gb',
    name: 'Samsung Galaxy S24 5G 128GB',
    category: 'Móviles',
    brand: 'Samsung',
    image: 'https://m.media-amazon.com/images/I/71R375JAnkL._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 3100,
    specs: { ram: '8 GB', storage: '128 GB', screen: '6.2" Dynamic AMOLED 2X' },
    offers: [
      { store: 'PcComponentes', price: 420.69, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s24-5g-8gb-128gb-62-violeta-cobalto' },
      { store: 'Amazon', price: 499, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0iW0Jvcg?tag=comparaweb08-21' },
      { store: 'MediaMarkt', price: 537.40, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_movil-galaxy-s24-5g-samsung-negro-128-gb-8-gb-62-exynos-2400-4-nm-136356178.html' }
    ]
  },
  {
    id: 'samsung-galaxy-s25-128gb',
    name: 'Samsung Galaxy S25 5G 128GB',
    category: 'Móviles',
    brand: 'Samsung',
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 1200,
    specs: { ram: '12 GB', storage: '128 GB', screen: '6.2" FHD+ Dynamic AMOLED' },
    offers: [
      { store: 'PcComponentes', price: 563, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s25-5g-12gb-128gb-6-2-negro-azulado' },
      { store: 'MediaMarkt', price: 599, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_movil-samsung-galaxy-s25-navy-128-gb-12-gb-ram-62-fhd-con-ia-snapdragon-8-4000-mah-android-15-1592037.html' },
      { store: 'Amazon', price: 599.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/02h6dpuO?tag=comparaweb08-21' }
    ]
  },
  {
    id: 'samsung-galaxy-s26-256gb',
    name: 'Samsung Galaxy S26 5G 256GB',
    category: 'Móviles',
    brand: 'Samsung',
    image: 'https://m.media-amazon.com/images/I/61aL7x2bZpL._AC_SL1500_.jpg',
    rating: 4.9,
    numReviews: 820,
    specs: { ram: '12 GB', storage: '256 GB', screen: '6.3" FHD+ Dynamic AMOLED 2X' },
    offers: [
      { store: 'Amazon', price: 759.05, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/09WTgQsM?tag=comparaweb08-21' },
      { store: 'PcComponentes', price: 760.94, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s26-5g-12gb-256gb-6-3-negro-version-importada-eu' },
      { store: 'MediaMarkt', price: 799, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_movil-samsung-galaxy-s26-negro-256-gb-12-gb-ram-63-fhd-exynos-2600-4300-mah-android-16-1620261.html' }
    ]
  },

  // ================= PORTÁTILES (CON RAM) =================
  {
    id: 'macbook-air-m1-reacondicionado',
    name: 'Apple MacBook Air 13" Chip M1 (Reacondicionado)',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 9800,
    specs: { ram: '8 GB', storage: '256 GB / 1 TB SSD', screen: '13.3" Retina' },
    offers: [
      { store: 'PcComponentes', price: 709, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-dorado?refurbished' },
      { store: 'MediaMarkt', price: 719, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_portatil-apple-macbook-air-133-retina-apple-mm1-8-gb-ram-256-gb-ssd-256-gb-ssd-m1-macos-137220705.html' },
      { store: 'Amazon', price: 890.82, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/04Jl0N3y?tag=comparaweb08-21' }
    ]
  },
  {
    id: 'macbook-air-m2-reacondicionado',
    name: 'Apple MacBook Air 13.6" Chip M2 (Reacondicionado)',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 5400,
    specs: { ram: '8 GB', storage: '256 GB SSD', screen: '13.6" Liquid Retina' },
    offers: [
      { store: 'Amazon', price: 1028.02, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0djpCVSJ?tag=comparaweb08-21' },
      { store: 'MediaMarkt', price: 1159, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_portatil-apple-macbook-air-136-apple-mm2-8-gb-ram-256-gb-ssd-m2-macos-108016592.html' },
      { store: 'PcComponentes', price: 1219, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-macbook-air-apple-m2-8gb-256gb-ssd-gpu-octa-core-136-plata?refurbished' }
    ]
  },
  {
    id: 'macbook-pro-m3-reacondicionado',
    name: 'Apple MacBook Pro 14" Chip M3 512GB (Reacondicionado)',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61RJn0of12L._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 2100,
    specs: { ram: '8 GB', storage: '512 GB SSD', screen: '14.2" Liquid Retina XDR' },
    offers: [
      { store: 'MediaMarkt', price: 1269, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_portatil-apple-macbook-pro-14-apple-m3-8-nucleos-cpu-10-nucleos-gpu-8-gb-ram-512-gb-ssd-m3-macos-idioma-del-teclado-es-plata-181187400.html' },
      { store: 'Amazon', price: 1302.42, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0avzCczq?tag=comparaweb08-21' }
    ]
  },
  {
    id: 'macbook-m4-reacondicionado',
    name: 'Apple MacBook Pro 14" Chip M4 256GB (Reacondicionado)',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
    rating: 4.9,
    numReviews: 890,
    specs: { ram: '16 GB', storage: '256 GB SSD', screen: '14.2" Liquid Retina XDR' },
    offers: [
      { store: 'Amazon', price: 1400.42, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/01cQT7Bd?tag=comparaweb08-21' }
    ]
  },
  {
    id: 'macbook-air-m5-nuevo',
    name: 'Apple MacBook Air 13.6" Chip M5 512GB',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71TPdaC65dL._AC_SL1500_.jpg',
    rating: 5.0,
    numReviews: 340,
    specs: { ram: '16 GB', storage: '512 GB SSD', screen: '13.6" Liquid Retina' },
    offers: [
      { store: 'MediaMarkt', price: 1319, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-macbook-air-2026-136-retina-chip-m5-apple-cpu-de-10-nucleos-gpu-de-8-nucleos-16gb-ram-512gb-ssd-medianoche-1622308.html' },
      { store: 'PcComponentes', price: 1379, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/portatil-apple-macbook-air-13-apple-m5-16gb-512gb-ssd-gpu-8-nucleos-macos-medianoche' },
      { store: 'Amazon', price: 1429, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0ceRW3QM?tag=comparaweb08-21' }
    ]
  }
];