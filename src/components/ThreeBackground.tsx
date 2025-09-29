"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Scene from "./r3f/Scene";

function Loader() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" />
    </div>
  );
}

export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false);
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
          <Suspense fallback={<Loader />}> 
            <Scene />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
