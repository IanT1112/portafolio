import LiveDemo from "@/components/caso/LiveDemo";
import {
  CaseButton,
  CaseHeader,
  CaseLayout,
  CaseSection,
  FeatureCards,
  ResultPanel,
  StackCards,
  StepCards,
} from "@/components/caso/CaseKit";

export const metadata = {
  title: "ParkCar — Ian Tapia",
  description: "Gestión de estacionamientos con reconocimiento de placas y cálculo automático de tarifas.",
};

const appUrl = "https://parkcar-livid.vercel.app/login";
const githubUrl = "https://github.com/IanT1112/parkcar/tree/main";

const stack = [
  { titulo: "Frontend", items: ["React", "Vite", "JavaScript", "CSS responsive"] },
  { titulo: "Backend", items: ["Python", "FastAPI", "API REST", "Railway"] },
  { titulo: "Visión artificial", items: ["YOLO", "Detección de placas", "EasyOCR", "Análisis de color"] },
  { titulo: "Datos y seguridad", items: ["Supabase", "PostgreSQL", "Supabase Auth", "Row Level Security"] },
  { titulo: "Despliegue", items: ["Git", "GitHub", "Vercel", "Variables de entorno"] },
];

const funcionalidades = [
  { titulo: "Registro inteligente", items: ["Captura desde la cámara o carga de una fotografía.", "Detección del vehículo, matrícula, color y tipo.", "Confirmación de una misma placa en varias lecturas para evitar registros inestables."] },
  { titulo: "Gestión del estacionamiento", items: ["Panel de vehículos actualmente dentro.", "Historial completo de entradas, salidas y movimientos.", "Registro de salidas y seguimiento del tiempo de permanencia."] },
  { titulo: "Tarifas y pagos", items: ["Cobro por minuto, por hora o por hora iniciada.", "Configuración de tolerancia y tarifa mínima.", "Cálculo automático del importe al registrar la salida."] },
  { titulo: "Autenticación y privacidad", items: ["Acceso seguro mediante Supabase Auth.", "Entorno independiente para cada estacionamiento.", "Políticas RLS que aíslan los datos de cada usuario."] },
];

const flujo = [
  { num: "01", titulo: "Captura", desc: "El usuario utiliza la cámara o selecciona una imagen." },
  { num: "02", titulo: "Reconocimiento", desc: "El backend extrae placa, color y tipo de vehículo." },
  { num: "03", titulo: "Ingreso", desc: "Tras confirmar la lectura, crea la estancia y su hora de entrada." },
  { num: "04", titulo: "Permanencia", desc: "El panel muestra el vehículo y contabiliza su tiempo." },
  { num: "05", titulo: "Salida y pago", desc: "Calcula duración y precio según la tarifa configurada." },
];

const resultados = [
  "Visión por computadora aplicada a un proceso de negocio real.",
  "Arquitectura full-stack desacoplada con React, FastAPI y PostgreSQL.",
  "Control automático de estancias, tarifas y pagos.",
  "Autenticación multiusuario y aislamiento de datos mediante RLS.",
  "Despliegue cloud independiente del frontend y el backend.",
  "Reducción del registro manual y de detecciones inestables.",
];

export default function ParkCar() {
  return (
    <CaseLayout>
      <CaseHeader
        eyebrow="Movilidad · Full Stack + Visión por computadora"
        titulo="ParkCar"
        descripcion="Sistema web inteligente para automatizar el registro y control de vehículos en estacionamientos mediante reconocimiento de matrículas, detección de características y gestión integral de estancias, tarifas y pagos."
      >
        <CaseButton href={appUrl}>Visitar ParkCar</CaseButton>
        <CaseButton href={githubUrl} variant="dark" github>Ir a GitHub</CaseButton>
      </CaseHeader>

      <LiveDemo url={appUrl} titulo="ParkCar" allow="camera; clipboard-write" />

      <CaseSection
        eyebrow="Tecnologías"
        titulo="Stack técnico"
        descripcion="Una arquitectura cloud que conecta una interfaz responsive, procesamiento visual, persistencia relacional y seguridad por usuario."
      >
        <StackCards bloques={stack} />
      </CaseSection>

      <CaseSection eyebrow="Alcance" titulo="Funcionalidades">
        <FeatureCards bloques={funcionalidades} />
      </CaseSection>

      <CaseSection eyebrow="Proceso" titulo="Del reconocimiento al pago">
        <StepCards pasos={flujo} cols="sm:grid-cols-2 lg:grid-cols-5" />
      </CaseSection>

      <ResultPanel items={resultados} />
    </CaseLayout>
  );
}
