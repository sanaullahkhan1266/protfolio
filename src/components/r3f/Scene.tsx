"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <>
      {/* Background */}
      <color attach="background" args={["#241434"]} />

      {/* Environment lighting and gentle key/back lights */}
      <Environment preset="city" />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#120b1a" roughness={1} metalness={0} />
      </mesh>

      {/* Contact shadows for realism */}
      <ContactShadows
        position={[0, -0.59, 0]}
        opacity={0.6}
        scale={6}
        blur={2.5}
        far={4}
      />

      {/* Centered hero model */}
      <Model rotation={[0, Math.PI * 0.25, 0]} scaleFactor={1.2} />

      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </>
  );
}
