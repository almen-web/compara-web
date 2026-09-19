import { products } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const product = (products as any[]).find(
    (p) => p.id === decodedSlug || p.slug === decodedSlug || p.name === decodedSlug
  );

  if (!product) {
    notFound();
  }

  const allStores = ['Amazon', 'PcComponentes', 'MediaMarkt'];
  const availableStores = product.offers.map((o: any) => o.store);
  const unavailableStores = allStores.filter((store) => !availableStores.includes(store));

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
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-10">
          <div className="flex items-center justify-center p-6 bg-slate-50 rounded-2xl">
            <img src={product.image || product.imageUrl} alt={product.name} className="max-h-96 object-contain" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">{product.category}</span>
              <h1 className="text-3xl font-bold text-slate-900 mt-3 mb-2">{product.name}</h1>
              <p className="text-sm text-slate-500 mb-6">Marca: <span className="font-semibold text-slate-700">{product.brand}</span></p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Especificaciones técnicas</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  {product.specs?.ram && <li>• <strong>RAM:</strong> {product.specs.ram}</li>}
                  {product.specs?.storage && <li>• <strong>Almacenamiento:</strong> {product.specs.storage}</li>}
                  {product.specs?.screen && <li>• <strong>Pantalla:</strong> {product.specs.screen}</li>}
                  {product.specs?.chip && <li>• <strong>Procesador:</strong> {product.specs.chip}</li>}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="font-bold text-slate-900 text-lg">{product.rating || 4.5}</span>
              <span className="text-sm text-slate-500">({product.numReviews || 100} valoraciones)</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Compara precios y tiendas</h2>
        <div className="space-y-4 mb-10">
          {product.offers.map((offer: any, idx: number) => {
            const shippingText = offer.shippingPrice === 0 || offer.shipping === 0 ? 'Envío GRATIS' : `Envío: ${offer.shippingPrice || offer.shipping || 0} €`;

            return (
              <div key={idx} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{offer.store}</h3>
                  <p className="text-sm text-green-600 font-medium mt-1">{shippingText}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-black text-slate-900">{offer.price} €</span>
                  <a
                    href={offer.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-sm"
                  >
                    Ver oferta →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {unavailableStores.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-700 mb-4">Otras tiendas</h2>
            <div className="grid gap-4">
              {unavailableStores.map((store) => (
                <div key={store} className="flex items-center justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-6 opacity-75">
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
      </main>
    </div>
  );
}