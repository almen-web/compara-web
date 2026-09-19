import { products, Offer } from '@/data/products';

export interface PreparedOffer extends Offer {
  id: string;
  url: string;
  shipping: number | string;
  totalPrice: number;
  productName: string;
  productImage: string;
}

export function getAllOffers(): PreparedOffer[] {
  const allOffers: PreparedOffer[] = [];

  products.forEach((product) => {
    product.offers.forEach((offer, index) => {
      const offerId = offer.id || `${product.id}-${offer.store.toLowerCase()}-${index}`;
      const offerUrl = offer.affiliateUrl || offer.url || '#';
      const offerShipping = offer.shippingPrice !== undefined ? offer.shippingPrice : (offer.shipping !== undefined ? offer.shipping : 0);
      
      const shippingNum = typeof offerShipping === 'number' ? offerShipping : 0;
      const calcTotalPrice = offer.price + shippingNum;

      allOffers.push({
        ...offer,
        id: offerId,
        url: offerUrl,
        shipping: offerShipping,
        totalPrice: calcTotalPrice,
        productName: product.name,
        productImage: product.image,
      });
    });
  });

  return allOffers;
}

export function getOfferById(id: string): PreparedOffer | undefined {
  return getAllOffers().find((o) => o.id === id);
}

export function getOffersForProduct(productId: string): PreparedOffer[] {
  return getAllOffers().filter((offer) =>
    offer.id.startsWith(productId) || offer.productName.toLowerCase().includes(productId.toLowerCase())
  );
}