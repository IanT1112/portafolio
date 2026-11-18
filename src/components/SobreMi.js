import Image from "next/image";
import Reveal from "./Reveal";
import { revealDelay } from "./revealDelay";
import { sobreMi } from "@/data/perfil";

// Desfase vertical de cada columna: rompe la grilla para el look "collage".
const DESFASE = ["", "mt-8 md:mt-12", "mt-16 md:mt-24"];

/**
 * Collage a la izquierda + texto a la derecha.
 * 3 columnas desfasadas; cada marco con la proporción real de su foto
 * (sin recortes) y una inclinación leve. Al pasar el mouse la foto se endereza.
 */
export default function SobreMi() {
  const columnas = [1, 2, 3].map((n) => sobreMi.fotos.filter((f) => f.columna === n));

  return (
    <section id="sobre-mi" className="border-t border-line">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-[1.55fr_1fr] md:gap-12 md:px-8 md:py-28 lg:gap-16">
        <div className="grid grid-cols-3 items-start gap-3 md:gap-5">
          {columnas.map((fotos, c) => (
            <div key={fotos[0]?.src ?? c} className={`flex flex-col gap-4 md:gap-6 ${DESFASE[c]}`}>
              {fotos.map((foto) => (
                <Foto
                  key={foto.src}
                  foto={foto}
                  style={revealDelay(sobreMi.fotos.indexOf(foto))}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="reveal-item" style={revealDelay(2)}>
          <p className="text-sm font-medium text-strong">Sobre mí</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {sobreMi.titulo}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            {sobreMi.parrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          {/* Columna de texto más angosta: destacados apilados hasta xl */}
          <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
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
      <div
        className="about-photo glass rounded-2xl p-1 sm:p-1.5"
        style={{ "--giro": `${foto.giro ?? 0}deg` }}
      >
        <div
          className="relative overflow-hidden rounded-xl bg-white/40"
          style={{ aspectRatio: `${foto.ancho} / ${foto.alto}` }}
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            sizes="(max-width: 768px) 32vw, 300px"
            className="object-cover"
          />
        </div>
      </div>
      {foto.pie && (
        <figcaption className="mt-2 truncate px-1 text-[11px] text-muted sm:text-xs">{foto.pie}</figcaption>
      )}
    </figure>
  );
}
