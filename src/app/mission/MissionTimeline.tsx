"use client";

import { useEffect, useRef, useState } from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import { colors } from "../components/Hero";

type TimelineEntry = {
  id: number;
  date: string;
  title: string;
  description: string;
  points?: string[];
};

export function MissionTimeline({ items }: { items: TimelineEntry[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const itemRefs = useRef(new Map<number, HTMLDivElement>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const step = Number(
            (entry.target as HTMLElement).dataset.step ?? 0
          );
          setActiveStep((prev) => Math.max(prev, step));
        });
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Timeline value={activeStep} className="mt-16">
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <div
            ref={(el) => {
              if (el) itemRefs.current.set(item.id, el);
              else itemRefs.current.delete(item.id);
            }}
            data-step={item.id}
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
          />
          <TimelineHeader>
            <TimelineSeparator className="transition-colors duration-500" />
            <TimelineDate
              className="text-xs font-mono uppercase tracking-wide"
              style={{ color: colors[200] }}
            >
              {item.date}
            </TimelineDate>
            <TimelineTitle
              className="text-lg font-light"
              style={{ color: colors[100] }}
            >
              {item.title}
            </TimelineTitle>
            <TimelineIndicator className="transition-colors duration-500" />
          </TimelineHeader>
          <TimelineContent
            className="text-sm font-thin leading-relaxed"
            style={{ color: colors[300] }}
          >
            <p>{item.description}</p>
            {item.points && (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
