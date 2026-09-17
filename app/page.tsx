import Link from "next/link";
import { products } from "@/data/products";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default function HomePage() {
  const categories = [
    { name: "Móviles", icon: "📱", href: "/search?q=Móviles" },
    { name: "Portátiles", icon: "💻", href: "/search?q=Portátiles" },
    { name: "Audio", icon: "🎧", href: "/search?q=Audio" },
    { name: "Gaming", icon: "🎮", href: "/search?q=Gaming" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            Compara<span className="text-blue-600">Web</span>
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/search"
              className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Ver todo
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero / Buscador */}
      <section className="bg-white py-16 text-center border-b">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Compara precios de tiendas en España
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Encuentra la mejor oferta en Amazon, PcComponentes y MediaMarkt al instante.
          </p>

          <form action="/search" method="GET" className="mt-8 flex w-full gap-2">
            <input
              type="text"
              name="q"
              placeholder="¿Qué producto buscas? (ej. iPhone 15, PS5...)"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-600 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold">Explora categorías</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="flex flex-col items-center justify-center rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:border-blue-600"
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="mt-3 font-semibold">{cat.name}</span>
              <span className="mt-1 text-xs text-slate-500">Ver productos →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold">Productos destacados</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => {
            const cheapestPrice = Math.min(
              ...product.offers.map((o) => o.price)
            );
            const slug = createSlug(product.name);

            return (
              <div
                key={slug}
                className="flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex h-48 w-full items-center justify-center rounded-xl bg-white p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase text-blue-600">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold leading-snug">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    ⭐ {product.rating}/5 · {product.offers.length} ofertas
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="text-xs text-slate-400">Desde</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {cheapestPrice.toFixed(2).replace(".", ",")} €
                    </p>
                  </div>
                  <Link
                    href={`/producto/${slug}`}
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Ver ofertas
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}