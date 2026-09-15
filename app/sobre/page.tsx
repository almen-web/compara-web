import Link from "next/link";

export default function AboutPage() {
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

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <div className="text-6xl">🔎</div>

          <h1 className="mt-6 text-4xl font-bold">
            Sobre ComparaWeb
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            ComparaWeb nace con una idea sencilla:
            ayudarte a encontrar y comparar ofertas
            de productos en diferentes tiendas desde
            un solo lugar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">💰</div>

            <h2 className="mt-4 text-xl font-bold">
              Comparar precios
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Reunimos diferentes ofertas para que
              puedas comparar precios y gastos de
              envío antes de comprar.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">🏪</div>

            <h2 className="mt-4 text-xl font-bold">
              Diferentes tiendas
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Nuestro objetivo es mostrar ofertas de
              diferentes tiendas y facilitar la
              búsqueda de la opción que más te
              interese.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">📊</div>

            <h2 className="mt-4 text-xl font-bold">
              Información útil
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Además del precio, queremos mostrar
              información como valoraciones,
              condiciones, gastos de envío e
              historial de precios.
            </p>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">🔔</div>

            <h2 className="mt-4 text-xl font-bold">
              Alertas de precio
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              En el futuro podrás recibir avisos
              cuando el precio de un producto que te
              interese baje.
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-3xl bg-blue-600 p-8 text-white md:p-10">
          <h2 className="text-2xl font-bold">
            Nuestro objetivo
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-blue-100">
            Queremos convertir ComparaWeb en una
            herramienta sencilla para comparar
            productos, descubrir ofertas y tomar
            mejores decisiones de compra.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Empezar a comparar →
          </Link>
        </section>

        <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            Información sobre las ofertas
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Las ofertas mostradas actualmente en
            ComparaWeb forman parte del prototipo.
            Estamos trabajando para conectar fuentes
            autorizadas y mostrar información real y
            actualizada.
          </p>
        </section>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          © 2026 ComparaWeb
        </div>
      </footer>
    </main>
  );
}