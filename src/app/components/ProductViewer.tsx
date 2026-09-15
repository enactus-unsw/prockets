"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const BACKGROUND = "#F5F4F2";

useGLTF.preload("/leg.glb");

function LegModel() {
  const { scene } = useGLTF("/leg.glb");
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
    const scale = 1.6 / maxDimension;

    if (innerRef.current) {
      innerRef.current.position.set(-center.x, -center.y, -center.z);
    }
    if (outerRef.current) {
      outerRef.current.rotation.set(-Math.PI / 2, 0, Math.PI);
      outerRef.current.scale.setScalar(scale);
    }

    camera.position.set(0, 0.2, 3);
    camera.lookAt(0, 0, 0);
  }, [scene, camera]);

  return (
    <group ref={outerRef}>
      <group ref={innerRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

export function ProductViewer() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas
        shadows
        camera={{ fov: 40, position: [0, 0.2, 3] }}
        style={{ background: BACKGROUND }}
      >
        <color attach="background" args={[BACKGROUND]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0005}
        />
        <directionalLight position={[-3, 1, -3]} intensity={0.4} />
        <directionalLight position={[0, -2, 2]} intensity={0.2} />
        <Suspense fallback={null}>
          <LegModel />
        </Suspense>
        <ContactShadows
          position={[0, -0.82, 0]}
          opacity={0.35}
          scale={4}
          blur={2.5}
          far={1.2}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          minDistance={1.2}
          maxDistance={4.5}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
