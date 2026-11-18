import Reveal from "./Reveal";
import { revealDelay } from "./revealDelay";
import { stack } from "@/data/perfil";

export default function StackGrid() {
  return (
    <section id="stack" className="border-t border-line">
      <Reveal className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal-item max-w-2xl">
          <p className="text-sm font-medium text-strong">Stack</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Con qué trabajo.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((grupo, i) => (
            <div key={grupo.area} className="reveal-item border-t border-fg pt-5" style={revealDelay(i + 1)}>
              <h3 className="text-base font-semibold tracking-tight">{grupo.area}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {grupo.items.map((item) => (
                  <li key={item} className="rounded-full glass-soft px-3 py-1.5 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
