"use client";

import { Environment, OrbitControls, Float } from "@react-three/drei";
import Model from "./Model";
import { MODEL_URL } from "@/config/scene";
import { useEffect, useState } from "react";

type Props = {
  controlsEnabled?: boolean;
};

export default function Scene({ controlsEnabled = true }: Props) {
  const [hasModel, setHasModel] = useState<boolean | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(MODEL_URL, { method: "HEAD" })
      .then((res) => alive && setHasModel(res.ok))
      .catch(() => alive && setHasModel(false));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      {/* Black background */}
      <color attach="background" args={["#000000"]} />

      {/* Space lighting */}
      <ambientLight intensity={0.14} />
      <directionalLight position={[3, 5, 2]} intensity={0.75} color="#7ab6ff" castShadow />
      <pointLight position={[-4, 1.5, -2]} intensity={0.5} color="#6d28d9" />

      {/* Night environment reflections */}
      <Environment preset="night" />

      {/* Floating space asset model (provide /public/models/space.glb) */}
      {hasModel ? (
        <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.7}>
          <Model name="spaceAsset" url={MODEL_URL} scaleFactor={1.2} />
        </Float>
      ) : null}

      <OrbitControls enablePan={false} enableZoom={false} enabled={controlsEnabled} autoRotate={controlsEnabled} autoRotateSpeed={0.35} />
    </>
  );
}
