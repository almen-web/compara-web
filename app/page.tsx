import Link from 'next/link';
import { products } from '@/data/products';

export default function HomePage() {
  // Se castea temporalmente como any[] para asegurar compatibilidad con la clave de mapeo
  const featuredProducts = (products as any[]).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Cabecera / Header con el Logo integrado */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/icon.svg" 
              alt="ComparaWeb Logo" 
              className="w-9 h-9 rounded-lg shadow-sm"
            />
            <span className="text-2xl font-bold text-blue-600 tracking-tight">
              Compara<span className="text-slate-900">Web</span>
            </span>
          </Link>
          
          <Link 
            href="/search" 
            className="text-sm font-medium border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-50 transition"
          >
            Ver todo
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Compara precios de tiendas en España
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Encuentra la mejor oferta en Amazon, PcComponentes y MediaMarkt al instante.
        </p>

        {/* Buscador */}
        <form action="/search" method="GET" className="flex gap-2 max-w-2xl mx-auto">
          <input 
            type="text" 
            name="q"
            placeholder="¿Qué producto buscas? (ej. iPhone 15, PS5...)" 
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition shadow-sm"
          >
            Buscar
          </button>
        </form>
      </section>

      {/* Categorías */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Explora categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/search?category=Móviles" className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition text-center group">
            <span className="text-3xl mb-2 block">📱</span>
            <span className="font-semibold text-slate-800 group-hover:text-blue-600">Móviles</span>
            <span className="text-xs text-slate-500 block mt-1">Ver productos →</span>
          </Link>
          <Link href="/search?category=Portátiles" className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition text-center group">
            <span className="text-3xl mb-2 block">💻</span>
            <span className="font-semibold text-slate-800 group-hover:text-blue-600">Portátiles</span>
            <span className="text-xs text-slate-500 block mt-1">Ver productos →</span>
          </Link>
          <Link href="/search?category=Audio" className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition text-center group">
            <span className="text-3xl mb-2 block">🎧</span>
            <span className="font-semibold text-slate-800 group-hover:text-blue-600">Audio</span>
            <span className="text-xs text-slate-500 block mt-1">Ver productos →</span>
          </Link>
          <Link href="/search?category=Gaming" className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition text-center group">
            <span className="text-3xl mb-2 block">🎮</span>
            <span className="font-semibold text-slate-800 group-hover:text-blue-600">Gaming</span>
            <span className="text-xs text-slate-500 block mt-1">Ver productos →</span>
          </Link>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((p, index) => {
            const productId = p.id || p.slug || p.name;
            const productImage = p.image || p.imageUrl || '';
            const minPrice = p.offers && p.offers.length > 0 
              ? Math.min(...p.offers.map((o: any) => o.price)) 
              : 0;

            return (
              <Link 
                key={productId || index} 
                href={`/product/${encodeURIComponent(productId)}`}
                className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition flex flex-col justify-between group"
              >
                <div>
                  <div className="h-40 flex items-center justify-center p-2 mb-4 bg-slate-50 rounded-xl overflow-hidden">
                    <img src={productImage} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{p.category}</span>
                  <h3 className="font-bold text-slate-900 mt-2 line-clamp-2">{p.name}</h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{p.offers?.length || 0} ofertas</span>
                  <span className="font-bold text-slate-900">Desde {minPrice} €</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}