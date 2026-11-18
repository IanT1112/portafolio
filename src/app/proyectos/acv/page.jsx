import {
  CaseButton,
  CaseFigure,
  CaseHeader,
  CaseLayout,
  CaseSection,
  FeatureCards,
  ResultPanel,
  StackCards,
} from "@/components/caso/CaseKit";

export const metadata = {
  title: "Detección temprana de ACV — Ian Tapia",
  description: "Sistema de machine learning para predecir el riesgo de accidente cerebrovascular.",
};

const stack = [
  { titulo: "Lenguaje", items: ["Python"] },
  { titulo: "Machine Learning", items: ["Scikit-learn – modelos de clasificación y evaluación", "Pandas – procesamiento y limpieza de datos"] },
  { titulo: "Deploy", items: ["Streamlit – aplicación web interactiva", "Streamlit Cloud"] },
  { titulo: "Control de versiones", items: ["Git & GitHub"] },
];

const funcionalidades = [
  {
    titulo: "Modelo e IA",
    items: [
      "Análisis y preparación de datos clínicos reales",
      "Entrenamiento de modelo de clasificación de riesgo de ACV",
      "Evaluación del modelo con métricas de rendimiento",
    ],
  },
  {
    titulo: "Aplicación web",
    items: [
      "Interfaz interactiva para ingresar variables clínicas y hábitos de vida",
      "Estimación del nivel de riesgo en tiempo real",
      "Presentación de resultados clara para el usuario final",
    ],
  },
  {
    titulo: "Deploy",
    items: ["Despliegue en Streamlit Cloud", "Acceso público sin instalación"],
  },
];

const aprendizajes = [
  "Aplicación práctica de ML en un problema real de salud",
  "Ciclo completo de un proyecto de datos: desde el raw data hasta producción",
  "Despliegue de modelos de IA en aplicaciones web accesibles",
  "Diseño orientado al usuario final, no solo al técnico",
];

export default function ProyectoACV() {
  return (
    <CaseLayout>
      <CaseHeader
        eyebrow="Salud · Machine Learning"
        titulo="Sistema de IA para detección temprana de ACV"
        descripcion="Sistema de machine learning aplicado a la salud para la detección temprana del riesgo de Accidente Cerebrovascular, utilizando datos clínicos reales. Cubre todo el ciclo: análisis de datos, entrenamiento del modelo y despliegue de una aplicación web interactiva."
      >
        <CaseButton href="https://deteccion-acv.streamlit.app/">Ver sitio en vivo</CaseButton>
        <CaseButton href="https://github.com/IanT1112/proyecto-ACV" variant="dark" github>
          Ver código en GitHub
        </CaseButton>
      </CaseHeader>

      <CaseFigure
        src="/proyectos/acv.png"
        alt="Interfaz del sistema de detección temprana de ACV"
        width={737}
        height={679}
        priority
        className="max-w-3xl"
      />

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="Herramientas elegidas para procesar los datos, entrenar el modelo y convertirlo en una experiencia web accesible."
      >
        <StackCards bloques={stack} cols="sm:grid-cols-2" />
      </CaseSection>

      <CaseSection eyebrow="Alcance" titulo="Funcionalidades">
        <FeatureCards bloques={funcionalidades} cols="lg:grid-cols-3" />
      </CaseSection>

      <ResultPanel items={aprendizajes} />
    </CaseLayout>
  );
}
