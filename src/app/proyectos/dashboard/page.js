import Image from "next/image";
import Link from "next/link";

const stack = [
  {
    categoria: "Visualización",
    items: ["Power BI", "Dashboards y visualización interactiva"],
  },
  {
    categoria: "Métricas",
    items: ["DAX", "KPIs y métricas de riesgo crediticio"],
  },
  {
    categoria: "Análisis financiero",
    items: ["Evaluación de default", "Análisis de exposición de capital"],
  },
  {
    categoria: "Business Intelligence",
    items: ["Soporte a decisiones estratégicas", "Lectura ejecutiva de resultados"],
  },
  {
    categoria: "Modelado de datos",
    items: ["Estructuración de relaciones", "Optimización del análisis"],
  },
];

const funcionalidades = [
  {
    grupo: "Riesgo crediticio",
    items: [
      "Evaluación de la cartera según el perfil de cada cliente",
      "Segmentación por grados de riesgo crediticio de A a G",
      "Identificación de los niveles con mayor incumplimiento",
    ],
  },
  {
    grupo: "Exposición de capital",
    items: [
      "Análisis del capital otorgado por nivel de riesgo",
      "Detección de concentraciones relevantes dentro de la cartera",
      "Comparación visual entre exposición y tasa de default",
    ],
  },
  {
    grupo: "Exploración interactiva",
    items: [
      "KPIs para consultar rápidamente el estado de la cartera",
      "Filtros interactivos para profundizar en cada segmento",
      "Visualizaciones orientadas a la toma de decisiones",
    ],
  },
];

const preguntas = [
  "¿En qué niveles de riesgo se concentra la mayor parte del capital otorgado?",
  "¿Qué grados presentan la mayor tasa de incumplimiento?",
  "¿Cómo influye el perfil del cliente en el riesgo crediticio?",
  "¿Qué segmentos necesitan una revisión prioritaria?",
];

export default function Dashboard() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e5efdc] px-6 py-8 text-black md:px-12 md:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_4%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_96%_15%,rgba(107,144,113,0.42),transparent_34%),linear-gradient(145deg,#f4f7ef_0%,#dce9d2_50%,#a9c1a7_100%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <nav className="mb-12 md:mb-16">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/25 bg-white/45 px-4 py-2 text-sm font-semibold text-[#294b33] backdrop-blur-sm transition hover:border-[#365b40]/50 hover:bg-white/70"
          >
            <span aria-hidden="true">←</span>
            Proyectos
          </Link>
        </nav>

        <header className="mb-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
              <span className="h-px w-8 bg-[#365b40]" />
              Data Analytics · Power BI
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
              Dashboard Historial Crediticio
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
              Proyecto de análisis de datos financieros para evaluar el riesgo
              crediticio de una cartera de préstamos según el perfil del cliente y
              su grado de riesgo, desde A hasta G.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Power BI", "DAX", "Modelado de datos", "Business Intelligence"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#365b40]/25 bg-white/45 px-4 py-2 text-xs font-bold text-[#365b40] backdrop-blur-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </header>

        <section
          className="mx-auto mb-24 max-w-5xl"
          aria-label="Vista previa del dashboard"
        >
          <div className="rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#dfe9da]">
              <Image
                src="/proyectos/dashboard.png"
                alt="Dashboard interactivo de historial crediticio"
                width={1406}
                height={789}
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_420px] md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">
                Tecnologías
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Stack técnico
              </h2>
            </div>
            <p className="text-sm leading-6 text-black/60">
              Herramientas de análisis, modelado y visualización utilizadas para
              transformar datos financieros en información accionable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((bloque, index) => (
              <article
                key={bloque.categoria}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/65"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#365b40]">
                    {bloque.categoria}
                  </h3>
                  <span className="text-xs font-bold text-[#365b40]/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-3">
                  {bloque.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-black/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b9071]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">
            Alcance
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Funcionalidades
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {funcionalidades.map((bloque, index) => (
              <article
                key={bloque.grupo}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm"
              >
                <span className="mb-8 grid h-10 w-10 place-items-center rounded-full bg-[#365b40] text-xs font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-5 text-xl font-black tracking-tight">
                  {bloque.grupo}
                </h3>
                <ul className="space-y-4">
                  {bloque.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-black/65"
                    >
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#6b9071]/50 text-[9px] font-bold text-[#365b40]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 overflow-hidden rounded-[2rem] bg-[#294b33] px-6 py-8 text-white shadow-[0_20px_55px_rgba(35,67,43,0.22)] md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#bcd5b5]">
                Análisis
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Preguntas que responde
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {preguntas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/8 p-5 text-sm leading-6 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-[#365b40]/20 py-8 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#294b33] transition hover:gap-3"
          >
            <span aria-hidden="true">←</span>
            Volver a todos los proyectos
          </Link>
        </footer>
      </div>
    </main>
  );
}
