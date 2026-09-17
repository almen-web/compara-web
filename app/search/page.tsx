import Link from "next/link";
import { products } from "@/data/products";

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
  const { q } = await searchParams;
  const query = q || "";

  const filteredProducts = products.filter((product) => {
    const searchTerm = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  });

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
            Inicio
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">
          {query ? `Resultados para "${query}"` : "Todos los productos"}
        </h1>
        <p className="mt-2 text-slate-600">
          Se encontraron {filteredProducts.length} producto(s)
        </p>

        {filteredProducts.length === 0 ? (
          <div className="mt-12 text-center">
            <div className="text-5xl">🔍</div>
            <h2 className="mt-4 text-xl font-bold">No se encontraron resultados</h2>
            <p className="mt-2 text-slate-500">
              Prueba a buscar con otro término como "iPhone" o "MacBook".
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Volver al inicio
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
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
                    <div className="flex h-40 w-full items-center justify-center rounded-xl bg-slate-100 text-6xl">
                      {product.image}
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase text-blue-600">
                      {product.category}
                    </p>
                    <h2 className="mt-1 text-xl font-bold">{product.name}</h2>
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
        )}
      </section>
    </main>
  );
}