"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { revealDelay } from "./revealDelay";
import RubroIcon from "./RubroIcon";
import { proyectos, proyectosDeRubro, rubroPorId, rubros } from "@/data/proyectos";

/**
 * Rubros + carrusel de proyectos comparten el filtro.
 * - Click fija el rubro (toggle). Hover con mouse lo previsualiza.
 * - En carrusel se filtra (no se atenúa): con 1–3 cards visibles, un
 *   proyecto atenuado fuera de vista no comunica nada.
 * - Scroll nativo con scroll-snap: swipe en móvil, flechas y teclado en desktop.
 *   Sin autoplay.
 */
export default function ProjectExplorer({ showIndustries = true, headingLevel = "h2" }) {
  const [activo, setActivo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [bordes, setBordes] = useState({ inicio: true, fin: false });
  const seccionRef = useRef(null);
  const pistaRef = useRef(null);

  const filtro = preview ?? activo;
  const visibles = filtro ? proyectosDeRubro(filtro) : proyectos;
  const Heading = headingLevel;

  const actualizarBordes = useCallback(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    const inicio = pista.scrollLeft <= 4;
    const fin = pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 4;
    // React descarta el render si el objeto resultante no cambia de valores
    setBordes((b) => (b.inicio === inicio && b.fin === fin ? b : { inicio, fin }));
  }, []);

  // Al cambiar el filtro: volver al inicio y recalcular flechas.
  useEffect(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    pista.scrollTo({ left: 0 });
    actualizarBordes();
  }, [filtro, actualizarBordes]);

  useEffect(() => {
    window.addEventListener("resize", actualizarBordes);
    return () => window.removeEventListener("resize", actualizarBordes);
  }, [actualizarBordes]);

  const mover = (direccion) => {
    const pista = pistaRef.current;
    const card = pista?.querySelector("li");
    if (!pista || !card) return;
    const gap = parseFloat(getComputedStyle(pista).columnGap) || 0;
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    pista.scrollBy({
      left: direccion * (card.getBoundingClientRect().width + gap),
      behavior: reducir ? "auto" : "smooth",
    });
  };

  const alternar = (id, { desplazar = false } = {}) => {
    const siguiente = activo === id ? null : id;
    setActivo(siguiente);
    setPreview(null);

    // Si el carrusel está fuera de vista (móvil), llévalo hasta él.
    const seccion = seccionRef.current;
    if (desplazar && siguiente && seccion) {
      const top = seccion.getBoundingClientRect().top;
      if (top > window.innerHeight * 0.85) seccion.scrollIntoView({ block: "start" });
    }
  };

  const previsualizar = (id) => (e) => {
    if (e.pointerType === "mouse") setPreview(id);
  };
  const limpiarPreview = (e) => {
    if (e.pointerType === "mouse") setPreview(null);
  };

  return (
    <>
      {showIndustries && (
        <section id="rubros" className="border-t border-line">
          <Reveal className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="reveal-item max-w-2xl">
              <p className="text-sm font-medium text-strong">Rubros</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Dónde he aplicado tecnología.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Elige un rubro para ver sus proyectos.
              </p>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {rubros.map((rubro, i) => {
                const relacionados = proyectosDeRubro(rubro.id);
                const seleccionado = activo === rubro.id;
                return (
                  <li key={rubro.id} className="reveal-item" style={revealDelay(i + 1)}>
                    <button
                      type="button"
                      aria-pressed={seleccionado}
                      onClick={() => alternar(rubro.id, { desplazar: true })}
                      onPointerEnter={previsualizar(rubro.id)}
                      onPointerLeave={limpiarPreview}
                      className={`pressable flex h-full w-full flex-col items-start rounded-2xl border p-5 text-left ${
                        seleccionado
                          ? "border-accent bg-accent-soft"
                          : "glass hover:border-white"
                      }`}
                    >
                      <span className="flex w-full items-center justify-between">
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-xl transition-colors duration-200 ${
                            seleccionado ? "bg-accent text-accent-fg" : "bg-white/80 text-fg"
                          }`}
                        >
                          <RubroIcon icono={rubro.icono} />
                        </span>
                        <span className="font-mono text-xs text-muted">
                          {relacionados.length} {relacionados.length === 1 ? "proyecto" : "proyectos"}
                        </span>
                      </span>
                      <span className="mt-5 text-base font-semibold tracking-tight">{rubro.nombre}</span>
                      <span className="mt-1 text-sm leading-6 text-muted">
                        {relacionados.map((p) => p.titulo).join(" · ")}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </section>
      )}

      <section id="proyectos" ref={seccionRef} className="border-t border-line">
        <Reveal className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="reveal-item flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-strong">Proyectos</p>
              <Heading className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Lo que he construido.
              </Heading>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-muted" aria-live="polite">
                {filtro
                  ? `${visibles.length} de ${proyectos.length} en ${rubroPorId[filtro].nombre}`
                  : `${proyectos.length} proyectos`}
              </p>
              <div className="hidden gap-2 md:flex">
                {[
                  [-1, "Proyecto anterior", LuArrowLeft, bordes.inicio],
                  [1, "Proyecto siguiente", LuArrowRight, bordes.fin],
                ].map(([dir, label, Icono, deshabilitado]) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => mover(dir)}
                    disabled={deshabilitado}
                    aria-label={label}
                    aria-controls="carrusel-proyectos"
                    className="pressable grid h-10 w-10 place-items-center rounded-full border border-line hover:border-fg/40 disabled:pointer-events-none disabled:opacity-35"
                  >
                    <Icono aria-hidden="true" className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* min-w-0: un fieldset no deja hacer overflow-x sin esto */}
          <fieldset
            className="reveal-item no-scrollbar -mx-5 mt-8 flex min-w-0 gap-2 overflow-x-auto border-0 px-5 pb-1 md:mx-0 md:flex-wrap md:px-0"
            style={revealDelay(1)}
          >
            <legend className="sr-only">Filtrar por rubro</legend>
            {[{ id: null, nombre: "Todos" }, ...rubros].map((r) => {
              const seleccionado = activo === r.id;
              return (
                <button
                  key={r.id ?? "todos"}
                  type="button"
                  aria-pressed={seleccionado}
                  onClick={() => (r.id ? alternar(r.id) : setActivo(null))}
                  className={`pressable h-9 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm ${
                    seleccionado
                      ? "border-fg bg-fg text-bg"
                      : "border-line text-muted hover:border-fg/30 hover:text-fg"
                  }`}
                >
                  {r.nombre}
                </button>
              );
            })}
          </fieldset>

          <ul
            id="carrusel-proyectos"
            ref={pistaRef}
            onScroll={actualizarBordes}
            tabIndex={0}
            aria-label="Carrusel de proyectos. Desliza o usa las flechas del teclado."
            className="carousel no-scrollbar -mx-5 mt-8 flex gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0"
          >
            {visibles.map((p, i) => (
              <li
                key={p.slug}
                className="reveal-item carousel-item w-[85%] flex-none sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                style={revealDelay(i + 2)}
              >
                <ProjectCard proyecto={p} destacado={Boolean(filtro)} />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
