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
    <main className="flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-neutral-100 bg-black">
      <SpecialText key={instanceKey} speed={18} delay={0}>
        work in progress portfolio for ahmed*
      </SpecialText>
    </main>
  );
}
