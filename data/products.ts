export interface Offer {
  id?: string;
  store: 'Amazon' | 'PcComponentes' | 'MediaMarkt';
  price: number;
  originalPrice?: number;
  shippingPrice?: number | string;
  shipping?: number | string;
  inStock: boolean;
  affiliateUrl?: string;
  url?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  image: string;
  rating: number;
  numReviews: number;
  specs: Record<string, string | undefined>;
  offers: Offer[];
}

export const products: Product[] = [
  // ================= MÓVILES =================
  {
    id: 'iphone-13-128gb-reacondicionado',
    name: 'Apple iPhone 13 128GB (Reacondicionado)',
    category: 'Móviles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_SL1500_.jpg',
    rating: 4.5,
    numReviews: 5378,
    specs: { ram: '4 GB', storage: '128 GB', screen: '6.1" Super Retina XDR' },
    offers: [
      { store: 'Amazon', price: 279.20, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/06evwbNH' },
      { store: 'MediaMarkt', price: 284.90, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_mvil-iphone-13-apple-medianoche-128-gb-61-95771724.html' },
      { store: 'PcComponentes', price: 287.49, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-iphone-13-128gb-medianoche-libre?refurbished' }
    ]
  },
  {
    id: 'iphone-14-128gb-reacondicionado',
    name: 'Apple iPhone 14 128GB (Reacondicionado)',
    category: 'Móviles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
    rating: 4.5,
    numReviews: 6674,
    specs: { ram: '6 GB', storage: '128 GB', screen: '6.1" Super Retina XDR' },
    offers: [
      { store: 'PcComponentes', price: 320.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-iphone-14-128gb-medianoche-libre?refurbished' },
      { store: 'Amazon', price: 324.01, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0ayW88mc' },
      { store: 'MediaMarkt', price: 379.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_reacondicionado-excelente-apple-iphone-14-medianoche-128-gb-5g-61-oled-super-retina-xdr-chip-a15-bionic-ios-1612820.html' }
    ]
  },
  {
    id: 'iphone-15-128gb-nuevo',
    name: 'Apple iPhone 15 128GB (Nuevo / Reacondicionado)',
    category: 'Móviles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg',
    rating: 4.6,
    numReviews: 5540,
    specs: { ram: '6 GB', storage: '128 GB', screen: '6.1" Dynamic Island' },
    offers: [
      { store: 'PcComponentes', price: 418.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-iphone-15-128gb-negro-libre' },
      { store: 'Amazon', price: 669.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/07RNF4pU' },
      { store: 'MediaMarkt', price: 669.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-iphone-15-negro-128-gb-5g-61-oled-super-retina-xdr-chip-a16-bionic-ios-1561320.html' }
    ]
  },
  {
    id: 'iphone-17-256gb-nuevo',
    name: 'Apple iPhone 17 (Nuevo)',
    category: 'Móviles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 1305,
    specs: { ram: '8 GB', storage: '256 GB / 512 GB', screen: '6.3" ProMotion OLED' },
    offers: [
      { store: 'Amazon', price: 1079.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/03oq8tN2' },
      { store: 'MediaMarkt', price: 1079.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-iphone-17-negro-256-gb-5g-63-oled-super-retina-xdr-chip-a19-ios-1606125.html' },
      { store: 'PcComponentes', price: 1209.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-iphone-17-512gb-negro' }
    ]
  },
  {
    id: 'iphone-17-256gb-reacondicionado',
    name: 'Apple iPhone 17 256GB (Reacondicionado)',
    category: 'Móviles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 923,
    specs: { ram: '8 GB', storage: '256 GB', screen: '6.3" ProMotion OLED' },
    offers: [
      { store: 'MediaMarkt', price: 867.90, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-iphone-17-negro-256-gb-5g-63-oled-super-retina-xdr-chip-a19-ios-1606125.html?promotional_offer' },
      { store: 'PcComponentes', price: 875.79, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-iphone-17-256-gb-negro' },
      { store: 'Amazon', price: 889.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/06OYrp1C' }
    ]
  },
  {
    id: 'samsung-galaxy-s23-128gb',
    name: 'Samsung Galaxy S23 5G 128GB',
    category: 'Móviles',
    brand: 'Samsung',
    image: 'https://m.media-amazon.com/images/I/71qG45u6ljL._AC_SL1500_.jpg',
    rating: 4.6,
    numReviews: 14694,
    specs: { ram: '8 GB', storage: '128 GB', screen: '6.1" Dynamic AMOLED 2X' },
    offers: [
      { store: 'MediaMarkt', price: 398.50, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_movil-galaxy-s23-samsung-negro-128-gb-61-qualcomm-snapdragon-8-gen-2-103027163.html' },
      { store: 'Amazon', price: 429.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/029ErgEk' },
      { store: 'PcComponentes', price: 429.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s23-5g-8gb-128gb-61-negro' }
    ]
  },
  {
    id: 'samsung-galaxy-s24-128gb',
    name: 'Samsung Galaxy S24 5G 128GB',
    category: 'Móviles',
    brand: 'Samsung',
    image: 'https://m.media-amazon.com/images/I/71R375JAnkL._AC_SL1500_.jpg',
    rating: 4.6,
    numReviews: 23586,
    specs: { ram: '8 GB', storage: '128 GB', screen: '6.2" Dynamic AMOLED 2X' },
    offers: [
      { store: 'PcComponentes', price: 420.69, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s24-5g-8gb-128gb-62-violeta-cobalto' },
      { store: 'Amazon', price: 499.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0iW0Jvcg' },
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
    numReviews: 26680,
    specs: { ram: '12 GB', storage: '128 GB', screen: '6.2" FHD+ Dynamic AMOLED' },
    offers: [
      { store: 'PcComponentes', price: 563.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s25-5g-12gb-128gb-6-2-negro-azulado' },
      { store: 'MediaMarkt', price: 599.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_movil-samsung-galaxy-s25-navy-128-gb-12-gb-ram-62-fhd-con-ia-snapdragon-8-4000-mah-android-15-1592037.html' },
      { store: 'Amazon', price: 599.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/02h6dpuO' }
    ]
  },
  {
    id: 'samsung-galaxy-s26-256gb',
    name: 'Samsung Galaxy S26 5G 256GB',
    category: 'Móviles',
    brand: 'Samsung',
    image: 'https://m.media-amazon.com/images/I/61aL7x2bZpL._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 14391,
    specs: { ram: '12 GB', storage: '256 GB', screen: '6.3" FHD+ Dynamic AMOLED 2X' },
    offers: [
      { store: 'Amazon', price: 759.05, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/09WTgQsM' },
      { store: 'PcComponentes', price: 760.94, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/samsung-galaxy-s26-5g-12gb-256gb-6-3-negro-version-importada-eu' },
      { store: 'MediaMarkt', price: 799.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_movil-samsung-galaxy-s26-negro-256-gb-12-gb-ram-63-fhd-exynos-2600-4300-mah-android-16-1620261.html' }
    ]
  },

  // ================= GAMING / CONSOLAS =================
  {
    id: 'ps5-slim-standard',
    name: 'Sony PlayStation 5 Slim Standard Edition 1TB',
    category: 'Gaming',
    brand: 'Sony',
    image: 'https://m.media-amazon.com/images/I/510L1w6Cq4L._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 690,
    specs: { storage: '1 TB SSD' },
    offers: [
      { store: 'Amazon', price: 789.00, shippingPrice: 25.00, inStock: true, affiliateUrl: 'https://amzn.eu/d/08TMXtfN' },
      { store: 'MediaMarkt', price: 894.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-playstation-5-slim-standard-chasis-d-sony-playstation-5-slim-standard-chasis-d-1-tb-blanco-134579763.html' }
    ]
  },
  {
    id: 'ps5-slim-digital',
    name: 'Sony PlayStation 5 Slim Edición Digital',
    category: 'Gaming',
    brand: 'Sony',
    image: 'https://m.media-amazon.com/images/I/510L1w6Cq4L._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 4733,
    specs: { storage: '825 GB / 1 TB SSD' },
    offers: [
      { store: 'MediaMarkt', price: 855.53, shippingPrice: 6.45, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-ps5-sony-playstation-playstation-5-digital-e-chassis-slim-825-gb-white-166110788.html' },
      { store: 'Amazon', price: 899.90, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0aF5qc1K' },
      { store: 'PcComponentes', price: 919.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/sony-playstation-5-digital-slim' }
    ]
  },
  {
    id: 'ps4-slim-1tb-reacondicionado',
    name: 'Sony PlayStation 4 Slim 1TB (Reacondicionado)',
    category: 'Gaming',
    brand: 'Sony',
    image: 'https://m.media-amazon.com/images/I/71PGv3p4zL._AC_SL1500_.jpg',
    rating: 4.0,
    numReviews: 246,
    specs: { storage: '1 TB' },
    offers: [
      { store: 'Amazon', price: 179.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/00bvRnRi' },
      { store: 'MediaMarkt', price: 211.57, shippingPrice: 11.95, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-ps4-sony-9856764-ps4-1tb-slim-negra-1-tb-negro-107803089.html' }
    ]
  },
  {
    id: 'nintendo-switch-2022',
    name: 'Nintendo Switch (Modelo 2022) Joy-Con Azul/Rojo Neón',
    category: 'Gaming',
    brand: 'Nintendo',
    image: 'https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 7865,
    specs: { storage: '32 GB', screen: '6.2" LCD' },
    offers: [
      { store: 'Amazon', price: 286.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0f6plycO' },
      { store: 'MediaMarkt', price: 287.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-nintendo-switch-modelo-2022-6-2-joy-con-azul-y-rojo-ne%C3%B3n-1542432.html' }
    ]
  },
  {
    id: 'nintendo-switch-oled',
    name: 'Nintendo Switch OLED',
    category: 'Gaming',
    brand: 'Nintendo',
    image: 'https://m.media-amazon.com/images/I/81S6-J-38iL._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 20785,
    specs: { storage: '64 GB', screen: '7.0" OLED' },
    offers: [
      { store: 'Amazon', price: 316.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0iH9t0KE' },
      { store: 'MediaMarkt', price: 316.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_nintendo-nintendo-switch-oled-blanca-1512119.html' },
      { store: 'PcComponentes', price: 357.81, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/nintendo-switch-oled-azul-neon-rojo-neon-plus-turtle-beach-realmz-wireless-sonic-green-hill-zone' }
    ]
  },
  {
    id: 'xbox-series-x-digital-1tb',
    name: 'Microsoft Xbox Series X Digital 1TB Blanco',
    category: 'Gaming',
    brand: 'Microsoft',
    image: 'https://m.media-amazon.com/images/I/61-2A1B4G6L._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 2087,
    specs: { storage: '1 TB SSD' },
    offers: [
      { store: 'Amazon', price: 817.17, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/07OMaiMb' },
      { store: 'MediaMarkt', price: 940.09, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-xbox-series-microsoft-xbox-series-x-1-tb-blanco-145968037.html' }
    ]
  },
  {
    id: 'xbox-series-s-digital',
    name: 'Microsoft Xbox Series S Digital',
    category: 'Gaming',
    brand: 'Microsoft',
    image: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL1500_.jpg',
    rating: 4.7,
    numReviews: 2205,
    specs: { storage: '512 GB / 1 TB SSD' },
    offers: [
      { store: 'Amazon', price: 566.70, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0dZx3u6N' },
      { store: 'MediaMarkt', price: 576.26, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consolas-microsoft-xbox-series-s-512-gb-white-158242719.html' },
      { store: 'PcComponentes', price: 829.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/xbox-series-s-1tb-blanco-robot' },
      { store: 'MediaMarkt', price: 981.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_consola-ps5-microsoft-xbox-series-s-1-tb-blanco-145956802.html' }
    ]
  },

  // ================= AUDIO =================
  {
    id: 'apple-airpods-3',
    name: 'Apple AirPods 3ª Generación',
    category: 'Audio',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 6261,
    specs: { chip: 'Apple H1' },
    offers: [
      { store: 'PcComponentes', price: 152.99, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-airpods-3a-generacion-con-estuche-de-carga-magsafe-blancos' },
      { store: 'MediaMarkt', price: 219.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-airpods-pro-3-2025-3a-gen-inalambricos-cancelacion-de-ruido-medicion-frecuencia-cardiaca-live-translation-chip-h2-usb-c-blanco-1606182.html' },
      { store: 'Amazon', price: 225.19, shippingPrice: 13.77, inStock: true, affiliateUrl: 'https://amzn.eu/d/04pZKPWk' }
    ]
  },
  {
    id: 'apple-airpods-4-anc',
    name: 'Apple AirPods 4 con Cancelación Activa de Ruido',
    category: 'Audio',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/61m1aP3-YpL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 13440,
    specs: { chip: 'Apple H2' },
    offers: [
      { store: 'MediaMarkt', price: 129.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-airpods-4-con-cancelacion-activa-de-ruido-2024-4a-gen-inalambricos-bluetoothr-estuche-de-carga-inalambrico-chip-h2-siri-usb-c-blanco-1582271.html' },
      { store: 'Amazon', price: 161.45, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/04unC1No' },
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
      { store: 'PcComponentes', price: 149.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/auriculares-apple-airpods-5-inalambricos-bluetooth-con-cancelacion-activa-de-ruido-usb-c-blancos' },
      { store: 'Amazon', price: 169.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0fgs6NMZ' },
      { store: 'MediaMarkt', price: 169.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-airpods-5-2026-cancelacion-activa-de-ruido-traduccion-tiempo-real-audio-adaptativo-chip-h2-usb-c-blanco-1674431.html' }
    ]
  },

  // ================= PORTÁTILES =================
  {
    id: 'macbook-air-m1-reacondicionado',
    name: 'Apple MacBook Air 13" Chip M1 (Reacondicionado)',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 938,
    specs: { ram: '8 GB', storage: '256 GB / 1 TB SSD', screen: '13.3" Retina' },
    offers: [
      { store: 'PcComponentes', price: 709.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-dorado?refurbished' },
      { store: 'MediaMarkt', price: 719.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_portatil-apple-macbook-air-133-retina-apple-mm1-8-gb-ram-256-gb-ssd-256-gb-ssd-m1-macos-137220705.html' },
      { store: 'Amazon', price: 890.82, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/04Jl0N3y' }
    ]
  },
  {
    id: 'macbook-air-m2-reacondicionado',
    name: 'Apple MacBook Air 13.6" Chip M2 (Reacondicionado)',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg',
    rating: 4.8,
    numReviews: 509,
    specs: { ram: '8 GB', storage: '256 GB SSD', screen: '13.6" Liquid Retina' },
    offers: [
      { store: 'Amazon', price: 1028.02, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0djpCVSJ' },
      { store: 'MediaMarkt', price: 1159.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_portatil-apple-macbook-air-136-apple-mm2-8-gb-ram-256-gb-ssd-m2-macos-108016592.html' },
      { store: 'PcComponentes', price: 1219.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/apple-macbook-air-apple-m2-8gb-256gb-ssd-gpu-octa-core-136-plata?refurbished' }
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
      { store: 'MediaMarkt', price: 1269.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_portatil-apple-macbook-pro-14-apple-m3-8-nucleos-cpu-10-nucleos-gpu-8-gb-ram-512-gb-ssd-m3-macos-idioma-del-teclado-es-plata-181187400.html' },
      { store: 'Amazon', price: 1302.42, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0avzCczq' }
    ]
  },
  {
    id: 'macbook-m4-reacondicionado',
    name: 'Apple MacBook Air 13" Chip M4 256GB (Reacondicionado)',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71TPdaC65dL._AC_SL1500_.jpg',
    rating: 5.0,
    numReviews: 2,
    specs: { ram: '16 GB', storage: '256 GB SSD', screen: '13.6" Liquid Retina' },
    offers: [
      { store: 'Amazon', price: 1400.42, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/01cQT7Bd' }
    ]
  },
  {
    id: 'macbook-air-m5-nuevo',
    name: 'Apple MacBook Air 13.6" Chip M5 512GB',
    category: 'Portátiles',
    brand: 'Apple',
    image: 'https://m.media-amazon.com/images/I/71TPdaC65dL._AC_SL1500_.jpg',
    rating: 4.9,
    numReviews: 225,
    specs: { ram: '16 GB', storage: '512 GB SSD', screen: '13.6" Liquid Retina' },
    offers: [
      { store: 'MediaMarkt', price: 1319.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.mediamarkt.es/es/product/_apple-macbook-air-2026-136-retina-chip-m5-apple-cpu-de-10-nucleos-gpu-de-8-nucleos-16gb-ram-512gb-ssd-medianoche-1622308.html' },
      { store: 'PcComponentes', price: 1379.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://www.pccomponentes.com/portatil-apple-macbook-air-13-apple-m5-16gb-512gb-ssd-gpu-8-nucleos-macos-medianoche' },
      { store: 'Amazon', price: 1429.00, shippingPrice: 0, inStock: true, affiliateUrl: 'https://amzn.eu/d/0ceRW3QM' }
    ]
  }
];