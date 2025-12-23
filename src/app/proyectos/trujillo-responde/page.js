import Link from "next/link";
import Image from "next/image";
export default function TrujilloResponde() {
  return (
    <main className="min-h-screen bg-[#cfe6b8] px-16 py-24 text-black">

      {/* Navegación */}
      <div className="flex gap-4 mb-6 text-sm">
        <Link
            href="/"
            className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
            ← Inicio
        </Link>

        <Link
            href="/proyectos"
            className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
            ← Proyectos
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-black mb-8">
        Trujillo Responde
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Imagen */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-[16/10]">
            <Image
            src="/proyectos/trujillo-responde.png"
            alt="Trujillo Responde"
            fill
            className="object-contain rounded-lg"
            />
          </div>

          <a
            href="https://studio--trujillo-responde-2-7719-1bf4c.us-central1.hosted.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            Ver prototipo en Web
          </a>
        </div>

      {/* Contenido */}
            <div className="flex items-start">
            <div className="space-y-4 max-w-3xl text-sm leading-relaxed">
                <p>
                Trujillo Responde es una plataforma digital orientada a la participación
                ciudadana y a la mejora de la gestión municipal, desarrollada utilizando
                servicios de Firebase y APIs de Google. La aplicación permite a los ciudadanos
                reportar incidencias urbanas como baches, fallas en el alumbrado público,
                problemas de limpieza u otros eventos que afectan la infraestructura de la
                ciudad de Trujillo, Perú.
                </p>

                <p>
                Cada reporte es geolocalizado mediante Google Maps, lo que permite identificar
                con precisión la ubicación del problema, y es procesado mediante modelos de
                Inteligencia Artificial integrados con Firebase, los cuales analizan la
                información proporcionada por el usuario para clasificar automáticamente la
                incidencia en categorías relevantes.
                </p>

                <p>
                Esta clasificación inteligente facilita la organización y priorización de los
                reportes, optimizando los tiempos de atención por parte de las autoridades
                municipales. La plataforma busca reducir la brecha entre la ciudadanía y la
                gestión pública, promoviendo una respuesta más eficiente, transparente y basada
                en datos.
                </p>

                <p>
                El proyecto demuestra la integración práctica de servicios en la nube, APIs
                geoespaciales e inteligencia artificial, aplicados a un problema real de
                impacto social, desde el diseño de la solución hasta su despliegue funcional
                en la web.
                </p>

            </div>
            </div>
        </div>
    </main>
  );
}
