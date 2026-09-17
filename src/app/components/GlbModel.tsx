"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const DEFAULT_ROTATION: [number, number, number] = [-Math.PI / 2, 0, Math.PI];
const DEFAULT_CAMERA_POSITION: [number, number, number] = [0, 0.2, 3];

/**
 * Loads a GLB, centers/scales it to a consistent on-screen size, and applies
 * an export-orientation correction. `rotation` defaults to the correction
 * tuned for leg.glb; individual CAD parts with a different export axis pass
 * their own override. Reused by the homepage leg viewer and the product
 * carousel.
 */
export function GlbModel({
  src,
  rotation = DEFAULT_ROTATION,
  targetSize = 1.6,
  cameraPosition = DEFAULT_CAMERA_POSITION,
}: {
  src: string;
  rotation?: [number, number, number];
  targetSize?: number;
  cameraPosition?: [number, number, number];
}) {
  const { scene } = useGLTF(src);
  const { camera } = useThree();
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material = new THREE.MeshStandardMaterial({
          color: "#111111",
          roughness: 0.5,
          metalness: 0.15,
        });
      }
    });
  }, [scene]);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const scale = targetSize / maxDimension;

    if (innerRef.current) {
      innerRef.current.position.set(-center.x, -center.y, -center.z);
    }
    if (outerRef.current) {
      outerRef.current.rotation.set(...rotation);
      outerRef.current.scale.setScalar(scale);
    }

    camera.position.set(...cameraPosition);
    camera.lookAt(0, 0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, camera]);

  return (
    <group ref={outerRef}>
      <group ref={innerRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
