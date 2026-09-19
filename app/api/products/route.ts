import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filtered = [...products];

  // Filtrar por categoría si se especifica
  if (category && category !== 'Todos') {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  // Filtrar por texto de búsqueda si se especifica
  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));
  }

  // Devolver los productos en formato JSON
  return NextResponse.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
}