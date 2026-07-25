"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

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
        rootMargin: "0px 0px -50px 0px",
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

const proyectos = [
  {
    title: "Sistema de IA para detección temprana de ACV",
    desc: "Aplicación web basada en aprendizaje estadístico que predice el riesgo de ACV utilizando modelos de machine learning entrenados con datos reales.",
    url: "/proyectos/acv",
    image: "/proyectos/acv.png",
    category: "Machine Learning",
    number: "01",
  },
  {
    title: "Trujillo Responde",
    desc: "Plataforma ciudadana para el reporte de incidencias urbanas, con geolocalización y categorización inteligente para mejorar la gestión municipal.",
    url: "/proyectos/trujillo-responde",
    image: "/proyectos/trujillo-responde.png",
    category: "GovTech · IA",
    number: "02",
  },
  {
    title: "Dashboard Historial Crediticio",
    desc: "Dashboard financiero desarrollado en Power BI para analizar el riesgo crediticio, la exposición del capital y la tasa de incumplimiento mediante segmentación interactiva y métricas clave.",
    url: "/proyectos/dashboard",
    image: "/proyectos/dashboard.png",
    category: "Data Analytics",
    number: "03",
  },
  {
    title: "Blog Personal — ianconia.xyz",
    desc: "Plataforma editorial fullstack con newsletter, panel admin privado y experiencia de lectura estilo NYT. Dominio propio, deploy en Vercel.",
    url: "/proyectos/blog-personal",
    image: null,
    category: "Fullstack",
    number: "04",
    previewLabel: "IANCONIA",
  },
  {
    title: "GiChat",
    desc: "Landing page con chatbot de intent detection construido desde cero en JS puro — sin APIs ni frameworks. Detección ponderada por keywords, widget DOM dinámico y acciones contextuales.",
    url: "/proyectos/gi-chat",
    image: null,
    category: "JavaScript · NLP",
    number: "05",
    previewLabel: "GiChat",
  },
];

const imagenesSobreMi = [
  {
    src: "/proyectos/iaaan.jpg",
    alt: "Ian Tapia, estudiante de Ingeniería de Sistemas e Inteligencia Artificial",
  },
  {
    src: "/proyectos/ian.jpg",
    alt: "Retrato de Ian Tapia",
  },
  {
    src: "/proyectos/sobre-mi-1.jpg",
    alt: "Retrato de Ian Tapia en Techspira",
  },
  // Para sumar fotos, guárdalas en public/proyectos y agrega aquí:
  // { src: "/proyectos/sobre-mi-03.jpg", alt: "Ian Tapia en ..." },
  // { src: "/proyectos/sobre-mi-04.jpg", alt: "Ian Tapia durante ..." },
];

const servicios = [
  {
    title: "Desarrollo Web",
    desc: "Desarrollo aplicaciones web modernas, rápidas y adaptables utilizando tecnologías actuales.",
  },
  {
    title: "Inteligencia Artificial",
    desc: "Implemento soluciones basadas en Machine Learning e IA para resolver problemas reales.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Despliego aplicaciones en la nube y automatizo infraestructura utilizando herramientas cloud.",
  },
  {
    title: "Automatización",
    desc: "Creo procesos automatizados mediante APIs, scripts e integraciones para mejorar la productividad.",
  },
  {
    title: "Dashboards",
    desc: "Transformo datos en información visual mediante dashboards interactivos y reportes dinámicos.",
  },
  {
    title: "MVP para Startups",
    desc: "Desarrollo prototipos funcionales para validar ideas y acelerar el lanzamiento de productos digitales.",
  },
];

const tecnologias = [
  "Python",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "FastAPI",
  "Flask",
  "Node.js",
  "Express.js",
  "Scikit-learn",
  "Pandas",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Docker",
  "Terraform",
  "AWS",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Power BI",
  "Postman",
  "Figma",
];

export default function Home() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [sobreMiRef, sobreMiVisible] = useScrollReveal();
  const [proyectosRef, proyectosVisible] = useScrollReveal();
  const [serviciosRef, serviciosVisible] = useScrollReveal();
  const [contactoRef, contactoVisible] = useScrollReveal();

  const [formData, setFormData] = useState({ correo: "", contenido: "" });
  const [enviado, setEnviado] = useState(false);
  const [imagenSobreMiActiva, setImagenSobreMiActiva] = useState(0);
  const [proyectoActivo, setProyectoActivo] = useState(0);
  const [proyectosVisibles, setProyectosVisibles] = useState(3);
  const carruselProyectosRef = useRef(null);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenSobreMiActiva(
        (imagenActual) => (imagenActual + 1) % imagenesSobreMi.length
      );
    }, 4500);

    return () => clearInterval(intervalo);
  }, []);

  const mostrarImagenSobreMi = (direccion) => {
    setImagenSobreMiActiva(
      (imagenActual) =>
        (imagenActual + direccion + imagenesSobreMi.length) %
        imagenesSobreMi.length
    );
  };

  useEffect(() => {
    const actualizarProyectosVisibles = () => {
      const cantidad = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setProyectosVisibles(cantidad);
      setProyectoActivo((actual) =>
        Math.min(actual, Math.max(0, proyectos.length - cantidad))
      );
    };

    actualizarProyectosVisibles();
    window.addEventListener("resize", actualizarProyectosVisibles);
    return () => window.removeEventListener("resize", actualizarProyectosVisibles);
  }, []);

  const limiteCarrusel = Math.max(0, proyectos.length - proyectosVisibles);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setProyectoActivo((actual) => (actual >= limiteCarrusel ? 0 : actual + 1));
    }, 5500);

    return () => clearInterval(intervalo);
  }, [limiteCarrusel]);

  useEffect(() => {
    const carrusel = carruselProyectosRef.current;
    if (!carrusel) return;

    const tarjeta = carrusel.querySelector("[data-project-card]");
    if (!tarjeta) return;

    carrusel.scrollTo({
      left: proyectoActivo * (tarjeta.getBoundingClientRect().width + 24),
      behavior: "smooth",
    });
  }, [proyectoActivo, proyectosVisibles]);

  const moverCarruselProyectos = (direccion) => {
    setProyectoActivo((actual) => {
      const siguiente = actual + direccion;
      if (siguiente < 0) return limiteCarrusel;
      if (siguiente > limiteCarrusel) return 0;
      return siguiente;
    });
  };

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
        background:
          "linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)",
      }}
    >
      {/* NAVBAR */}
      <nav className="flex justify-center items-center px-6 md:px-12 py-6 text-sm uppercase tracking-wide">
        <div className="flex gap-10 md:gap-20 font-bold">
          <a href="#sobre-mi" className="hover:underline">
            sobre mí
          </a>
          <a href="#proyectos" className="hover:underline">
            proyectos
          </a>
          <a href="#servicios" className="hidden hover:underline sm:block">
            servicios
          </a>
          <a href="#contacto" className="hover:underline">
            contacto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        className={`relative flex min-h-[calc(100vh-72px)] flex-col justify-between overflow-hidden px-6 transition-all duration-1000 md:px-12 ${
          heroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-[#365b40]/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-10">
          <div className="order-2 lg:order-1">
            <h1 className="text-[clamp(3.7rem,9vw,8.4rem)] font-black leading-[0.78] tracking-[-0.075em]">
              IAN
              <span className="block text-[#365b40]">TAPIA.</span>
            </h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-5 border-l-2 border-[#365b40] pl-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xl font-black tracking-tight md:text-2xl">
                  Desarrollador Web & IA
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-black/65 md:text-base">
                  Creo productos digitales, soluciones inteligentes y
                  experiencias web que transforman ideas en resultados reales.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="group flex items-center gap-4 rounded-full bg-[#1f3a27] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(31,58,39,0.22)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(31,58,39,0.3)]"
              >
                Ver proyectos
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/proyectos/cv-iantapia (4).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/25 bg-white/25 px-6 py-3.5 text-sm font-bold backdrop-blur-sm transition hover:border-black hover:bg-white/60"
              >
                Descargar CV
              </a>
              <div className="ml-1 flex gap-2">
                {[
                  ["GitHub", "https://github.com/IanT1112", <FaGithub key="hero-github" />],
                  [
                    "LinkedIn",
                    "https://www.linkedin.com/in/ian-tapia-144736210",
                    <FaLinkedin key="hero-linkedin" />,
                  ],
                  [
                    "Instagram",
                    "https://www.instagram.com/astro.dev_tech/",
                    <FaInstagram key="hero-instagram" />,
                  ],
                ].map(([nombre, url, icono]) => (
                  <a
                    key={nombre}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-black/20 bg-white/25 text-lg backdrop-blur-sm transition hover:-translate-y-1 hover:bg-black hover:text-white"
                    aria-label={nombre}
                  >
                    {icono}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[440px]">
              <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] border border-[#365b40]/25 bg-white/20 backdrop-blur-sm" />
              <div className="absolute -bottom-5 -left-6 h-28 w-28 rounded-[1.6rem] bg-[#365b40]" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border-[6px] border-white/55 bg-[#365b40] shadow-[0_30px_80px_rgba(31,58,39,0.28)]">
                <Image
                  src="/proyectos/ian.jpg"
                  alt="Ian Tapia, desarrollador web y estudiante de Inteligencia Artificial"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102116]/60 via-transparent to-white/5" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                      Especialidad
                    </p>
                    <p className="mt-1 text-sm font-bold">Sistemas & IA</p>
                  </div>
                  <span className="rounded-full border border-white/25 bg-black/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                    Perú
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between border-t border-black/15 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
          <span>Perú</span>
          <a
            href="#sobre-mi"
            className="flex items-center gap-3 transition hover:text-black"
          >
            Descubre más
            <span className="animate-bounce text-base">↓</span>
          </a>
          <span className="hidden sm:block">Portafolio · 2026</span>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        ref={sobreMiRef}
        className={`px-6 md:px-16 py-20 md:py-32 transition-all duration-1000 delay-200 ${
          sobreMiVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
              <span className="h-px w-8 bg-[#365b40]" />
              Un poco de mi historia
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[440px]">
                <div className="about-gallery relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#365b40] shadow-[0_25px_70px_rgba(34,67,43,0.25)]">
                  {imagenesSobreMi.map((imagen, index) => (
                    <div
                      key={imagen.src}
                      className={`about-gallery-slide absolute inset-0 ${
                        index === imagenSobreMiActiva
                          ? "about-gallery-slide-active"
                          : "about-gallery-slide-hidden"
                      }`}
                      aria-hidden={index !== imagenSobreMiActiva}
                    >
                      <Image
                        src={imagen.src}
                        alt={imagen.alt}
                        fill
                        sizes="(max-width: 1024px) 90vw, 440px"
                        className="object-cover"
                      />
                    </div>
                  ))}

                  <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-black/65 via-black/15 to-transparent p-5 pt-20 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {String(imagenSobreMiActiva + 1).padStart(2, "0")} /{" "}
                      {String(imagenesSobreMi.length).padStart(2, "0")}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => mostrarImagenSobreMi(-1)}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-black/20 text-xl backdrop-blur-sm transition hover:bg-white hover:text-black"
                        aria-label="Ver imagen anterior"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => mostrarImagenSobreMi(1)}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-black/20 text-xl backdrop-blur-sm transition hover:bg-white hover:text-black"
                        aria-label="Ver siguiente imagen"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-center gap-2" aria-label="Selector de imágenes">
                  {imagenesSobreMi.map((imagen, index) => (
                    <button
                      type="button"
                      key={imagen.src}
                      onClick={() => setImagenSobreMiActiva(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === imagenSobreMiActiva
                          ? "w-10 bg-[#365b40]"
                          : "w-4 bg-[#365b40]/30 hover:bg-[#365b40]/60"
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                      aria-current={index === imagenSobreMiActiva}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight md:text-6xl">
                Construyo tecnología con propósito, curiosidad y visión de futuro.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-black/75 md:text-lg">
                <p>
                  Soy <strong className="font-bold text-black">Ian Tapia</strong>,
                  estudiante de Ingeniería de Sistemas e Inteligencia Artificial.
                  Me motiva entender problemas reales y convertirlos en productos
                  digitales útiles, combinando desarrollo web, inteligencia
                  artificial y tecnologías cloud.
                </p>
                <p>
                  Mi forma de aprender es creando. He participado en proyectos de
                  machine learning, software e infraestructura moderna, llevando
                  cada idea desde la exploración inicial hasta una solución
                  funcional que pueda probarse, mejorarse y generar valor.
                </p>
                <p>
                  Fuera del código, participo en comunidades de innovación,
                  voluntariados y hackathons. Estos espacios me han enseñado a
                  escuchar, colaborar con equipos multidisciplinarios y afrontar
                  desafíos con iniciativa, empatía y una mentalidad de crecimiento.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["Desarrollo", "Web & cloud"],
                  ["Inteligencia", "IA & datos"],
                  ["Mentalidad", "Crear y aprender"],
                ].map(([titulo, detalle]) => (
                  <div
                    key={titulo}
                    className="rounded-2xl border border-[#365b40]/20 bg-white/35 p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-[#365b40]">
                      {titulo}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{detalle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        ref={proyectosRef}
        className={`overflow-hidden px-6 py-20 transition-all duration-1000 delay-300 md:px-16 md:py-28 ${
          proyectosVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
                <span className="h-px w-8 bg-[#365b40]" />
                Trabajo seleccionado
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Proyectos
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-black/65 md:text-base">
                Soluciones que combinan tecnología, datos y diseño para convertir
                problemas reales en experiencias digitales funcionales.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => moverCarruselProyectos(-1)}
                className="grid h-12 w-12 place-items-center rounded-full border border-black/25 bg-white/30 text-xl transition hover:border-black hover:bg-black hover:text-white"
                aria-label="Ver proyectos anteriores"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => moverCarruselProyectos(1)}
                className="grid h-12 w-12 place-items-center rounded-full border border-black/25 bg-white/30 text-xl transition hover:border-black hover:bg-black hover:text-white"
                aria-label="Ver siguientes proyectos"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carruselProyectosRef}
            className="project-carousel -mx-1 flex gap-6 overflow-x-hidden px-1 py-3"
            aria-label="Carrusel de proyectos"
          >
            {proyectos.map((proyecto) => (
              <Link
                data-project-card
                key={proyecto.url}
                href={proyecto.url}
                className="project-card group flex shrink-0 flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/55 shadow-[0_16px_45px_rgba(35,67,43,0.12)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(35,67,43,0.22)]"
                style={{
                  flexBasis: `calc((100% - ${(proyectosVisibles - 1) * 24}px) / ${proyectosVisibles})`,
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#203c29]">
                  {proyecto.image ? (
                    <Image
                      src={proyecto.image}
                      alt={`Vista previa de ${proyecto.title}`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full flex-col justify-between p-7 text-white ${
                        proyecto.previewLabel === "GiChat"
                          ? "bg-[radial-gradient(circle_at_75%_20%,#b99bd8_0%,#70528f_36%,#291f35_100%)]"
                          : "bg-[linear-gradient(145deg,#f2eee6_0%,#d6c9b5_55%,#6b5a48_100%)]"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-70">
                        Vista previa
                      </span>
                      <p
                        className={`leading-none ${
                          proyecto.previewLabel === "GiChat"
                            ? "text-5xl font-black tracking-tight"
                            : "font-serif text-4xl tracking-[0.08em]"
                        }`}
                      >
                        {proyecto.previewLabel}
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                    {proyecto.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black leading-tight tracking-tight">
                      {proyecto.title}
                    </h3>
                    <span className="text-xs font-bold text-[#365b40]/55">
                      {proyecto.number}
                    </span>
                  </div>
                  <p className="line-clamp-3 text-sm leading-6 text-black/65">
                    {proyecto.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-black/10 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#365b40]">
                      Ver proyecto
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#365b40] text-white transition duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2" aria-label="Posición del carrusel">
              {Array.from({ length: limiteCarrusel + 1 }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setProyectoActivo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    proyectoActivo === index
                      ? "w-10 bg-[#365b40]"
                      : "w-4 bg-[#365b40]/25 hover:bg-[#365b40]/50"
                  }`}
                  aria-label={`Ir a la posición ${index + 1}`}
                  aria-current={proyectoActivo === index}
                />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-black/45">
              {String(proyectoActivo + 1).padStart(2, "0")} /{" "}
              {String(limiteCarrusel + 1).padStart(2, "0")}
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

      {/* SERVICIOS */}
      <section
        id="servicios"
        ref={serviciosRef}
        className={`px-6 py-20 transition-all duration-1000 delay-200 md:px-16 md:py-32 ${
          serviciosVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#365b40]">
                <span className="h-px w-8 bg-[#365b40]" />
                Cómo puedo ayudarte
              </span>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Ideas que se convierten en productos digitales.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-black/60 lg:text-right">
              De la estrategia y el prototipo al desarrollo, los datos y el
              despliegue en producción.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-16">
            <div className="border-t border-black/20">
              {servicios.map((servicio, index) => (
                <article
                  key={servicio.title}
                  className="service-row group grid gap-4 border-b border-black/20 py-7 transition duration-300 md:grid-cols-[58px_0.72fr_1fr] md:items-start md:gap-7"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-[#365b40]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black tracking-tight transition duration-300 group-hover:translate-x-1 md:text-2xl">
                    {servicio.title}
                  </h3>
                  <p className="text-sm leading-6 text-black/60 md:text-base md:leading-7">
                    {servicio.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside className="overflow-hidden rounded-[2rem] bg-[#1f3a27] p-5 text-white shadow-[0_25px_70px_rgba(31,58,39,0.3)] lg:h-[680px]">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    Mi stack
                  </p>
                  <h3 className="mt-1 text-lg font-black">Tecnologías</h3>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm">
                  ↓
                </span>
              </div>

              <div className="technology-columns relative mt-5 grid h-[400px] grid-cols-2 gap-3 overflow-hidden lg:h-[585px]">
                <div className="technology-fade technology-fade-top" />
                <div className="technology-fade technology-fade-bottom" />

                <div className="technology-marquee">
                  <div className="technology-track">
                    {[...tecnologias, ...tecnologias].map((tecnologia, index) => (
                      <span
                        key={`a-${tecnologia}-${index}`}
                        className="technology-pill"
                        aria-hidden={index >= tecnologias.length}
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="technology-marquee">
                  <div className="technology-track technology-track-reverse">
                    {[...tecnologias.slice().reverse(), ...tecnologias.slice().reverse()].map(
                      (tecnologia, index) => (
                        <span
                          key={`b-${tecnologia}-${index}`}
                          className="technology-pill technology-pill-accent"
                          aria-hidden={index >= tecnologias.length}
                        >
                          {tecnologia}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        ref={contactoRef}
        className={`px-6 py-20 transition-all duration-1000 delay-300 md:px-16 md:py-32 ${
          contactoVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#1f3a27] text-white shadow-[0_30px_90px_rgba(31,58,39,0.28)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex flex-col justify-between overflow-hidden p-8 md:p-12 lg:p-14">
              <div className="contact-orb contact-orb-one" />
              <div className="contact-orb contact-orb-two" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#b5d3ae]">
                  <span className="h-px w-8 bg-[#b5d3ae]" />
                  Contacto
                </span>
                <h2 className="mt-6 max-w-xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                  Construyamos algo que valga la pena.
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 md:text-base">
                  ¿Tienes una idea, un desafío técnico o un proyecto en marcha?
                  Cuéntame el contexto y conversemos sobre cómo convertirlo en
                  una solución funcional.
                </p>
              </div>

              <div className="relative z-10 mt-16 space-y-5">
                <div className="flex items-center gap-3 text-sm text-white/75">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b5d3ae] opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#b5d3ae]" />
                  </span>
                  Disponible para proyectos y colaboraciones
                </div>
                <div className="flex gap-3">
                  {[
                    ["GitHub", "https://github.com/IanT1112", <FaGithub key="github-icon" />],
                    [
                      "LinkedIn",
                      "https://www.linkedin.com/in/ian-tapia-144736210",
                      <FaLinkedin key="linkedin-icon" />,
                    ],
                    [
                      "Instagram",
                      "https://www.instagram.com/astro.dev_tech/",
                      <FaInstagram key="instagram-icon" />,
                    ],
                  ].map(([nombre, url, icono]) => (
                    <a
                      key={nombre}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-lg transition hover:-translate-y-1 hover:border-white/50 hover:bg-white hover:text-[#1f3a27]"
                      aria-label={nombre}
                    >
                      {icono}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="m-2 rounded-[1.8rem] bg-[#f4f7ee] p-7 text-black md:m-3 md:p-11 lg:p-14">
              <div className="mb-9">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4a7055]">
                  Cuéntame sobre tu proyecto
                </p>
                <p className="mt-3 text-sm leading-6 text-black/55">
                  Completa el formulario y te responderé lo antes posible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="correo-contacto"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-[#365b40]"
                  >
                    Tu correo
                  </label>
                <input
                  id="correo-contacto"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="nombre@correo.com"
                  required
                  className="contact-field"
                />
              </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="mensaje-contacto"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-[#365b40]"
                  >
                  Mensaje
                </label>
                <textarea
                  id="mensaje-contacto"
                  name="contenido"
                  value={formData.contenido}
                  onChange={handleChange}
                  placeholder="Háblame de tu idea, objetivos o necesidades..."
                  required
                  rows={6}
                  className="contact-field resize-none"
                />
              </div>

              <button
                type="submit"
                  className="group mt-1 flex w-full items-center justify-between rounded-xl bg-[#294c32] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(41,76,50,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#1f3a27] hover:shadow-[0_15px_30px_rgba(41,76,50,0.3)]"
              >
                  <span>Enviar mensaje</span>
                  <span className="text-lg transition group-hover:translate-x-1">→</span>
              </button>

              {enviado && (
                  <p
                    className="rounded-xl border border-[#6b9071]/25 bg-[#dfead8] px-4 py-3 text-center text-sm font-semibold text-[#365b40]"
                    role="status"
                  >
                    ✓ Mensaje enviado correctamente. Gracias por escribirme.
                </p>
              )}
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#13251a] px-6 py-10 text-white md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <a
                href="#"
                className="text-2xl font-black tracking-[0.12em]"
                aria-label="Volver al inicio"
              >
                IAN TAPIA
              </a>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                Ingeniería de Sistemas, inteligencia artificial y productos
                digitales construidos con propósito.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[0.16em] text-white/65">
              <a href="#sobre-mi" className="transition hover:text-white">
                Sobre mí
              </a>
              <a href="#proyectos" className="transition hover:text-white">
                Proyectos
              </a>
              <a href="#servicios" className="transition hover:text-white">
                Servicios
              </a>
              <a href="#contacto" className="transition hover:text-white">
                Contacto
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Ian Tapia. Todos los derechos reservados.
            </p>
            <p>
              Diseñado y creado por{" "}
              <span className="font-bold text-[#b5d3ae]">Ian Tapia</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
