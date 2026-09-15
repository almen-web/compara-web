import Link from "next/link";

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            Compara
            <span className="text-blue-600">
              Web
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            Inicio
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold text-blue-600">
            Información legal
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Aviso legal
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Última actualización: septiembre de 2026
          </p>

          <div className="mt-10 space-y-8 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. Datos identificativos
              </h2>

              <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                <p>
                  <strong>Nombre del sitio:</strong>{" "}
                  ComparaWeb
                </p>

                <p className="mt-2">
                  <strong>Titular:</strong>{" "}
                  [Nombre o empresa del titular]
                </p>

                <p className="mt-2">
                  <strong>NIF/CIF:</strong>{" "}
                  [Pendiente de completar]
                </p>

                <p className="mt-2">
                  <strong>Domicilio:</strong>{" "}
                  [Pendiente de completar]
                </p>

                <p className="mt-2">
                  <strong>Email de contacto:</strong>{" "}
                  [Pendiente de completar]
                </p>
              </div>

              <p className="mt-4 leading-7">
                Los datos anteriores deberán
                completarse con la información real del
                titular antes de publicar el sitio como
                proyecto comercial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Objeto del sitio web
              </h2>

              <p className="mt-3 leading-7">
                ComparaWeb es una plataforma orientada
                a facilitar la búsqueda y comparación
                de productos y ofertas disponibles en
                diferentes tiendas.
              </p>

              <p className="mt-3 leading-7">
                El sitio puede mostrar información sobre
                productos, precios, gastos de envío,
                valoraciones, condiciones y otros datos
                relacionados con las ofertas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Información sobre precios
              </h2>

              <p className="mt-3 leading-7">
                Los precios y las condiciones de las
                ofertas pueden cambiar en cualquier
                momento.
              </p>

              <p className="mt-3 leading-7">
                El precio y las condiciones definitivas
                aplicables a una compra serán los que
                aparezcan en la tienda correspondiente
                en el momento de realizar la operación.
              </p>

              <p className="mt-3 leading-7">
                Durante la fase de desarrollo, algunas
                ofertas mostradas pueden ser datos de
                demostración.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Enlaces externos
              </h2>

              <p className="mt-3 leading-7">
                ComparaWeb puede incluir enlaces hacia
                sitios web de terceros, incluyendo
                tiendas y plataformas comerciales.
              </p>

              <p className="mt-3 leading-7">
                ComparaWeb no controla necesariamente
                los contenidos, condiciones, precios,
                disponibilidad o políticas de dichos
                sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Afiliación
              </h2>

              <p className="mt-3 leading-7">
                ComparaWeb podrá participar en programas
                de afiliación de terceros. En esos casos,
                determinados enlaces podrán generar una
                comisión para ComparaWeb si el usuario
                realiza una acción o compra conforme a
                las condiciones del programa de
                afiliación correspondiente.
              </p>

              <p className="mt-3 leading-7">
                La existencia de una posible comisión no
                implica que el precio mostrado al usuario
                sea necesariamente superior.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                6. Propiedad intelectual
              </h2>

              <p className="mt-3 leading-7">
                El diseño, estructura, código y
                contenidos propios de ComparaWeb estarán
                protegidos por la normativa aplicable en
                materia de propiedad intelectual e
                industrial.
              </p>

              <p className="mt-3 leading-7">
                Las marcas, nombres comerciales,
                logotipos y otros elementos pertenecientes
                a terceros seguirán siendo propiedad de
                sus respectivos titulares.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                7. Responsabilidad
              </h2>

              <p className="mt-3 leading-7">
                ComparaWeb procurará mantener la
                información del sitio actualizada, pero
                no garantiza que todos los precios,
                disponibilidades o condiciones estén
                siempre actualizados en tiempo real.
              </p>

              <p className="mt-3 leading-7">
                La contratación de productos y servicios
                se realiza directamente con la tienda o
                proveedor correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                8. Modificaciones
              </h2>

              <p className="mt-3 leading-7">
                Este aviso legal podrá modificarse cuando
                resulte necesario para adaptarlo a cambios
                en el sitio, en sus servicios o en la
                normativa aplicable.
              </p>
            </section>

            <section className="rounded-2xl bg-blue-50 p-5">
              <h2 className="text-xl font-bold text-slate-900">
                Nota sobre el prototipo
              </h2>

              <p className="mt-3 leading-7">
                Los datos identificativos incluidos entre
                corchetes son marcadores temporales y
                deberán sustituirse por los datos reales
                antes de la publicación comercial.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Volver a ComparaWeb
          </Link>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 ComparaWeb</p>

          <div className="flex gap-5">
            <Link
              href="/sobre"
              className="hover:text-blue-600"
            >
              Sobre nosotros
            </Link>

            <Link
              href="/privacidad"
              className="hover:text-blue-600"
            >
              Privacidad
            </Link>

            <Link
              href="/aviso-legal"
              className="hover:text-blue-600"
            >
              Aviso legal
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}