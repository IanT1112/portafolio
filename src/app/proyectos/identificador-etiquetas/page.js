import { LuLock } from "react-icons/lu";
import {
  CaseFigure,
  CaseHeader,
  CaseLayout,
  CasePill,
  CaseSection,
  FeatureCards,
  ResultPanel,
  StackCards,
} from "@/components/caso/CaseKit";

export const metadata = {
  title: "Identificador de etiquetas — Ian Tapia",
  description: "Prototipo de visión artificial que convierte etiquetas de calzado en datos estructurados.",
};

const stack = [
  { titulo: "Visión artificial", items: ["Python", "YOLO / Ultralytics", "Label Studio"] },
  { titulo: "Extracción", items: ["Tesseract OCR", "ZXing", "EAN-13"] },
  { titulo: "Interpretación", items: ["Reglas por marca", "Ollama como respaldo", "Normalización de datos"] },
  { titulo: "Producto", items: ["Next.js", "Streamlit", "PostgreSQL / Railway"] },
];

const funcionalidades = [
  {
    titulo: "Captura y detección",
    items: [
      "Captura desde cámara o carga de fotografía",
      "Detección de la región de la etiqueta con YOLO",
      "Preprocesamiento para orientación, perspectiva e iluminación",
    ],
  },
  {
    titulo: "Lectura inteligente",
    items: [
      "Extracción de texto mediante OCR",
      "Lectura especializada de códigos de barras",
      "Interpretación de campos según la marca y el contexto",
    ],
  },
  {
    titulo: "Validación y registro",
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

export default function IdentificadorEtiquetas() {
  return (
    <CaseLayout>
      <CaseHeader
        eyebrow="Retail · Computer Vision + OCR"
        titulo="Identificador inteligente de etiquetas"
        descripcion="Prototipo de visión artificial para convertir fotografías de etiquetas de calzado en información comercial estructurada. El sistema combina detección visual, OCR, lectura de códigos de barras e interpretación inteligente para reducir la digitación manual."
      >
        <CasePill oscuro>Prototipo funcional en desarrollo</CasePill>
        <CasePill icon={<LuLock aria-hidden="true" className="h-4 w-4" />}>
          Código privado y confidencial
        </CasePill>
      </CaseHeader>

      <CaseFigure
        src="/proyectos/identificador-etiquetas-portada.jpg"
        alt="Interfaz del identificador inteligente de etiquetas durante el procesamiento"
        width={1600}
        height={900}
        priority
      />

      <CaseSection
        eyebrow="Resultado documentado"
        titulo="Detección de campos"
        descripcion="La prueba muestra la localización de la etiqueta, el SKU, el código de barras y el modelo detectados sobre una fotografía real."
      >
        <div className="reveal-item">
          <CaseFigure
            src="/proyectos/identificador-etiquetas-resultado.jpg"
            alt="Resultado del modelo detectando campos de una etiqueta de calzado"
            width={1280}
            height={720}
            className="!mt-0 max-w-none"
          />
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="Una arquitectura modular que deja cada etapa especializada y preparada para crecer con nuevas marcas y formatos de etiqueta."
      >
        <StackCards bloques={stack} cols="sm:grid-cols-2 lg:grid-cols-4" />
      </CaseSection>

      <CaseSection eyebrow="Alcance" titulo="Cómo funciona">
        <FeatureCards bloques={funcionalidades} cols="lg:grid-cols-3" />
      </CaseSection>

      <ResultPanel eyebrow="Estado y aprendizajes" items={aprendizajes} />
    </CaseLayout>
  );
}
