import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse('ID de alerta no válido', { status: 400 });
  }

  // Eliminar la alerta de la base de datos
  const { error } = await supabase
    .from('price_alerts')
    .delete()
    .eq('id', id);

  if (error) {
    return new NextResponse('Error al cancelar la alerta', { status: 500 });
  }

  // Responder con una confirmación limpia en HTML
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Alerta Cancelada - ComparaWeb</title>
        <meta charset="utf-8">
        <style>
          body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #f8fafc; }
          .card { background: white; padding: 32px; border-radius: 16px; border: 1px solid #e2e8f0; text-align: center; max-width: 400px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          h1 { font-size: 20px; color: #0f172a; margin-bottom: 8px; }
          p { font-size: 14px; color: #64748b; margin-bottom: 24px; }
          a { background: #2563eb; color: white; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Alerta eliminada correctamente</h1>
          <p>Tus datos han sido eliminados de nuestro sistema y no recibirás más notificaciones sobre este producto.</p>
          <a href="/">Volver a ComparaWeb</a>
        </div>
      </body>
    </html>
    `,
    { headers: { 'Content-Type': 'text/html' } }
  );
}