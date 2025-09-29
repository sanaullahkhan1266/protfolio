"use client";

import { Center, useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

export type ModelProps = ThreeElements["group"] & {
  url?: string;
  scaleFactor?: number;
};

export default function Model({ url = "/models/hero.glb", scaleFactor = 1, ...props }: ModelProps) {
  const gltf = useGLTF(url);
  return (
    <group name="heroModel" {...props}>
      <Center disableZ>
        {/* Primitive keeps original materials/textures */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <primitive object={(gltf as any).scene} scale={scaleFactor} />
      </Center>
    </group>
  );
}

// Preload the default path so it appears faster when navigating
useGLTF.preload("/models/hero.glb");