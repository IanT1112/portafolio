import Image from "next/image";
import Link from "next/link";

const appUrl = "https://proyecto-ia-blue.vercel.app/";

const stack = [
  {
    categoria: "Frontend",
    items: ["React 19 + Vite", "CSS3 responsive", "Fetch API", "SVG para gráficos personalizados"],
  },
  {
    categoria: "Backend & IA",
    items: ["FastAPI", "Python", "Scikit-learn", "Pandas", "NumPy", "Joblib (modelos entrenados)"],
  },
  {
    categoria: "Machine Learning",
    items: ["Random Forest Classifier", "Random Forest Regressor", "Pipeline de preprocesamiento", "Modelos serializados (.pkl)"],
  },
  {
    categoria: "Datos",
    items: ["Dataset de startups", "Feature Engineering", "Normalización y codificación de variables", "Entrenamiento y validación de modelos"],
  },
  {
    categoria: "Deploy",
    items: ["Frontend en Vercel", "Backend en Render", "GitHub", "CI/CD mediante Git Push"],
  },
];

const funcionalidades = [
  {
    grupo: "Evaluación de inversión",
    items: [
      "Formulario inteligente con variables financieras, empresariales y del equipo fundador.",
      "Predicción de probabilidad de éxito mediante Inteligencia Artificial.",
      "Clasificación automática del riesgo: Bajo, Medio o Alto.",
      "Recomendación final: Invertir, Evaluar con más información o No invertir.",
    ],
  },
  {
    grupo: "Análisis financiero",
    items: [
      "Predicción de valuación estimada de la startup.",
      "Cálculo automático del ROI esperado.",
      "Simulación de retorno para distintos escenarios de inversión.",
      "Visualización gráfica de la proyección a 36 meses.",
    ],
  },
  {
    grupo: "Inteligencia Artificial",
    items: [
      "Modelo entrenado con datos históricos de startups.",
      "Clasificación mediante Random Forest.",
      "Predicción de valuación mediante Machine Learning.",
      "Procesamiento automático de variables categóricas y numéricas.",
    ],
  },
  {
    grupo: "Infraestructura",
    items: [
      "API REST desarrollada con FastAPI.",
      "Separación Frontend / Backend.",
      "Modelos de IA cargados dinámicamente (.pkl).",
      "Despliegue independiente en Vercel y Render.",
      "CORS configurado para producción.",
    ],
  },
];

const resultados = [
  "Desarrollo completo de una plataforma Fullstack con Inteligencia Artificial.",
  "Implementación de modelos de Machine Learning aplicados al análisis de inversiones.",
  "Integración entre React, FastAPI y Scikit-learn.",
  "Diseño de dashboards y visualización de proyecciones financieras.",
  "Pipeline completo de Ciencia de Datos: preprocesamiento, entrenamiento, evaluación y despliegue.",
  "Arquitectura desacoplada con frontend y backend desplegados en la nube.",
  "Flujo completo: idea → dataset → entrenamiento → API → frontend → deploy → producción.",
];

export default function FundMind() {
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
          <div className="mb-8 max-w-4xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
              <span className="h-px w-8 bg-[#365b40]" />
              Fullstack · Plataforma de Inteligencia Artificial
            </span>
            <h1 className="mt-5 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
              FundMind
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
              Plataforma web fullstack basada en Inteligencia Artificial que permite a inversores
              evaluar startups, estimar su probabilidad de éxito, analizar riesgos y visualizar
              proyecciones financieras mediante modelos de Machine Learning.
            </p>
          </div>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#365b40] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(35,67,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b33]"
          >
            Visitar FundMind <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="mx-auto mb-24 max-w-5xl" aria-label="Vista previa de la plataforma FundMind">
          <div className="rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#061510]">
              <Image
                src="/proyectos/fundmind.png"
                alt="Vista previa de FundMind evaluando una startup con Inteligencia Artificial"
                width={1882}
                height={901}
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
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">Tecnologías</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Stack técnico</h2>
            </div>
            <p className="text-sm leading-6 text-black/60">
              Una arquitectura moderna que integra modelos de Machine Learning, visualización de
              datos, API REST y despliegue en la nube.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((bloque, index) => (
              <article
                key={bloque.categoria}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/65"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#365b40]">{bloque.categoria}</h3>
                  <span className="text-xs font-bold text-[#365b40]/45">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <ul className="space-y-3">
                  {bloque.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-black/70">
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
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">Alcance</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Funcionalidades</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {funcionalidades.map((bloque, index) => (
              <article
                key={bloque.grupo}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#365b40] text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black tracking-tight">{bloque.grupo}</h3>
                </div>
                <ul className="space-y-4">
                  {bloque.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-black/65">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#6b9071]/50 text-[9px] font-bold text-[#365b40]">✓</span>
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
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#bcd5b5]">Resultado</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Lo que demuestra</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {resultados.map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/8 p-5 text-sm leading-6 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-[#365b40]/20 py-8 text-center">
          <Link href="/proyectos" className="inline-flex items-center gap-2 text-sm font-bold text-[#294b33] transition hover:gap-3">
            <span aria-hidden="true">←</span>
            Volver a todos los proyectos
          </Link>
        </footer>
      </div>
    </main>
  );
}
