"use client";

import { useGLTF } from "@react-three/drei";
import { colors, accent } from "../components/Hero";
import { PartCanvas } from "./PartCanvas";
import { RulerCarousel } from "@/components/ui/ruler-carousel";
import { useLoopCarousel, type PartItem } from "./useLoopCarousel";

// Draft copy — written from the pitch-deck slides, not yet reviewed. Flag
// anything inaccurate so it can be corrected before this goes live.
export const PARTS: PartItem[] = [
  {
    id: "upper-outer-pylon",
    title: "UPPER OUTER PYLON",
    src: encodeURI("/product/Upper Outer Pylon.glb"),
    rotation: [0, 0, 0],
    targetSize: 1.35,
    cameraZ: 2.55,
    description:
      "Built from a triangular lattice structure in recycled PETG, minimising material while keeping high structural strength. It threads onto the Upper Inner Pylon, so this outer shell can be replaced on its own without remaking the whole limb.",
  },
  {
    id: "upper-inner-pylon",
    title: "UPPER INNER PYLON",
    src: encodeURI("/product/Upper Inner Pylon.glb"),
    rotation: [0, 0, 0],
    targetSize: 1.3,
    cameraZ: 2.5,
    description:
      "Also built from a triangular lattice, but in polycarbonate and positioned as an inner layer that overlaps the gaps in the Outer Pylon's structure, making the combined assembly even stronger. It carries load onward to the Lower Pylon and can be swapped on its own if worn or damaged.",
  },
  {
    id: "lower-pylon",
    title: "LOWER PYLON",
    src: encodeURI("/product/Lower Pylon.glb"),
    rotation: [-0.3316, 0, 0],
    targetSize: 1.3,
    cameraZ: 2.4,
    description:
      "Continues the same triangular lattice construction down to the Joint and foot, using the same recycled PETG and polycarbonate as the upper pylons. It was originally an outer and inner layer like the upper assembly, but the two were merged into a single part here.",
  },
  {
    id: "joint",
    title: "JOINT",
    src: encodeURI("/product/Joint.glb"),
    rotation: [-0.1571, 0, 0],
    targetSize: 1.6,
    cameraZ: 2.3,
    description:
      "Cleanly connects the pylon to the foot. Its stepped, socketed profile locks the two halves together while keeping the connection serviceable, so either side can be replaced without remaking the whole prosthesis.",
  },
  {
    id: "auxetic-foot",
    title: "AUXETIC FOOT",
    src: encodeURI("/product/Auxetic Foot.glb"),
    rotation: [Math.PI, 0, 0],
    targetSize: 1.6,
    cameraZ: 2.3,
    description:
      "The Achilles tendon naturally exhibits auxetic behaviour, so we recreated that structure at the back of the foot. Both the main foot body and the auxetic structure are built from TPU 68D, a flexible material that lets the lattice get wider, not narrower, when stretched, helping absorb impact and return energy through each step, much like the real tendon it's modelled on.",
  },
  {
    id: "final-product",
    title: "FINAL PRODUCT",
    src: "/leg.glb",
    rotation: [-Math.PI / 2, 0, Math.PI],
    targetSize: 1.45,
    cameraZ: 2.3,
    description:
      "The fully assembled Prockets system: upper and lower pylons, joint, and auxetic foot combined into one modular transtibial prosthesis. The parts aren't held together with bolts, they connect through the threaded and socketed interfaces built into each one, so any component above can still be swapped on its own without remaking the whole limb.",
  },
];

PARTS.forEach((part) => useGLTF.preload(part.src));

export function ProductCarousel() {
  const carousel = useLoopCarousel(PARTS);

  return (
    <section
      className="px-8 py-14 md:px-20 md:py-20"
      style={{ background: colors[900], color: colors[100] }}
    >
      <div className="max-w-5xl mx-auto">
        <span
          className="font-mono text-xs uppercase tracking-[0.2em] opacity-70"
          style={{ color: accent.DEFAULT }}
        >
          The Product
        </span>
        <h1
          className="mt-4 mb-8 text-3xl md:text-5xl font-extralight leading-tight"
          style={{ color: colors[50] }}
        >
          Every component, up close.
        </h1>

        <PartCanvas
          activePart={carousel.activePart}
          onPrev={carousel.prev}
          onNext={carousel.next}
        />

        {/* Desktop only — on mobile this same copy lives behind the info
            toggle on the viewer itself, see PartCanvas. */}
        <div
          className="hidden md:block mt-6 p-5 rounded-lg border"
          style={{ borderColor: `${colors[200]}22`, background: colors[800] }}
        >
          <h2
            className="font-mono text-xs uppercase tracking-[0.2em] mb-2"
            style={{ color: accent.DEFAULT }}
          >
            {carousel.activePart.title}
          </h2>
          <p className="text-sm font-normal leading-relaxed text-white">
            {carousel.activePart.description}
          </p>
        </div>

        <div className="mt-6">
          <RulerCarousel
            infiniteItems={carousel.infiniteItems}
            itemsPerSet={carousel.itemsPerSet}
            activeIndex={carousel.activeIndex}
            isResetting={carousel.isResetting}
            onSelect={carousel.jumpTo}
          />
        </div>
      </div>
    </section>
  );
}
