"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { Rotate3d } from "lucide-react";
import { colors, accent } from "./theme";
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

export function ProductViewer({ onInteract }: { onInteract?: () => void }) {
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
          // OrbitControls dispatches "start" on both pointerdown and wheel,
          // so this covers a rotate and a zoom alike.
          onStart={onInteract}
        />
      </Canvas>
    </div>
  );
}

/**
 * The viewer plus its "drag to rotate" prompt, which retires for good the first
 * time someone actually rotates or zooms. Fades rather than unmounts so the
 * layout below it never shifts.
 */
export function ProductShowcase() {
  const [interacted, setInteracted] = useState(false);

  return (
    <div className="order-2 md:order-1">
      <div
        className="mb-3 flex items-center gap-2 transition-opacity duration-500"
        style={{ opacity: interacted ? 0 : 1 }}
        aria-hidden={interacted}
      >
        <Rotate3d
          size={14}
          aria-hidden="true"
          style={{ color: accent.DEFAULT }}
        />
        <span
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em]"
          style={{ color: colors[200] }}
        >
          Drag to rotate · scroll to zoom
        </span>
      </div>
      <div
        className="aspect-square rounded-lg border overflow-hidden"
        style={{ borderColor: `${colors[200]}33` }}
      >
        <ProductViewer onInteract={() => setInteracted(true)} />
      </div>
    </div>
  );
}
