'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

export const TopDealsBanner = () => {
  // Obtenemos productos y los ordenamos para mostrar chollos destacados
  const topDeals = products.slice(0, 3);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-4 sm:p-6 mb-8 border border-blue-900/50 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <h2 className="text-sm sm:text-base font-black tracking-wide uppercase text-amber-400">
            ⚡ Chollos Destacados del Día
          </h2>
        </div>
        <span className="text-[10px] sm:text-xs font-semibold bg-white/10 text-slate-300 px-2.5 py-1 rounded-full border border-white/10">
          Plazas / Stock limitado
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {topDeals.map((product) => {
          const lowestPrice = Math.min(...product.offers.map((o) => o.price));
          const bestOffer = product.offers.find((o) => o.price === lowestPrice);

          return (
            <div
              key={product.id}
              className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 hover:bg-white/10 transition-all group"
            >
              <div className="h-16 w-16 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold uppercase text-amber-400 block">
                  {bestOffer?.store}
                </span>
                <h3 className="text-xs font-bold text-slate-100 truncate group-hover:text-amber-300 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-base font-black text-white">
                    {lowestPrice.toFixed(2)} €
                  </span>
                  <Link
                    href={`/producto/${product.id}`}
                    className="text-[10px] font-bold text-blue-400 hover:underline ml-auto"
                  >
                    Ver chollo →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};