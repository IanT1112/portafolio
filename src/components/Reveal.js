"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Marca el contenedor con data-visible="true" la primera vez que entra en
 * pantalla. Los hijos con la clase `reveal-item` animan vía CSS; el retraso
 * de cada uno se pasa con la variable --d (ver `./revealDelay`).
 */
export default function Reveal({ as: Tag = "div", children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-visible={visible} {...props}>
      {children}
    </Tag>
  );
}
