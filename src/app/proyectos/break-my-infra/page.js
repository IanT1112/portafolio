import LiveDemo from "@/components/caso/LiveDemo";
import Reveal from "@/components/Reveal";
import { revealDelay } from "@/components/revealDelay";
import {
  CaseButton,
  CaseFigure,
  CaseHeader,
  CaseLayout,
  CasePill,
  CaseSection,
  FeatureCards,
  ResultPanel,
  StackCards,
  StepCards,
} from "@/components/caso/CaseKit";

export const metadata = {
  title: "Break My Infra — Ian Tapia",
  description:
    "Demo interactiva de chaos engineering y observabilidad en AWS: rompe un sistema en producción y míralo recuperarse solo.",
};

const demoUrl = "https://infra.iantapia.xyz";
const githubUrl = "https://github.com/IanT1112/break-my-infra";

const metricas = [
  { valor: "10", label: "Contenedores en producción" },
  { valor: "3", label: "Microservicios: gateway, orders y payments" },
  { valor: "~30 s", label: "Encendido en frío" },
  { valor: "45 s", label: "Recuperación automática tras cada falla" },
  { valor: "~$2", label: "Costo mensual (techo de seguridad: ~$11)" },
  { valor: "0", label: "Accesos SSH al servidor" },
];

const experiencia = [
  { titulo: "Entra", desc: "El servidor está apagado para no gastar dinero." },
  { titulo: "Enciende", desc: "Una función Lambda enciende el servidor y una pantalla muestra el progreso." },
  { titulo: "Panel en vivo", desc: "En unos 30 segundos se abre el panel con el dashboard de Grafana." },
  { titulo: "Rompe", desc: "Inicia una sesión de 20 minutos y elige un escenario de caos." },
  { titulo: "Observa", desc: "Latencia, errores, logs y recuperación automática en tiempo real." },
  { titulo: "Se apaga", desc: "Si nadie usa la demo durante 5 minutos, el servidor se apaga solo." },
];

const escenarios = [
  {
    titulo: "Pico de tráfico",
    dentro: "El tráfico sube 10 veces y se agota el pool de conexiones a la base de datos.",
    observa: "La latencia p95 pasa de ~200 ms a más de 4 s; aparecen errores 503 en cascada.",
  },
  {
    titulo: "Inyectar errores",
    dentro: "El 30 % de los pagos falla.",
    observa: "La tasa de errores pasa a rojo y los logs de error aparecen en vivo.",
  },
  {
    titulo: "Base de datos lenta",
    dentro: "Cada pago tarda entre 600 y 1200 ms más.",
    observa: "La latencia p95 cruza el umbral de 500 ms; la traza distribuida señala el servicio culpable.",
  },
];

const stack = [
  { titulo: "Servicios", items: ["Python · FastAPI", "Redis (banderas de caos y sesiones con TTL)", "nginx (entrada única y rate limiting)"] },
  { titulo: "Observabilidad", items: ["OpenTelemetry", "Prometheus · Loki · Tempo", "Grafana Alloy", "Grafana como código"] },
  { titulo: "Infraestructura", items: ["Terraform", "Docker Compose", "EC2 ARM (Graviton)"] },
  { titulo: "AWS", items: ["Lambda · CloudFront · ACM", "IAM de mínimo privilegio", "SSM, sin SSH"] },
];

const decisiones = [
  {
    titulo: "Scale-to-zero",
    items: [
      "Lambda enciende la instancia al entrar; un script la apaga cuando nadie la usa.",
      "El sondeo del panel cada segundo funciona como latido; el generador de carga interno no cuenta como visita.",
      "El costo bajó de ~$17 a ~$2 al mes, a cambio de ~30 s de espera.",
    ],
  },
  {
    titulo: "Caos con expiración en Redis",
    items: [
      "Cada escenario es una clave con TTL: SET chaos:errors 1 EX 45.",
      "Redis la borra sola al vencer: el auto-revert no requiere código adicional.",
      "Un candado atómico (SET NX) garantiza un solo escenario activo.",
    ],
  },
  {
    titulo: "Degradación realista",
    items: [
      "Generador de carga de lazo abierto: no espera respuestas, como los usuarios reales.",
      "Pool simulado de dos conexiones: en un pico, los requests hacen cola y fallan en cascada.",
      "Las conexiones se liberan siempre con try/finally para evitar fugas.",
    ],
  },
  {
    titulo: "Observabilidad completa",
    items: [
      "El trace_id viaja en los headers HTTP y conecta el error de orders con la falla de payments.",
      "Logs en JSON consultables por campos: | json | latency_ms > 120.",
      "Dashboard versionado en git: reapareció tras borrar todos los datos de Grafana.",
    ],
  },
  {
    titulo: "Producción desde un comando",
    items: [
      "terraform apply crea la instancia; el script de arranque instala Docker y levanta el stack.",
      "Configura el auto-apagado sin entrar al servidor.",
      "Las actualizaciones se despliegan de forma remota con AWS SSM.",
    ],
  },
  {
    titulo: "Seguridad",
    items: [
      "Un solo puerto público (80), IMDSv2 obligatorio y puertos internos cerrados.",
      "Rate limiting: 20 req/s por IP y 6 activaciones de caos por minuto.",
      "Sesiones de 20 min, máximo 3 personas; la API de caos exige sesión y Grafana es de solo lectura.",
    ],
  },
];

const costos = [
  { valor: "~$2", label: "Uso normal" },
  { valor: "~$3–5", label: "Uso muy activo" },
  { valor: "~$11", label: "Techo ante abuso continuo" },
];

const medidasCosto = [
  "Solo se paga cómputo mientras alguien usa la demo.",
  "Tope de 1 hora por encendido y 15 encendidos por día.",
  "Instancia Graviton en créditos standard, sin cargos extra de CPU.",
  "Sin NAT Gateway ni IP elástica: evita ~$32 y ~$3.60 fijos al mes.",
  "Lambda, CloudFront y ACM dentro del nivel gratuito.",
  "Retención de 24 h a 7 días, presupuesto con alertas y etiquetas.",
];

const aprendizajes = [
  "nginx enviaba tráfico a IPs viejas al recrear contenedores: se resolvió con un resolver dinámico.",
  "Los scripts con CRLF fallaban en Linux: .gitattributes fija LF en todos los .sh.",
  "Con la instancia apagada, Terraform quería recrearla: se resolvió con ignore_changes.",
  "El p95 superaba el máximo inyectado: los buckets del histograma definen la precisión.",
  "El generador de lazo cerrado ocultaba el problema; el de lazo abierto refleja a usuarios reales.",
  "Antes de exponer la demo se analizó cómo podían dispararse los costos y se diseñó una defensa para cada caso.",
];

export default function BreakMyInfra() {
  return (
    <CaseLayout>
      <CaseHeader
        eyebrow="DevOps · AWS · Observabilidad · Chaos Engineering"
        titulo="Break My Infra"
        descripcion="Rompe un sistema en producción y observa cómo lo detecta y se recupera solo, en tiempo real. Microservicios instrumentados con métricas, logs y trazas, desplegados en AWS con Terraform y una arquitectura scale-to-zero que cuesta alrededor de 2 dólares al mes."
      >
        <CaseButton href={demoUrl}>Probar la demo</CaseButton>
        <CaseButton href={githubUrl} variant="dark" github>Ver código</CaseButton>
        <CasePill>En producción · Noviembre 2026</CasePill>
      </CaseHeader>

      <CaseFigure
        src="/proyectos/break-my-infra-dashboard.png"
        alt="Panel de control con los botones de caos y el dashboard de Grafana: latencia p95, tasa de errores, requests por segundo y errores en vivo"
        width={1911}
        height={901}
        priority
      />

      <Reveal as="section" className="mt-24 md:mt-28">
        <div className="reveal-item grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-medium text-strong">Resumen</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Un laboratorio abierto al público</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-muted">
            <p>
              El visitante entra a la demo, presiona un botón y el sistema falla de verdad: un pico de tráfico, errores en
              los pagos o una base de datos lenta. En Grafana se ve en vivo cómo suben la latencia y la tasa de errores,
              cómo aparecen los logs del incidente y cómo, a los 45 segundos, todo vuelve a la normalidad sin intervención
              humana.
            </p>
            <p>
              Toda la infraestructura está definida como código y vive apagada: se enciende bajo demanda cuando alguien
              visita la demo y se apaga sola cuando nadie la usa.
            </p>
          </div>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metricas.map((m, i) => (
            <li key={m.label} className="reveal-item" style={revealDelay(i + 1)}>
              <div className="glass h-full rounded-2xl p-6">
                <p className="text-4xl font-semibold tracking-tight">{m.valor}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{m.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <CaseSection
        eyebrow="Demo en vivo"
        titulo="Pruébalo aquí"
        descripcion="El servidor vive apagado. Al presionar “Encender demo” arranca en unos 30 segundos; si se abre en una pestaña nueva, el panel tiene más espacio."
      >
        <div className="reveal-item">
          <LiveDemo url={demoUrl} titulo="Break My Infra" />
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="Motivación"
        titulo="Aprender DevOps rompiendo cosas"
        descripcion="Hacer webs ya es algo cotidiano. Levantar toda una infraestructura en AWS y monitorearla de punta a punta es otra cosa, tanto por su complejidad como por todo lo que se descubre en el camino."
      >
        <p className="reveal-item max-w-3xl text-base leading-7 text-muted">
          El objetivo fue construir algo que se pudiera romper, monitorear y ver recuperarse, y que además cualquier
          persona pudiera probar con un clic, sin leer código.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Experiencia del visitante" titulo="Cómo funciona">
        <StepCards pasos={experiencia} cols="sm:grid-cols-2 lg:grid-cols-3" />
      </CaseSection>

      <CaseSection
        eyebrow="Chaos engineering"
        titulo="Escenarios de caos"
        descripcion="Cada escenario se revierte solo a los 45 segundos."
      >
        <ul className="grid gap-4 lg:grid-cols-3">
          {escenarios.map((e, i) => (
            <li key={e.titulo} className="reveal-item" style={revealDelay(i + 1)}>
              <article className="glass h-full rounded-2xl p-6">
                <h3 className="text-lg font-semibold tracking-tight">{e.titulo}</h3>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-strong">Qué ocurre por dentro</p>
                <p className="mt-2 text-sm leading-6 text-muted">{e.dentro}</p>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-strong">Qué se observa</p>
                <p className="mt-2 text-sm leading-6 text-muted">{e.observa}</p>
              </article>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection
        eyebrow="Arquitectura"
        titulo="De la visita al dashboard"
        descripcion="CloudFront + ACM es el punto de entrada permanente con HTTPS; Lambda enciende la instancia EC2, donde nginx reparte el tráfico entre los servicios y Grafana. OpenTelemetry alimenta métricas, logs y trazas."
      >
        <div className="reveal-item">
          <CaseFigure
            src="/proyectos/break-my-infra-arquitectura.png"
            alt="Diagrama de arquitectura: CloudFront y ACM, Lambda de encendido y EC2 con diez contenedores; aplicación con gateway, orders, payments y Redis; observabilidad con Prometheus, Loki y Tempo hacia Grafana"
            width={1163}
            height={710}
            className="!mt-0 max-w-none"
          />
        </div>
      </CaseSection>

      <CaseSection eyebrow="Tecnologías" titulo="Stack técnico">
        <StackCards bloques={stack} cols="sm:grid-cols-2 lg:grid-cols-4" />
      </CaseSection>

      <CaseSection eyebrow="Ingeniería" titulo="Decisiones técnicas">
        <FeatureCards bloques={decisiones} cols="md:grid-cols-2 lg:grid-cols-3" />
      </CaseSection>

      <CaseSection
        eyebrow="FinOps"
        titulo="Control de costos"
        descripcion="Cada visita cuesta ~20–25 minutos de máquina: mínimo 20 minutos encendida y apagado tras 5 minutos sin visitas."
      >
        <ul className="grid gap-4 sm:grid-cols-3">
          {costos.map((c, i) => (
            <li key={c.label} className="reveal-item" style={revealDelay(i + 1)}>
              <div className="glass h-full rounded-2xl p-6">
                <p className="text-4xl font-semibold tracking-tight">{c.valor}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{c.label} · al mes</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="reveal-item mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {medidasCosto.map((m) => (
            <li key={m} className="flex items-start gap-3 text-sm leading-6 text-muted">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {m}
            </li>
          ))}
        </ul>
      </CaseSection>

      <ResultPanel eyebrow="Retos y aprendizajes" titulo="Lo que dejó operarlo" items={aprendizajes} />

      <CaseSection
        eyebrow="Próximos pasos"
        titulo="¿Quieres verlo fallar?"
        descripcion="Siguiente: alertas con Alertmanager y medición de MTTD/MTTR en el panel, y CI/CD con GitHub Actions y OIDC, sin credenciales guardadas."
      >
        <div className="reveal-item flex flex-wrap gap-3">
          <CaseButton href={demoUrl}>Probar la demo</CaseButton>
          <CaseButton href={githubUrl} variant="dark" github>Ver código en GitHub</CaseButton>
        </div>
      </CaseSection>
    </CaseLayout>
  );
}
