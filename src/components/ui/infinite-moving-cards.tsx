"use client";

import { cn } from "@/lib/utils";
import { mvCarousel1, frame1, frame2, frame3 } from "@/utils/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items?: {
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

  const FrameOne = () => {
    return (
      <Image src={frame1} alt={"Frame Image 1"} objectFit="cover" width={960} />
    );
  };

  const FrameTwo = () => {
    return (
      <Image src={frame2} alt={"Frame Image 2"} objectFit="cover" width={960} />
    );
  };

  const FrameThree = () => {
    return (
      <Image src={frame3} alt={"Frame Image 3"} objectFit="cover" width={960} />
    );
  };

  const components = [
    {
      key: 1,
      Component: FrameOne,
    },
    {
      key: 2,
      Component: FrameTwo,
    },
    {
      key: 3,
      Component: FrameThree,
    },
  ];

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {components.map((item, idx) => (
          <li
            className="w-[450px] h-full max-w-full relative flex-shrink-0 py-2 md:w-[960px]"
            key={item.key}
          >
            <item.Component />
          </li>
        ))}
      </ul>
    </div>
  );
};
