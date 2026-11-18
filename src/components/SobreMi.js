import Image from "next/image";
import Reveal from "./Reveal";
import { revealDelay } from "./revealDelay";
import { sobreMi } from "@/data/perfil";

/**
 * Collage escalonado en dos columnas + texto fijo (sticky) en desktop.
 * Todas las fotos usan el mismo marco y proporción 3:4.
 */
export default function SobreMi() {
  const izquierda = sobreMi.fotos.filter((_, i) => i % 2 === 0);
  const derecha = sobreMi.fotos.filter((_, i) => i % 2 === 1);

  return (
    <section id="sobre-mi" className="border-t border-line">
      <Reveal className="mx-auto grid max-w-6xl items-start gap-14 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <div className="grid grid-cols-2 items-start gap-4 md:gap-5">
          <div className="flex flex-col gap-5 md:gap-6">
            {izquierda.map((foto, i) => (
              <Foto key={foto.src} foto={foto} style={revealDelay(i * 2)} />
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-5 md:mt-20 md:gap-6">
            {derecha.map((foto, i) => (
              <Foto key={foto.src} foto={foto} style={revealDelay(i * 2 + 1)} />
            ))}
          </div>
        </div>

        <div className="reveal-item md:sticky md:top-24" style={revealDelay(1)}>
          <p className="text-sm font-medium text-strong">Sobre mí</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {sobreMi.titulo}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            {sobreMi.parrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {sobreMi.destacados.map(([titulo, detalle]) => (
              <li key={titulo} className="glass-soft rounded-2xl p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-strong">{titulo}</p>
                <p className="mt-1 text-sm font-medium">{detalle}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function Foto({ foto, style }) {
  return (
    <figure className="reveal-item" style={style}>
      <div className="about-photo glass rounded-[1.5rem] p-1.5">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-white/40">
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            sizes="(max-width: 768px) 45vw, 260px"
            className="object-cover"
            style={foto.enfoque ? { objectPosition: foto.enfoque } : undefined}
          />
        </div>
      </div>
      {foto.pie && (
        <figcaption className="mt-3 px-1 text-xs text-muted">{foto.pie}</figcaption>
      )}
    </figure>
  );
}
