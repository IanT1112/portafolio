import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#cfe6b8] text-black">

      {/* NAVBAR */}
      <nav className="flex justify-center items-center px-6 md:px-12 py-6 text-sm uppercase tracking-wide">
        <div className="flex gap-10 md:gap-20">
          <a href="#sobre-mi">sobre mí</a>
          <a href="#proyectos">proyectos</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-between px-6 py-12 min-h-[calc(100vh-80px)]">

        {/* NOMBRE + REDES */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-widest mb-3">
            IAN TAPIA
          </h1>

          <div className="flex gap-6 text-2xl justify-center">
            <a href="https://github.com/IanT1112" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ian-tapia-144736210" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/iaann.04/" target="_blank"><FaInstagram /></a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center items-center my-10">
          <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px]">
            <Image
              src="/proyectos/ian.jpg"
              alt="Ian Tapia"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* FOOTER HERO */}
        <div className="w-full flex justify-between items-end text-sm px-2 md:px-12">
          <div>
            <p>Estudiante</p>
            <p>Universitario</p>
          </div>

          <div className="hidden md:block text-2xl">↓</div>

          <div className="text-right font-bold text-lg">
            <p>Ingeniería</p>
            <p>Sistemas e IA</p>
          </div>
        </div>

      </section>

      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        className="px-6 md:px-16 py-16 md:py-24"
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
        className="px-6 md:px-16 py-16 md:py-24"
      >
        <h2 className="text-3xl md:text-4xl font-black text-center">
          Proyectos
        </h2>

        <p className="text-sm mt-3 mb-12 max-w-xl text-center mx-auto">
          Cada proyecto realizado es un paso más hacia la excelencia profesional
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PROYECTO 1 */}
          <div className="border border-black p-6 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-4">
              Sistema de IA para detección temprana de ACV
            </h3>
            <p className="text-sm leading-relaxed">
              Aplicación web basada en aprendizaje estadístico que predice el riesgo de ACV
              utilizando modelos de machine learning entrenados con datos reales.
            </p>
          </div>

          {/* PROYECTO 2 */}
          <div className="border border-black p-6 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-4">Trujillo Responde</h3>
            <p className="text-sm leading-relaxed">
              Plataforma ciudadana para el reporte de incidencias urbanas, con geolocalización
              y categorización inteligente para mejorar la gestión municipal.
            </p>
          </div>

          {/* PROYECTO 3 */}
          <div className="border border-black p-6 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-4">Proyecto 3</h3>
            <p className="text-sm">
              Breve descripción del proyecto.
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
