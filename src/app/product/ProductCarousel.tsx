"use client";

import { useGLTF } from "@react-three/drei";
import { colors, accent } from "../components/Hero";
import { PartCanvas } from "./PartCanvas";
import { RulerCarousel } from "@/components/ui/ruler-carousel";
import { useLoopCarousel, type PartItem } from "./useLoopCarousel";

const PARTS: PartItem[] = [
  {
    id: "upper-outer-pylon",
    title: "UPPER OUTER PYLON",
    src: encodeURI("/product/Upper Outer Pylon.glb"),
    rotation: [0, 0, 0],
  },
  {
    id: "upper-inner-pylon",
    title: "UPPER INNER PYLON",
    src: encodeURI("/product/Upper Inner Pylon.glb"),
    rotation: [0, 0, 0],
  },
  {
    id: "lower-pylon",
    title: "LOWER PYLON",
    src: encodeURI("/product/Lower Pylon.glb"),
    rotation: [0, 0, 0],
  },
  {
    id: "joint",
    title: "JOINT",
    src: encodeURI("/product/Joint.glb"),
    rotation: [0, 0, 0],
  },
  {
    id: "auxetic-foot",
    title: "AUXETIC FOOT",
    src: encodeURI("/product/Auxetic Foot.glb"),
    rotation: [Math.PI, 0, 0],
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
