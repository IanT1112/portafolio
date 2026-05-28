"use client";
import Link from "next/link";

const stack = [
  {
    categoria: "Frontend",
    items: ["React 19 + Vite", "Tailwind CSS v4", "React Router DOM", "html2canvas"],
  },
  {
    categoria: "Backend & BD",
    items: ["Supabase (PostgreSQL + RLS)", "Supabase Storage", "Supabase Edge Functions", "Supabase Auth (JWT)"],
  },
  {
    categoria: "Email",
    items: ["Resend API", "DKIM, SPF y DMARC"],
  },
  {
    categoria: "Analytics",
    items: ["Google Analytics 4", "Métricas de usuarios activos en tiempo real", "Seguimiento de eventos y páginas vistas"],
  },
  {
    categoria: "Deploy",
    items: ["Vercel (CI/CD)", "Dominio propio: ianconia.xyz", "DNS en Porkbun"],
  },
];

const funcionalidades = [
  {
    grupo: "Experiencia pública",
    items: [
      "Landing editorial con hero, imagen personal y animaciones de entrada",
      "Carrusel responsive (1 / 2 / 4 cards según pantalla)",
      "Página de lectura estilo NYT con barra de progreso, drop cap y tipografía editorial",
      "Sistema de newsletter con email de bienvenida automático",
      "Generador de imagen para Instagram Stories (1080×1920 px) con glassmorphism",
      "Botón Web Share API para compartir en móvil",
    ],
  },
  {
    grupo: "Panel administrativo",
    items: [
      "Login con autenticación JWT",
      "Publicar, editar y eliminar artículos, libros y documentales",
      "Doble imagen por post (vertical para card, horizontal para lectura)",
      "Notificaciones por email a suscriptores con rate limiting",
    ],
  },
  {
    grupo: "Analytics",
    items: [
      "Google Analytics 4 integrado para seguimiento de tráfico",
      "Panel de usuarios activos en tiempo real",
      "Métricas de páginas vistas, sesiones y comportamiento de lectura",
    ],
  },
  {
    grupo: "Infraestructura",
    items: [
      "Row Level Security en todas las tablas",
      "Políticas de acceso diferenciadas (anon / authenticated)",
      "Routing con vercel.json para SPA",
      "Auto-deploy en cada git push",
    ],
  },
];

export default function BlogPersonal() {
  return (
    <main
      className="min-h-screen text-black px-6 md:px-16 py-8"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)",
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
        <p className="text-xs uppercase tracking-widest text-[#4a7055] font-bold mb-3">Proyecto</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6">Blog Personal</h1>
        <p className="text-base md:text-lg leading-relaxed text-black/80 mb-8">
          Plataforma editorial personal fullstack construida desde cero, donde el autor publica
          artículos, reseñas de libros y documentales con una experiencia de lectura premium.
        </p>
        <a
          href="https://www.ianconia.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black px-8 py-3 font-semibold text-sm hover:bg-black hover:text-white transition"
        >
          Ver sitio en vivo → ianconia.xyz
        </a>
      </div>

      {/* STACK TÉCNICO */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-black mb-8 border-b border-black/20 pb-3">Stack técnico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stack.map((bloque) => (
            <div key={bloque.categoria} className="border border-black/20 p-6 bg-white/30 backdrop-blur-sm">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#4a7055] mb-4">
                {bloque.categoria}
              </h3>
              <ul className="flex flex-col gap-2">
                {bloque.items.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#6B9071] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FUNCIONALIDADES */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-black mb-8 border-b border-black/20 pb-3">Funcionalidades</h2>
        <div className="flex flex-col gap-8">
          {funcionalidades.map((bloque) => (
            <div key={bloque.grupo}>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#4a7055] mb-4">
                {bloque.grupo}
              </h3>
              <ul className="flex flex-col gap-3">
                {bloque.items.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#6B9071] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* LO QUE DEMUESTRA */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-black mb-8 border-b border-black/20 pb-3">Lo que demuestra</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Arquitectura fullstack sin framework backend tradicional",
            "Integración de múltiples servicios en la nube",
            "Diseño UI/UX de nivel editorial sin librerías de componentes",
            "Seguridad con RLS y autenticación JWT",
            "Monitoreo de tráfico y comportamiento con Google Analytics 4",
            "Flujo completo: idea → diseño → desarrollo → deploy → dominio propio",
          ].map((item) => (
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