'use client';

import React, { useState } from 'react';
import { products } from '@/data/products';
import { PriceAlertModal } from '@/components/PriceAlertModal';

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
                  <div className="h-48 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {product.category}
                  </span>

                  <h2 className="text-base font-bold text-gray-900 mt-2 line-clamp-2">
                    {product.name}
                  </h2>

                  <div className="mt-3">
                    <span className="text-xs text-gray-500">Precio más bajo</span>
                    <p className="text-2xl font-black text-gray-900">
                      {lowestPrice.toFixed(2)} €
                    </p>
                  </div>
                </div>

                {/* Sección de Botones */}
                <div className="mt-5 space-y-2.5">
                  {/* Botón de Alerta */}
                  <PriceAlertModal productName={product.name} />

                  {/* Lista/Detalle de Ofertas */}
                  <div className="pt-2 border-t border-gray-100 space-y-1.5">
                    {product.offers.map((offer, idx) => (
                      <a
                        key={idx}
                        href={offer.affiliateUrl || offer.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                      >
                        <span className="font-semibold text-gray-700">{offer.store}</span>
                        <span className="font-bold text-gray-900">{offer.price.toFixed(2)} €</span>
                      </a>
                    ))}
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