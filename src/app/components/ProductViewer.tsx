"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { colors } from "./Hero";
import { GlbModel } from "./GlbModel";

/**
 * Studio backdrop for the viewer. Centred on colors[500], which sits at the
 * same lightness (35) as the neutral grey it replaces, so the model reads
 * exactly as before — only the hue moves onto the brand ramp. Rendered as a
 * CSS gradient behind a transparent canvas rather than scene.background, which
 * paints flat and would cover it.
 */
const BACKDROP = `radial-gradient(circle at 50% 42%, ${colors[400]} 0%, ${colors[500]} 45%, ${colors[600]} 100%)`;

useGLTF.preload("/leg.glb");

export function ProductViewer() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: BACKDROP }}
    >
      <Canvas shadows camera={{ fov: 40, position: [0, 0.2, 3] }}>
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
          <GlbModel src="/leg.glb" />
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
