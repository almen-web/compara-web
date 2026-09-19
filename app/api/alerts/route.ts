import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { productName, email, targetPrice } = await request.json();

    if (!email || !productName) {
      return NextResponse.json(
        { error: 'Email y nombre del producto son requeridos.' },
        { status: 400 }
      );
    }

    // 1. Guardar en la base de datos de Supabase
    const { data, error } = await supabase
      .from('price_alerts')
      .insert([
        {
          product_name: productName,
          email: email,
          target_price: targetPrice ? parseFloat(targetPrice) : null,
        },
      ])
      .select();

    if (error) {
      console.error('Error insertando en Supabase:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const alertId = data && data[0] ? data[0].id : null;
    const cancelUrl = `https://comparaweb.vercel.app/api/alerts/cancel?id=${alertId}`;

    // 2. Enviar correo transaccional de bienvenida con Resend
    try {
      await resend.emails.send({
        from: 'ComparaWeb <onboarding@resend.dev>', // Dominio por defecto de Resend para pruebas
        to: email,
        subject: `Alerta activada: ${productName}`,
        html: `
          <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #0f172a; margin-top: 0;">¡Alerta de precio confirmada! 🔔</h2>
            <p style="color: #334155; font-size: 14px;">Hola,</p>
            <p style="color: #334155; font-size: 14px;">Hemos registrado con éxito tu alerta de precio para:</p>
            <div style="background-color: #f8fafc; padding: 12px 16px; border-radius: 8px; margin: 16px 0;">
              <strong style="color: #1e293b; font-size: 15px;">${productName}</strong>
              ${targetPrice ? `<p style="margin: 4px 0 0 0; color: #0284c7; font-size: 13px; font-weight: bold;">Precio objetivo: ${targetPrice} €</p>` : ''}
            </div>
            <p style="color: #334155; font-size: 14px;">Te enviaremos un correo inmediatamente en cuanto detectemos una bajada de precio en las tiendas monitorizadas.</p>
            
            <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
            
            <p style="color: #94a3b8; font-size: 11px; text-align: center;">
              En cumplimiento del RGPD, puedes cancelar esta alerta o eliminar tu correo en cualquier momento haciendo clic en el siguiente enlace:
              <br/>
              <a href="${cancelUrl}" style="color: #ef4444; text-decoration: underline;">Cancelar mi alerta de precio</a>
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Error enviando el correo con Resend:', emailError);
      // No interrumpimos la respuesta si falla el envio de mail pero se guardo en la BD
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}