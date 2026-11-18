import LiveDemo from "@/components/caso/LiveDemo";
import Reveal from "@/components/Reveal";
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
  title: "ianconia.xyz — Ian Tapia",
  description: "Plataforma editorial fullstack con newsletter y pipeline ETL serverless.",
};

const siteUrl = "https://www.ianconia.xyz";
const githubUrl = "https://github.com/IanT1112/blog-personal";

const stack = [
  { titulo: "Frontend", items: ["React 19 + Vite", "Tailwind CSS v4", "React Router DOM", "html2canvas"] },
  { titulo: "Backend & BD", items: ["Supabase (PostgreSQL + RLS)", "Supabase Storage", "Supabase Edge Functions", "Supabase Auth (JWT)"] },
  { titulo: "Datos & automatización", items: ["Pipeline ETL con TypeScript", "RSS multifuente", "Supabase Cron", "Clasificación y scoring automático"] },
  { titulo: "Email", items: ["Resend API", "DKIM, SPF y DMARC"] },
  { titulo: "Analytics", items: ["Google Analytics 4", "Métricas de usuarios activos en tiempo real", "Seguimiento de eventos y páginas vistas"] },
  { titulo: "Deploy", items: ["Vercel (CI/CD)", "Dominio propio: ianconia.xyz", "DNS en Porkbun"] },
];

const funcionalidades = [
  {
    titulo: "Experiencia pública",
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
    titulo: "Panel administrativo",
    items: [
      "Login con autenticación JWT",
      "Publicar, editar y eliminar artículos, libros y documentales",
      "Doble imagen por post (vertical para card, horizontal para lectura)",
      "Notificaciones por email a suscriptores con rate limiting",
    ],
  },
  {
    titulo: "Analytics",
    items: [
      "Google Analytics 4 integrado para seguimiento de tráfico",
      "Panel de usuarios activos en tiempo real",
      "Métricas de páginas vistas, sesiones y comportamiento de lectura",
    ],
  },
  {
    titulo: "Infraestructura",
    items: [
      "Row Level Security en todas las tablas",
      "Políticas de acceso diferenciadas (anon / authenticated)",
      "Routing con vercel.json para SPA",
      "Auto-deploy en cada git push",
    ],
  },
  {
    titulo: "Pipeline de noticias",
    items: [
      "Ingesta automatizada de feeds RSS de tecnología, economía, negocios y actualidad",
      "Limpieza, normalización, validación y filtrado por relevancia",
      "Clasificación automática en siete categorías y score de importancia",
      "Deduplicación por URL y eliminación programada de noticias antiguas",
      "Ejecución serverless cada 12 horas con Supabase Edge Functions y Cron",
      "Briefing conectado a React, balanceado por categoría y adaptable a desktop y móvil",
    ],
  },
];

const aprendizajes = [
  "Diseño de un pipeline ETL serverless de extremo a extremo",
  "Automatización y resolución de autenticación en producción",
  "Arquitectura fullstack sin framework backend tradicional",
  "Integración de múltiples servicios en la nube",
  "Diseño UI/UX de nivel editorial sin librerías de componentes",
  "Seguridad con RLS y autenticación JWT",
  "Monitoreo de tráfico y comportamiento con Google Analytics 4",
  "Flujo completo: idea → diseño → desarrollo → deploy → dominio propio",
];

const etapas = ["RSS", "Extracción", "Limpieza", "Clasificación", "Scoring", "Supabase", "React"];

export default function BlogPersonal() {
  return (
    <CaseLayout>
      <CaseHeader
        eyebrow="Medios digitales · Fullstack"
        titulo="Blog Personal"
        descripcion="Plataforma editorial personal fullstack construida desde cero, donde el autor publica artículos, reseñas de libros y documentales con una experiencia de lectura premium."
      >
        <CaseButton href={siteUrl}>Visitar ianconia.xyz</CaseButton>
        <CaseButton href={githubUrl} variant="dark" github>Ir a GitHub</CaseButton>
      </CaseHeader>

      <LiveDemo url={siteUrl} titulo="IANCONIA" alto="h-[520px] md:h-[640px]" pantallaCompleta={false} />

      <Reveal as="section" className="mt-24 md:mt-28">
        <div className="reveal-item glass grid gap-8 rounded-[1.75rem] p-6 md:p-10 lg:grid-cols-[0.85fr_1.4fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-strong">Ingeniería de datos</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Noticias relevantes, sin trabajo manual
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted md:text-base">
              Construí un pipeline ETL serverless que convierte múltiples feeds RSS en un
              briefing editorial reciente, priorizado y listo para consumir en IANCONIA. El
              flujo se ejecuta automáticamente cada 12 horas.
            </p>
          </div>

          <div>
            <dl className="grid gap-3 sm:grid-cols-3">
              {[
                ["7", "categorías automáticas"],
                ["12 h", "entre ejecuciones"],
                ["URL", "deduplicación automática"],
              ].map(([valor, etiqueta]) => (
                <div key={etiqueta} className="rounded-2xl bg-fg p-5 text-bg">
                  <dt className="sr-only">{etiqueta}</dt>
                  <dd>
                    <span className="block text-3xl font-semibold tracking-tight text-accent">{valor}</span>
                    <span className="mt-2 block text-xs leading-5 text-bg/70">{etiqueta}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <ol className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium" aria-label="Etapas del pipeline">
              {etapas.map((etapa, i) => (
                <li key={etapa} className="flex items-center gap-2">
                  <span className="glass-soft rounded-full px-3 py-1.5">{etapa}</span>
                  {i < etapas.length - 1 && <span aria-hidden="true" className="text-muted">→</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="Una arquitectura moderna que conecta interfaz, datos, autenticación, correo, analítica y despliegue continuo."
      >
        <StackCards bloques={stack} />
      </CaseSection>

      <CaseSection eyebrow="Alcance" titulo="Funcionalidades">
        <FeatureCards bloques={funcionalidades} />
      </CaseSection>

      <ResultPanel items={aprendizajes} />
    </CaseLayout>
  );
}
