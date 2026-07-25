"use client";

import Link from "next/link";
import { useState } from "react";

const appUrl =
  "https://studio--trujillo-responde-2-7719-1bf4c.us-central1.hosted.app/";

const stack = [
  {
    categoria: "Backend serverless",
    items: [
      "Firebase sobre Google Cloud",
      "Base de datos y despliegue administrado",
    ],
  },
  {
    categoria: "Geolocalización",
    items: [
      "Google Maps Platform",
      "Maps API y Places API para ubicación y visualización",
    ],
  },
  {
    categoria: "Inteligencia Artificial",
    items: [
      "Google Cloud AI APIs",
      "Análisis y clasificación inteligente de reportes",
    ],
  },
];

const funcionalidades = [
  {
    grupo: "Reporte ciudadano",
    items: [
      "Registro de incidencias urbanas desde una interfaz accesible",
      "Ingreso de información relevante para la atención municipal",
      "Experiencia enfocada en reducir la fricción del reporte",
    ],
  },
  {
    grupo: "Ubicación",
    items: [
      "Geolocalización de cada incidencia reportada",
      "Visualización de ubicaciones mediante Google Maps",
      "Uso de servicios geoespaciales para contextualizar el reporte",
    ],
  },
  {
    grupo: "Clasificación con IA",
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e5efdc] px-6 py-8 text-black md:px-12 md:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_4%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_96%_15%,rgba(107,144,113,0.42),transparent_34%),linear-gradient(145deg,#f4f7ef_0%,#dce9d2_50%,#a9c1a7_100%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <nav className="mb-12 md:mb-16">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/25 bg-white/45 px-4 py-2 text-sm font-semibold text-[#294b33] backdrop-blur-sm transition hover:border-[#365b40]/50 hover:bg-white/70"
          >
            <span aria-hidden="true">←</span>
            Proyectos
          </Link>
        </nav>

        <header className="mb-16">
          <div className="mb-8 max-w-4xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
              <span className="h-px w-8 bg-[#365b40]" />
              GovTech · Inteligencia Artificial
            </span>
            <h1 className="mt-5 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
              Trujillo Responde
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
              Plataforma web que permite a los ciudadanos reportar incidencias
              urbanas de forma geolocalizada, mejorando la eficiencia en la gestión
              municipal mediante servicios cloud e inteligencia artificial.
            </p>
          </div>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#365b40] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(35,67,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b33]"
          >
            Abrir aplicación <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="mx-auto mb-24 max-w-5xl" aria-label="Demostración interactiva">
          <div className="rounded-[2rem] border border-white/60 bg-white/35 p-2 shadow-[0_24px_70px_rgba(35,67,43,0.18)] backdrop-blur-md md:p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-white">
              <iframe
                src={appUrl}
                className="h-full w-full"
                title="Trujillo Responde - Aplicación interactiva"
                allow="geolocation; clipboard-write"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/30 bg-white/50 px-5 py-2.5 text-sm font-bold text-[#294b33] backdrop-blur-sm transition hover:bg-white/80"
            >
              <span aria-hidden="true">⛶</span>
              Pantalla completa
            </button>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#365b40]/30 bg-white/50 px-5 py-2.5 text-sm font-bold text-[#294b33] backdrop-blur-sm transition hover:bg-white/80"
            >
              Nueva pestaña <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_420px] md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">
                Tecnologías
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Stack técnico
              </h2>
            </div>
            <p className="text-sm leading-6 text-black/60">
              La solución conecta infraestructura serverless, servicios de
              geolocalización e inteligencia artificial de Google.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {stack.map((bloque, index) => (
              <article
                key={bloque.categoria}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/65"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#365b40]">
                    {bloque.categoria}
                  </h3>
                  <span className="text-xs font-bold text-[#365b40]/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-3">
                  {bloque.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-black/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b9071]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#365b40]">
            Alcance
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Funcionalidades
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {funcionalidades.map((bloque, index) => (
              <article
                key={bloque.grupo}
                className="rounded-[1.5rem] border border-[#365b40]/15 bg-white/50 p-6 shadow-[0_12px_35px_rgba(35,67,43,0.08)] backdrop-blur-sm"
              >
                <span className="mb-8 grid h-10 w-10 place-items-center rounded-full bg-[#365b40] text-xs font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-5 text-xl font-black tracking-tight">
                  {bloque.grupo}
                </h3>
                <ul className="space-y-4">
                  {bloque.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-black/65"
                    >
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#6b9071]/50 text-[9px] font-bold text-[#365b40]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 overflow-hidden rounded-[2rem] bg-[#294b33] px-6 py-8 text-white shadow-[0_20px_55px_rgba(35,67,43,0.22)] md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#bcd5b5]">
                Impacto
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Lo que demuestra
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {resultados.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/8 p-5 text-sm leading-6 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-[#365b40]/20 py-8 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#294b33] transition hover:gap-3"
          >
            <span aria-hidden="true">←</span>
            Volver a todos los proyectos
          </Link>
        </footer>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#101510]"
          role="dialog"
          aria-modal="true"
          aria-label="Trujillo Responde en pantalla completa"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-[#1d2d22] px-5 py-3 text-white">
            <h3 className="font-bold">Trujillo Responde</h3>
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-black"
            >
              Cerrar ×
            </button>
          </div>
          <iframe
            src={appUrl}
            className="w-full flex-1"
            title="Trujillo Responde en pantalla completa"
            allow="geolocation; clipboard-write"
          />
        </div>
      )}
    </main>
  );
}
