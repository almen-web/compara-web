import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { PriceAlertModal } from '@/components/PriceAlertModal';

interface Props {
  params: Promise<{ id: string }>;
}

// 1. Generación de Metadatos SEO dinámicos para Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return { title: 'Producto no encontrado | ComparaWeb' };
  }

  const lowestPrice = Math.min(...product.offers.map((o) => o.price));

  return {
    title: `Comprar ${product.name} al mejor precio desde ${lowestPrice.toFixed(2)}€ | ComparaWeb`,
    description: `Compara ofertas de ${product.name} en Amazon, PcComponentes y MediaMarkt. Encuentra el precio más bajo en versión ${product.specs?.estado || 'nuevo'}.`,
    openGraph: {
      title: `${product.name} - Mejor oferta: ${lowestPrice.toFixed(2)}€`,
      description: `Compara precios en Amazon, PcComponentes y MediaMarkt.`,
      images: [{ url: product.image }],
    },
  };
}

// 2. Página visual del producto
export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const lowestPrice = Math.min(...product.offers.map((o) => o.price));

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <a href="/" className="text-xs font-semibold text-blue-600 hover:underline mb-6 inline-block">
          ← Volver al comparador
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-64 w-full flex items-center justify-center bg-slate-50 rounded-xl p-4">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
          </div>

          <div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold text-slate-900 mt-2">{product.name}</h1>
            
            <div className="mt-4">
              <span className="text-xs text-slate-500">Mejor precio actual desde</span>
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
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
              >
                <span className="font-semibold text-slate-700 text-sm">{offer.store}</span>
                <span className="font-bold text-slate-900 text-sm">{offer.price.toFixed(2)} €</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}