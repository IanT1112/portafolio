import Link from "next/link";
import Image from "next/image";

export default function TrujilloResponde() {
  return (
    <main 
      className="min-h-screen px-6 md:px-16 py-4 text-black"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)'
      }}
    >
      {/* Navegación */}
      <div className="flex gap-3 mb-6 text-sm">
        <Link
          href="/"
          className="px-5 py-2.5 bg-white/40 backdrop-blur-sm border border-gray-400/50 rounded-lg hover:bg-white/60 hover:border-gray-500 hover:shadow-md transition-all duration-200 font-medium"
        >
          ← Inicio
        </Link>

        <Link
          href="/proyectos"
          className="px-5 py-2.5 bg-white/40 backdrop-blur-sm border border-gray-400/50 rounded-lg hover:bg-white/60 hover:border-gray-500 hover:shadow-md transition-all duration-200 font-medium"
        >
          ← Proyectos
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-6">
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

          <div className="flex gap-4">
            <a
              href="https://studio--trujillo-responde-2-7719-1bf4c.us-central1.hosted.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg hover:bg-white hover:shadow-lg transition"
              title="Ver prototipo en Web"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex items-start">
          <div
            className="
              bg-white/20
              backdrop-blur-md
              border border-white/30
              shadow-xl
              rounded-2xl
              p-6 md:p-10
              max-w-3xl
              text-sm
              leading-relaxed
            "
          >
            <div className="space-y-4">
              <p>
                Trujillo Responde es una plataforma web que permite a los ciudadanos reportar incidencias urbanas de forma geolocalizada, mejorando la eficiencia en la gestión municipal.
              </p>

              <p>
                Los reportes son procesados mediante servicios de Inteligencia Artificial de Google, integrados a través de APIs, para analizar y clasificar automáticamente la información enviada por los usuarios. La solución combina servicios cloud y APIs geoespaciales, aplicados a un problema real de impacto social.
              </p>

              <div className="pt-4 border-t border-gray-300/50">
                <h3 className="font-semibold mb-3 text-base">Tecnologías utilizadas:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14.528a.54.54 0 00-.919-.295L3.316 17.84zm-7.32 2.636l-5.134-9.638 6.394-3.618 4.524 8.521zM14.27 7.5l-2.476-4.646 2.476-2.354L17.5 7.5z"/>
                    </svg>
                    <span>Firebase (Google Cloud) – Backend serverless, base de datos y despliegue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
                    </svg>
                    <span>Google Maps Platform (Maps & Places API) – Geolocalización y visualización</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
                    </svg>
                    <span>Google Cloud AI APIs – Análisis y clasificación inteligente de reportes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

