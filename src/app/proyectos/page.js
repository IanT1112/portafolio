import Image from "next/image";
import Link from "next/link";

const proyectos = [
  {
    title: "Sistema de IA para detección temprana de ACV",
    description:
      "Aplicación web basada en machine learning para predecir el riesgo de accidente cerebrovascular.",
    href: "/proyectos/acv",
    image: "/proyectos/acv.png",
    category: "Machine Learning",
  },
  {
    title: "Trujillo Responde",
    description:
      "Plataforma ciudadana para reportar incidencias urbanas y mejorar la gestión municipal.",
    href: "/proyectos/trujillo-responde",
    image: "/proyectos/trujillo-responde.png",
    category: "GovTech · IA",
  },
  {
    title: "Dashboard Historial Crediticio",
    description:
      "Dashboard financiero en Power BI para analizar riesgo, exposición de capital y tasas de incumplimiento.",
    href: "/proyectos/dashboard",
    image: "/proyectos/dashboard.png",
    category: "Data Analytics",
  },
  {
    title: "Blog Personal — ianconia.xyz",
    description:
      "Plataforma editorial fullstack con newsletter, panel privado y una experiencia de lectura cuidada.",
    href: "/proyectos/blog-personal",
    image: "/proyectos/ianconia.jpg",
    category: "Fullstack",
  },
  {
    title: "GiChat",
    description:
      "Landing page con chatbot de detección de intenciones desarrollado desde cero en JavaScript puro.",
    href: "/proyectos/gi-chat",
    image: "/proyectos/gichat.png",
    category: "JavaScript · NLP",
  },
];

export default function Proyectos() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e5efdc] px-6 py-8 text-black md:px-12 md:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_5%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_92%_20%,rgba(107,144,113,0.45),transparent_35%),linear-gradient(145deg,#f4f7ef_0%,#dce9d2_48%,#a9c1a7_100%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/25 bg-white/45 px-4 py-2 text-sm font-semibold text-[#294b33] backdrop-blur-sm transition hover:border-[#365b40]/50 hover:bg-white/70"
        >
          <span aria-hidden="true">←</span>
          Volver al inicio
        </Link>

        <header className="mb-12 mt-14 md:mb-16 md:mt-20">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
            <span className="h-px w-8 bg-[#365b40]" />
            Portafolio
          </span>
          <div className="mt-4 grid gap-5 md:grid-cols-[1fr_420px] md:items-end">
            <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
              Mis proyectos
            </h1>
            <p className="text-sm leading-6 text-black/60 md:text-base">
              Una selección de productos digitales donde combino desarrollo,
              inteligencia artificial y análisis de datos para resolver problemas
              reales.
            </p>
          </div>
        </header>

        <section
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Listado de proyectos"
        >
          {proyectos.map((proyecto, index) => (
            <Link
              key={proyecto.href}
              href={proyecto.href}
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/55 shadow-[0_16px_45px_rgba(35,67,43,0.11)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#365b40]/25 hover:shadow-[0_24px_60px_rgba(35,67,43,0.2)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#203c29]">
                <Image
                  src={proyecto.image}
                  alt={`Vista previa de ${proyecto.title}`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                  {proyecto.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-5">
                  <h2 className="text-xl font-black leading-tight tracking-tight">
                    {proyecto.title}
                  </h2>
                  <span className="shrink-0 text-xs font-bold text-[#365b40]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-6 text-black/60">
                  {proyecto.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#365b40]">
                    Ver proyecto
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#365b40] text-white transition duration-300 group-hover:translate-x-1 group-hover:-rotate-12">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
