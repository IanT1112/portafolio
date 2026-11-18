export const perfil = {
  nombre: "Ian Tapia",
  rol: "Systems Engineering student · AI & Full Stack",
  bio: "Construyo productos con IA de punta a punta: desde el modelo hasta la interfaz y el despliegue. He aplicado tecnología en salud, finanzas, retail, movilidad y sector público.",
  ubicacion: "Perú",
  email: "iantapia1104@gmail.com",
  cv: "/proyectos/cv-iantapia.pdf",
  foto: "/proyectos/ian.jpg",
  links: {
    github: "https://github.com/IanT1112",
    linkedin: "https://www.linkedin.com/in/ian-tapia-144736210",
  },
};

export const sobreMi = {
  titulo: "Aprendo construyendo.",
  parrafos: [
    "Estudio Ingeniería de Sistemas e Inteligencia Artificial. Me motiva entender problemas reales y convertirlos en productos digitales útiles, combinando desarrollo web, IA y cloud.",
    "Llevo cada idea desde la exploración hasta una solución que se pueda probar y mejorar. Fuera del código participo en comunidades de innovación, voluntariados y hackathons, donde aprendí a colaborar con equipos multidisciplinarios.",
  ],
  destacados: [
    ["Desarrollo", "Web & cloud"],
    ["Inteligencia", "IA & datos"],
    ["Comunidad", "Hackathons y voluntariado"],
  ],
  // Collage de 3 columnas desfasadas (a la izquierda del texto).
  // Cada marco respeta la forma real de la foto (ancho × alto en píxeles),
  // sin recortes. `columna` (1–3) decide dónde va; `giro` es una inclinación
  // leve en grados para el efecto "desordenado". Alterna verticales y
  // horizontales dentro de cada columna para que el collage no quede alto.
  // Para sumar una foto: guárdala en public/proyectos y agrega aquí sus medidas.
  fotos: [
    {
      src: "/proyectos/sobre-mi-1.jpg",
      ancho: 800,
      alto: 1421,
      columna: 1,
      giro: -2,
      alt: "Ian Tapia en el evento Techspira",
      pie: "Techspira",
    },
    {
      src: "/proyectos/sobre-mi-pucp.jpg",
      ancho: 1080,
      alto: 939,
      columna: 1,
      giro: 1.5,
      alt: "Ian Tapia con miembros de IEEE CS PUCP frente a las letras de la PUCP",
      pie: "IEEE CS PUCP",
    },
    {
      src: "/proyectos/sobre-mi-comunidad.jpg",
      ancho: 1280,
      alto: 960,
      columna: 2,
      giro: 2,
      alt: "Foto grupal de la comunidad START Perú haciendo un gesto de triángulo con las manos",
      pie: "START Perú",
    },
    {
      src: "/proyectos/sobre-mi-ml-laboratory.jpg",
      ancho: 738,
      alto: 1016,
      columna: 2,
      giro: -1.5,
      alt: "Anuncio de bienvenida a los nuevos miembros de la comunidad ML Laboratory, con la videollamada del grupo",
      pie: "ML Laboratory",
    },
    {
      src: "/proyectos/iaaan.jpg",
      ancho: 585,
      alto: 1024,
      columna: 3,
      giro: 2.5,
      alt: "Ian Tapia, estudiante de Ingeniería de Sistemas e Inteligencia Artificial",
      pie: "Ingeniería de Sistemas e IA",
    },
  ],
};

export const stack = [
  {
    area: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "HTML / CSS"],
  },
  {
    area: "Backend",
    items: ["Python", "FastAPI", "Flask", "Node.js", "Express", "PostgreSQL", "Supabase", "Firebase", "MySQL", "MongoDB"],
  },
  {
    area: "Data / AI",
    items: ["Scikit-learn", "Pandas", "NumPy", "YOLO", "OCR (Tesseract, EasyOCR)", "Streamlit", "Power BI"],
  },
  {
    area: "Cloud / DevOps",
    items: ["Docker", "Terraform", "AWS", "GitHub Actions", "Vercel", "Render", "Railway", "Git"],
  },
];
