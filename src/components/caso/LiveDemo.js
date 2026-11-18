"use client";

import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight, LuMaximize2, LuX } from "react-icons/lu";

/**
 * Demo en vivo dentro de un marco de vidrio con barra de navegador.
 * Pantalla completa opcional: bloquea el scroll, cierra con Esc y devuelve
 * el foco al botón que la abrió. Sin animación de apertura (es una vista
 * de trabajo, no decoración).
 */
export default function LiveDemo({
  url,
  titulo,
  allow,
  alto = "aspect-[16/10]",
  pantallaCompleta = true,
}) {
  const [abierta, setAbierta] = useState(false);
  const botonRef = useRef(null);
  const cerrarRef = useRef(null);
  const dominio = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  useEffect(() => {
    if (!abierta) return;
    document.body.style.overflow = "hidden";
    cerrarRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setAbierta(false);
    window.addEventListener("keydown", onKey);
    const boton = botonRef.current;
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      boton?.focus();
    };
  }, [abierta]);

  return (
    <section className="mx-auto mt-14 max-w-5xl md:mt-16" aria-label={`Demo en vivo de ${titulo}`}>
      <div className="glass rounded-[1.75rem] p-2 md:p-2.5">
        <div className="overflow-hidden rounded-[1.25rem] bg-white">
          <div className="flex items-center gap-3 border-b border-black/10 bg-card px-4 py-2.5">
            <span aria-hidden="true" className="hidden gap-1.5 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
            </span>
            <span className="min-w-0 flex-1 truncate rounded-full bg-white/80 px-4 py-1.5 text-center font-mono text-[11px] text-muted">
              {dominio}
            </span>
          </div>
          <div className={`relative w-full ${alto}`}>
            <iframe
              src={url}
              title={`${titulo} — aplicación interactiva`}
              allow={allow}
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {pantallaCompleta && (
          <button
            ref={botonRef}
            type="button"
            onClick={() => setAbierta(true)}
            className="pressable glass inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium hover:border-white"
          >
            <LuMaximize2 aria-hidden="true" className="h-4 w-4" />
            Pantalla completa
          </button>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="pressable glass inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium hover:border-white"
        >
          Nueva pestaña
          <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>

      {abierta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${titulo} en pantalla completa`}
          className="fixed inset-0 z-50 flex flex-col bg-fg"
        >
          <div className="flex items-center justify-between px-5 py-3 text-bg">
            <p className="font-medium">{titulo}</p>
            <button
              ref={cerrarRef}
              type="button"
              onClick={() => setAbierta(false)}
              className="pressable inline-flex h-9 items-center gap-1.5 rounded-full bg-bg px-4 text-sm font-medium text-fg"
            >
              Cerrar
              <LuX aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <iframe src={url} title={`${titulo} en pantalla completa`} allow={allow} className="w-full flex-1 border-0 bg-white" />
        </div>
      )}
    </section>
  );
}
