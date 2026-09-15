import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buscar productos y comparar precios",
  description:
    "Busca productos en ComparaWeb y compara precios, ofertas y tiendas.",
  robots: {
    index: false,
    follow: true,
  },
};

type SearchOffer = {
  id: string;
  store: string;
  price: number;
  shipping: string;
  shippingCost: number;
  totalPrice: number;
  rating: string;
  condition: string;
  lastUpdated: string;
};

type SearchProduct = {
  name: string;
  category: string;
  rating: string;
  image: string;
  cheapestPrice: number;
  offersCount: number;
  offers: SearchOffer[];
};

type SearchResponse = {
  query: string;
  total: number;
  results: SearchProduct[];
};

async function searchProducts(
  query: string
): Promise<SearchResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const response = await fetch(
    `${baseUrl}/api/search?q=${encodeURIComponent(
      query
    )}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "No se pudieron cargar los resultados."
    );
  }

  return response.json();
}

function createSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;

  const query = params.q || "";

  let data: SearchResponse = {
    query,
    total: 0,
    results: [],
  };

  try {
    data = await searchProducts(query);
  } catch {
    data = {
      query,
      total: 0,
      results: [],
    };
  }

  const results = data.results;

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

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <form
            action="/search"
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Busca un producto..."
              className="min-w-0 flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="mt-10">
          {query && (
            <div>
              <h1 className="text-3xl font-bold">
                Resultados para "{query}"
              </h1>

              <p className="mt-2 text-slate-600">
                {data.total}{" "}
                {data.total === 1
                  ? "producto encontrado"
                  : "productos encontrados"}
              </p>
            </div>
          )}

          {!query && (
            <div className="rounded-2xl border bg-white p-10 text-center">
              <div className="text-6xl">🔎</div>

              <h1 className="mt-5 text-2xl font-bold">
                Busca un producto
              </h1>

              <p className="mt-2 text-slate-600">
                Prueba con "iPhone", "Samsung",
                "PS5" o "AirPods".
              </p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="mt-8 rounded-2xl border bg-white p-10 text-center">
              <div className="text-5xl">😕</div>

              <h2 className="mt-4 text-2xl font-bold">
                No hemos encontrado resultados
              </h2>

              <p className="mt-2 text-slate-600">
                Prueba con otro nombre de producto
                o categoría.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Volver al inicio
              </Link>
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-8 space-y-6">
              {results.map((product) => {
                const slug = createSlug(
                  product.name
                );

                const cheapestOffer =
                  product.offers[0];

                return (
                  <div
                    key={product.name}
                    className="rounded-2xl border bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex h-40 w-full items-center justify-center rounded-xl bg-slate-100 text-7xl md:w-48">
                        {product.image}
                      </div>

                      <div className="flex-1">
                        <p className="text-sm text-slate-500">
                          {product.category}
                        </p>

                        <Link
                          href={`/producto/${slug}`}
                          className="mt-1 block text-2xl font-bold hover:text-blue-600"
                        >
                          {product.name}
                        </Link>

                        <p className="mt-2 text-sm text-slate-500">
                          ⭐ {product.rating}/5 ·{" "}
                          {product.offersCount} ofertas
                        </p>

                        <div className="mt-5">
                          <p className="text-sm text-slate-500">
                            Mejor precio final
                          </p>

                          <p className="text-3xl font-bold text-blue-600">
                            {product.cheapestPrice
                              .toFixed(2)
                              .replace(
                                ".",
                                ","
                              )}{" "}
                            €
                          </p>

                          {cheapestOffer && (
                            <p className="mt-1 text-sm text-slate-500">
                              En{" "}
                              <span className="font-semibold">
                                {
                                  cheapestOffer.store
                                }
                              </span>{" "}
                              ·{" "}
                              {
                                cheapestOffer.shipping
                              }
                            </p>
                          )}
                        </div>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href={`/producto/${slug}`}
                            className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
                          >
                            Ver ofertas
                          </Link>

                          {cheapestOffer && (
                            <Link
                              href={`/salir/${cheapestOffer.id}`}
                              className="rounded-xl border px-5 py-3 text-center font-semibold hover:bg-slate-50"
                            >
                              Ir a la tienda
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}