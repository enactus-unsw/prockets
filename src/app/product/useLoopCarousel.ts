"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface PartItem {
  id: string;
  title: string;
  /** Path under /public, already URL-safe (spaces encoded). */
  src: string;
  /** Per-part export-orientation correction (radians), tuned by eye. */
  rotation: [number, number, number];
  /** Per-part target on-screen size, so a naturally smaller part still fills the frame. */
  targetSize?: number;
}

interface InfiniteItem extends PartItem {
  key: string;
  originalIndex: number;
}

function createInfiniteItems(items: PartItem[]): InfiniteItem[] {
  const out: InfiniteItem[] = [];
  for (let copy = 0; copy < 3; copy++) {
    items.forEach((item, originalIndex) => {
      out.push({ ...item, key: `${copy}-${item.id}`, originalIndex });
    });
  }
  return out;
}

/**
 * Owns the single source of truth for which part is active, and the
 * triplicated "infinite" index used to animate the ruler carousel, so the
 * flanking arrow buttons, the 3D viewer, and the bottom ruler all stay in
 * sync with one another.
 */
export function useLoopCarousel(items: PartItem[]) {
  const itemsPerSet = items.length;
  const infiniteItems = useRef(createInfiniteItems(items)).current;

  const [activeIndex, setActiveIndex] = useState(itemsPerSet);
  const [isResetting, setIsResetting] = useState(false);

  const jumpTo = useCallback(
    (targetOriginalIndex: number) => {
      if (isResetting) return;
      const candidates = [
        targetOriginalIndex,
        targetOriginalIndex + itemsPerSet,
        targetOriginalIndex + itemsPerSet * 2,
      ];
      let closest = candidates[0];
      let smallestDistance = Math.abs(candidates[0] - activeIndex);
      for (const candidate of candidates) {
        const distance = Math.abs(candidate - activeIndex);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closest = candidate;
        }
      }
      setActiveIndex(closest);
    },
    [activeIndex, isResetting, itemsPerSet],
  );

  const next = useCallback(() => {
    if (isResetting) return;
    setActiveIndex((prev) => prev + 1);
  }, [isResetting]);

  const prev = useCallback(() => {
    if (isResetting) return;
    setActiveIndex((prev) => prev - 1);
  }, [isResetting]);

  // Silently snap back into the middle copy once we drift into an outer one,
  // so the animation can keep sliding in one direction forever.
  useEffect(() => {
    if (isResetting) return;
    if (activeIndex < itemsPerSet) {
      setIsResetting(true);
      const t = setTimeout(() => {
        setActiveIndex(activeIndex + itemsPerSet);
        setIsResetting(false);
      }, 0);
      return () => clearTimeout(t);
    }
    if (activeIndex >= itemsPerSet * 2) {
      setIsResetting(true);
      const t = setTimeout(() => {
        setActiveIndex(activeIndex - itemsPerSet);
        setIsResetting(false);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [activeIndex, itemsPerSet, isResetting]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isResetting) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResetting, prev, next]);

  const activeOriginalIndex = activeIndex % itemsPerSet;
  const activePart = items[activeOriginalIndex];

  return {
    items,
    infiniteItems,
    itemsPerSet,
    activeIndex,
    isResetting,
    activeOriginalIndex,
    activePart,
    next,
    prev,
    jumpTo,
  };
}

export type LoopCarousel = ReturnType<typeof useLoopCarousel>;
