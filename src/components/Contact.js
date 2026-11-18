"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuCheck, LuCopy, LuDownload, LuMail } from "react-icons/lu";
import Reveal from "./Reveal";
import { perfil } from "@/data/perfil";

const fieldClass =
  "w-full rounded-xl glass-soft px-4 py-3 text-base text-fg placeholder:text-muted/70 transition-[border-color] duration-150 focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-strong md:text-sm";

export default function Contact() {
  const [copiado, setCopiado] = useState(false);
  const [form, setForm] = useState({ correo: "", contenido: "" });
  const [estado, setEstado] = useState("idle"); // idle | enviando | ok | error

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      window.location.href = `mailto:${perfil.email}`;
    }
  };

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.correo || !form.contenido || estado === "enviando") return;
    setEstado("enviando");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { name: form.correo, correo: form.correo, message: form.contenido },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setEstado("ok");
      setForm({ correo: "", contenido: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      setEstado("error");
    }
  };

  const enlaces = [
    { label: "LinkedIn", href: perfil.links.linkedin, Icon: FaLinkedin, externo: true },
    { label: "GitHub", href: perfil.links.github, Icon: FaGithub, externo: true },
    { label: "Descargar CV", href: perfil.cv, Icon: LuDownload, externo: true },
  ];

  return (
    <section id="contacto" className="border-t border-line">
      <Reveal className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div className="reveal-item">
          <p className="text-sm font-medium text-strong">Contacto</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Hablemos.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            Busco prácticas y roles trainee en IA, Full Stack, Datos o DevOps.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${perfil.email}`}
              className="inline-flex items-center gap-2 text-lg font-medium tracking-tight hover:text-strong md:text-xl"
            >
              <LuMail aria-hidden="true" className="h-5 w-5" />
              {perfil.email}
            </a>
            <button
              type="button"
              onClick={copiarEmail}
              className="pressable inline-flex h-9 items-center gap-1.5 rounded-full glass-soft px-3 text-xs font-medium text-muted hover:border-fg/30 hover:text-fg"
            >
              {copiado ? (
                <LuCheck aria-hidden="true" className="h-3.5 w-3.5 text-strong" />
              ) : (
                <LuCopy aria-hidden="true" className="h-3.5 w-3.5" />
              )}
              <span aria-live="polite">{copiado ? "Copiado" : "Copiar"}</span>
            </button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {enlaces.map(({ label, href, Icon, externo }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(externo && { target: "_blank", rel: "noopener noreferrer" })}
                  className="pressable inline-flex h-11 items-center gap-2 rounded-full glass px-5 text-sm font-medium hover:border-white"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal-item flex flex-col gap-5 rounded-2xl glass p-6 md:p-8"
          style={{ "--d": "80ms" }}
        >
          <p className="text-sm text-muted">¿Prefieres escribir aquí? Te respondo al correo que dejes.</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="correo-contacto" className="text-sm font-medium">
              Tu correo
            </label>
            <input
              id="correo-contacto"
              type="email"
              name="correo"
              autoComplete="email"
              value={form.correo}
              onChange={onChange}
              placeholder="nombre@empresa.com"
              required
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje-contacto" className="text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje-contacto"
              name="contenido"
              value={form.contenido}
              onChange={onChange}
              placeholder="Cuéntame sobre el rol o el proyecto…"
              required
              rows={5}
              className={`${fieldClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            disabled={estado === "enviando"}
            className="pressable inline-flex h-12 items-center justify-center rounded-full bg-fg px-6 text-sm font-medium text-bg hover:bg-fg/85 disabled:opacity-60"
          >
            {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
          </button>
          <output className="block min-h-5 text-sm">
            {estado === "ok" && <span className="text-strong">Mensaje enviado. Gracias por escribir.</span>}
            {estado === "error" && (
              <span className="text-fg">
                No se pudo enviar. Escríbeme directo a{" "}
                <a href={`mailto:${perfil.email}`} className="underline underline-offset-4">
                  {perfil.email}
                </a>
                .
              </span>
            )}
          </output>
        </form>
      </Reveal>
    </section>
  );
}
