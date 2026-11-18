import Image from "next/image";
import { LuArrowRight, LuDownload, LuMapPin } from "react-icons/lu";
import { perfil } from "@/data/perfil";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.35fr_1fr] md:gap-16 md:px-8 md:pb-28 md:pt-24">
      <div className="hero-enter">
        <p className="inline-flex items-center gap-1.5 text-sm text-muted">
          <LuMapPin aria-hidden="true" className="h-4 w-4" />
          {perfil.ubicacion}
        </p>

        <h1 className="mt-5 text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
          Ian
          <br />
          Tapia<span className="text-strong">.</span>
        </h1>

        <div className="mt-7 max-w-xl">
          <p className="text-lg font-medium tracking-tight md:text-xl">{perfil.rol}</p>
          <p className="mt-3 text-base leading-7 text-muted">{perfil.bio}</p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="pressable inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-fg hover:bg-accent/90"
          >
            Ver proyectos
            <LuArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href={perfil.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg hover:bg-fg/85"
          >
            <LuDownload aria-hidden="true" className="h-4 w-4" />
            Descargar CV
          </a>
        </div>

      </div>

      <div className="mx-auto w-full max-w-sm md:max-w-none">
        <div className="glass rounded-[1.75rem] p-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
            <Image
              src={perfil.foto}
              alt="Retrato de Ian Tapia"
              fill
              priority
              sizes="(max-width: 768px) 384px, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
