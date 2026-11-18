import Link from "next/link";
import { perfil } from "@/data/perfil";

const enlaces = [
  ["Sobre mí", "/#sobre-mi"],
  ["Rubros", "/#rubros"],
  ["Proyectos", "/#proyectos"],
  ["Stack", "/#stack"],
  ["Contacto", "/#contacto"],
];

// Tres columnas (1fr · auto · 1fr): los enlaces quedan centrados en la
// página sin importar el ancho del nombre o del botón CV.
export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/45 backdrop-blur-xl">
      <nav
        aria-label="Principal"
        className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-8"
      >
        <Link href="/" className="hidden text-sm font-semibold tracking-tight sm:block">
          {perfil.nombre}
        </Link>

        <ul className="col-start-2 flex items-center gap-4 whitespace-nowrap text-sm text-muted sm:gap-5 md:gap-8">
          {enlaces.map(([label, href]) => (
            // En móvil se oculta "Stack" para que los enlaces quepan en 360px
            <li key={href} className={href === "/#stack" ? "hidden sm:block" : undefined}>
              <a href={href} className="transition-colors duration-150 hover:text-fg">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 hidden justify-self-end md:block">
          <a
            href={perfil.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex h-8 items-center rounded-full bg-fg px-3.5 text-xs font-medium text-bg"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
