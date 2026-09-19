import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { productName, email, targetPrice } = await request.json();

    if (!email || !productName) {
      return NextResponse.json(
        { error: 'Email y nombre del producto son requeridos.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('price_alerts')
      .insert([
        {
          product_name: productName,
          email: email,
          target_price: targetPrice ? parseFloat(targetPrice) : null,
        },
      ]);

    if (error) {
      console.error('Error insertando en Supabase:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}