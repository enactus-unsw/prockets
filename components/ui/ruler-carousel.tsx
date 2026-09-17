"use client";

import { motion } from "framer-motion";
import { cn } from "cn";

export interface RulerCarouselItem {
  key: string;
  title: string;
  originalIndex: number;
}

function RulerLines({
  top = true,
  totalLines = 100,
}: {
  top?: boolean;
  totalLines?: number;
}) {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-3";
    let color = "bg-gray-500 dark:bg-gray-400";

    if (isCenter) {
      height = "h-8";
      color = "bg-primary dark:bg-white";
    } else if (isFifth) {
      height = "h-4";
      color = "bg-primary dark:bg-white";
    }

    lines.push(
      <div
        key={i}
        className={cn("absolute w-0.5", height, color, !top && "bottom-0")}
        style={{ left: `${i * lineSpacing}%` }}
      />,
    );
  }

  return <div className="relative w-full h-8 px-4">{lines}</div>;
}

/**
 * Controlled ruler-style title carousel: the active index, the triplicated
 * "infinite" item list, and the reset flag all live in the caller (see
 * `useLoopCarousel`) so this component stays in sync with the 3D viewer and
 * the flanking arrow buttons rendered elsewhere on the page. No page-number
 * readout and no prev/next buttons here by design — those live next to the
 * 3D model instead.
 */
export function RulerCarousel({
  infiniteItems,
  itemsPerSet,
  activeIndex,
  isResetting,
  onSelect,
}: {
  infiniteItems: RulerCarouselItem[];
  itemsPerSet: number;
  activeIndex: number;
  isResetting: boolean;
  onSelect: (originalIndex: number) => void;
}) {
  // Item pitch = button width (400px) + flex gap (100px). The track is
  // anchored with its local x=0 at the viewport's horizontal center (via
  // `left-1/2`), so translating by -(activeIndex * pitch + itemWidth / 2)
  // brings that item's own center under the viewport center — this holds
  // for any item count/copy/start index, unlike a formula tuned to one demo.
  const itemWidth = 400;
  const itemPitch = 500;
  const targetX = -(activeIndex * itemPitch + itemWidth / 2);

  return (
    <div className="w-full flex flex-col justify-center relative">
      <div className="flex items-center justify-center">
        <RulerLines top />
      </div>
      <div className="w-full h-[80px] md:h-[100px] relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 flex items-center gap-[100px] h-full"
          animate={{ x: targetX }}
          transition={
            isResetting
              ? { duration: 0 }
              : { type: "spring", stiffness: 260, damping: 20, mass: 1 }
          }
        >
          {infiniteItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={item.key}
                onClick={() => onSelect(item.originalIndex)}
                className={cn(
                  "text-2xl md:text-4xl font-heading whitespace-nowrap cursor-pointer flex items-center justify-center",
                  isActive ? "text-white" : "text-white/40 hover:text-white/60",
                )}
                animate={{
                  scale: isActive ? 1 : 0.75,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={
                  isResetting
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 400, damping: 25 }
                }
                style={{ width: "400px" }}
              >
                {item.title}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <RulerLines top={false} />
      </div>
    </div>
  );
}
