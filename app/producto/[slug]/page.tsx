import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: createSlug(product.name),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => createSlug(p.name) === slug);

  if (!product) {
    notFound();
  }

  const cheapestPrice = Math.min(...product.offers.map((o) => o.price));
  const sortedOffers = [...product.offers].sort((a, b) => a.price - b.price);

  const allStores = ["Amazon", "PcComponentes", "MediaMarkt"];
  const availableStores = product.offers.map((o) => o.store);
  const unavailableStores = allStores.filter((store) => !availableStores.includes(store));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            Compara<span className="text-blue-600">Web</span>
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
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="flex h-72 items-center justify-center rounded-2xl bg-slate-50 p-6 md:col-span-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="md:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {product.category}
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-lg bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">
                  ⭐ {product.rating}/5
                </span>
                <span className="rounded-lg bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                  ✓ Verificado
                </span>
              </div>

              <div className="mt-6 border-t pt-6">
                <p className="text-sm text-slate-500">Mejor precio actual</p>
                <p className="text-4xl font-extrabold text-blue-600">
                  {cheapestPrice.toFixed(2).replace(".", ",")} €
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ofertas Disponibles */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Ofertas disponibles</h2>
          <div className="mt-6 grid gap-4">
            {sortedOffers.map((offer) => (
              <div
                key={offer.id}
                className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:flex-row"
              >
                <div>
                  <h3 className="text-xl font-bold">{offer.store}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    ⭐ {offer.rating}/5 · Condición: {offer.condition}
                  </p>
                  <p className="text-xs text-slate-400">{offer.shipping}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">
                      {offer.price.toFixed(2).replace(".", ",")} €
                    </p>
                  </div>
                  <a
                    href={`/salir/${offer.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tiendas No Disponibles */}
        {unavailableStores.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-700">Otras tiendas</h2>
            <div className="mt-4 grid gap-4">
              {unavailableStores.map((store) => (
                <div
                  key={store}
                  className="flex items-center justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-6 opacity-75"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-600">{store}</h3>
                    <p className="text-sm text-slate-500">Estado de disponibilidad</p>
                  </div>
                  <span className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
                    Sin stock / No disponible
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}