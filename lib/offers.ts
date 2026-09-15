import { products, type Offer } from "@/data/products";

export type PreparedOffer = Offer & {
  productName: string;
  productCategory: string;
  productImage: string;
  shippingCost: number;
  totalPrice: number;
};

function getShippingCost(shipping: string): number {
  if (shipping.toLowerCase() === "envío gratis") {
    return 0;
  }

  const match = shipping.match(/([\d.,]+)\s*€/);

  if (!match) {
    return 0;
  }

  return Number(match[1].replace(",", "."));
}

export function getAllOffers(): PreparedOffer[] {
  return products.flatMap((product) =>
    product.offers.map((offer) => {
      const shippingCost = getShippingCost(
        offer.shipping
      );

      return {
        ...offer,
        productName: product.name,
        productCategory: product.category,
        productImage: product.image,
        shippingCost,
        totalPrice:
          offer.price + shippingCost,
      };
    })
  );
}

export function getOffersForProduct(
  productName: string
): PreparedOffer[] {
  const normalizedName = productName
    .toLowerCase()
    .trim();

  return getAllOffers()
    .filter(
      (offer) =>
        offer.productName
          .toLowerCase()
          .trim() === normalizedName
    )
    .sort(
      (a, b) =>
        a.totalPrice - b.totalPrice
    );
}

export function getOffersForStore(
  storeName: string
): PreparedOffer[] {
  const normalizedStore = storeName
    .toLowerCase()
    .trim();

  return getAllOffers()
    .filter(
      (offer) =>
        offer.store
          .toLowerCase()
          .trim() === normalizedStore
    )
    .sort(
      (a, b) =>
        a.totalPrice - b.totalPrice
    );
}

export function getOfferById(
  offerId: string
): PreparedOffer | null {
  return (
    getAllOffers().find(
      (offer) => offer.id === offerId
    ) || null
  );
}