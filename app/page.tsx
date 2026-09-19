'use client';

import React, { useState, useMemo } from 'react';
import { products } from '@/data/products';
import { PriceAlertModal } from '@/components/PriceAlertModal';

// ID de Afiliado de Amazon
const AMAZON_TAG = 'comparaweb08-21';

function getAffiliateLink(url: string, store: string): string {
  if (!url || url === '#') return '#';

  if (store === 'Amazon') {
    if (url.includes('tag=')) return url;
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tag=${AMAZON_TAG}`;
  }

  return url;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedCondition, setSelectedCondition] = useState<string>('Todos'); // 'Todos', 'Nuevo', 'Reacondicionado'
  const [sortBy, setSortBy] = useState<string>('destacados'); // 'destacados', 'precio-asc', 'precio-desc', 'rating'

  const categories = ['Todos', 'Móviles', 'Gaming', 'Audio', 'Portátiles'];

  // Filtrado y Ordenación dinámica en tiempo real
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // 1. Búsqueda por texto (Nombre, Marca, Categoría o Especificaciones)
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          Object.values(product.specs || {}).some(
            (spec) => spec && spec.toLowerCase().includes(query)
          );

        // 2. Filtro por Categoría
        const matchesCategory =
          selectedCategory === 'Todos' || product.category === selectedCategory;

        // 3. Filtro por Estado (Nuevo / Reacondicionado)
        const isRefurbished =
          product.name.toLowerCase().includes('reacondicionado') ||
          product.specs?.estado?.toLowerCase().includes('reacondicionado');

        const matchesCondition =
          selectedCondition === 'Todos' ||
          (selectedCondition === 'Nuevo' && !isRefurbished) ||
          (selectedCondition === 'Reacondicionado' && isRefurbished);

        return matchesSearch && matchesCategory && matchesCondition;
      })
      .sort((a, b) => {
        const lowestA = Math.min(...a.offers.map((o) => o.price));
        const lowestB = Math.min(...b.offers.map((o) => o.price));

        if (sortBy === 'precio-asc') return lowestA - lowestB;
        if (sortBy === 'precio-desc') return lowestB - lowestA;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // 'destacados' conserva el orden por defecto
      });
  }, [searchQuery, selectedCategory, selectedCondition, sortBy]);

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

        {/* Panel de Búsqueda y Control de Filtros */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-8 space-y-4">
          {/* Barra de Búsqueda en Tiempo Real */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por producto, marca o modelo (ej. iPhone 17, OLED, M3, PS5)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-400"
            />
            <svg
              className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Categorías, Estado y Ordenación */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-gray-100">
            {/* Categorías */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Selectores Secundarios: Estado y Ordenación */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Selector Nuevo / Reacondicionado */}
              <div className="inline-flex rounded-lg bg-gray-100 p-0.5 text-xs font-semibold">
                {['Todos', 'Nuevo', 'Reacondicionado'].map((cond) => (
                  <button
                    key={cond}
                    onClick={() => setSelectedCondition(cond)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      selectedCondition === cond
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>

              {/* Selector de Ordenación */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 border border-transparent rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 focus:bg-white focus:border-gray-300 outline-none cursor-pointer"
              >
                <option value="destacados">Destacados</option>
                <option value="precio-asc">Precio: Menor a Mayor</option>
                <option value="precio-desc">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Valorados</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contador de Resultados */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-xs font-medium text-gray-500">
            Mostrando <span className="font-bold text-gray-900">{filteredProducts.length}</span> productos
          </p>
        </div>

        {/* Rejilla de Productos */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <svg
              className="w-12 h-12 text-gray-300 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-base font-bold text-gray-900">No se encontraron productos</h3>
            <p className="text-xs text-gray-500 mt-1">Prueba a modificar la búsqueda o los filtros aplicados.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
                setSelectedCondition('Todos');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
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

                  {/* Zona inferior: Botón de Alerta + Enlaces */}
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
        )}
      </div>
    </main>
  );
}