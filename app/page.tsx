'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { PriceAlertModal } from '@/components/PriceAlertModal';
import { TopDealsBanner } from '@/components/TopDealsBanner';
import { CommunityFloat } from '@/components/CommunityFloat';

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
  const [selectedCondition, setSelectedCondition] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<string>('destacados');

  const categories = ['Todos', 'Móviles', 'Gaming', 'Audio', 'Portátiles'];

  // Filtrado y Ordenación dinámica
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          Object.values(product.specs || {}).some(
            (spec) => spec && spec.toLowerCase().includes(query)
          );

        const matchesCategory =
          selectedCategory === 'Todos' || product.category === selectedCategory;

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
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedCondition, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800 relative">
      <main className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Cabecera Principal */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Actualizado en tiempo real
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ComparaWeb
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Encuentra de un vistazo el precio más bajo entre las principales tiendas de tecnología de España.
          </p>
        </header>

        {/* ⚡ Banner de Chollos Destacados del Día */}
        <TopDealsBanner />

        {/* Panel de Búsqueda y Control de Filtros */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 mb-8 space-y-4">
          {/* Barra de Búsqueda */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por producto, marca o modelo (ej. iPhone 17, OLED, M3, PS5)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 placeholder-slate-400"
            />
            <svg
              className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Categorías, Estado y Ordenación */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3 border-t border-slate-100">
            {/* Botones de Categoría */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Selectores Secundarios */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-xs font-semibold">
                {['Todos', 'Nuevo', 'Reacondicionado'].map((cond) => (
                  <button
                    key={cond}
                    onClick={() => setSelectedCondition(cond)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      selectedCondition === cond
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-100 border border-transparent rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 focus:bg-white focus:border-slate-300 outline-none cursor-pointer"
              >
                <option value="destacados">Destacados</option>
                <option value="precio-asc">Precio: Menor a Mayor</option>
                <option value="precio-desc">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Valorados</option>
              </select>
            </div>
          </div>
        </div>

        {/* Rejilla de Productos */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">No se encontraron productos</h3>
            <p className="text-xs text-slate-500 mt-1">Prueba a modificar la búsqueda o los filtros aplicados.</p>
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
              const isRefurbished =
                product.name.toLowerCase().includes('reacondicionado') ||
                product.specs?.estado?.toLowerCase().includes('reacondicionado');

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden flex flex-col justify-between p-5 hover:shadow-md hover:border-slate-300 transition-all group"
                >
                  <div>
                    {/* Contenedor Imagen Clickeable hacia la Ficha */}
                    <Link
                      href={`/producto/${product.id}`}
                      className="relative h-48 w-full flex items-center justify-center mb-4 bg-slate-50 rounded-xl overflow-hidden p-2 block group-hover:bg-slate-100/80 transition-colors"
                    >
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider z-10 ${
                        isRefurbished ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {isRefurbished ? 'Reacondicionado' : 'Nuevo'}
                      </span>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* Marca y Categoría */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                        {product.category}
                      </span>
                      <span className="text-xs font-medium text-slate-400">{product.brand}</span>
                    </div>

                    {/* Nombre Clickeable hacia la Ficha */}
                    <Link href={`/producto/${product.id}`} className="block mt-2">
                      <h2 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug hover:text-blue-600 transition-colors">
                        {product.name}
                      </h2>
                    </Link>

                    {/* Estrellas */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex text-amber-400 text-sm">
                        {'★'.repeat(Math.round(product.rating))}
                        {'☆'.repeat(5 - Math.round(product.rating))}
                      </div>
                      <span className="text-xs font-semibold text-slate-700">{product.rating}</span>
                      <span className="text-xs text-slate-400">({product.numReviews})</span>
                    </div>

                    {/* Especificaciones */}
                    {product.specs && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {Object.entries(product.specs).map(([key, val]) => (
                          val && key !== 'estado' && (
                            <span key={key} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                              {val}
                            </span>
                          )
                        ))}
                      </div>
                    )}

                    {/* Precio Mínimo */}
                    <div className="mt-4">
                      <span className="text-xs text-slate-500">Mejor precio desde</span>
                      <p className="text-2xl font-black text-slate-900">
                        {lowestPrice.toFixed(2)} €
                      </p>
                    </div>
                  </div>

                  {/* Botón de Alerta + Lista de Ofertas */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                    <PriceAlertModal productName={product.name} />

                    <div className="space-y-1.5">
                      {product.offers.map((offer, idx) => {
                        const isBestOffer = offer.price === lowestPrice;
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
                            className={`flex items-center justify-between text-xs p-2.5 rounded-xl transition-all border ${
                              isBestOffer
                                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950 font-medium hover:bg-emerald-100/80 shadow-xs'
                                : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{offer.store}</span>
                              {isBestOffer && (
                                <span className="text-[9px] font-bold bg-emerald-600 text-white px-1.5 py-0.2 rounded-full uppercase">
                                  Mejor Precio
                                </span>
                              )}
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-slate-900 block">{offer.price.toFixed(2)} €</span>
                              <span className="text-[10px] text-slate-400">
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
      </main>

      {/* 🔥 Botón Flotante para Canales de Chollos (Telegram / WhatsApp) */}
      <CommunityFloat />

      {/* Pie de Página / Aviso de Afiliados Obligatorio */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8 mt-16 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="font-semibold text-slate-700">ComparaWeb - Tu comparador transparente de ofertas tecnológicas</p>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Aviso de Afiliación: ComparaWeb participa en programas de afiliados, incluyendo el Programa de Afiliados de Amazon Services LLC y plataformas de Awin. Esto significa que podemos recibir una comisión por las compras realizadas a través de los enlaces de las tiendas, sin ningún coste adicional para ti. Los precios y la disponibilidad de los productos son precisos en la fecha y hora indicadas.
          </p>
          <p className="text-slate-400">© {new Date().getFullYear()} ComparaWeb. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}