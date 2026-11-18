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
  // Se reparten en dos columnas escalonadas: posiciones pares a la izquierda,
  // impares a la derecha. Todas se recortan a 3:4; `enfoque` elige qué parte
  // de la foto se conserva (object-position). Para sumar o cambiar fotos,
  // guárdalas en public/proyectos y edita aquí.
  fotos: [
    {
      src: "/proyectos/sobre-mi-1.jpg",
      alt: "Ian Tapia en el evento Techspira",
      pie: "Techspira",
    },
    {
      src: "/proyectos/iaaan.jpg",
      alt: "Ian Tapia, estudiante de Ingeniería de Sistemas e Inteligencia Artificial",
      pie: "Ingeniería de Sistemas e IA",
    },
    {
      src: "/proyectos/sobre-mi-ml-laboratory.jpg",
      alt: "Anuncio de bienvenida a los nuevos miembros de la comunidad ML Laboratory, con la videollamada del grupo",
      pie: "ML Laboratory",
      enfoque: "50% 60%",
    },
    {
      src: "/proyectos/sobre-mi-comunidad.jpg",
      alt: "Foto grupal de la comunidad START Perú haciendo un gesto de triángulo con las manos",
      pie: "START Perú",
      enfoque: "45% 50%",
    },
    {
      src: "/proyectos/sobre-mi-pucp.jpg",
      alt: "Ian Tapia con miembros de IEEE CS PUCP frente a las letras de la PUCP",
      pie: "IEEE CS PUCP",
      enfoque: "45% 60%",
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
