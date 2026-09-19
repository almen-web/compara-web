import { createClient } from '@supabase/supabase-js';

// Usamos las variables de entorno de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateLivePrices() {
  console.log('🔄 Iniciando actualización automática de precios y valoraciones...');

  // 1. Obtenemos los productos actuales que están en Supabase
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('❌ Error al obtener los productos:', error.message);
    return;
  }

  for (const product of products) {
    // 2. Aquí es donde harías una llamada a la API oficial de la tienda (ej. Amazon PA-API)
    // o un scraper para consultar el precio real actual de la oferta.
    // Como simulación, supongamos que consultamos la tienda y recalculamos/actualizamos ofertas:
    
    const updatedOffers = product.offers.map((offer) => {
      // Simulamos una pequeña variación o actualización de precio en directo
      return {
        ...offer,
        price: offer.price, // Aquí actualizarías con el precio real obtenido de la API
      };
    });

    // 3. Actualizamos el registro en Supabase con los datos frescos
    const { error: updateError } = await supabase
      .from('products')
      .update({
        offers: updatedOffers,
        rating: product.rating, // Actualizado si viene de una API de valoraciones
        num_reviews: product.num_reviews,
      })
      .eq('id', product.id);

    if (updateError) {
      console.error(`❌ Error actualizando el producto ${product.name}:`, updateError.message);
    } else {
      console.log(`✅ Producto actualizado con éxito: ${product.name}`);
    }
  }

  console.log('✨ ¡Actualización de precios completada!');
}

updateLivePrices();