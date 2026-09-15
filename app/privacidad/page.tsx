import Link from "next/link";

export default function PrivacyPage() {
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
            Política de privacidad
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Última actualización: septiembre de 2026
          </p>

          <div className="mt-10 space-y-8 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. Información general
              </h2>

              <p className="mt-3 leading-7">
                En ComparaWeb nos preocupamos por la
                privacidad de las personas que utilizan
                nuestro sitio web. Esta página explica,
                de forma general, cómo tratamos la
                información relacionada con el uso del
                sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Información que podemos recopilar
              </h2>

              <p className="mt-3 leading-7">
                Dependiendo de las funciones que estén
                activas en cada momento, ComparaWeb
                podrá tratar información técnica
                necesaria para el funcionamiento del
                sitio, como datos relacionados con las
                solicitudes realizadas al servidor.
              </p>

              <p className="mt-3 leading-7">
                Actualmente el prototipo no requiere
                que los usuarios creen una cuenta para
                consultar productos y ofertas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Finalidad del tratamiento
              </h2>

              <p className="mt-3 leading-7">
                La información que pueda tratarse se
                utilizará para proporcionar y mejorar
                las funcionalidades del sitio, mantener
                su seguridad y analizar el funcionamiento
                técnico de la plataforma cuando dichas
                herramientas estén habilitadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Enlaces a tiendas externas
              </h2>

              <p className="mt-3 leading-7">
                ComparaWeb puede mostrar enlaces que
                dirigen a sitios web de terceros.
                Cuando una persona utiliza uno de estos
                enlaces, pasa a utilizar el sitio y las
                políticas de privacidad del tercero
                correspondiente.
              </p>

              <p className="mt-3 leading-7">
                ComparaWeb no controla las políticas de
                privacidad de las tiendas externas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Enlaces de afiliación
              </h2>

              <p className="mt-3 leading-7">
                En el futuro, ComparaWeb podrá utilizar
                enlaces de afiliación proporcionados por
                programas de terceros. Estos enlaces
                podrán permitir que ComparaWeb reciba
                una comisión cuando una persona realice
                determinadas acciones en una tienda,
                siempre de acuerdo con las condiciones
                del programa correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                6. Cookies y tecnologías similares
              </h2>

              <p className="mt-3 leading-7">
                El uso de cookies y tecnologías
                similares dependerá de las herramientas
                que se incorporen al sitio.
              </p>

              <p className="mt-3 leading-7">
                Si se incorporan cookies que requieran
                consentimiento, se habilitarán los
                mecanismos correspondientes antes de su
                utilización cuando sea legalmente
                necesario.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                7. Servicios de terceros
              </h2>

              <p className="mt-3 leading-7">
                ComparaWeb puede incorporar servicios
                tecnológicos de terceros para alojamiento,
                análisis, publicidad, afiliación u otras
                funciones. Cada servicio podrá aplicar
                sus propias condiciones y políticas de
                privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                8. Derechos de los usuarios
              </h2>

              <p className="mt-3 leading-7">
                Cuando resulte aplicable, las personas
                podrán ejercer los derechos reconocidos
                por la normativa de protección de datos,
                incluidos los derechos de acceso,
                rectificación, supresión, oposición,
                limitación y portabilidad.
              </p>

              <p className="mt-3 leading-7">
                Para ejercer estos derechos será
                necesario disponer de un canal de
                contacto habilitado por el responsable
                del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                9. Actualizaciones
              </h2>

              <p className="mt-3 leading-7">
                Esta política podrá actualizarse cuando
                se incorporen nuevas funcionalidades,
                servicios o requisitos legales.
              </p>
            </section>

            <section className="rounded-2xl bg-blue-50 p-5">
              <h2 className="text-xl font-bold text-slate-900">
                Nota sobre el prototipo
              </h2>

              <p className="mt-3 leading-7">
                ComparaWeb se encuentra actualmente en
                fase de desarrollo. Algunas de las
                funcionalidades descritas en esta página
                podrán no estar activas todavía.
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
          </div>
        </div>
      </footer>
    </main>
  );
}