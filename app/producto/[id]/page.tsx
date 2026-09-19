import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { PriceAlertModal } from '@/components/PriceAlertModal';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return { title: 'Producto no encontrado | ComparaWeb' };
  }

  const lowestPrice = Math.min(...product.offers.map((o) => o.price));

  return {
    title: `${product.name} al mejor precio desde ${lowestPrice.toFixed(2)}€ | ComparaWeb`,
    description: `Compara ofertas de ${product.name} en Amazon, PcComponentes y MediaMarkt. Historial de precios y especificaciones completas.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const lowestPrice = Math.min(...product.offers.map((o) => o.price));

  // Datos por defecto para el historial de precios si no estuvieran definidos
  const history = product.priceHistory || [
    { month: 'May', price: lowestPrice + 60 },
    { month: 'Jun', price: lowestPrice + 45 },
    { month: 'Jul', price: lowestPrice + 30 },
    { month: 'Ago', price: lowestPrice + 15 },
    { month: 'Sep', price: lowestPrice },
  ];

  const maxPriceInHistory = Math.max(...history.map((h) => h.price));
  const minPriceInHistory = Math.min(...history.map((h) => h.price));

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Encabezado e información principal */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 sm:p-8">
          <a href="/" className="text-xs font-semibold text-blue-600 hover:underline mb-6 inline-block">
            ← Volver al comparador
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-64 w-full flex items-center justify-center bg-slate-50 rounded-xl p-4">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>

            <div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-2">{product.name}</h1>

              <div className="mt-4">
                <span className="text-xs text-slate-500">Mejor precio disponible</span>
                <p className="text-3xl font-black text-slate-900">{lowestPrice.toFixed(2)} €</p>
              </div>

              <div className="mt-6">
                <PriceAlertModal productName={product.name} />
              </div>
            </div>
          </div>

          {/* Comparativa de Ofertas */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900 mb-4">Ofertas disponibles en tiendas</h2>
            <div className="space-y-2">
              {product.offers.map((offer, idx) => (
                <a
                  key={idx}
                  href={offer.affiliateUrl || offer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-700 text-sm">{offer.store}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900 text-sm">{offer.price.toFixed(2)} €</span>
                    <span className="text-xs text-blue-600 font-medium">Ir a la oferta →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 📊 Historial de Precios */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">📊 Historial de Precios</h2>
              <p className="text-xs text-slate-500">Evolución estimada de precios en los últimos meses</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
              Mínimo histórico: {minPriceInHistory} €
            </span>
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 bg-slate-50 rounded-xl border border-slate-100">
            {history.map((item, idx) => {
              const heightPercent = Math.max(20, Math.round((item.price / maxPriceInHistory) * 100));
              const isLowest = item.price === minPriceInHistory;

              return (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                  {/* Tooltip con el precio */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded shadow-xs whitespace-nowrap z-10">
                    {item.price} €
                  </div>

                  {/* Barra visual */}
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full max-w-[36px] rounded-t-lg transition-all ${
                      isLowest ? 'bg-amber-500' : 'bg-slate-300 group-hover:bg-blue-500'
                    }`}
                  />
                  <span className="text-[11px] font-medium text-slate-500 mt-2">{item.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 📋 Especificaciones Técnicas */}
        {product.specs && (
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">📋 Especificaciones Técnicas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">{key}</span>
                  <span className="text-sm text-slate-800 font-semibold mt-0.5 block">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}