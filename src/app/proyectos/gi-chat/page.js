import {
  CaseButton,
  CaseFigure,
  CaseHeader,
  CaseLayout,
  CaseSection,
  ResultPanel,
  StackCards,
  StepCards,
} from "@/components/caso/CaseKit";

export const metadata = {
  title: "GiChat — Ian Tapia",
  description: "Chatbot de detección de intenciones construido desde cero en JavaScript puro.",
};

const stack = [
  {
    titulo: "Frontend",
    items: [
      "HTML5 semántico",
      "CSS3 puro (variables, keyframes, glassmorphism)",
      "JavaScript vanilla",
      "Grid layout responsive + media queries",
    ],
  },
  {
    titulo: "Tipografía",
    items: ["Google Fonts", "Cormorant Garamond (display / títulos)", "Jost (cuerpo de texto)"],
  },
  {
    titulo: "Formulario",
    items: ["Formspree (backend de envíos)", "Sin servidor propio", "Sin dependencias adicionales"],
  },
  { titulo: "Deploy", items: ["Vercel", "Sin frameworks ni librerías externas"] },
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
    <CaseLayout>
      <CaseHeader
        eyebrow="Atención al cliente · JavaScript + NLP"
        titulo="GiChat"
        descripcion="Landing page con chatbot de detección de intenciones construido completamente desde cero en JavaScript puro, sin APIs externas ni modelos de lenguaje. Utiliza coincidencias de palabras clave ponderadas para interpretar cada mensaje."
      >
        <CaseButton href="https://gichat-weld.vercel.app/">Visitar GiChat</CaseButton>
      </CaseHeader>

      <CaseFigure
        src="/proyectos/gichat.png"
        alt="Vista previa de la landing page y chatbot GiChat"
        width={1897}
        height={896}
        priority
      />

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="Una implementación ligera construida con tecnologías web nativas, sin frameworks ni dependencias innecesarias."
      >
        <StackCards bloques={stack} cols="sm:grid-cols-2" />
      </CaseSection>

      <CaseSection eyebrow="Flujo de procesamiento" titulo="Cómo funciona el chatbot">
        <StepCards pasos={flujo} cols="md:grid-cols-2 lg:grid-cols-3" />
      </CaseSection>

      <ResultPanel items={demuestra} />
    </CaseLayout>
  );
}
