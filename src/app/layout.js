import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ian Tapia — AI & Full Stack",
  description:
    "Estudiante de Ingeniería de Sistemas. Construyo productos con IA y full stack aplicados a salud, fintech, retail, movilidad y sector público.",
};

export const viewport = {
  themeColor: "#e6e6e3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Sin JS, el contenido de los reveal se muestra igual */}
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div aria-hidden="true" className="bg-scene" />
        {children}
      </body>
    </html>
  );
}
