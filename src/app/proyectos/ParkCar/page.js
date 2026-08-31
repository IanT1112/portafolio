"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const appUrl = "https://parkcar-livid.vercel.app/login";
const githubUrl = "https://github.com/IanT1112/parkcar/tree/main";

const stack = [
  ["Frontend", "React", "Vite", "JavaScript", "CSS responsive"],
  ["Backend", "Python", "FastAPI", "API REST", "Railway"],
  ["Visión artificial", "YOLO", "Detección de placas", "EasyOCR", "Análisis de color"],
  ["Datos y seguridad", "Supabase", "PostgreSQL", "Supabase Auth", "Row Level Security"],
  ["Despliegue", "Git", "GitHub", "Vercel", "Variables de entorno"],
];

const funcionalidades = [
  ["Registro inteligente", "Captura desde la cámara o carga de una fotografía.", "Detección del vehículo, matrícula, color y tipo.", "Confirmación de una misma placa en varias lecturas para evitar registros inestables."],
  ["Gestión del estacionamiento", "Panel de vehículos actualmente dentro.", "Historial completo de entradas, salidas y movimientos.", "Registro de salidas y seguimiento del tiempo de permanencia."],
  ["Tarifas y pagos", "Cobro por minuto, por hora o por hora iniciada.", "Configuración de tolerancia y tarifa mínima.", "Cálculo automático del importe al registrar la salida."],
  ["Autenticación y privacidad", "Acceso seguro mediante Supabase Auth.", "Entorno independiente para cada estacionamiento.", "Políticas RLS que aíslan los datos de cada usuario."],
];

const flujo = [
  ["01", "Captura", "El usuario utiliza la cámara o selecciona una imagen."],
  ["02", "Reconocimiento", "El backend extrae placa, color y tipo de vehículo."],
  ["03", "Ingreso", "Tras confirmar la lectura, crea la estancia y su hora de entrada."],
  ["04", "Permanencia", "El panel muestra el vehículo y contabiliza su tiempo."],
  ["05", "Salida y pago", "Calcula duración y precio según la tarifa configurada."],
];

const resultados = [
  "Visión por computadora aplicada a un proceso de negocio real.",
  "Arquitectura full-stack desacoplada con React, FastAPI y PostgreSQL.",
  "Control automático de estancias, tarifas y pagos.",
  "Autenticación multiusuario y aislamiento de datos mediante RLS.",
  "Despliegue cloud independiente del frontend y el backend.",
  "Reducción del registro manual y de detecciones inestables.",
];

const CardList = ({ data }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {data.map(([titulo, ...items], index) => (
      <article key={titulo} className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/65">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#365b40]">{titulo}</h3>
          <span className="text-xs font-bold text-[#365b40]/45">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <ul className="space-y-3">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-black/70"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b9071]" />{item}</li>)}</ul>
      </article>
    ))}
  </div>
);

export default function ParkCar() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isFullscreen]);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setIsFullscreen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e5efdc] px-6 py-8 text-black md:px-12 md:py-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_4%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_96%_15%,rgba(107,144,113,0.42),transparent_34%),linear-gradient(145deg,#f4f7ef_0%,#dce9d2_50%,#a9c1a7_100%)]" />
      <div className="relative mx-auto max-w-6xl">
        <nav className="mb-12 md:mb-16"><Link href="/proyectos" className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/25 bg-white/45 px-4 py-2 text-sm font-semibold text-[#294b33] backdrop-blur-sm transition hover:bg-white/70"><span aria-hidden="true">←</span> Proyectos</Link></nav>

        <header className="mb-16">
          <div className="mb-8 max-w-4xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]"><span className="h-px w-8 bg-[#365b40]" />Full-stack · Visión por computadora</span>
            <h1 className="mt-5 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">ParkCar</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">Sistema web inteligente para automatizar el registro y control de vehículos en estacionamientos mediante reconocimiento de matrículas, detección de características y gestión integral de estancias, tarifas y pagos.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#365b40] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(35,67,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b33]">Visitar ParkCar <span aria-hidden="true">↗</span></a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-[#365b40]/30 bg-white/50 px-6 py-3 text-sm font-bold text-[#294b33] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/80" aria-label="Ir al repositorio de ParkCar en GitHub"><FaGithub className="text-lg" aria-hidden="true" /> Ir a GitHub</a>
          </div>
        </header>

        <section className="mx-auto mb-24 max-w-5xl" aria-label="Demostración interactiva de ParkCar">
          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="flex items-center gap-2 rounded-t-[1.4rem] bg-[#1e3425] px-5 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" /><span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" /><span className="h-2.5 w-2.5 rounded-full bg-[#72d89b]" /><span className="ml-3 truncate text-[11px] font-semibold text-white/55">parkcar-livid.vercel.app</span></div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.4rem] bg-white"><iframe src={appUrl} className="h-full w-full" title="ParkCar — aplicación interactiva" allow="camera; clipboard-write" loading="lazy" /><div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" /></div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => setIsFullscreen(true)} className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/30 bg-white/50 px-5 py-2.5 text-sm font-bold text-[#294b33] backdrop-blur-sm transition hover:bg-white/80"><span aria-hidden="true">⛶</span> Pantalla completa</button>
            <a href={appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/30 bg-white/50 px-5 py-2.5 text-sm font-bold text-[#294b33] backdrop-blur-sm transition hover:bg-white/80">Nueva pestaña <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_420px] md:items-end"><div><span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">Tecnologías</span><h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Stack técnico</h2></div><p className="text-sm leading-6 text-black/60">Una arquitectura cloud que conecta una interfaz responsive, procesamiento visual, persistencia relacional y seguridad por usuario.</p></div>
          <CardList data={stack} />
        </section>

        <section className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">Alcance</span><h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Funcionalidades</h2>
          <div className="mt-10"><CardList data={funcionalidades} /></div>
        </section>

        <section className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">Proceso</span><h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Del reconocimiento al pago</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">{flujo.map(([num, titulo, descripcion]) => <article key={num} className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-5 backdrop-blur-sm"><span className="text-xs font-black text-[#365b40]/45">{num}</span><h3 className="mt-5 text-lg font-black">{titulo}</h3><p className="mt-3 text-sm leading-6 text-black/60">{descripcion}</p></article>)}</div>
        </section>

        <section className="mb-20 overflow-hidden rounded-[2rem] bg-[#294b33] px-6 py-8 text-white shadow-[0_20px_55px_rgba(35,67,43,0.22)] md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[300px_1fr]"><div><span className="text-xs font-bold uppercase tracking-[0.24em] text-[#bcd5b5]">Resultado</span><h2 className="mt-3 text-3xl font-black tracking-tight">Lo que demuestra</h2></div><div className="grid gap-3 sm:grid-cols-2">{resultados.map((item) => <div key={item} className="rounded-2xl border border-white/15 bg-white/8 p-5 text-sm leading-6 text-white/80">{item}</div>)}</div></div>
        </section>

        <footer className="border-t border-[#365b40]/20 py-8 text-center"><Link href="/proyectos" className="inline-flex items-center gap-2 text-sm font-bold text-[#294b33] transition hover:gap-3"><span aria-hidden="true">←</span> Volver a todos los proyectos</Link></footer>
      </div>

      {isFullscreen && <div className="fixed inset-0 z-50 flex flex-col bg-[#101510]" role="dialog" aria-modal="true" aria-label="ParkCar en pantalla completa"><div className="flex items-center justify-between border-b border-white/10 bg-[#1d2d22] px-5 py-3 text-white"><h3 className="font-bold">ParkCar</h3><button type="button" onClick={() => setIsFullscreen(false)} className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-black">Cerrar ×</button></div><iframe src={appUrl} className="w-full flex-1" title="ParkCar en pantalla completa" allow="camera; clipboard-write" /></div>}
    </main>
  );
}
