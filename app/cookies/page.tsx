import Link from "next/link";

export default function CookiesPage() {
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
            Política de cookies
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Última actualización: septiembre de 2026
          </p>

          <div className="mt-10 space-y-8 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. ¿Qué son las cookies?
              </h2>

              <p className="mt-3 leading-7">
                Las cookies son pequeños archivos que
                pueden almacenarse en el dispositivo del
                usuario cuando visita un sitio web.
              </p>

              <p className="mt-3 leading-7">
                Pueden utilizarse para recordar
                determinadas preferencias, mantener
                funcionalidades del sitio o recopilar
                información sobre su utilización.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Cookies utilizadas por ComparaWeb
              </h2>

              <p className="mt-3 leading-7">
                El prototipo actual de ComparaWeb está
                diseñado para funcionar sin necesidad de
                utilizar cookies publicitarias o de
                seguimiento para sus funciones básicas.
              </p>

              <p className="mt-3 leading-7">
                Esta situación podrá cambiar cuando se
                incorporen nuevas funcionalidades.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Tipos de cookies
              </h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold text-slate-900">
                    Cookies técnicas
                  </h3>

                  <p className="mt-2 leading-7">
                    Son aquellas necesarias para
                    determinadas funciones técnicas del
                    sitio web.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold text-slate-900">
                    Cookies de análisis
                  </h3>

                  <p className="mt-2 leading-7">
                    Podrán utilizarse en el futuro para
                    conocer cómo se utiliza ComparaWeb y
                    mejorar sus funcionalidades, cuando
                    corresponda y de acuerdo con la
                    normativa aplicable.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold text-slate-900">
                    Cookies publicitarias
                  </h3>

                  <p className="mt-2 leading-7">
                    Podrán incorporarse en el futuro si
                    ComparaWeb utiliza servicios
                    publicitarios que las requieran.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Cookies de terceros
              </h2>

              <p className="mt-3 leading-7">
                Algunas funcionalidades futuras podrían
                utilizar servicios proporcionados por
                terceros. Estos servicios podrían
                establecer sus propias cookies o
                tecnologías similares.
              </p>

              <p className="mt-3 leading-7">
                Cuando se incorporen dichos servicios,
                esta política deberá actualizarse para
                identificar las herramientas utilizadas y
                explicar su finalidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Gestión del consentimiento
              </h2>

              <p className="mt-3 leading-7">
                Cuando una determinada cookie requiera
                consentimiento previo, ComparaWeb deberá
                proporcionar un mecanismo adecuado para
                que el usuario pueda aceptar o rechazar
                las categorías correspondientes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                6. Cómo gestionar las cookies
              </h2>

              <p className="mt-3 leading-7">
                Los navegadores modernos permiten
                consultar, bloquear y eliminar cookies
                desde sus propios ajustes.
              </p>

              <p className="mt-3 leading-7">
                Las opciones disponibles pueden variar
                dependiendo del navegador y del
                dispositivo utilizado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                7. Actualizaciones
              </h2>

              <p className="mt-3 leading-7">
                Esta política podrá actualizarse cuando
                ComparaWeb incorpore nuevas herramientas,
                cookies o servicios de terceros.
              </p>
            </section>

            <section className="rounded-2xl bg-blue-50 p-5">
              <h2 className="text-xl font-bold text-slate-900">
                Nota sobre el prototipo
              </h2>

              <p className="mt-3 leading-7">
                La configuración definitiva de cookies y
                consentimiento se realizará cuando el
                sitio incorpore herramientas reales de
                analítica, publicidad o afiliación que
                puedan requerirlo.
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

          <div className="flex flex-wrap justify-center gap-5">
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

            <Link
              href="/cookies"
              className="hover:text-blue-600"
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}