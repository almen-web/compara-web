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
    title: `${product.name} al mejor precio | ComparaWeb`,
    description: `Compara ofertas de ${product.name} desde ${lowestPrice.toFixed(2)}€. Encuentra el precio más bajo.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const lowestPrice = Math.min(...product.offers.map((o) => o.price));

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 border border-slate-200">
        <a href="/" className="text-xs font-semibold text-blue-600 hover:underline mb-4 inline-block">
          ← Volver al inicio
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-48 flex items-center justify-center bg-slate-50 rounded-xl p-4">
            <img src={product.image} alt={product.name} className="max-h-full object-contain" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">{product.name}</h1>
            <p className="text-2xl font-black text-slate-900 mt-2">{lowestPrice.toFixed(2)} €</p>
            
            <div className="mt-4">
              <PriceAlertModal productName={product.name} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}