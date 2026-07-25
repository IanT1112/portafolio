import Image from "next/image";
import Link from "next/link";

const stack = [
  {
    categoria: "Frontend",
    items: ["React 19 + Vite", "Tailwind CSS v4", "React Router DOM", "html2canvas"],
  },
  {
    categoria: "Backend & BD",
    items: ["Supabase (PostgreSQL + RLS)", "Supabase Storage", "Supabase Edge Functions", "Supabase Auth (JWT)"],
  },
  {
    categoria: "Email",
    items: ["Resend API", "DKIM, SPF y DMARC"],
  },
  {
    categoria: "Analytics",
    items: ["Google Analytics 4", "Métricas de usuarios activos en tiempo real", "Seguimiento de eventos y páginas vistas"],
  },
  {
    categoria: "Deploy",
    items: ["Vercel (CI/CD)", "Dominio propio: ianconia.xyz", "DNS en Porkbun"],
  },
];

const funcionalidades = [
  {
    grupo: "Experiencia pública",
    items: [
      "Landing editorial con hero, imagen personal y animaciones de entrada",
      "Carrusel responsive (1 / 2 / 4 cards según pantalla)",
      "Página de lectura estilo NYT con barra de progreso, drop cap y tipografía editorial",
      "Sistema de newsletter con email de bienvenida automático",
      "Generador de imagen para Instagram Stories (1080×1920 px) con glassmorphism",
      "Botón Web Share API para compartir en móvil",
    ],
  },
  {
    grupo: "Panel administrativo",
    items: [
      "Login con autenticación JWT",
      "Publicar, editar y eliminar artículos, libros y documentales",
      "Doble imagen por post (vertical para card, horizontal para lectura)",
      "Notificaciones por email a suscriptores con rate limiting",
    ],
  },
  {
    grupo: "Analytics",
    items: [
      "Google Analytics 4 integrado para seguimiento de tráfico",
      "Panel de usuarios activos en tiempo real",
      "Métricas de páginas vistas, sesiones y comportamiento de lectura",
    ],
  },
  {
    grupo: "Infraestructura",
    items: [
      "Row Level Security en todas las tablas",
      "Políticas de acceso diferenciadas (anon / authenticated)",
      "Routing con vercel.json para SPA",
      "Auto-deploy en cada git push",
    ],
  },
];

const aprendizajes = [
  "Arquitectura fullstack sin framework backend tradicional",
  "Integración de múltiples servicios en la nube",
  "Diseño UI/UX de nivel editorial sin librerías de componentes",
  "Seguridad con RLS y autenticación JWT",
  "Monitoreo de tráfico y comportamiento con Google Analytics 4",
  "Flujo completo: idea → diseño → desarrollo → deploy → dominio propio",
];

export default function BlogPersonal() {
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
              Fullstack · Plataforma editorial
            </span>
            <h1 className="mt-5 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
              Blog Personal
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
              Plataforma editorial personal fullstack construida desde cero, donde
              el autor publica artículos, reseñas de libros y documentales con una
              experiencia de lectura premium.
            </p>
          </div>

          <a
            href="https://www.ianconia.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#365b40] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(35,67,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b33]"
          >
            Visitar ianconia.xyz <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="mx-auto mb-24 max-w-5xl" aria-label="Vista previa del proyecto">
          <div className="rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#dfe9da]">
              <Image
                src="/proyectos/ianconia.jpg"
                alt="Vista previa de la plataforma editorial ianconia.xyz"
                width={1896}
                height={932}
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
              Una arquitectura moderna que conecta interfaz, datos, autenticación,
              correo, analítica y despliegue continuo.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((bloque, index) => (
              <article
                key={bloque.categoria}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/65"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#365b40]">
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
                Resultado
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Lo que demuestra
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aprendizajes.map((item) => (
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
