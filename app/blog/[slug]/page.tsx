import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { products } from '@/data/products';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: 'Artículo no encontrado | ComparaWeb' };

  return {
    title: `${post.title} | Blog ComparaWeb`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        <Link href="/blog" className="text-xs font-semibold text-blue-600 hover:underline mb-6 inline-block">
          ← Volver al blog
        </Link>

        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="my-6 h-64 sm:h-80 w-full overflow-hidden rounded-xl bg-slate-100">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
          {post.content.intro}
        </p>

        <div className="space-y-8 text-slate-800">
          {post.content.sections.map((sec, idx) => {
            const linkedProduct = sec.productId ? products.find((p) => p.id === sec.productId) : null;

            return (
              <section key={idx} className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900">{sec.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{sec.body}</p>

                {linkedProduct && (
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between gap-4 mt-3">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase">Producto mencionado</span>
                      <h3 className="text-xs font-bold text-slate-900">{linkedProduct.name}</h3>
                    </div>
                    <Link
                      href={`/producto/${linkedProduct.id}`}
                      className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      Ver Precios →
                    </Link>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 bg-slate-50 p-5 rounded-xl">
          <h3 className="text-sm font-bold text-slate-900 mb-1">Conclusión</h3>
          <p className="text-xs text-slate-600 leading-relaxed">{post.content.conclusion}</p>
        </div>
      </article>
    </main>
  );
}