"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        threshold: 0.1,
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
  const [contactoRef, contactoVisible] = useScrollReveal();

  const [formData, setFormData] = useState({ correo: "", contenido: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { correo, contenido } = formData;
    if (!correo || !contenido) return;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: correo,
          correo: correo,
          message: contenido,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setEnviado(true);
      setFormData({ correo: "", contenido: "" });
      setTimeout(() => setEnviado(false), 4000);
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

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
          <a href="#contacto" className="hover:underline">contacto</a>
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
              <a href="https://www.instagram.com/astro.dev_tech/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

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

        <div className="w-full grid grid-cols-3 items-end text-xs md:text-sm px-4 md:px-12 pb-4 md:pb-6">
          <div>
            <p>Estudiante</p>
            <p>Universitario</p>
          </div>
          <div className="flex justify-center text-xl md:text-2xl animate-bounce">↓</div>
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
        <h2 className="text-3xl md:text-4xl font-black text-center">Proyectos</h2>
        <p className="text-sm mt-3 mb-12 max-w-xl text-center mx-auto">
          Cada proyecto realizado es un paso más hacia la excelencia profesional
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-black p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4">Sistema de IA para detección temprana de ACV</h3>
            <p className="text-sm leading-relaxed">
              Aplicación web basada en aprendizaje estadístico que predice el riesgo de ACV
              utilizando modelos de machine learning entrenados con datos reales.
            </p>
          </div>
          <div className="border border-black p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4">Trujillo Responde</h3>
            <p className="text-sm leading-relaxed">
              Plataforma ciudadana para el reporte de incidencias urbanas, con geolocalización
              y categorización inteligente para mejorar la gestión municipal.
            </p>
          </div>
          <div className="border border-black p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4">Dashboard Historial Crediticio</h3>
            <p className="text-sm">
              Dashboard financiero desarrollado en Power BI para analizar el riesgo crediticio,
              la exposición del capital y la tasa de incumplimiento mediante segmentación
              interactiva y métricas clave.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/proyectos"
            className="inline-block border border-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition"
          >
            Ver más proyectos
          </a>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        ref={contactoRef}
        className={`px-6 md:px-16 py-16 md:py-28 transition-all duration-1000 delay-300 ${
          contactoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black text-center mb-3">Contacto</h2>
        <p className="text-sm mt-1 mb-14 max-w-xl text-center mx-auto text-black/70">
          ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme directamente.
        </p>

        {/* CARD ESPEJO + FORMULARIO */}
        <div className="max-w-xl mx-auto relative">

          {/* ESPEJO — card decorativa detrás */}
          <div
            className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3"
            style={{
              background: 'linear-gradient(135deg, rgba(107,144,113,0.45) 0%, rgba(174,195,176,0.3) 100%)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(107,144,113,0.4)',
              boxShadow: '0 8px 32px rgba(107,144,113,0.25)',
            }}
          />

          {/* FORMULARIO — encima del espejo */}
          <div
            className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.72) 0%, rgba(227,238,212,0.65) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 4px 24px rgba(107,144,113,0.18)',
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* INPUT CORREO */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-[#4a7055]">
                  Tu correo
                </label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                  style={{
                    background: 'rgba(255,255,255,0.55)',
                    border: '1.5px solid rgba(107,144,113,0.35)',
                    color: '#1a2e1f',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1.5px solid #6B9071';
                    e.target.style.background = 'rgba(255,255,255,0.8)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1.5px solid rgba(107,144,113,0.35)';
                    e.target.style.background = 'rgba(255,255,255,0.55)';
                  }}
                />
              </div>

              {/* TEXTAREA CONTENIDO */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-[#4a7055]">
                  Mensaje
                </label>
                <textarea
                  name="contenido"
                  value={formData.contenido}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.55)',
                    border: '1.5px solid rgba(107,144,113,0.35)',
                    color: '#1a2e1f',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1.5px solid #6B9071';
                    e.target.style.background = 'rgba(255,255,255,0.8)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1.5px solid rgba(107,144,113,0.35)';
                    e.target.style.background = 'rgba(255,255,255,0.55)';
                  }}
                />
              </div>

              {/* BOTÓN ENVIAR */}
              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #4a7055 0%, #6B9071 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 16px rgba(74,112,85,0.35)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #3a5a44 0%, #4a7055 100%)';
                  e.target.style.boxShadow = '0 6px 20px rgba(74,112,85,0.5)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #4a7055 0%, #6B9071 100%)';
                  e.target.style.boxShadow = '0 4px 16px rgba(74,112,85,0.35)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Enviar mensaje →
              </button>

              {/* CONFIRMACIÓN */}
              {enviado && (
                <p
                  className="text-center text-sm font-semibold mt-1 animate-pulse"
                  style={{ color: '#4a7055' }}
                >
                  ✓ Enviando mensaje...
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black py-6">
        <p className="text-center text-sm">
          Creado por <span className="font-bold">Ian Tapia</span> © 2025
        </p>
      </footer>
    </main>
  );
}
