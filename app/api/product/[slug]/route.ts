import { products } from "@/data/products";
import { getOffersForProduct } from "@/lib/offers";
import { NextResponse } from "next/server";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export async function GET(
  request: Request,
  context: {
    params: Promise<{ slug: string }>;
  }
) {
  const { slug } = await context.params;

  const product = products.find(
    (item) =>
      createSlug(item.name) ===
      slug.toLowerCase()
  );

  if (!product) {
    return NextResponse.json(
      {
        error: "Producto no encontrado",
      },
      {
        status: 404,
      }
    );
  }

  const offers =
    getOffersForProduct(product.name);

  return NextResponse.json({
    product: {
      name: product.name,
      category: product.category,
      rating: product.rating,
      image: product.image,
    },

    offers,

    totalOffers: offers.length,

    cheapestOffer:
      offers[0] || null,
  });
}