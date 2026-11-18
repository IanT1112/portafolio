import { perfil } from "@/data/perfil";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {perfil.nombre} · {perfil.ubicacion}</p>
        <p>Diseñado y desarrollado por mí, con Next.js.</p>
      </div>
    </footer>
  );
}
