"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { colors } from "../components/Hero";
import { GlbModel } from "../components/GlbModel";
import type { PartItem } from "./useLoopCarousel";

const BACKDROP = `radial-gradient(circle at 50% 42%, ${colors[400]} 0%, ${colors[500]} 45%, ${colors[600]} 100%)`;

export function PartCanvas({
  activePart,
  onPrev,
  onNext,
}: {
  activePart: PartItem;
  onPrev: () => void;
  onNext: () => void;
}) {
  const cameraZ = activePart.cameraZ ?? 2.3;

  return (
    <div
      className="relative w-full h-[45vh] md:h-[55vh] rounded-lg overflow-hidden"
      style={{ background: BACKDROP }}
    >
      <Canvas shadows camera={{ fov: 40, position: [0, 0.3, cameraZ] }}>
        <ambientLight intensity={0.4} />
        {/* Key light sits near the camera so the face turned toward the
            viewer is brightly lit, while the far side falls into shadow. */}
        <directionalLight
          position={[0.5, 2.2, 4.5]}
          intensity={3.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0005}
        />
        <directionalLight position={[-1.5, 1, 3.5]} intensity={0.7} />
        <directionalLight position={[0, -1.5, 2.5]} intensity={0.25} />
        <Suspense fallback={null}>
          <GlbModel
            key={activePart.src}
            src={activePart.src}
            rotation={activePart.rotation}
            targetSize={activePart.targetSize}
            cameraPosition={[0, 0.3, cameraZ]}
          />
        </Suspense>
        <ContactShadows
          position={[0, -0.82, 0]}
          opacity={0.4}
          scale={4}
          blur={2.5}
          far={1.2}
        />
        <OrbitControls
          enableZoom
          enablePan={false}
          enableRotate
          minDistance={0.9}
          maxDistance={4}
          makeDefault
        />
      </Canvas>

      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous part"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 md:size-12 rounded-full border cursor-pointer transition-colors hover:bg-white/10"
        style={{ borderColor: `${colors[100]}33`, color: colors[50] }}
      >
        <ChevronLeft className="size-5 md:size-6" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next part"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 md:size-12 rounded-full border cursor-pointer transition-colors hover:bg-white/10"
        style={{ borderColor: `${colors[100]}33`, color: colors[50] }}
      >
        <ChevronRight className="size-5 md:size-6" />
      </button>
    </div>
  );
}
