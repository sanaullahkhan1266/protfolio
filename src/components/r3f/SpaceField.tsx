"use client";

import { useMemo, useRef } from "react";
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, Group, Points, PointsMaterial } from "three";
import { useFrame } from "@react-three/fiber";

export default function SpaceField() {
  const group = useRef<Group>(null);
  const nearRef = useRef<Points>(null);
  const farRef = useRef<Points>(null);

  const { nearGeom, nearMat, farGeom, farMat } = useMemo(() => {
    // Parameters
    const MIN_R = 14; // keep space around model clear
    const MAX_R_NEAR = 90;
    const MAX_R_FAR = 120;

    // Helper to create positions in spherical volume with min radius
    function makePositions(count: number, maxR: number) {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        let r = 0;
        // ensure r >= MIN_R
        while (r < MIN_R) {
          r = maxR * Math.cbrt(Math.random()); // bias outward
        }
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = Math.random() * Math.PI * 2;
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.cos(theta);
        const z = r * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 0] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }
      return positions;
    }

    // Near layer: fewer, slightly larger, darker color
    const nearGeom = new BufferGeometry();
    nearGeom.setAttribute("position", new BufferAttribute(makePositions(2800, MAX_R_NEAR), 3));
    const nearMat = new PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: AdditiveBlending,
      color: new Color("#223155"),
    });

    // Far layer: more points, smaller, very faint
    const farGeom = new BufferGeometry();
    farGeom.setAttribute("position", new BufferAttribute(makePositions(4200, MAX_R_FAR), 3));
    const farMat = new PointsMaterial({
      size: 0.035,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      blending: AdditiveBlending,
      color: new Color("#121a33"),
    });

    return { nearGeom, nearMat, farGeom, farMat };
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y -= delta * 0.0016;
    if (nearRef.current) nearRef.current.rotation.x += delta * 0.0005;
    if (farRef.current) farRef.current.rotation.x -= delta * 0.0003;
  });

  return (
    <group ref={group}>
      <points ref={farRef} geometry={farGeom} material={farMat} />
      <points ref={nearRef} geometry={nearGeom} material={nearMat} />
    </group>
  );
}
