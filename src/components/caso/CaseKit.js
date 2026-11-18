import Image from "next/image";
import Link from "next/link";
import { LuArrowLeft, LuArrowUpRight, LuCheck } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import Nav from "../Nav";
import Footer from "../Footer";
import Reveal from "../Reveal";
import { revealDelay } from "../revealDelay";

/* Kit compartido de las páginas de detalle de proyecto.
   Mismo sistema visual que la home: fondo gris + vidrio, negro para texto
   y botones secundarios, naranja para la acción principal, rojo para acentos. */

export function CaseLayout({ children }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pb-10 pt-10 md:px-8 md:pt-14">
        <Link
          href="/proyectos"
          className="pressable glass-soft inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium hover:border-white"
        >
          <LuArrowLeft aria-hidden="true" className="h-4 w-4" />
          Proyectos
        </Link>

        {children}

        <div className="mt-20 border-t border-line pt-8 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-strong"
          >
            <LuArrowLeft aria-hidden="true" className="h-4 w-4" />
            Volver a todos los proyectos
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function CaseHeader({ eyebrow, titulo, descripcion, children }) {
  return (
    <header className="hero-enter mt-12 md:mt-16">
      <p className="text-sm font-medium text-strong">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
        {titulo}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">
        {descripcion}
      </p>
      {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
    </header>
  );
}

const BOTON = {
  primary: "bg-accent text-accent-fg hover:bg-accent/90",
  dark: "bg-fg text-bg hover:bg-fg/85",
  glass: "glass hover:border-white",
};

export function CaseButton({ href, variant = "primary", github = false, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`pressable inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium ${BOTON[variant]}`}
    >
      {github && <FaGithub aria-hidden="true" className="h-4 w-4" />}
      {children}
      {!github && <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />}
      <span className="sr-only">(abre en otra pestaña)</span>
    </a>
  );
}

/** Etiqueta de estado no clicable (ej. "Código privado"). */
export function CasePill({ icon, children, oscuro = false }) {
  return (
    <span
      className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium ${
        oscuro ? "bg-fg text-bg" : "glass"
      }`}
    >
      {icon}
      {children}
    </span>
  );
}

export function CaseFigure({ src, alt, width, height, priority = false, className = "max-w-5xl" }) {
  return (
    <figure className={`mx-auto mt-14 md:mt-16 ${className}`}>
      <div className="glass rounded-[1.75rem] p-2 md:p-2.5">
        <div className="overflow-hidden rounded-[1.25rem] bg-white/40">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </figure>
  );
}

export function CaseSection({ eyebrow, titulo, descripcion, children }) {
  return (
    <Reveal as="section" className="mt-24 md:mt-28">
      <div className="reveal-item grid gap-4 md:grid-cols-[1fr_400px] md:items-end">
        <div>
          <p className="text-sm font-medium text-strong">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{titulo}</h2>
        </div>
        {descripcion && <p className="text-sm leading-6 text-muted">{descripcion}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </Reveal>
  );
}

const numero = (i) => String(i + 1).padStart(2, "0");

/** Stack: tarjetas con título en mayúsculas y viñetas. */
export function StackCards({ bloques, cols = "sm:grid-cols-2 lg:grid-cols-3" }) {
  return (
    <ul className={`grid gap-4 ${cols}`}>
      {bloques.map((b, i) => (
        <li key={b.titulo} className="reveal-item" style={revealDelay(i + 1)}>
          <article className="glass h-full rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-medium uppercase tracking-wider text-strong">{b.titulo}</h3>
              <span className="font-mono text-xs text-muted">{numero(i)}</span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {b.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ul>
  );
}

/** Funcionalidades: número en círculo negro + lista con checks. */
export function FeatureCards({ bloques, cols = "md:grid-cols-2" }) {
  return (
    <ul className={`grid gap-4 ${cols}`}>
      {bloques.map((b, i) => (
        <li key={b.titulo} className="reveal-item" style={revealDelay(i + 1)}>
          <article className="glass h-full rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-fg font-mono text-xs text-bg">
                {numero(i)}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{b.titulo}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {b.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <LuCheck aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ul>
  );
}

/** Pasos de un flujo: número, título y descripción. */
export function StepCards({ pasos, cols = "md:grid-cols-2" }) {
  return (
    <ol className={`grid gap-4 ${cols}`}>
      {pasos.map((p, i) => (
        <li key={p.titulo} className="reveal-item" style={revealDelay(i + 1)}>
          <article className="glass h-full rounded-2xl p-6">
            <span className="font-mono text-xs text-strong">{p.num ?? numero(i)}</span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{p.desc}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}

/** Cierre en panel negro: resultados, aprendizajes o preguntas. */
export function ResultPanel({ eyebrow = "Resultado", titulo = "Lo que demuestra", items }) {
  return (
    <Reveal as="section" className="mt-24 md:mt-28">
      <div className="reveal-item grid gap-8 rounded-[1.75rem] bg-fg p-6 text-bg md:grid-cols-[280px_1fr] md:p-10">
        <div>
          <p className="text-sm font-medium text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{titulo}</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-sm leading-6 text-bg/85"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
