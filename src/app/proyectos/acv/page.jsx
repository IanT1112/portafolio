
import Image from "next/image";
import Link from "next/link";

export default function ProyectoACV() {
  return (
    <main 
      className="min-h-screen px-6 md:px-16 py-4 text-black"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #E3EED4 30%, #AEC3B0 60%, #6B9071 100%)'
      }}
    >        
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

      <h1 className="text-3xl font-bold mb-6">
        Sistema de IA para detección temprana de ACV
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Imagen */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/proyectos/acv.png"
              alt="Sistema de IA para detección temprana de ACV"
              fill
              className="object-contain rounded-lg"
            />
          </div>

          <div className="flex gap-4">
            <a
              href="https://deteccion-acv.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg hover:bg-white hover:shadow-lg transition"
              title="Ver proyecto en Web"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
            
            <a
              href="https://github.com/IanT1112/proyecto-ACV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg hover:bg-white hover:shadow-lg transition"
              title="Ver proyecto en GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Descripción */}
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
                Desarrollé un sistema de machine learning aplicado a la salud para la detección temprana del riesgo de Accidente Cerebrovascular (ACV), utilizando datos clínicos reales. El proyecto cubre todo el ciclo de desarrollo: análisis y preparación de datos, entrenamiento de un modelo de clasificación y despliegue de una aplicación web interactiva en la nube.
              </p>

              <p>
                El modelo permite estimar el nivel de riesgo a partir de variables clínicas y hábitos de vida, presentando los resultados de forma clara para el usuario final. Este proyecto demuestra la aplicación práctica de la inteligencia artificial y el análisis de datos en un entorno real, integrando desarrollo de software y despliegue en producción.
              </p>

              <div className="pt-4 border-t border-gray-300/50">
                <h3 className="font-semibold mb-3 text-base">Tecnologías utilizadas:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    </svg>
                    <span>Python – análisis de datos y machine learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.186 14.552c-.617 0-.977.587-.977 1.373 0 .791.371 1.35.983 1.35.617 0 .971-.588.971-1.374 0-.726-.348-1.349-.977-1.349z"/>
                      <path d="M20.95 8.562c-.977-1.05-2.332-1.617-3.81-1.617-1.047 0-2.001.32-2.757.893-.5-2.33-2.425-4.038-4.79-4.038-2.716 0-4.927 2.36-4.927 5.257 0 .416.048.822.13 1.213-.577.288-1.128.694-1.603 1.178-.758.766-1.25 1.757-1.414 2.87-.171 1.151.019 2.287.533 3.19.659 1.155 1.716 1.968 2.977 2.287.496.126.999.184 1.495.184 1.461 0 2.86-.543 3.946-1.528.754-.684 1.315-1.535 1.634-2.488.319-.952.39-1.97.213-2.948.77-.185 1.468-.544 2.029-1.066 1.227-1.141 1.83-2.84 1.604-4.533-.112-.843-.425-1.62-.96-2.27zm-7.557-.752c.171.991.171 2.05-.005 3.053-.168.956-.51 1.845-1.011 2.56-.457.654-1.047 1.148-1.744 1.458-.142.063-.289.114-.44.156.05-.172.09-.346.127-.522.198-1.002.198-2.059.002-3.061-.168-.957-.509-1.846-1.011-2.56-.488-.7-1.11-1.212-1.847-1.518.177-.145.366-.274.566-.382.78-.419 1.65-.638 2.525-.638 2.125 0 3.995 1.69 4.296 3.994.018.138.03.276.037.415zm-9.616 3.997c.178-.947.602-1.774 1.208-2.379.349-.349.76-.622 1.206-.81-.126.439-.203.896-.229 1.361-.043.769.005 1.541.139 2.295.134.754.359 1.478.67 2.153-.425-.141-.82-.365-1.157-.664-.659-.582-1.098-1.384-1.236-2.256-.069-.436-.065-.873.006-1.3zm14.293 2.295c-.428.398-.961.676-1.544.804-.115.025-.23.046-.348.062.051-.168.093-.34.125-.514.2-1.002.2-2.059.002-3.061-.168-.957-.509-1.846-1.011-2.56-.457-.654-1.047-1.148-1.744-1.458-.142-.063-.289-.114-.44-.156.05-.172.09-.346.127-.522.198-1.002.198-2.059.002-3.061-.025-.147-.055-.292-.088-.436 1.174.056 2.257.592 3.032 1.506.407.48.696 1.048.836 1.646.317 1.347-.158 2.753-1.207 3.585z"/>
                    </svg>
                    <span>Scikit-learn – modelos de clasificación y evaluación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.922 11.66a.27.27 0 0 0-.279 0l-3.988 2.352a.27.27 0 0 0-.139.24v4.702c0 .099.053.19.139.24l3.988 2.352a.27.27 0 0 0 .279 0l3.988-2.352a.27.27 0 0 0 .139-.24v-4.702a.27.27 0 0 0-.139-.24l-3.988-2.352zm.139.816l3.391 2 .6-.353-3.391-2-.6.353zm-3.391 2v.705l.6-.353v-.705l-.6.353zm0 1.41v4l3.391 2v-.705l-2.791-1.647v-.705l2.791 1.647v-.705l-2.791-1.647v-.705l2.791 1.647v-.705l-3.391-2zm3.992 4.705l3.391-2v-4l-3.391 2v4z"/>
                      <path d="M11.293.161a1.055 1.055 0 0 0-.542.148L1.566 5.772A1.057 1.057 0 0 0 1 6.694v10.611c0 .378.201.728.527.918l9.185 5.463c.169.1.363.151.559.151.196 0 .39-.051.559-.151l9.184-5.463a1.057 1.057 0 0 0 .528-.918V6.694a1.057 1.057 0 0 0-.528-.918L12.392.309a1.055 1.055 0 0 0-1.099-.148z"/>
                    </svg>
                    <span>Pandas – procesamiento y limpieza de datos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.52-3.15 8.77-8 9.92-4.85-1.15-8-5.4-8-9.92V8.18l8-4z"/>
                    </svg>
                    <span>Streamlit – desarrollo de aplicaciones web con IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>Git & GitHub – control de versiones y despliegue</span>
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
