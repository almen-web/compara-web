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
    name: "Apple iPhone 13 128GB (Reacondicionado)",
    category: "Móviles",
    rating: "4.5",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-unselect-gallery-1-202207_GEO_CN?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone13-reacondicionado-mediamarkt",
        store: "MediaMarkt",
        price: 284.90,
        shipping: "Envío gratis",
        rating: "4.4",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_mvil-iphone-13-apple-medianoche-128-gb-61-95771724.html",
        affiliateUrl: null
      },
      {
        id: "iphone13-reacondicionado-pccomponentes",
        store: "PcComponentes",
        price: 287.49,
        shipping: "Envío gratis",
        rating: "4.5",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-13-128gb-medianoche-libre?refurbished",
        affiliateUrl: null
      },
      {
        id: "iphone13-reacondicionado-amazon",
        store: "Amazon",
        price: 297.00,
        shipping: "Envío gratis",
        rating: "3.8",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/06evwbNH",
        affiliateUrl: "https://amzn.eu/d/06evwbNH?tag=comparaweb08-21"
      }
    ]
  },
  {
    name: "Apple iPhone 14 128GB (Reacondicionado)",
    category: "Móviles",
    rating: "4.5",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-unselect-gallery-1-202209?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone14-reacondicionado-pccomponentes",
        store: "PcComponentes",
        price: 320.00,
        shipping: "Envío gratis",
        rating: "4.5",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-14-128gb-medianoche-libre?refurbished",
        affiliateUrl: null
      },
      {
        id: "iphone14-reacondicionado-amazon",
        store: "Amazon",
        price: 324.01,
        shipping: "Envío gratis",
        rating: "3.9",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/0ayW88mc",
        affiliateUrl: "https://amzn.eu/d/0ayW88mc?tag=comparaweb08-21"
      },
      {
        id: "iphone14-reacondicionado-mediamarkt",
        store: "MediaMarkt",
        price: 379.00,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_reacondicionado-excelente-apple-iphone-14-medianoche-128-gb-5g-61-oled-super-retina-xdr-chip-a15-bionic-ios-1612820.html",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Apple iPhone 15 128GB (Nuevo)",
    category: "Móviles",
    rating: "4.8",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-unselect-gallery-1-202309?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone15-nuevo-amazon",
        store: "Amazon",
        price: 669.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/07RNF4pU",
        affiliateUrl: "https://amzn.eu/d/07RNF4pU?tag=comparaweb08-21"
      },
      {
        id: "iphone15-nuevo-mediamarkt",
        store: "MediaMarkt",
        price: 669.00,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_apple-iphone-15-negro-128-gb-5g-61-oled-super-retina-xdr-chip-a16-bionic-ios-1561320.html",
        affiliateUrl: null
      },
      {
        id: "iphone15-nuevo-pccomponentes",
        store: "PcComponentes",
        price: 699.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-15-128gb-negro-libre",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Apple iPhone 15 128GB (Reacondicionado)",
    category: "Móviles",
    rating: "4.7",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-unselect-gallery-1-202309?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone15-reacondicionado-mediamarkt",
        store: "MediaMarkt",
        price: 406.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_movil-apple-iphone-15-negro-128-gb-6-gb-ram-61-a16-bionic-3349-mah-126337886.html?promotional_offer",
        affiliateUrl: null
      },
      {
        id: "iphone15-reacondicionado-pccomponentes",
        store: "PcComponentes",
        price: 418.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-15-128gb-negro-libre?refurbished",
        affiliateUrl: null
      },
      {
        id: "iphone15-reacondicionado-amazon",
        store: "Amazon",
        price: 489.00,
        shipping: "Envío: 19,99 €",
        rating: "3.6",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/06zo2nit",
        affiliateUrl: "https://amzn.eu/d/06zo2nit?tag=comparaweb08-21"
      }
    ]
  },
  {
    name: "Apple iPhone 16 128GB (Nuevo)",
    category: "Móviles",
    rating: "4.8",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-finish-unselect-gallery-1-202409?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone16-nuevo-amazon",
        store: "Amazon",
        price: 809.00,
        shipping: "Envío gratis",
        rating: "4.5",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/08je6ONP",
        affiliateUrl: "https://amzn.eu/d/08je6ONP?tag=comparaweb08-21"
      },
      {
        id: "iphone16-nuevo-mediamarkt",
        store: "MediaMarkt",
        price: 819.00,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_apple-iphone-16-negro-128-gb-5g-61-oled-super-retina-xdr-chip-a18-bionic-ios-1582150.html",
        affiliateUrl: null
      },
      {
        id: "iphone16-nuevo-pccomponentes",
        store: "PcComponentes",
        price: 869.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-16-128-gb-negro",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "Apple iPhone 16 128GB (Reacondicionado)",
    category: "Móviles",
    rating: "4.6",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-finish-unselect-gallery-1-202409?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone16-reacondicionado-pccomponentes",
        store: "PcComponentes",
        price: 569.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-16-128-gb-negro?refurbished",
        affiliateUrl: null
      },
      {
        id: "iphone16-reacondicionado-amazon",
        store: "Amazon",
        price: 610.00,
        shipping: "Envío gratis",
        rating: "3.9",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/0gwTnd7b",
        affiliateUrl: "https://amzn.eu/d/0gwTnd7b?tag=comparaweb08-21"
      }
    ]
  },
  {
    name: "Apple iPhone 17 256GB (Nuevo)",
    category: "Móviles",
    rating: "4.8",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-pro-finish-unselect-gallery-1-202409?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone17-nuevo-mediamarkt",
        store: "MediaMarkt",
        price: 1079.00,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_apple-iphone-17-negro-256-gb-5g-63-oled-super-retina-xdr-chip-a19-ios-1606125.html",
        affiliateUrl: null
      },
      {
        id: "iphone17-nuevo-amazon",
        store: "Amazon",
        price: 1109.00,
        shipping: "Envío gratis",
        rating: "4.5",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/03oq8tN2",
        affiliateUrl: "https://amzn.eu/d/03oq8tN2?tag=comparaweb08-21"
      }
    ]
  },
  {
    name: "Apple iPhone 17 256GB (Reacondicionado)",
    category: "Móviles",
    rating: "4.8",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-pro-finish-unselect-gallery-1-202409?wid=1000&hei=1000&fmt=png-alpha",
    offers: [
      {
        id: "iphone17-reacondicionado-amazon",
        store: "Amazon",
        price: 889.00,
        shipping: "Envío gratis",
        rating: "4.6",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/06OYrp1C",
        affiliateUrl: "https://amzn.eu/d/06OYrp1C?tag=comparaweb08-21"
      },
      {
        id: "iphone17-reacondicionado-pccomponentes",
        store: "PcComponentes",
        price: 911.90,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/apple-iphone-17-256-gb-negro",
        affiliateUrl: null
      },
      {
        id: "iphone17-reacondicionado-mediamarkt",
        store: "MediaMarkt",
        price: 1050.00,
        shipping: "Envío gratis",
        rating: "4.8",
        condition: "Reacondicionado",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_apple-iphone-17-negro-256-gb-5g-63-oled-super-retina-xdr-chip-a19-ios-1606125.html?promotional_offer",
        affiliateUrl: null
      }
    ]
  },
  {
    name: "PlayStation 5 Slim Standard Edition",
    category: "Gaming",
    rating: "4.9",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    offers: [
      {
        id: "ps5slim-standard-mediamarkt",
        store: "MediaMarkt",
        price: 649.00,
        shipping: "Envío gratis",
        rating: "4.9",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_consola-sony-ps5-slim-standard-1-tb-ssd-4k-1-mando-chasis-e-blanco-1605665.html",
        affiliateUrl: null
      },
      {
        id: "ps5slim-standard-amazon",
        store: "Amazon",
        price: 789.00,
        shipping: "Envío: 25,00 €",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/08TMXtfN",
        affiliateUrl: "https://amzn.eu/d/08TMXtfN?tag=comparaweb08-21"
      }
    ]
  },
  {
    name: "PlayStation 5 Slim Digital Edition",
    category: "Gaming",
    rating: "4.8",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    offers: [
      {
        id: "ps5slim-digital-mediamarkt",
        store: "MediaMarkt",
        price: 855.53,
        shipping: "Envío: 6,45 €",
        rating: "4.8",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.mediamarkt.es/es/product/_consola-ps5-sony-playstation-playstation-5-digital-e-chassis-slim-825-gb-white-166110788.html",
        affiliateUrl: null
      },
      {
        id: "ps5slim-digital-amazon",
        store: "Amazon",
        price: 899.90,
        shipping: "Envío gratis",
        rating: "4.5",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://amzn.eu/d/0aF5qc1K",
        affiliateUrl: "https://amzn.eu/d/0aF5qc1K?tag=comparaweb08-21"
      },
      {
        id: "ps5slim-digital-pccomponentes",
        store: "PcComponentes",
        price: 919.00,
        shipping: "Envío gratis",
        rating: "4.7",
        condition: "Nuevo",
        lastUpdated: "Hoy",
        url: "https://www.pccomponentes.com/sony-playstation-5-digital-slim",
        affiliateUrl: null
      }
    ]
  }
];