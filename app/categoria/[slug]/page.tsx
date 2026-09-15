import type { Metadata } from "next";
import { products } from "@/data/products";
import Link from "next/link";

const categories: Record<
  string,
  {
    name: string;
    emoji: string;
    description: string;
  }
> = {
  moviles: {
    name: "Móviles",
    emoji: "📱",
    description:
      "Compara precios y ofertas de móviles y smartphones de diferentes tiendas.",
  },
  portatiles: {
    name: "Portátiles",
    emoji: "💻",
    description:
      "Compara precios y ofertas de portátiles y ordenadores de diferentes tiendas.",
  },
  audio: {
    name: "Audio",
    emoji: "🎧",
    description:
      "Compara precios y ofertas de auriculares y productos de audio.",
  },
  gaming: {
    name: "Gaming",
    emoji: "🎮",
    description:
      "Compara precios y ofertas de consolas y productos gaming.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug.toLowerCase()];

  if (!category) {
    return {
      title: "Categoría no encontrada",
      description:
        "La categoría que buscas no está disponible en ComparaWeb.",
    };
  }

  return {
    title: `${category.name}: compara precios y ofertas`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories[slug.toLowerCase()];

  if (!category) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">
          Categoría no encontrada
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Volver al inicio
        </Link>
      </main>
    );
  }

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() ===
      category.name.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Compara
            <span className="text-blue-600">
              Web
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            Inicio
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="text-center">
          <div className="text-6xl">
            {category.emoji}
          </div>

          <h1 className="mt-4 text-4xl font-bold">
            {category.name}
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            {category.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categoryProducts.map((product) => {
            const cheapest = Math.min(
              ...product.offers.map(
                (offer) => offer.price
              )
            );

            const productSlug = product.name
              .toLowerCase()
              .normalize("NFD")
              .replace(
                /[\u0300-\u036f]/g,
                ""
              )
              .replace(/\s+/g, "-");

            return (
              <Link
                key={product.name}
                href={`/producto/${productSlug}`}
                className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center rounded-xl bg-slate-100 text-7xl">
                  {product.image}
                </div>

                <p className="mt-5 text-sm text-slate-500">
                  {product.category}
                </p>

                <h2 className="mt-1 text-xl font-bold group-hover:text-blue-600">
                  {product.name}
                </h2>

                <p className="mt-4 text-sm text-slate-500">
                  ⭐ {product.rating}/5
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-2xl font-bold text-blue-600">
                    Desde{" "}
                    {cheapest
                      .toFixed(2)
                      .replace(
                        ".",
                        ","
                      )}{" "}
                    €
                  </p>

                  <span className="text-sm font-semibold text-slate-500">
                    Ver →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {categoryProducts.length === 0 && (
          <div className="mt-10 rounded-2xl border bg-white p-10 text-center">
            <p className="text-slate-600">
              Todavía no tenemos productos en
              esta categoría.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}