'use client';

import { TextScramble } from '@/components/text-scrammble';
import { DitheringShader } from '@/components/ui/dithering-shader';
import { useEffect, useState } from 'react';

export default function Home() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <main style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#050508',
      overflow: 'hidden',
    }}>
      {/* Dithering shader background - subtle, dark */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}>
        <DitheringShader
          width={dimensions.width}
          height={dimensions.height}
          shape="wave"
          type="8x8"
          colorBack="#050508"
          colorFront="#141828"
          pxSize={3}
          speed={0.3}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Content overlay */}
      <div style={{
        position: 'relative',
        zIndex: 100,
        textAlign: 'center',
        maxWidth: '90vw',
        padding: '0 1rem',
      }}>
        <TextScramble
          phrases={[
            'The map is not the territory, but we still cross it.',
            'A wound is a doorway with bad manners.',
            'Begin where the signal leaks.',
            'What resists you is also instructing you.',
            'You are the distance between two versions of you.',
            'Even ruins cast a usable shadow.',
            'The dark is only absence until it is named.',
          ]}
          pauseMs={2500}
          textClass="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white font-mono"
          dudClass="text-blue-400/40"
          autoStart
          loop
        />
      </div>
    </main>
  );
}
