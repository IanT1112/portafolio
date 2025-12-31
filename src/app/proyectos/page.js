import Link from "next/link";

export default function Proyectos() {
  return (
    <main className="min-h-screen bg-[#cfe6b8] px-12 py-20 text-black"
    style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)'
      }}
    >
      <div className="flex gap-4 mb-6 text-sm">
        
        <Link
            href="/"
            className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
            ← Inicio
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-10 text-center">
        PROYECTOS
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PROYECTO 1 */}
          <a
            href="/proyectos/acv"
            className="border p-6 hover:bg-black hover:text-white transition flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg mb-2">
                Sistema de IA para detección temprana de ACV
              </h2>

              <p className="text-sm">
                Aplicación web basada en machine learning para la predicción del riesgo
                de accidente cerebrovascular, desplegada con Streamlit.
              </p>
            </div>

            <span className="mt-4 text-sm font-semibold underline underline-offset-4">
              Ver proyecto →
            </span>
          </a>

          {/* PROYECTO 2 */}
          <a
            href="/proyectos/trujillo-responde"
            className="border p-6 hover:bg-black hover:text-white transition flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg mb-2">
                Trujillo Responde 
              </h2>

              <p className="text-sm">
                Web donde el ciudadano puede reportar incidencias urbanas para mejorar la gestión municipal.
              </p>
            </div>

            <span className="mt-4 text-sm font-semibold underline underline-offset-4">
              Ver proyecto →
            </span>
          </a>
          {/* PROYECTO 3 */}
          <a
            href="/proyectos/dashboard"
            className="border p-6 hover:bg-black hover:text-white transition flex flex-col justify-between"
          >
          <h2 className="font-semibold">Dashboard Historial Crediticio</h2>
          <p className="text-sm">
            Dashboard financiero desarrollado en Power BI para analizar el riesgo crediticio, la exposición del capital y la tasa de incumplimiento mediante segmentación interactiva y métricas clave.
          </p>
          <span className="mt-4 text-sm font-semibold underline underline-offset-4">
                Ver proyecto →
              </span>
          </a>   
      </section>
    </main>
  );
}
