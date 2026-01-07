import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main 
      className="min-h-screen px-6 md:px-16 py-4 text-black"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)'
      }}
    >
      {/* Navegación */}
      <div className="flex gap-3 mb-6 text-sm">
        <Link
          href="/"
          className="px-5 py-2.5 bg-white/40 backdrop-blur-sm border border-gray-400/50 rounded-lg hover:bg-white/60 hover:border-gray-500 hover:shadow-md transition-all duration-200 font-medium"
        >
          ← Inicio
        </Link>

        <Link
          href="/proyectos"
          className="px-5 py-2.5 bg-white/40 backdrop-blur-sm border border-gray-400/50 rounded-lg hover:bg-white/60 hover:border-gray-500 hover:shadow-md transition-all duration-200 font-medium"
        >
          ← Proyectos
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Historial Crediticio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Imagen */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/proyectos/dashboard.png"
              alt="Dashboard Historial Crediticio"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="flex items-start">
          <div
            className="
              bg-white/20
              backdrop-blur-md
              border border-white/30
              shadow-xl
              rounded-2xl
              p-6 md:p-10
              max-w-3xl
              text-sm
              leading-relaxed
            "
          >
            <div className="space-y-4">
              <p>
                Proyecto de análisis de datos financieros donde se desarrolló un dashboard interactivo para evaluar el riesgo crediticio de una cartera de préstamos según el perfil del cliente y el grado de riesgo (A–G).
              </p>

              <div>
                <p className="mb-2">El dashboard permite responder preguntas clave como:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>¿En qué niveles de riesgo se concentra la mayor parte del capital otorgado?</li>
                  <li>¿Qué grados presentan la mayor tasa de incumplimiento (default)?</li>
                  <li>¿Cómo influye el perfil del cliente en el riesgo crediticio?</li>
                </ul>
              </div>

              <p>
                A través de KPIs y filtros interactivos, el análisis apoya la toma de decisiones basada en datos en un contexto real del sector financiero.
              </p>

              <div className="pt-4 border-t border-gray-300/50">
                <h3 className="font-semibold mb-3 text-base">Tecnologías utilizadas:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 2h12l2 4-2 4H6L4 6l2-4zm0 9h12l2 4-2 4H6l-2-4 2-4z"/>
                    </svg>
                    <span>Power BI – Dashboards y visualización interactiva</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2v7H2V2h5zm8 0v10h-5V2h5zm8 0v14h-5V2h5zM7 11v11H2V11h5zm8 3v8h-5v-8h5zm8 2v6h-5v-6h5z"/>
                    </svg>
                    <span>DAX – KPIs y métricas de riesgo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <span>Análisis de Datos Financieros – Evaluación de default y exposición</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    <span>Business Intelligence (BI) – Soporte a decisiones estratégicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/>
                    </svg>
                    <span>Modelado de Datos – Optimización del análisis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

