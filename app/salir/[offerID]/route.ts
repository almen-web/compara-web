import { getOfferById } from "@/lib/offers";
import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  const parts = url.pathname
    .split("/")
    .filter(Boolean);

  const offerId =
    parts[parts.length - 1];

  const offer =
    getOfferById(offerId);

  if (!offer) {
    return NextResponse.json(
      {
        error: "Oferta no encontrada",
        offerIdRecibido:
          offerId,
      },
      {
        status: 404,
      }
    );
  }

  const destination =
    offer.affiliateUrl ||
    offer.url;

  console.log(
    "🛒 Clic de compra:",
    {
      offerId: offer.id,
      store: offer.store,
      product:
        offer.productName,
      price: offer.price,
      totalPrice:
        offer.totalPrice,
      destination,
      sourceType:
        offer.sourceType,
      date:
        new Date().toISOString(),
    }
  );

  return NextResponse.redirect(
    destination
  );
}