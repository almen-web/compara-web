import { products } from "@/data/products";
import Link from "next/link";

function getShippingCost(shipping: string) {
  if (shipping.toLowerCase() === "envío gratis") {
    return 0;
  }

  const match = shipping.match(/([\d.,]+)\s*€/);

  if (!match) {
    return 0;
  }

  return Number(match[1].replace(",", "."));
}

function createSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default function Home() {
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

          <nav className="flex items-center gap-4 text-sm text-slate-600 md:gap-6">
            <Link
              href="/categoria/moviles"
              className="hover:text-blue-600"
            >
              Móviles
            </Link>

            <Link
              href="/categoria/portatiles"
              className="hidden hover:text-blue-600 md:inline"
            >
              Portátiles
            </Link>

            <Link
              href="/categoria/audio"
              className="hidden hover:text-blue-600 md:inline"
            >
              Audio
            </Link>

            <Link
              href="/categoria/gaming"
              className="hidden hover:text-blue-600 md:inline"
            >
              Gaming
            </Link>

            <Link
              href="/tiendas"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Tiendas
            </Link>

            <Link
              href="/sobre"
              className="hidden hover:text-blue-600 md:inline"
            >
              Sobre nosotros
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-6 pb-20 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🔎 Compara antes de comprar
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Encuentra el mejor precio
            <span className="block text-blue-600">
              en un solo lugar
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Comparamos precios, tiendas y
            valoraciones para ayudarte a encontrar
            la mejor oferta.
          </p>

          <form
            action="/search"
            className="mx-auto mt-10 flex max-w-2xl overflow-hidden rounded-2xl border bg-white p-2 shadow-lg"
          >
            <input
              type="text"
              name="q"
              placeholder="Busca un producto, por ejemplo: iPhone 13"
              className="min-w-0 flex-1 px-4 py-3 text-base outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Buscar
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-500">
            Ejemplos: iPhone 13 · PS5 · AirPods ·
            MacBook Air
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold">
          Explora categorías
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Link
            href="/categoria/moviles"
            className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-4xl">📱</div>

            <div className="mt-3 font-semibold">
              Móviles
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Ver productos →
            </div>
          </Link>

          <Link
            href="/categoria/portatiles"
            className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-4xl">💻</div>

            <div className="mt-3 font-semibold">
              Portátiles
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Ver productos →
            </div>
          </Link>

          <Link
            href="/categoria/audio"
            className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-4xl">🎧</div>

            <div className="mt-3 font-semibold">
              Audio
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Ver productos →
            </div>
          </Link>

          <Link
            href="/categoria/gaming"
            className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-4xl">🎮</div>

            <div className="mt-3 font-semibold">
              Gaming
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Ver productos →
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Productos populares
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Precios de prueba para nuestro
            prototipo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => {
            const cheapest = Math.min(
              ...product.offers.map(
                (offer) =>
                  offer.price +
                  getShippingCost(
                    offer.shipping
                  )
              )
            );

            const slug = createSlug(
              product.name
            );

            return (
              <Link
                key={product.name}
                href={`/producto/${slug}`}
                className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center rounded-xl bg-slate-100 text-7xl">
                  {product.image}
                </div>

                <p className="mt-5 text-sm text-slate-500">
                  {product.category}
                </p>

                <h3 className="mt-1 text-xl font-bold group-hover:text-blue-600">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-2xl font-bold text-blue-600">
                    Desde{" "}
                    {cheapest
                      .toFixed(2)
                      .replace(".", ",")}{" "}
                    €
                  </p>

                  <span className="text-sm font-semibold text-slate-500">
                    Ver →
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  ⭐ {product.rating}/5 ·{" "}
                  {product.offers.length} ofertas
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-blue-600 p-8 text-white md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                🏪 Explora las tiendas
              </h2>

              <p className="mt-2 max-w-xl text-blue-100">
                Consulta las tiendas disponibles y
                descubre qué productos y ofertas
                estamos comparando.
              </p>
            </div>

            <Link
              href="/tiendas"
              className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-blue-600 hover:bg-blue-50"
            >
              Ver tiendas →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-center text-sm text-slate-500 md:text-left">
            <p>© 2026 ComparaWeb</p>

            <p className="mt-1">
              Compara precios y encuentra ofertas
              desde un solo lugar.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link
              href="/sobre"
              className="text-slate-600 hover:text-blue-600"
            >
              Sobre nosotros
            </Link>

            <Link
              href="/tiendas"
              className="text-slate-600 hover:text-blue-600"
            >
              Tiendas
            </Link>

            <Link
              href="/privacidad"
              className="text-slate-600 hover:text-blue-600"
            >
              Privacidad
            </Link>

            <Link
              href="/aviso-legal"
              className="text-slate-600 hover:text-blue-600"
            >
              Aviso legal
            </Link>

            <Link
              href="/cookies"
              className="text-slate-600 hover:text-blue-600"
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}