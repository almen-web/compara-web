import Link from 'next/link';
import { products } from '@/data/products';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const { category, q } = await searchParams;

  const filteredProducts = (products as any[]).filter((p) => {
    let matchesCategory = true;
    let matchesQuery = true;

    if (category) {
      matchesCategory = p.category.toLowerCase().trim() === category.toLowerCase().trim();
    }

    if (q) {
      const query = q.toLowerCase().trim();
      matchesQuery =
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);
    }

    return matchesCategory && matchesQuery;
  });

  const title = category 
    ? `Categoría: ${category}` 
    : q 
    ? `Resultados para: "${q}"` 
    : 'Todos los productos';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/icon.svg" alt="ComparaWeb Logo" className="w-9 h-9 rounded-lg shadow-sm" />
            <span className="text-2xl font-bold text-blue-600 tracking-tight">
              Compara<span className="text-slate-900">Web</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-medium border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-50 transition">
            Inicio
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{title}</h1>
        <p className="text-sm text-slate-500 mb-8">
          Se encontraron {filteredProducts.length} producto(s)
        </p>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-lg text-slate-600 mb-4">No se encontraron productos en esta categoría.</p>
            <Link href="/search" className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition hover:bg-blue-700 inline-block">
              Ver todos los productos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((p, idx) => {
              const productId = p.id || p.slug || p.name;
              const productImage = p.image || p.imageUrl || '';
              const minPrice = p.offers && p.offers.length > 0 
                ? Math.min(...p.offers.map((o: any) => o.price)) 
                : 0;

              return (
                <div key={productId || idx} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                  <div>
                    <div className="h-48 flex items-center justify-center p-4 mb-4 bg-slate-50 rounded-xl">
                      <img src={productImage} alt={p.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">{p.category}</span>
                    <h2 className="font-bold text-slate-900 mt-2 text-lg line-clamp-2">{p.name}</h2>
                    <div className="flex items-center gap-1 mt-2 text-sm text-slate-500">
                      <span className="text-yellow-500">★</span>
                      <span>{p.rating || 4.5}/5</span>
                      <span>• {p.offers?.length || 0} ofertas</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Desde</span>
                      <span className="text-xl font-bold text-blue-600">{minPrice} €</span>
                    </div>
                    <Link
                      href={`/producto/${encodeURIComponent(productId)}`}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition"
                    >
                      Ver ofertas
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}