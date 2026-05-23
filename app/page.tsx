"use client";

import { useEffect, useState } from "react";
import { SpecialText } from "@/components/ui/special-text";

export default function Home() {
  const [instanceKey, setInstanceKey] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setInstanceKey((current) => current + 1);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-center text-neutral-100">
      <div className="relative flex w-full max-w-5xl items-center justify-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.03)_18%,transparent_55%)] opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,transparent_70%,rgba(255,255,255,0.02))]" />

        <div className="relative z-10 space-y-6 px-4">
          <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-400">
            Ahmed Ben Abdallah
          </p>

          <SpecialText
            key={instanceKey}
            speed={18}
            delay={0}
            className="text-balance text-4xl font-bold uppercase tracking-[0.2em] text-white sm:text-6xl lg:text-7xl"
          >
            work in progress portfolio for ahmed*
          </SpecialText>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            Minimal, centered, and intentionally simple. The whole site is this one screen now.
          </p>
        </div>
      </div>
    </main>
  );
}
