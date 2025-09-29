"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Preload, AdaptiveDpr } from "@react-three/drei";
import Scene from "./r3f/Scene";
import IntroCamera from "./r3f/IntroCamera";
import SpaceField from "./r3f/SpaceField";

function Loader() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" />
    </div>
  );
}

export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false);
  const [intro, setIntro] = useState(true);
  useEffect(() => setMounted(true), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" suppressHydrationWarning>
      {mounted ? (
        <Canvas
          shadows
          camera={{ position: [0, 1.1, 3.6], fov: 40 }}
          dpr={[1, 2]}
          gl={{ antialias: true }}
        >
          {/* Important: DOM cannot be rendered inside Canvas Suspense */}
          <Suspense fallback={null}>
            {/* Starfield background */}
            <SpaceField />
            {/* Intro camera zooms into the helmet eye on first load */}
            {intro ? <IntroCamera active={intro} onFinish={() => setIntro(false)} /> : null}
            <Scene controlsEnabled={!intro} />
            <Preload all />
            <AdaptiveDpr pixelated />
          </Suspense>
        </Canvas>
      ) : null}
      {/* Optional: show a loader overlay while the app mounts (outside Canvas tree) */}
      {!mounted ? <Loader /> : null}
    </div>
  );
}
