import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog y Guías de Compra | ComparaWeb',
  description: 'Guías detalladas, comparativas de tecnología y consejos para encontrar los mejores chollos en móviles, portátiles y consolas.',
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Guías & Consejos de Compra
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Blog de ComparaWeb
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            Análisis, comparativas de precios y recomendaciones para comprar tecnología al precio más bajo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <Link href={`/blog/${post.slug}`} className="block h-48 overflow-hidden bg-slate-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="font-bold text-blue-600 hover:underline">
                  Leer artículo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}