import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import RubroIcon from "./RubroIcon";
import { rubroPorId } from "@/data/proyectos";

export default function ProjectCard({ proyecto, destacado = false }) {
  const rubro = rubroPorId[proyecto.rubro];

  return (
    <article className="project-card flex h-full flex-col overflow-hidden rounded-2xl glass">
      {/* La imagen es un atajo visual al mismo destino que el título */}
      <Link
        href={proyecto.detalle}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] overflow-hidden border-b border-white/60 bg-white/40"
      >
        <Image
          src={proyecto.imagen}
          alt={proyecto.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="project-img object-cover object-top"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors duration-200 ${
              destacado ? "bg-accent-soft text-strong" : "glass-soft text-fg"
            }`}
          >
            <RubroIcon icono={rubro.icono} className="h-3.5 w-3.5" />
            {rubro.nombre}
          </span>
          <span className="font-mono text-xs text-muted">{proyecto.numero}</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
          <Link href={proyecto.detalle} className="hover:underline hover:underline-offset-4">
            {proyecto.titulo}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{proyecto.impacto}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {proyecto.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-fg/10 bg-white/40 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-medium">
          <Link href={proyecto.detalle} className="inline-flex items-center gap-1 hover:text-strong">
            Ver caso
            <span className="sr-only">: {proyecto.titulo}</span>
          </Link>
          {proyecto.demo && (
            <a
              href={proyecto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-fg"
            >
              Demo
              <LuArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              <span className="sr-only">de {proyecto.titulo} (abre en otra pestaña)</span>
            </a>
          )}
          {proyecto.repo && (
            <a
              href={proyecto.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-fg"
            >
              <FaGithub aria-hidden="true" className="h-3.5 w-3.5" />
              Código
              <span className="sr-only">de {proyecto.titulo} (abre en otra pestaña)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
