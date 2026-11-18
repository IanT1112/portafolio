import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import ProjectExplorer from "@/components/ProjectExplorer";
import StackGrid from "@/components/StackGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Saltar a proyectos
      </a>
      <Nav />
      <main>
        <Hero />
        <SobreMi />
        <ProjectExplorer />
        <StackGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
