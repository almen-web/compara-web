import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ offerID: string }> }
) {
  const { offerID } = await params;

  // Buscar la oferta por su ID dentro de todos los productos
  let targetUrl: string | null = null;

  for (const product of products) {
    const offer = product.offers.find((o) => o.id === offerID);
    if (offer) {
      targetUrl = offer.affiliateUrl || offer.url;
      break;
    }
  }

  // Si no se encuentra la oferta o la URL, redirigir al inicio
  if (!targetUrl) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirigir directamente al enlace de la tienda / afiliado
  return NextResponse.redirect(targetUrl);
}