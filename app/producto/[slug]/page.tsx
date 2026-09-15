import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";

type Offer = {
  id: string;
  store: string;
  price: number;
  shipping: string;
  shippingCost: number;
  totalPrice: number;
  rating: string;
  condition: string;
  url: string;
  affiliateUrl: string | null;
  lastUpdated: string;
};

type ProductResponse = {
  product: {
    name: string;
    category: string;
    rating: string;
    image: string;
  };
  offers: Offer[];
  totalOffers: number;
  cheapestOffer: Offer | null;
};

const priceHistory = [
  { month: "Ene", price: 349 },
  { month: "Feb", price: 329 },
  { month: "Mar", price: 319 },
  { month: "Abr", price: 309 },
  { month: "May", price: 299 },
];

function createSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (item) =>
      createSlug(item.name) ===
      slug.toLowerCase()
  );

  if (!product) {
    return {
      title: "Producto no encontrado",
      description:
        "El producto que buscas no está disponible en ComparaWeb.",
    };
  }

  const cheapestPrice = Math.min(
    ...product.offers.map(
      (offer) => offer.price
    )
  );

  return {
    title: `${product.name}: compara precios y ofertas`,
    description: `Compara precios de ${product.name} en diferentes tiendas. Consulta ofertas, gastos de envío, valoraciones y condiciones en ComparaWeb.`,
    keywords: [
      product.name,
      `${product.name} precio`,
      `${product.name} ofertas`,
      `comprar ${product.name}`,
      `comparar ${product.name}`,
    ],
    openGraph: {
      title: `${product.name}: compara precios y ofertas`,
      description: `Compara ofertas de ${product.name} desde ${cheapestPrice
        .toFixed(2)
        .replace(".", ",")} €.`,
      type: "website",
    },
  };
}

async function getProduct(
  slug: string
): Promise<ProductResponse | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const response = await fetch(
    `${baseUrl}/api/product/${encodeURIComponent(
      slug
    )}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getProduct(slug);

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Compara
              <span className="text-blue-600">
                Web
              </span>
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="text-6xl">🔎</div>

          <h1 className="mt-6 text-3xl font-bold">
            Producto no encontrado
          </h1>

          <p className="mt-3 text-slate-600">
            No hemos encontrado este producto.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Volver al inicio
          </Link>
        </section>
      </main>
    );
  }

  const { product, offers, cheapestOffer } =
    data;

  const historyPrices = priceHistory.map(
    (item) => item.price
  );

  const minimumPrice = Math.min(
    ...historyPrices
  );

  const maximumPrice = Math.max(
    ...historyPrices
  );

  const currentPrice =
    cheapestOffer?.totalPrice || 0;

  const maximumSaving =
    maximumPrice - currentPrice;

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
            Nueva búsqueda
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-slate-100 text-9xl md:w-80">
              {product.image}
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-600">
                {product.category}
              </p>

              <h1 className="mt-2 text-4xl font-bold">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  ⭐ {product.rating}/5
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  ✓ Nuevo
                </span>
              </div>

              <p className="mt-6 text-slate-600">
                Compara las mejores ofertas y
                encuentra el precio final más bajo.
              </p>

              <div className="mt-8">
                <p className="text-sm text-slate-500">
                  Mejor precio actual
                </p>

                <p className="text-4xl font-bold text-blue-600">
                  {currentPrice
                    .toFixed(2)
                    .replace(".", ",")}{" "}
                  €
                </p>

                {maximumSaving > 0 && (
                  <p className="mt-2 text-sm font-semibold text-green-600">
                    🔻{" "}
                    {maximumSaving
                      .toFixed(2)
                      .replace(".", ",")}{" "}
                    € por debajo del máximo
                    histórico
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">
                📈 Historial de precios
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Datos de demostración del prototipo.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 px-4 py-3 text-sm">
              <span className="font-semibold">
                Precio actual:
              </span>{" "}
              {currentPrice
                .toFixed(2)
                .replace(".", ",")}{" "}
              €
            </div>
          </div>

          <div className="mt-8">
            <div className="flex h-64 items-end gap-3 border-b border-l border-slate-200 px-4 pb-0">
              {priceHistory.map((item) => {
                const percentage =
                  ((item.price - minimumPrice) /
                    (maximumPrice -
                      minimumPrice)) *
                    60 +
                  25;

                return (
                  <div
                    key={item.month}
                    className="flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <div className="mb-2 text-xs font-semibold text-slate-600">
                      {item.price} €
                    </div>

                    <div
                      className="w-full max-w-12 rounded-t-xl bg-blue-500"
                      style={{
                        height: `${percentage}%`,
                      }}
                    />

                    <div className="mt-3 text-xs font-semibold text-slate-500">
                      {item.month}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm text-slate-500">
                Precio mínimo
              </p>

              <p className="mt-1 text-2xl font-bold text-green-600">
                {minimumPrice} €
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-sm text-slate-500">
                Precio actual
              </p>

              <p className="mt-1 text-2xl font-bold text-blue-600">
                {currentPrice
                  .toFixed(2)
                  .replace(".", ",")}{" "}
                €
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-4">
              <p className="text-sm text-slate-500">
                Precio máximo
              </p>

              <p className="mt-1 text-2xl font-bold text-red-600">
                {maximumPrice} €
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <h2 className="text-2xl font-bold">
              Comparar precios de{" "}
              {product.name}
            </h2>

            <p className="mt-2 text-slate-600">
              {offers.length} ofertas ordenadas por
              precio final.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold">
                        {offer.store}
                      </h3>

                      {index === 0 && (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                          🏆 MEJOR PRECIO
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      ⭐ {offer.rating}/5 ·{" "}
                      {offer.condition}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      🚚 {offer.shipping}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Actualizado:{" "}
                      {offer.lastUpdated}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        Precio final
                      </p>

                      <p className="text-3xl font-bold">
                        {offer.totalPrice
                          .toFixed(2)
                          .replace(".", ",")}{" "}
                        €
                      </p>
                    </div>

                    <Link
                      href={`/salir/${offer.id}`}
                      className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
                    >
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-bold">
            🔔 Alertas de precio
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Próximamente podrás recibir una alerta
            cuando el precio de este producto baje.
          </p>

          <button
            type="button"
            className="mt-4 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Avisarme cuando baje
          </button>
        </section>

        <section className="mt-6 rounded-2xl border bg-white p-6">
          <h2 className="text-xl font-bold">
            ℹ️ Información
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Los precios y el historial mostrados
            actualmente son datos de prueba. Más
            adelante conectaremos fuentes autorizadas
            para mostrar ofertas reales y actualizadas.
          </p>
        </section>
      </section>
    </main>
  );
}