 'use client';

import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-6 text-neutral-100">
      <AnimatedGradientBackground
        startingGap={118}
        Breathing
        animationSpeed={0.03}
        breathingRange={8}
        topOffset={-12}
        containerClassName="opacity-95"
        containerStyle={{ filter: 'saturate(1.15) contrast(1.05)' }}
      />

      <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

      <motion.section
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="mx-auto rounded-[2rem] border border-white/12 bg-black/45 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:px-10 sm:py-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-neutral-300/70">
            Ahmed Ben Abdallah
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold uppercase tracking-[0.18em] text-white sm:text-6xl lg:text-7xl">
            work in progress portfolio for ahmed*
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-200/75 sm:text-base">
            A minimal landing page with an animated gradient backdrop, built to feel smooth, direct, and unmistakably personal.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-neutral-200/70">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">game dev</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">shaders</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">web experiments</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">portfolio</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
