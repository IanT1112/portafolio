"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Hook personalizado para detectar cuando un elemento es visible
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

export default function Home() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [sobreMiRef, sobreMiVisible] = useScrollReveal();
  const [proyectosRef, proyectosVisible] = useScrollReveal();

  return (
    <main 
      className="min-h-screen text-black" 
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)'
      }}
    >
      {/* NAVBAR */}
      <nav className="flex justify-center items-center px-6 md:px-12 py-6 text-sm uppercase tracking-wide">
        <div className="flex gap-10 md:gap-20 font-bold">
          <a href="#sobre-mi" className="hover:underline">sobre mí</a>
          <a href="#proyectos" className="hover:underline">proyectos</a>
        </div>
      </nav>

   {/* HERO */}
      <section 
        ref={heroRef}
        className={`relative h-[calc(100vh-72px)] flex flex-col justify-between overflow-hidden transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center px-4">
          {/* NOMBRE + REDES */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-widest mb-3">
              IAN TAPIA
            </h1>

            <div className="flex gap-6 text-2xl justify-center">
              <a href="https://github.com/IanT1112" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ian-tapia-144736210" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="flex justify-center items-center my-8 md:my-10">
            <div className="relative w-[200px] h-[200px] md:w-[320px] md:h-[320px]">
              <Image
                src="/proyectos/ian.jpg"
                alt="Ian Tapia"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>

          {/* BOTÓN */}
          <div className="text-center">
            <a
              href="/proyectos/iantapia-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
            >
              Ver CV
            </a>
          </div>
        </div>

        {/* FOOTER HERO */}
        <div className="w-full grid grid-cols-3 items-end text-xs md:text-sm px-4 md:px-12 pb-4 md:pb-6">
          <div>
            <p>Estudiante</p>
            <p>Universitario</p>
          </div>

          <div className="flex justify-center text-xl md:text-2xl animate-bounce">
            ↓
          </div>
          <div className="text-right font-bold text-sm md:text-lg">
            <p>Ingeniería</p>
            <p>Sistemas e IA</p>
          </div>
        </div>

      </section>



      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        ref={sobreMiRef}
        className={`px-6 md:px-16 py-16 md:py-24 transition-all duration-1000 delay-200 ${
          sobreMiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[480px]">
              <Image
                src="/proyectos/iaaan.jpg"
                alt="Ian Tapia"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Sobre mí</h2>

            <p className="text-base md:text-lg leading-relaxed mb-4">
              Soy estudiante de Ingeniería de Sistemas e Inteligencia Artificial, con un enfoque
              práctico en el desarrollo de soluciones tecnológicas basadas en datos y servicios
              en la nube.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-4">
              He trabajado en proyectos de Machine Learning aplicados a problemas reales, desde
              el preprocesamiento de datos y entrenamiento de modelos hasta su despliegue en
              aplicaciones web funcionales.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-4">
              Cuento con conocimientos en AWS, Google Cloud y Firebase, así como en la integración
              de APIs externas como Google Maps.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Busco seguir fortaleciendo mi perfil profesional en IA aplicada, cloud computing y
              desarrollo de soluciones modernas.
            </p>
          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        ref={proyectosRef}
        className={`px-6 md:px-16 py-16 md:py-24 transition-all duration-1000 delay-300 ${
          proyectosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black text-center">
          Proyectos
        </h2>

        <p className="text-sm mt-3 mb-12 max-w-xl text-center mx-auto">
          Cada proyecto realizado es un paso más hacia la excelencia profesional
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PROYECTO 1 */}
          <div className="border border-black p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4">
              Sistema de IA para detección temprana de ACV
            </h3>
            <p className="text-sm leading-relaxed">
              Aplicación web basada en aprendizaje estadístico que predice el riesgo de ACV
              utilizando modelos de machine learning entrenados con datos reales.
            </p>
          </div>

          {/* PROYECTO 2 */}
          <div className="border border-black p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4">Trujillo Responde</h3>
            <p className="text-sm leading-relaxed">
              Plataforma ciudadana para el reporte de incidencias urbanas, con geolocalización
              y categorización inteligente para mejorar la gestión municipal.
            </p>
          </div>

          {/* PROYECTO 3 */}
          <div className="border border-black p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4">Dashboard Historial Crediticio</h3>
            <p className="text-sm">
              Dashboard financiero desarrollado en Power BI para analizar el riesgo crediticio, la exposición del capital y la tasa de incumplimiento mediante segmentación interactiva y métricas clave.
            </p>
          </div>

        </div>

        {/* BOTÓN */}
        <div className="text-center mt-12">
          <a
            href="/proyectos"
            className="inline-block border border-black px-8 py-3 font-semibold
                       hover:bg-black hover:text-white transition"
          >
            Ver más proyectos
          </a>
        </div>
      </section>

    </main>
  );
}
