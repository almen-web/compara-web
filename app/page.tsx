'use client';

import React, { useState } from 'react';
import { products } from '@/data/products';
import { PriceAlertModal } from '@/components/PriceAlertModal';

// ID de Afiliado de Amazon
const AMAZON_TAG = 'comparaweb08-21';

// Función para transformar URLs
function getAffiliateLink(url: string, store: string): string {
  if (!url || url === '#') return '#';

  // Amazon: Se asegura de incluir el Tag de afiliado siempre
  if (store === 'Amazon') {
    if (url.includes('tag=')) return url;
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tag=${AMAZON_TAG}`;
  }

  // PcComponentes y MediaMarkt: Enlace directo funcional a la ficha del producto
  return url;
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Móviles', 'Gaming', 'Audio', 'Portátiles'];

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comparador de Precios
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Encuentra las mejores ofertas en tecnología de Amazon, PcComponentes y MediaMarkt.
          </p>
        </header>

        {/* Filtros por Categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rejilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const lowestPrice = Math.min(...product.offers.map((o) => o.price));

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between p-5 hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Imagen */}
                  <div className="h-48 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Categoría y Marca */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {product.category}
                    </span>
                    <span className="text-xs font-medium text-gray-400">{product.brand}</span>
                  </div>

                  {/* Nombre */}
                  <h2 className="text-base font-bold text-gray-900 mt-2 line-clamp-2">
                    {product.name}
                  </h2>

                  {/* Valoraciones */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex text-amber-400 text-sm">
                      {'★'.repeat(Math.round(product.rating))}
                      {'☆'.repeat(5 - Math.round(product.rating))}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.numReviews})</span>
                  </div>

                  {/* Especificaciones */}
                  {product.specs && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {Object.entries(product.specs).map(([key, val]) => (
                        val && (
                          <span key={key} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                            {val}
                          </span>
                        )
                      ))}
                    </div>
                  )}

                  {/* Precio Mínimo */}
                  <div className="mt-4">
                    <span className="text-xs text-gray-500">Mejor precio disponible</span>
                    <p className="text-2xl font-black text-gray-900">
                      {lowestPrice.toFixed(2)} €
                    </p>
                  </div>
                </div>

                {/* Zona inferior: Botón de Alerta + Enlaces Directos */}
                <div className="mt-5 pt-4 border-t border-gray-100 space-y-3">
                  <PriceAlertModal productName={product.name} />

                  <div className="space-y-1.5">
                    {product.offers.map((offer, idx) => {
                      const finalUrl = getAffiliateLink(
                        offer.affiliateUrl || offer.url || '',
                        offer.store
                      );

                      return (
                        <a
                          key={idx}
                          href={finalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100"
                        >
                          <span className="font-semibold text-gray-700">{offer.store}</span>
                          <div className="text-right">
                            <span className="font-bold text-gray-900 block">{offer.price.toFixed(2)} €</span>
                            <span className="text-[10px] text-gray-400">
                              {offer.shippingPrice === 0 ? 'Envío GRATIS' : `+${offer.shippingPrice}€ envío`}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}