"use client";
import Link from "next/link";

const stack = [
  {
    categoria: "Frontend",
    items: ["HTML5 semántico", "CSS3 puro (variables, keyframes, glassmorphism)", "JavaScript vanilla", "Grid layout responsive + media queries"],
  },
  {
    categoria: "Tipografía",
    items: ["Google Fonts", "Cormorant Garamond (display / títulos)", "Jost (cuerpo de texto)"],
  },
  {
    categoria: "Formulario",
    items: ["Formspree (backend de envíos)", "Sin servidor propio", "Sin dependencias adicionales"],
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
    <main
      className="min-h-screen text-black px-6 md:px-16 py-8"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #e8e0f0 30%, #c4b5d4 60%, #8b6fa8 100%)",
      }}
    >
      {/* NAV */}
      <div className="mb-8">
        <Link
          href="/proyectos"
          className="px-5 py-2.5 bg-white/40 backdrop-blur-sm border border-gray-400/50 rounded-lg hover:bg-white/60 hover:border-gray-500 hover:shadow-md transition-all duration-200 font-medium text-sm"
        >
          ← Proyectos
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-widest text-[#6b4fa0] font-bold mb-3">Proyecto personal</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6">GiChat</h1>
        <p className="text-base md:text-lg leading-relaxed text-black/80 mb-8">
          Landing page con chatbot de intent detection construido completamente desde cero en
          JavaScript puro — sin APIs externas, sin modelos de lenguaje. Implementa un sistema
          de detección de intención basado en coincidencia de palabras clave ponderadas.
        </p>
        <a
          href="https://gichat-weld.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black px-8 py-3 font-semibold text-sm hover:bg-black hover:text-white transition"
        >
          Ver sitio en vivo → gichat-weld.vercel.app
        </a>
      </div>

      {/* STACK TÉCNICO */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-black mb-8 border-b border-black/20 pb-3">Stack técnico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stack.map((bloque) => (
            <div key={bloque.categoria} className="border border-black/20 p-6 bg-white/30 backdrop-blur-sm">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#6b4fa0] mb-4">
                {bloque.categoria}
              </h3>
              <ul className="flex flex-col gap-2">
                {bloque.items.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8b6fa8] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CÓMO FUNCIONA EL CHATBOT */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-black mb-8 border-b border-black/20 pb-3">
          Cómo funciona el chatbot
        </h2>
        <div className="flex flex-col gap-4">
          {flujo.map((paso) => (
            <div key={paso.num} className="border border-black/20 p-6 bg-white/30 backdrop-blur-sm flex gap-5">
              <span className="text-2xl font-black text-[#8b6fa8] shrink-0">{paso.num}</span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{paso.titulo}</h3>
                <p className="text-sm leading-relaxed text-black/70">{paso.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LO QUE DEMUESTRA */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-black mb-8 border-b border-black/20 pb-3">Lo que demuestra</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demuestra.map((item) => (
            <div key={item} className="border border-black/20 p-5 bg-white/30 backdrop-blur-sm text-sm leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NAV */}
      <div className="max-w-3xl mx-auto text-center">
        <Link
          href="/proyectos"
          className="inline-block border border-black px-8 py-3 font-semibold text-sm hover:bg-black hover:text-white transition"
        >
          ← Volver a proyectos
        </Link>
      </div>
    </main>
  );
}