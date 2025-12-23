import Image from "next/image";
import Link from "next/link";
export default function ProyectoACV() {
  return (
    <section className="min-h-screen mx-auto px-6 py-16 bg-[#cfe6b8] text-black min-h-screen">
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

          <a
            href="https://deteccion-acv.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            Ver proyecto en Web
          </a>
          <a
            href="https://github.com/IanT1112/proyecto-ACV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            Ver proyecto en GitHub
          </a>
        </div>

        {/* Descripción */}
        <div>
            <div className="space-y-6 text-sm leading-relaxed max-w-3xl">
            <p>
                Este proyecto consiste en el desarrollo de un sistema de aprendizaje
                estadístico orientado a la detección temprana del riesgo de Accidente
                Cerebrovascular (ACV), utilizando datos clínicos reales y técnicas de
                machine learning. El sistema fue entrenado a partir de un dataset público,
                aplicando procesos de limpieza, transformación de variables y entrenamiento
                de un modelo de clasificación.
            </p>

            <p>
                El modelo entrenado se integra en una aplicación web interactiva desarrollada
                con Streamlit, que permite al usuario ingresar variables como edad, índice de
                masa corporal, nivel de glucosa, antecedentes clínicos y hábitos de vida. A
                partir de estos datos, el sistema genera una predicción del nivel de riesgo de
                ACV, expresada de forma comprensible para el usuario.
            </p>

            <p>
                El proyecto abarca todo el ciclo de desarrollo: preparación de datos,
                entrenamiento del modelo, serialización del modelo (.pkl), construcción de la
                interfaz web y despliegue en la nube mediante GitHub y Streamlit Cloud. Además,
                se gestionaron dependencias y compatibilidad de versiones para asegurar el
                correcto funcionamiento del sistema en entornos locales y web.
            </p>

            <p>
                Este proyecto tiene fines educativos y demuestra la aplicación práctica del
                aprendizaje estadístico y la inteligencia artificial en la resolución de
                problemas reales, integrando análisis de datos, desarrollo de software y
                despliegue de sistemas predictivos en la nube.
            </p>
            </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-[16/10]">
            <Image
            src="/proyectos/diagrama acv.png"
            alt="Sistema de IA para detección temprana de ACV"
            fill
            className="object-contain rounded-lg"
            />
          </div>
        </div>
        </div>
    </section>
  );
}
