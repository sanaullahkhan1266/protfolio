"use client";

import React, { useRef } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

export default function SpaceModel(props: ThreeElements['group']) {
  const planetRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const moonOrbitRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (planetRef.current) planetRef.current.rotation.y += delta * 0.04;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.06;
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.005;
    if (moonOrbitRef.current) moonOrbitRef.current.rotation.y += delta * 0.25;
  });

  return (
    <group name="spaceModel" {...props}>
      {/* Main planet */}
      <mesh ref={planetRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#1c2a5a"
          metalness={0.2}
          roughness={0.7}
          emissive="#0b1836"
          emissiveIntensity={0.2}
          envMapIntensity={0.6}
        />
      </mesh>

      {/* Subtle clouds */}
      <mesh ref={cloudsRef} scale={[1.03, 1.03, 1.03]}> 
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial color="#8fb3ff" transparent opacity={0.06} roughness={1} metalness={0} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh scale={[1.08, 1.08, 1.08]}> 
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial color="#7acbff" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>

      {/* Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0, 0]}>
        <ringGeometry args={[1.4, 2.2, 128]} />
        <meshBasicMaterial color="#9bb8ff" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>

      {/* Moon on an orbit */}
      <group ref={moonOrbitRef}>
        <mesh position={[2.6, 0.4, 0]} scale={0.26} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#cfd8ff" roughness={0.9} metalness={0.05} />
        </mesh>
      </group>
    </group>
  );
}
