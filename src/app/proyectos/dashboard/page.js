import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#cfe6b8] px-16 py-4 text-black"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)'
      }}>
      {/* Navegación */}
      <div className="flex gap-4 mb-6 text-sm">
        <Link
            href="/"
            className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
            ← Inicio
        </Link>

        <Link
            href="/proyectos"
            className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
            ← Proyectos
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-black mb-8">
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
            {/* GLASS CARD */}
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
              <div className="space-y-1">
                  <p>
                  Este proyecto consiste en el desarrollo de un dashboard de análisis de riesgo crediticio, simulando un escenario real del sector financiero. A partir de un dataset de préstamos, se construyó un modelo analítico que permite evaluar el comportamiento de los clientes y los préstamos según su grado de riesgo y perfil del usuario.
                  </p>

                  <p>
                  El dashboard presenta indicadores clave como el monto total prestado, el número de clientes, los préstamos en estado de incumplimiento (default) y la tasa de default, permitiendo identificar patrones de riesgo y niveles de exposición financiera.
                  </p>

                  <p>
                  Además, se implementaron visualizaciones que muestran la relación entre el grado del préstamo (A–G) y la tasa de incumplimiento, así como la concentración del capital otorgado en cada nivel de riesgo. El uso de segmentadores interactivos permite explorar distintos escenarios y analizar cómo cambia el riesgo al filtrar por perfil de cliente.
                  </p>

                  <p>
                  Este análisis permite responder preguntas clave para una entidad financiera, como:
                  </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>¿En qué grados de riesgo se concentra la mayor parte del capital?</li>
                <li>¿Qué niveles presentan mayor tasa de incumplimiento?</li>
                <li>¿Cómo influye el perfil del cliente en el riesgo crediticio?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      </main>
  );
}

