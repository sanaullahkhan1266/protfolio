"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";

/**
 * Intro sequence: zoom-in to the helmet eye, hold briefly, then zoom-out to a full-frame view.
 * Ensures the model is fully visible at the end, adapting to FOV and aspect ratio.
 */
export default function IntroCamera({ active, onFinish }: { active: boolean; onFinish: () => void }) {
  const { camera, scene, size } = useThree();

  // Timing
  const t = useRef(0);
  const inDur = 1.4; // seconds
  const holdDur = 0.35;
  const outDur = 1.2;

  // Positions
  const start = useRef(new THREE.Vector3()); // initial camera pos
  const center = useRef(new THREE.Vector3(0, 0, 0)); // default center fallback
  const eye = useRef(new THREE.Vector3(-0.15, 1.25, 0.45)); // target eye position
  const fit = useRef<THREE.Vector3 | null>(null); // computed fit position

  // Compute model bounds once it's in the scene
  useEffect(() => {
    // Capture starting camera position at mount
    start.current.copy(camera.position);

    const model = scene.getObjectByName("spaceAsset");
    if (model) {
      const box = new THREE.Box3().setFromObject(model);
      const c = new THREE.Vector3();
      box.getCenter(c);
      center.current.copy(c);

      // Bounding sphere for fit distance
      const sphere = new THREE.Sphere();
      box.getBoundingSphere(sphere);

      const vFov = THREE.MathUtils.degToRad(camera.fov);
      const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
      const fitHeightDist = sphere.radius / Math.tan(vFov / 2);
      const fitWidthDist = sphere.radius / Math.tan(hFov / 2);
      const dist = Math.max(fitHeightDist, fitWidthDist) * 1.2; // padding

      // Use initial camera direction for a pleasing angle
      const dir = new THREE.Vector3().subVectors(start.current, c).normalize();
      fit.current = new THREE.Vector3().addVectors(c, dir.multiplyScalar(dist));

      // Optionally, lift a touch for a top-grade composition
      fit.current.y += sphere.radius * 0.15;
    } else {
      // Fallback if model hasn't been found yet
      fit.current = new THREE.Vector3(0, 1.1, 3.6);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera.fov, camera.aspect, size.width, size.height]);

  useFrame((_, delta) => {
    if (!active) return;

    // Progress time through phases
    t.current += delta;

    const total = inDur + holdDur + outDur;
    const tt = Math.min(t.current, total);

    // Ease helper
    const easeOutCubic = (k: number) => 1 - Math.pow(1 - k, 3);
    const easeInOutCubic = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

    if (tt <= inDur) {
      // Zoom-in to eye
      const k = easeOutCubic(tt / inDur);
      camera.position.lerpVectors(start.current, eye.current, k);
      camera.lookAt(center.current);
    } else if (tt <= inDur + holdDur) {
      // Hold at eye
      camera.position.copy(eye.current);
      camera.lookAt(center.current);
    } else {
      // Zoom-out to fit
      const k = (tt - inDur - holdDur) / outDur;
      const e = easeInOutCubic(k);
      const target = fit.current ?? start.current;
      camera.position.lerpVectors(eye.current, target, e);
      camera.lookAt(center.current);
    }

    if (tt >= total) {
      onFinish();
    }
  });

  return null;
}
