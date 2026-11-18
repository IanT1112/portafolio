import LiveDemo from "@/components/caso/LiveDemo";
import {
  CaseButton,
  CaseHeader,
  CaseLayout,
  CaseSection,
  FeatureCards,
  ResultPanel,
  StackCards,
} from "@/components/caso/CaseKit";

export const metadata = {
  title: "Trujillo Responde — Ian Tapia",
  description: "Plataforma ciudadana para reportar incidencias urbanas con geolocalización e IA.",
};

const appUrl = "https://studio--trujillo-responde-2-7719-1bf4c.us-central1.hosted.app/";

const stack = [
  { titulo: "Backend serverless", items: ["Firebase sobre Google Cloud", "Base de datos y despliegue administrado"] },
  { titulo: "Geolocalización", items: ["Google Maps Platform", "Maps API y Places API para ubicación y visualización"] },
  { titulo: "Inteligencia Artificial", items: ["Google Cloud AI APIs", "Análisis y clasificación inteligente de reportes"] },
];

const funcionalidades = [
  {
    titulo: "Reporte ciudadano",
    items: [
      "Registro de incidencias urbanas desde una interfaz accesible",
      "Ingreso de información relevante para la atención municipal",
      "Experiencia enfocada en reducir la fricción del reporte",
    ],
  },
  {
    titulo: "Ubicación",
    items: [
      "Geolocalización de cada incidencia reportada",
      "Visualización de ubicaciones mediante Google Maps",
      "Uso de servicios geoespaciales para contextualizar el reporte",
    ],
  },
  {
    titulo: "Clasificación con IA",
    items: [
      "Procesamiento automático de la información enviada",
      "Análisis y clasificación mediante servicios de IA de Google",
      "Organización inteligente para facilitar la gestión municipal",
    ],
  },
];

const resultados = [
  "Aplicación de tecnología a un problema urbano de impacto social",
  "Integración de servicios cloud, IA y APIs geoespaciales",
  "Arquitectura serverless preparada para crecer",
  "Experiencia digital centrada en la participación ciudadana",
];

export default function TrujilloResponde() {
  return (
    <CaseLayout>
      <CaseHeader
        eyebrow="Sector público · GovTech + IA"
        titulo="Trujillo Responde"
        descripcion="Plataforma web que permite a los ciudadanos reportar incidencias urbanas de forma geolocalizada, mejorando la eficiencia en la gestión municipal mediante servicios cloud e inteligencia artificial."
      >
        <CaseButton href={appUrl}>Abrir aplicación</CaseButton>
      </CaseHeader>

      <LiveDemo
        url={appUrl}
        titulo="Trujillo Responde"
        allow="geolocation; clipboard-write"
        alto="aspect-[16/9]"
      />

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="La solución conecta infraestructura serverless, servicios de geolocalización e inteligencia artificial de Google."
      >
        <StackCards bloques={stack} cols="md:grid-cols-3" />
      </CaseSection>

      <CaseSection eyebrow="Alcance" titulo="Funcionalidades">
        <FeatureCards bloques={funcionalidades} cols="lg:grid-cols-3" />
      </CaseSection>

      <ResultPanel eyebrow="Impacto" items={resultados} />
    </CaseLayout>
  );
}
