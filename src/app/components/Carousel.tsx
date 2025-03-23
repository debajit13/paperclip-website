"use client";

import { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import CarouselCard from "./CarouselCard";

export interface carouselContentProps {
  key?: number;
  value: string;
  title: string;
  subTitle: string;
  description: string;
  btnTitle: string;
  image: any;
  imageWidth?: number;
  imageHeight?: number;
  imageMobileWidth?: number;
  imageMobileHeight?: number;
  imageTabHeight?: number | undefined;
  imageTabWidth?: number | undefined;
  position?: any;
  positionTab?: any;
  customHeight?: string;
  btnMaxWidth?: string;
  c1?: boolean | null;
  c2?: boolean | null;
  c3?: boolean | null;
  c4?: boolean | null;
  c5?: boolean | null;
  c6?: boolean | null;
  c7?: boolean | null;
  c8?: boolean | null;
  c9?: boolean | null;
  c10?: boolean | null;
  c21?: boolean | null;
  c22?: boolean | null;
  c23?: boolean | null;
  c24?: boolean | null;
  c25?: boolean | null;
  c26?: boolean | null;
  c27?: boolean | null;
  c28?: boolean | null;
  c29?: boolean | null;
  c30?: boolean | null;
  c31?: boolean | null;
  c32?: boolean | null;
  c33?: boolean | null;
  c34?: boolean | null;
  c35?: boolean | null;
}

export interface Props {
  carouselContent: carouselContentProps[];
  carouselSteps: string[];
  customHeight?: string;
  scrollsPerSlide?: number;
}

export default function Carousel({
  carouselContent,
  carouselSteps,
  customHeight = "",
  scrollsPerSlide = 4, // Default to 4 scrolls per slide change
}: Props) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const hasReachedEnd = useRef<boolean>(false);
  const hasReachedStart = useRef<boolean>(false);

  const totalSteps = carouselContent.length;
  const totalScrolls = totalSteps * scrollsPerSlide;

  // Calculate the current carousel slide based on progress
  const currentCarouselSlide = Math.floor(currentProgress / scrollsPerSlide);
  // Calculate the scroll count within the current slide
  const scrollCount = currentProgress % scrollsPerSlide;

  // Throttling for Mac trackpad/mouse
  const lastScrollTime = useRef<number>(0);
  const scrollThreshold = 100; // ms between scroll events

  // Accumulated delta for more precise control
  const accumulatedDelta = useRef<number>(0);
  const deltaThreshold = 25; // Adjusted threshold for Mac

  // Function to check if element is in the middle of viewport
  const isInMiddleOfViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the element's center is near the middle of the viewport
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;

    // Define a threshold around the center (e.g., ±30% of viewport height)
    const threshold = windowHeight * 0.2;

    return Math.abs(elementCenter - viewportCenter) < threshold;
  };

  // Function to release scroll lock and move to next/prev section
  const releaseScrollLock = (direction: "next" | "prev") => {
    setIsScrollLocked(false);
    document.body.style.overflow = "";

    if (carouselRef.current) {
      const targetSection =
        direction === "next"
          ? carouselRef.current.nextElementSibling
          : carouselRef.current.previousElementSibling;

      if (targetSection instanceof HTMLElement) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Use IntersectionObserver API to detect when carousel is in view
  useEffect(() => {
    if (!carouselRef.current) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        // Only set once to avoid infinite loop
        if (!isScrollLocked) {
          setIsScrollLocked(true);
          document.body.style.overflow = "hidden";
        }
      } else {
        // Reset flags when element is no longer in view
        hasReachedEnd.current = false;
        hasReachedStart.current = false;

        if (isScrollLocked) {
          setIsScrollLocked(false);
          document.body.style.overflow = "";
        }
      }
    };

    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1, // Trigger when 50% visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(carouselRef.current);

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
      observer.disconnect();
    };
  }, [isScrollLocked]);

  // Handle wheel events when scroll is locked
  useEffect(() => {
    if (!isScrollLocked) return;

    const handleWheelEvent = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();

      // Throttle scroll events to handle Mac trackpad behavior
      if (now - lastScrollTime.current < scrollThreshold) {
        return;
      }

      // Accumulate delta values for more precise control
      accumulatedDelta.current += Math.abs(e.deltaY);

      // Check if we've accumulated enough movement to count as a scroll
      if (accumulatedDelta.current < deltaThreshold) {
        return;
      }

      // Reset accumulated delta
      accumulatedDelta.current = 0;

      // Update last scroll time
      lastScrollTime.current = now;

      const direction = e.deltaY > 0 ? "down" : "up";

      if (direction === "down") {
        // Scrolling down
        if (currentProgress < totalScrolls - 1) {
          // Simply increment the progress - slide and count are derived from this
          setCurrentProgress((prev) => prev + 1);
        } else {
          // Mark as reached end
          hasReachedEnd.current = true;
          // Release scroll lock when reached the end
          releaseScrollLock("next");
        }
      } else if (direction === "up") {
        // Scrolling up
        if (currentProgress > 0) {
          // Simply decrement the progress - slide and count are derived from this
          setCurrentProgress((prev) => prev - 1);
        } else {
          // Mark as reached start
          hasReachedStart.current = true;
          // Release scroll lock when reached the beginning
          releaseScrollLock("prev");
        }
      }
    };

    window.addEventListener("wheel", handleWheelEvent, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  }, [isScrollLocked, currentProgress, totalScrolls]);

  // Allow keyboard navigation when carousel is locked
  useEffect(() => {
    if (!isScrollLocked) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        // Simulate a single scroll down
        if (currentProgress < totalScrolls - 1) {
          setCurrentProgress((prev) => prev + 1);
        } else if (currentProgress === totalScrolls - 1) {
          // Release lock at end
          releaseScrollLock("next");
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        // Simulate a single scroll up
        if (currentProgress > 0) {
          setCurrentProgress((prev) => prev - 1);
        } else if (currentProgress === 0) {
          // Release lock at beginning
          releaseScrollLock("prev");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isScrollLocked, currentProgress, totalScrolls]);

  // Handle release of scroll lock when reaching boundaries
  useEffect(() => {
    if (hasReachedEnd.current && isScrollLocked) {
      releaseScrollLock("next");
    } else if (hasReachedStart.current && isScrollLocked) {
      releaseScrollLock("prev");
    }
  }, [isScrollLocked]);

  // Calculate progress percentage for visual indicator
  const progressPercentage = Math.min(
    Math.round((scrollCount / scrollsPerSlide) * 100),
    100
  );

  return (
    <div className="w-full mx-auto relative max-w-[98%]" ref={carouselRef}>
      {/* Progress Bar */}
      <ProgressBar currentSlide={currentProgress} steps={carouselSteps} />

      {/* Carousel Content */}
      <div className="relative overflow-hidden w-full mt-10 rounded-[32px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentCarouselSlide * 100}%)`,
          }}
        >
          {carouselContent.map((content, index) => (
            <div key={content.key || index} className="min-w-full">
              <CarouselCard
                title={content.title}
                subTitle={content.subTitle}
                description={content.description}
                btnTitle={content.btnTitle}
                image={content.image}
                imageWidth={content.imageWidth}
                imageHeight={content.imageHeight}
                position={content.position}
                imageMobileWidth={content.imageMobileWidth}
                imageMobileHeight={content.imageMobileHeight}
                customHeight={customHeight}
                imageTabWidth={content.imageTabWidth}
                imageTabHeight={content.imageTabHeight}
                positionTab={content.positionTab}
                btnMaxWidth={content.btnMaxWidth}
                value={content.value}
                c1={content?.c1 ?? null}
                c2={content?.c2 ?? null}
                c3={content?.c3 ?? null}
                c4={content?.c4 ?? null}
                c5={content?.c5 ?? null}
                c6={content?.c6 ?? null}
                c7={content?.c7 ?? null}
                c8={content?.c8 ?? null}
                c9={content?.c9 ?? null}
                c10={content?.c10 ?? null}
                c21={content?.c21 ?? null}
                c22={content?.c22 ?? null}
                c23={content?.c23 ?? null}
                c24={content?.c24 ?? null}
                c25={content?.c25 ?? null}
                c26={content?.c26 ?? null}
                c27={content?.c27 ?? null}
                c28={content?.c28 ?? null}
                c29={content?.c29 ?? null}
                c30={content?.c30 ?? null}
                c31={content?.c31 ?? null}
                c32={content?.c32 ?? null}
                c33={content?.c33 ?? null}
                c34={content?.c34 ?? null}
                c35={content?.c35 ?? null}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
