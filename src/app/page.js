import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#cfe6b8] text-black">

      {/* NAVBAR (NO SE TOCA) */}
      <nav className="flex justify-center items-center px-12 py-6 text-sm uppercase tracking-wide">
        <div className="flex gap-20">
          <a href="#sobre-mi">sobre mí</a>
          <a href="#proyectos">proyectos</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[calc(100vh-96px)]">

        {/* CONTENIDO SUPERIOR (NOMBRE + REDES) */}
        <div className="absolute top-8
         left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-6xl font-black tracking-widest mb-2">
            IAN TAPIA
          </h1>

          <div className="flex gap-8 text-2xl justify-center">
            <a href="https://github.com/IanT1112" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ian-tapia-144736210" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/iaann.04/" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
                  {/* IMAGEN HERO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
              <Image
                src="/proyectos/ian.jpg"
                alt="Ian Tapia"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        {/* CONTENIDO INFERIOR */}
        <footer className="absolute bottom-6 left-0 w-full px-12 flex justify-between items-end text-sm">
          <div>
            <p>Estudiante</p>
            <p>Universitario</p>
          </div>

          <div className="text-2xl">↓</div>

          <div className="text-right font-bold text-lg">
            <p>Ingeniería</p>
            <p>Sistemas e IA</p>
          </div>
        </footer>

      </section>
  {/* SOBRE MÍ */}
  <section
    id="sobre-mi"
    className="min-h-screen bg-[#cfe6b8] px-16 py-24 flex items-center"
  >

    {/* COLUMNA IZQUIERDA - FOTOS */}
        <div className="flex gap-16 w-full items-center">
          <div className="relative w-[380px] h-[480px] shrink-0">
            <Image
              src="/proyectos/iaaan.jpg"
              alt="Ian Tapia"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

        {/* COLUMNA DERECHA - TEXTO */}
        <div>
          <h2 className="text-4xl font-black mb-5">Sobre mí</h2>          <p className="text-lg leading-relaxed mb-4">
            Soy estudiante de Ingeniería de Sistemas e Inteligencia Artificial, con un enfoque práctico en el desarrollo de soluciones tecnológicas basadas en datos y servicios en la nube.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            He trabajado en proyectos de Machine Learning aplicados a problemas reales, abarcando desde el preprocesamiento de datos y entrenamiento de modelos hasta su despliegue en aplicaciones web funcionales.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Cuento con conocimientos en AWS, Google Cloud y Firebase, así como en la integración de APIs externas como Google Maps para funcionalidades geoespaciales.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Me interesa diseñar sistemas escalables, bien estructurados y orientados a generar impacto real mediante el uso de inteligencia artificial.
          </p>

          <p className="text-lg leading-relaxed">
            Busco seguir fortaleciendo mi perfil profesional en áreas de IA aplicada, cloud computing y desarrollo de soluciones modernas.
          </p>
        </div>

      </div>
  </section>
          <section
          id="proyectos"
          className="min-h-screen bg-[#cfe6b8] px-16 py-24"
          >
          <h2 className="text-4xl font-black text-center">Proyectos</h2>

          <p className="text-sm mt-3 mb-12 max-w-xl text-center mx-auto">
            cada proyecto realizado es un paso más hacia la excelencia profesional
          </p>

          {/* GRID DE PROYECTOS */}
          <div className="grid grid-cols-3 gap-8 mb-12">

            {/* PROYECTO 1 */}
            <div className="border border-black p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Sistema de IA para detección temprana de ACV
                </h3>

                <p className="text-sm leading-relaxed">
                  Aplicación web basada en aprendizaje estadístico que predice el riesgo de
                  accidente cerebrovascular a partir de variables clínicas, utilizando
                  modelos de machine learning entrenados con datos reales y desplegados en
                  la nube.
                </p>
              </div>
            </div>

            {/* PROYECTO 2 */}
            <div className="border border-black p-8 flex flex-col justify-between">
              <div>
              <h3 className="font-bold text-lg">Trujillo Responde</h3>
              <p className="text-sm">
                Plataforma donde los ciudadanos pueden enviar reportes de incidencias urbanas
                (baches, alumbrado público, limpieza, etc.) para mejorar la gestión municipal
                en Trujillo, Perú. Los reportes son geolocalizados y categorizados para facilitar
                su atención por parte de las autoridades.
              </p>
              </div>
            </div>

            {/* PROYECTO 3 */}
            <div className="bg-white p-6 shadow">
              <div className="h-40 bg-gray-300 mb-4"></div>
              <h3 className="font-bold text-lg">Proyecto 3</h3>
              <p className="text-sm">
                Breve descripción del proyecto.
              </p>
            </div>
            

          </div>

          {/* BOTÓN VER MÁS */}
          <div className="text-center">
            <a
              href="/proyectos"
              className="inline-block border border-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition"
            >
              Ver más proyectos
            </a>
          </div>
        </section>
        

    </main>
  );
}
