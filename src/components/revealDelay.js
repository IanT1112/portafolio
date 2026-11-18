// Stagger no uniforme: rápido al principio, se va asentando. Tope en 320ms
// para que una grilla larga no se sienta lenta. Módulo neutral (sin
// "use client") para usarlo desde server y client components.
const DELAYS = [0, 50, 90, 125, 155, 185, 210, 235, 260, 280, 300, 320];

export function revealDelay(index) {
  return { "--d": `${DELAYS[Math.min(index, DELAYS.length - 1)]}ms` };
}
