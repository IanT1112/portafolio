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
  title: "FundMind — Ian Tapia",
  description: "Plataforma fullstack con IA para evaluar startups, riesgos y retornos.",
};

const appUrl = "https://proyecto-ia-blue.vercel.app/";
const githubUrl = "https://github.com/IanT1112/proyecto-ia";

const stack = [
  { titulo: "Frontend", items: ["React 19 + Vite", "CSS3 responsive", "Fetch API", "SVG para gráficos personalizados"] },
  { titulo: "Backend & IA", items: ["FastAPI", "Python", "Scikit-learn", "Pandas", "NumPy", "Joblib (modelos entrenados)"] },
  { titulo: "Machine Learning", items: ["Random Forest Classifier", "Random Forest Regressor", "Pipeline de preprocesamiento", "Modelos serializados (.pkl)"] },
  { titulo: "Datos", items: ["Dataset de startups", "Feature Engineering", "Normalización y codificación de variables", "Entrenamiento y validación de modelos"] },
  { titulo: "Deploy", items: ["Frontend en Vercel", "Backend en Render", "GitHub", "CI/CD mediante Git Push"] },
];

const funcionalidades = [
  {
    titulo: "Evaluación de inversión",
    items: [
      "Formulario inteligente con variables financieras, empresariales y del equipo fundador.",
      "Predicción de probabilidad de éxito mediante Inteligencia Artificial.",
      "Clasificación automática del riesgo: Bajo, Medio o Alto.",
      "Recomendación final: Invertir, Evaluar con más información o No invertir.",
    ],
  },
  {
    titulo: "Análisis financiero",
    items: [
      "Predicción de valuación estimada de la startup.",
      "Cálculo automático del ROI esperado.",
      "Simulación de retorno para distintos escenarios de inversión.",
      "Visualización gráfica de la proyección a 36 meses.",
    ],
  },
  {
    titulo: "Inteligencia Artificial",
    items: [
      "Modelo entrenado con datos históricos de startups.",
      "Clasificación mediante Random Forest.",
      "Predicción de valuación mediante Machine Learning.",
      "Procesamiento automático de variables categóricas y numéricas.",
    ],
  },
  {
    titulo: "Infraestructura",
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
    <CaseLayout>
      <CaseHeader
        eyebrow="Fintech · Fullstack + IA"
        titulo="FundMind"
        descripcion="Plataforma web fullstack basada en Inteligencia Artificial que permite a inversores evaluar startups, estimar su probabilidad de éxito, analizar riesgos y visualizar proyecciones financieras mediante modelos de Machine Learning."
      >
        <CaseButton href={appUrl}>Visitar FundMind</CaseButton>
        <CaseButton href={githubUrl} variant="dark" github>Ir a GitHub</CaseButton>
      </CaseHeader>

      <CaseFigure
        src="/proyectos/fundmind.png"
        alt="Vista previa de FundMind evaluando una startup con Inteligencia Artificial"
        width={1882}
        height={901}
        priority
      />

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="Una arquitectura moderna que integra modelos de Machine Learning, visualización de datos, API REST y despliegue en la nube."
      >
        <StackCards bloques={stack} />
      </CaseSection>

      <CaseSection eyebrow="Alcance" titulo="Funcionalidades">
        <FeatureCards bloques={funcionalidades} />
      </CaseSection>

      <ResultPanel items={resultados} />
    </CaseLayout>
  );
}
