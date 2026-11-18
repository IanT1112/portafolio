import {
  CaseFigure,
  CaseHeader,
  CaseLayout,
  CaseSection,
  FeatureCards,
  ResultPanel,
  StackCards,
} from "@/components/caso/CaseKit";

export const metadata = {
  title: "Dashboard de riesgo crediticio — Ian Tapia",
  description: "Dashboard en Power BI para analizar riesgo, exposición de capital e incumplimiento.",
};

const stack = [
  { titulo: "Visualización", items: ["Power BI", "Dashboards y visualización interactiva"] },
  { titulo: "Métricas", items: ["DAX", "KPIs y métricas de riesgo crediticio"] },
  { titulo: "Análisis financiero", items: ["Evaluación de default", "Análisis de exposición de capital"] },
  { titulo: "Business Intelligence", items: ["Soporte a decisiones estratégicas", "Lectura ejecutiva de resultados"] },
  { titulo: "Modelado de datos", items: ["Estructuración de relaciones", "Optimización del análisis"] },
];

const funcionalidades = [
  {
    titulo: "Riesgo crediticio",
    items: [
      "Evaluación de la cartera según el perfil de cada cliente",
      "Segmentación por grados de riesgo crediticio de A a G",
      "Identificación de los niveles con mayor incumplimiento",
    ],
  },
  {
    titulo: "Exposición de capital",
    items: [
      "Análisis del capital otorgado por nivel de riesgo",
      "Detección de concentraciones relevantes dentro de la cartera",
      "Comparación visual entre exposición y tasa de default",
    ],
  },
  {
    titulo: "Exploración interactiva",
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
    <CaseLayout>
      <CaseHeader
        eyebrow="Fintech · Data Analytics"
        titulo="Dashboard Historial Crediticio"
        descripcion="Proyecto de análisis de datos financieros para evaluar el riesgo crediticio de una cartera de préstamos según el perfil del cliente y su grado de riesgo, desde A hasta G."
      >
        <ul className="flex flex-wrap gap-2" aria-label="Herramientas">
          {["Power BI", "DAX", "Modelado de datos", "Business Intelligence"].map((item) => (
            <li key={item} className="glass-soft rounded-full px-4 py-2 text-sm font-medium">
              {item}
            </li>
          ))}
        </ul>
      </CaseHeader>

      <CaseFigure
        src="/proyectos/dashboard.png"
        alt="Dashboard interactivo de historial crediticio"
        width={1406}
        height={789}
        priority
      />

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="Herramientas de análisis, modelado y visualización utilizadas para transformar datos financieros en información accionable."
      >
        <StackCards bloques={stack} />
      </CaseSection>

      <CaseSection eyebrow="Alcance" titulo="Funcionalidades">
        <FeatureCards bloques={funcionalidades} cols="lg:grid-cols-3" />
      </CaseSection>

      <ResultPanel eyebrow="Análisis" titulo="Preguntas que responde" items={preguntas} />
    </CaseLayout>
  );
}
