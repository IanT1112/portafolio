// Fuente única de proyectos y rubros.
// Para agregar un proyecto: súmalo a `proyectos` con un `rubro` existente
// (o crea el rubro en `rubros`). La home, /proyectos y la matriz lo leen de aquí.

export const rubros = [
  { id: "salud", nombre: "Salud", icono: "salud" },
  { id: "fintech", nombre: "Fintech", icono: "fintech" },
  { id: "retail", nombre: "Retail", icono: "retail" },
  { id: "movilidad", nombre: "Movilidad", icono: "movilidad" },
  { id: "publico", nombre: "Sector público", icono: "publico" },
  { id: "medios", nombre: "Medios digitales", icono: "medios" },
  { id: "atencion", nombre: "Atención al cliente", icono: "atencion" },
];

// Ordenados del más reciente al más antiguo.
export const proyectos = [
  {
    slug: "identificador-etiquetas",
    numero: "08",
    titulo: "Identificador de etiquetas",
    rubro: "retail",
    impacto:
      "Convierte la foto de una etiqueta de calzado en marca, modelo, código y talla.",
    stack: ["Python", "YOLO", "Tesseract OCR", "ZXing", "Next.js"],
    rol: "Individual · Visión computacional",
    imagen: "/proyectos/identificador-etiquetas-portada.jpg",
    alt: "Prototipo leyendo una etiqueta de calzado y mostrando los campos extraídos",
    detalle: "/proyectos/identificador-etiquetas",
    demo: null,
    repo: null,
  },
  {
    slug: "parkcar",
    numero: "07",
    titulo: "ParkCar",
    rubro: "movilidad",
    impacto:
      "Registra ingresos leyendo la placa del vehículo y calcula la tarifa al salir.",
    stack: ["React", "FastAPI", "YOLO", "EasyOCR", "Supabase"],
    rol: "Individual · Full Stack + Visión",
    imagen: "/proyectos/ParkCar.png",
    alt: "Panel de ParkCar con los vehículos dentro del estacionamiento",
    detalle: "/proyectos/ParkCar",
    demo: "https://parkcar-livid.vercel.app/login",
    repo: "https://github.com/IanT1112/parkcar/tree/main",
  },
  {
    slug: "fundmind",
    numero: "06",
    titulo: "FundMind",
    rubro: "fintech",
    impacto:
      "Estima la probabilidad de éxito y el retorno de una startup con modelos Random Forest.",
    stack: ["React", "FastAPI", "Scikit-learn", "Pandas", "Render"],
    rol: "Individual · Full Stack + ML",
    imagen: "/proyectos/fundmind.png",
    alt: "Pantalla de FundMind con la evaluación de una startup",
    detalle: "/proyectos/fundmind",
    demo: "https://proyecto-ia-blue.vercel.app/",
    repo: "https://github.com/IanT1112/proyecto-ia",
  },
  {
    slug: "gi-chat",
    numero: "05",
    titulo: "GiChat",
    rubro: "atencion",
    impacto:
      "Chatbot que detecta la intención del usuario sin APIs ni frameworks, en JavaScript puro.",
    stack: ["JavaScript", "HTML", "CSS", "Formspree"],
    rol: "Individual · Frontend",
    imagen: "/proyectos/gichat.png",
    alt: "Landing de GiChat con el widget del chatbot abierto",
    detalle: "/proyectos/gi-chat",
    demo: "https://gichat-weld.vercel.app/",
    repo: null,
  },
  {
    slug: "blog-personal",
    numero: "04",
    titulo: "ianconia.xyz",
    rubro: "medios",
    impacto:
      "Plataforma editorial con newsletter y un pipeline ETL que nutre el contenido a diario.",
    stack: ["React", "Supabase", "TypeScript", "Resend", "Vercel"],
    rol: "Individual · Full Stack",
    imagen: "/proyectos/ianconia.jpg",
    alt: "Portada del blog ianconia.xyz",
    detalle: "/proyectos/blog-personal",
    demo: "https://www.ianconia.xyz",
    repo: "https://github.com/IanT1112/blog-personal",
  },
  {
    slug: "dashboard",
    numero: "03",
    titulo: "Dashboard de riesgo crediticio",
    rubro: "fintech",
    impacto:
      "Reúne riesgo, exposición de capital y tasa de incumplimiento en un tablero interactivo.",
    stack: ["Power BI", "DAX", "Modelado de datos"],
    rol: "Individual · Data Analytics",
    imagen: "/proyectos/dashboard.png",
    alt: "Dashboard de Power BI con indicadores de riesgo crediticio",
    detalle: "/proyectos/dashboard",
    demo: null,
    repo: null,
  },
  {
    slug: "trujillo-responde",
    numero: "02",
    titulo: "Trujillo Responde",
    rubro: "publico",
    impacto:
      "Canaliza reportes ciudadanos con geolocalización y clasificación automática con IA.",
    stack: ["Firebase", "Google Maps", "Google Cloud AI"],
    rol: "Individual · Full Stack",
    imagen: "/proyectos/trujillo-responde.png",
    alt: "Mapa de Trujillo Responde con incidencias reportadas",
    detalle: "/proyectos/trujillo-responde",
    demo: "https://studio--trujillo-responde-2-7719-1bf4c.us-central1.hosted.app/",
    repo: null,
  },
  {
    slug: "acv",
    numero: "01",
    titulo: "Detección temprana de ACV",
    rubro: "salud",
    impacto:
      "Predice el riesgo de accidente cerebrovascular a partir de datos clínicos.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    rol: "Individual · Machine Learning",
    imagen: "/proyectos/acv.png",
    alt: "Aplicación de Streamlit que estima el riesgo de ACV",
    detalle: "/proyectos/acv",
    demo: "https://deteccion-acv.streamlit.app/",
    repo: "https://github.com/IanT1112/proyecto-ACV",
  },
];

export const rubroPorId = Object.fromEntries(rubros.map((r) => [r.id, r]));

export function proyectosDeRubro(id) {
  return proyectos.filter((p) => p.rubro === id);
}
