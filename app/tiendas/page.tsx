import Link from 'next/link';
import { getAllOffers } from '@/lib/offers';

export const dynamic = 'force-dynamic';

export default function TiendasPage() {
  const offers = getAllOffers();

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
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Todas las Ofertas por Tienda</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">{offer.store}</span>
                <h2 className="font-bold text-slate-900 mt-2 text-lg line-clamp-2">{offer.productName}</h2>
                <p className="text-sm text-green-600 font-medium mt-1">
                  {offer.shipping === 0 ? 'Envío GRATIS' : `Envío: ${offer.shipping} €`}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">{offer.price} €</span>
                <a
                  href={`/salir/${offer.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition"
                >
                  Ir a la tienda →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}