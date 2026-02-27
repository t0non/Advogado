"use client";

import { useEffect, useRef } from "react";

export default function BHClockBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const update = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const hms = fmt.format(now);
      const ms = String(now.getMilliseconds()).padStart(3, "0");
      if (ref.current) {
        ref.current.textContent = `${hms}.${ms}`;
      }
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
      <div
        ref={ref}
        className="font-extrabold tracking-tight text-white text-[14vw] md:text-[10vw] leading-none"
        aria-hidden="true"
      />
    </div>
  );
}

