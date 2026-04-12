"use client";

import { useEffect, useRef, useState } from "react";

export default function BHClockInline() {
  const ref = useRef<HTMLSpanElement>(null);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      if (ref.current) {
        ref.current.textContent = fmt.format(now);
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const colorId = setInterval(() => setIsRed((v) => !v), 600);
    return () => clearInterval(colorId);
  }, []);

  return (
    <span
      ref={ref}
      className={`font-mono transition-colors duration-500 ${
        isRed ? "text-red-500" : "text-white"
      } text-sm`}
    />
  );
}
