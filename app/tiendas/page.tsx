import Link from "next/link";
import { getOffersForStore } from "@/lib/offers";

type Store = {
  name: string;
  emoji: string;
  description: string;
};

const stores: Store[] = [
  {
    name: "Amazon",
    emoji: "📦",
    description:
      "Encuentra productos de tecnología, electrónica y mucho más.",
  },
  {
    name: "MediaMarkt",
    emoji: "🛒",
    description:
      "Tecnología, electrónica, informática y entretenimiento.",
  },
  {
    name: "El Corte Inglés",
    emoji: "🏬",
    description:
      "Una amplia selección de tecnología y productos de consumo.",
  },
];

export default function StoresPage() {
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
            🏪
          </div>

          <h1 className="mt-4 text-4xl font-bold">
            Tiendas
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Compara las ofertas disponibles en
            diferentes tiendas y encuentra el
            mejor precio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stores.map((store) => {
            const offers =
              getOffersForStore(
                store.name
              );

            const cheapestOffer =
              offers[0] || null;

            return (
              <div
                key={store.name}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-5xl">
                  {store.emoji}
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  {store.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {store.description}
                </p>

                <div className="mt-6 border-t pt-5">
                  <p className="text-sm text-slate-500">
                    Ofertas disponibles
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {offers.length}
                  </p>
                </div>

                {cheapestOffer && (
                  <div className="mt-5 rounded-xl bg-blue-50 p-4">
                    <p className="text-sm text-slate-500">
                      Oferta más barata
                    </p>

                    <p className="mt-1 text-xl font-bold text-blue-600">
                      {cheapestOffer.totalPrice
                        .toFixed(2)
                        .replace(".", ",")}{" "}
                      €
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {cheapestOffer.productName}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Últimas ofertas por tienda
          </h2>

          <p className="mt-2 text-slate-600">
            Estas ofertas son datos de
            demostración mientras preparamos las
            fuentes reales.
          </p>

          <div className="mt-6 space-y-4">
            {stores.map((store) => {
              const offers =
                getOffersForStore(
                  store.name
                );

              return (
                <div
                  key={store.name}
                  className="rounded-2xl border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {store.emoji}
                    </span>

                    <h3 className="text-xl font-bold">
                      {store.name}
                    </h3>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {offers.map(
                      (offer) => {
                        const slug =
                          offer.productName
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(
                              /[\u0300-\u036f]/g,
                              ""
                            )
                            .replace(
                              /\s+/g,
                              "-"
                            );

                        return (
                          <Link
                            key={offer.id}
                            href={`/producto/${slug}`}
                            className="rounded-xl border p-4 transition hover:-translate-y-1 hover:shadow-md"
                          >
                            <div className="text-4xl">
                              {
                                offer.productImage
                              }
                            </div>

                            <p className="mt-3 font-semibold">
                              {
                                offer.productName
                              }
                            </p>

                            <p className="mt-2 text-xl font-bold text-blue-600">
                              {offer.totalPrice
                                .toFixed(2)
                                .replace(
                                  ".",
                                  ","
                                )}{" "}
                              €
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {
                                offer.shipping
                              }
                            </p>
                          </Link>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}