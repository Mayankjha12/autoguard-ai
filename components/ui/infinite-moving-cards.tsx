"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      addAnimation();
    }
  }, [start]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(
        scrollerRef.current.children
      );

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "30s"
        );
      } else if (speed === "normal") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "60s"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "100s"
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover &&
            "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="
              w-[320px]
              md:w-[350px]
              shrink-0
              rounded-3xl
              border
              border-cyan-500/20
              bg-slate-900/90
              backdrop-blur-xl
              p-6
              shadow-[0_0_25px_rgba(6,182,212,0.08)]
              hover:border-cyan-400/40
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col h-full">
              <p className="text-slate-400 text-sm font-medium">
                {item.name}
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                {item.quote}
              </h2>

              <div className="mt-4 inline-flex w-fit rounded-xl bg-cyan-500/10 px-3 py-1">
                <span className="text-cyan-400 text-sm">
                  {item.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};