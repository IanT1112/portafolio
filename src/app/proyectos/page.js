import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectExplorer from "@/components/ProjectExplorer";

export const metadata = {
  title: "Proyectos — Ian Tapia",
  description: "Proyectos de IA, full stack y datos aplicados a distintas industrias.",
};

export default function Proyectos() {
  return (
    <>
      <Nav />
      <main>
        <div className="mx-auto max-w-6xl px-5 pt-10 md:px-8">
          <Link href="/" className="text-sm text-muted hover:text-fg">
            ← Volver al inicio
          </Link>
        </div>
        <ProjectExplorer showIndustries={false} headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
