import Image from "next/image";
import Link from "next/link";

const stack = [
  { categoria: "Visión artificial", items: ["Python", "YOLO / Ultralytics", "Label Studio"] },
  { categoria: "Extracción", items: ["Tesseract OCR", "ZXing", "EAN-13"] },
  { categoria: "Interpretación", items: ["Reglas por marca", "Ollama como respaldo", "Normalización de datos"] },
  { categoria: "Producto", items: ["Next.js", "Streamlit", "PostgreSQL / Railway"] },
];

const funcionalidades = [
  {
    grupo: "Captura y detección",
    items: [
      "Captura desde cámara o carga de fotografía",
      "Detección de la región de la etiqueta con YOLO",
      "Preprocesamiento para orientación, perspectiva e iluminación",
    ],
  },
  {
    grupo: "Lectura inteligente",
    items: [
      "Extracción de texto mediante OCR",
      "Lectura especializada de códigos de barras",
      "Interpretación de campos según la marca y el contexto",
    ],
  },
  {
    grupo: "Validación y registro",
    items: [
      "Identificación de marca, modelo, código y talla US",
      "Revisión humana antes de persistir resultados",
      "Preparación para integrarse con un sistema de inventario",
    ],
  },
];

const aprendizajes = [
  "El prototipo logró recuperar los cuatro campos principales en una prueba documentada.",
  "La arquitectura separa detección visual, OCR, barras y reglas de interpretación.",
  "La revisión humana evita guardar automáticamente lecturas ambiguas.",
  "La siguiente fase es validar precisión, multimarcas y el flujo completo de extremo a extremo.",
];

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function IdentificadorEtiquetas() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e5efdc] px-6 py-8 text-black md:px-12 md:py-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_4%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_96%_15%,rgba(107,144,113,0.42),transparent_34%),linear-gradient(145deg,#f4f7ef_0%,#dce9d2_50%,#a9c1a7_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <nav className="mb-12 md:mb-16">
          <Link href="/proyectos" className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/25 bg-white/45 px-4 py-2 text-sm font-semibold text-[#294b33] backdrop-blur-sm transition hover:border-[#365b40]/50 hover:bg-white/70">
            <span aria-hidden="true">←</span> Proyectos
          </Link>
        </nav>

        <header className="mb-16">
          <div className="mb-8 max-w-4xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
              <span className="h-px w-8 bg-[#365b40]" /> Computer Vision · OCR
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">Identificador inteligente de etiquetas</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
              Prototipo de visión artificial para convertir fotografías de etiquetas de calzado en información comercial estructurada. El sistema combina detección visual, OCR, lectura de códigos de barras e interpretación inteligente para reducir la digitación manual.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-3 rounded-full bg-[#365b40] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(35,67,43,0.2)]">
              Prototipo funcional en desarrollo
            </span>
            <span className="inline-flex items-center gap-3 rounded-full border border-[#365b40]/35 bg-white/45 px-6 py-3 text-sm font-bold text-[#294b33] backdrop-blur-sm">
              <LockIcon /> Código privado y confidencial
            </span>
          </div>
        </header>

        <section className="mx-auto mb-24 max-w-5xl" aria-label="Vista previa del proyecto">
          <div className="rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#294b33]">
              <Image src="/proyectos/identificador-etiquetas-portada.jpg" alt="Interfaz del identificador inteligente de etiquetas durante el procesamiento" width={1600} height={900} priority sizes="(max-width: 768px) 100vw, 1024px" className="h-auto w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_420px] md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">Resultado documentado</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Detección de campos</h2>
            </div>
            <p className="text-sm leading-6 text-black/60">La prueba muestra la localización de la etiqueta, el SKU, el código de barras y el modelo detectados sobre una fotografía real.</p>
          </div>
          <div className="rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#294b33]">
              <Image src="/proyectos/identificador-etiquetas-resultado.jpg" alt="Resultado del modelo detectando campos de una etiqueta de calzado" width={1280} height={720} sizes="(max-width: 768px) 100vw, 1024px" className="h-auto w-full" />
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
            <p className="text-sm leading-6 text-black/60">Una arquitectura modular que deja cada etapa especializada y preparada para crecer con nuevas marcas y formatos de etiqueta.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((bloque, index) => (
              <article key={bloque.categoria} className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/65">
                <div className="mb-5 flex items-center justify-between"><h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#365b40]">{bloque.categoria}</h3><span className="text-xs font-bold text-[#365b40]/35">{String(index + 1).padStart(2, "0")}</span></div>
                <ul className="space-y-3">{bloque.items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-black/70"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b9071]" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">Alcance</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Cómo funciona</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {funcionalidades.map((bloque, index) => (
              <article key={bloque.grupo} className="flex flex-col rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm">
                <span className="mb-8 grid h-10 w-10 place-items-center rounded-full bg-[#365b40] text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-5 text-xl font-black tracking-tight">{bloque.grupo}</h3>
                <ul className="space-y-4">{bloque.items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-black/65"><span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#6b9071]/50 text-[9px] font-bold text-[#365b40]">✓</span>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 overflow-hidden rounded-[2rem] bg-[#294b33] px-6 py-8 text-white shadow-[0_20px_55px_rgba(35,67,43,0.22)] md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <div><span className="text-xs font-bold uppercase tracking-[0.24em] text-[#bcd5b5]">Estado y aprendizajes</span><h2 className="mt-3 text-3xl font-black tracking-tight">Lo que demuestra</h2></div>
            <div className="grid gap-3 sm:grid-cols-2">{aprendizajes.map((item) => <div key={item} className="rounded-2xl border border-white/15 bg-white/8 p-5 text-sm leading-6 text-white/80">{item}</div>)}</div>
          </div>
        </section>

        <footer className="border-t border-[#365b40]/20 py-8 text-center"><Link href="/proyectos" className="inline-flex items-center gap-2 text-sm font-bold text-[#294b33] transition hover:gap-3"><span aria-hidden="true">←</span> Volver a todos los proyectos</Link></footer>
      </div>
    </main>
  );
}
