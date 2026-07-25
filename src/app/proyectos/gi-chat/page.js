import Image from "next/image";
import Link from "next/link";

const stack = [
  {
    categoria: "Frontend",
    items: [
      "HTML5 semántico",
      "CSS3 puro (variables, keyframes, glassmorphism)",
      "JavaScript vanilla",
      "Grid layout responsive + media queries",
    ],
  },
  {
    categoria: "Tipografía",
    items: [
      "Google Fonts",
      "Cormorant Garamond (display / títulos)",
      "Jost (cuerpo de texto)",
    ],
  },
  {
    categoria: "Formulario",
    items: [
      "Formspree (backend de envíos)",
      "Sin servidor propio",
      "Sin dependencias adicionales",
    ],
  },
  {
    categoria: "Deploy",
    items: ["Vercel", "Sin frameworks ni librerías externas"],
  },
];

const flujo = [
  {
    num: "01",
    titulo: "Normalización",
    desc: "El mensaje se convierte a minúsculas, se eliminan tildes y puntuación con RegEx y la API nativa normalize('NFD').",
  },
  {
    num: "02",
    titulo: "Base de conocimiento",
    desc: "El texto normalizado se compara contra intents estructurados — cada uno con keywords, respuestas posibles y acciones opcionales.",
  },
  {
    num: "03",
    titulo: "Puntuación ponderada",
    desc: "Cada intent recibe un score según coincidencias y longitud de keywords. Las keywords multi-palabra pesan más. Gana el de mayor puntaje.",
  },
  {
    num: "04",
    titulo: "Fallback contextual",
    desc: "Si ningún intent supera el umbral mínimo, el bot responde con un fallback contextual en lugar de un error genérico.",
  },
  {
    num: "05",
    titulo: "Respuestas variadas",
    desc: "Las respuestas se eligen aleatoriamente dentro de un array por intent, dando variedad natural a la conversación.",
  },
  {
    num: "06",
    titulo: "Acciones asociadas",
    desc: "Ciertos intents disparan acciones — detectar intención de contacto hace scroll automático al formulario.",
  },
];

const demuestra = [
  "Lógica de procesamiento de lenguaje sin APIs externas ni modelos de IA",
  "Construcción dinámica del DOM — widget modular y reutilizable",
  "CSS avanzado: glassmorphism, animaciones y diseño responsive puro",
  "Arquitectura de chatbot escalable basada en intents ponderados",
  "Integración de servicios externos (Formspree) sin backend propio",
];

export default function GiChat() {
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
              JavaScript · Procesamiento de lenguaje
            </span>
            <h1 className="mt-5 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
              GiChat
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
              Landing page con chatbot de detección de intenciones construido
              completamente desde cero en JavaScript puro, sin APIs externas ni
              modelos de lenguaje. Utiliza coincidencias de palabras clave
              ponderadas para interpretar cada mensaje.
            </p>
          </div>

          <a
            href="https://gichat-weld.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#365b40] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(35,67,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b33]"
          >
            Visitar GiChat <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section
          className="mx-auto mb-24 max-w-5xl"
          aria-label="Vista previa de GiChat"
        >
          <div className="rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#dfe9da]">
              <Image
                src="/proyectos/gichat.png"
                alt="Vista previa de la landing page y chatbot GiChat"
                width={1897}
                height={896}
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
              Una implementación ligera construida con tecnologías web nativas,
              sin frameworks ni dependencias innecesarias.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {stack.map((bloque, index) => (
              <article
                key={bloque.categoria}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/65"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#365b40]">
                    {bloque.categoria}
                  </h3>
                  <span className="text-xs font-bold text-[#365b40]/55">
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
            Flujo de procesamiento
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Cómo funciona el chatbot
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {flujo.map((paso) => (
              <article
                key={paso.num}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#365b40] text-xs font-black text-white">
                    {paso.num}
                  </span>
                  <h3 className="text-lg font-black tracking-tight">
                    {paso.titulo}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-black/65">{paso.desc}</p>
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
              {demuestra.map((item) => (
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
