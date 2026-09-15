import { products } from "@/data/products";
import { getOffersForProduct } from "@/lib/offers";
import { NextResponse } from "next/server";

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(
    request.url
  );

  const query =
    searchParams.get("q") || "";

  const normalizedQuery =
    normalizeText(query);

  if (!normalizedQuery) {
    return NextResponse.json({
      query: "",
      total: 0,
      results: [],
    });
  }

  const words = normalizedQuery
    .split(/\s+/)
    .filter(Boolean);

  const matchedProducts =
    products.filter((product) => {
      const productName =
        normalizeText(product.name);

      const category =
        normalizeText(product.category);

      return words.every(
        (word) =>
          productName.includes(word) ||
          category.includes(word)
      );
    });

  const results = matchedProducts.map(
    (product) => {
      const offers =
        getOffersForProduct(
          product.name
        );

      const cheapestOffer =
        offers[0] || null;

      return {
        name: product.name,
        category: product.category,
        rating: product.rating,
        image: product.image,
        cheapestPrice:
          cheapestOffer?.totalPrice || 0,
        offersCount: offers.length,
        offers,
      };
    }
  );

  return NextResponse.json({
    query,
    total: results.length,
    results,
  });
}