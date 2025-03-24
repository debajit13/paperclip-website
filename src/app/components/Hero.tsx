"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  animatedImg1,
  animatedImg2,
  animatedImg3,
  animatedImg4,
  animatedImg5,
  animatedImg6,
  animatedImg7,
  paperClipLogo,
  sparkle,
  navShadow,
  applepay,
  heroIphone,
  downloadNow2,
  available,
  arrowFour,
  qrCode,
} from "@/utils/assets";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const Hero = () => {
  const [hideImages, setHideImages] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);
  const [isBrowser, setIsBrowser] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const letterRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: letterRef,
    offset: ["start end", "end start"], // Triggers animation as it scrolls in and stops at the top
  });

  // Fixed dimensions for the video
  const VIDEO_WIDTH = 339;
  const VIDEO_HEIGHT = 540;
  const BORDER_RADIUS = 55;

  const initialOpacity = 0;
  const initialScale = 0.5;
  const exitOpacity = 0;
  const exitScale = 0.5;
  const opacity = 1;
  const scale = 1;
  const transitionDuration = 0.5;
  const easeValue = "easeInOut";

  // Function to animate each letter individually with fill effect
  const renderAnimatedText = (text: string, delayOffset = 0) => {
    return text.split("").map((char, index) => {
      // Create a dynamic fill effect per letter based on scroll progress
      const progress = useTransform(
        scrollYProgress,
        // Adjust these ranges to control when each letter starts/completes filling
        [0.5 + index * 0.005, 0.6 + index * 0.005],
        [0, 1]
      );

      return (
        <motion.span key={index} className="inline-block relative">
          {/* Background letter (gray) */}
          <span className="text-[#949191] relative">
            {char === " " ? "\u00A0" : char}
          </span>

          {/* Foreground letter (black) - this will appear based on scroll progress */}
          <motion.span
            className="absolute left-0 top-0 text-[#1B1B1B] overflow-hidden"
            style={{
              opacity: progress,
              position: "absolute",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </motion.span>
      );
    });
  };

  useEffect(() => {
    // Set isBrowser to true once component is mounted
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    // Only run this effect in the browser
    if (!isBrowser) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight =
        (heroRef.current as any)?.clientHeight || window.innerHeight;

      // Only hide side images when we start scrolling
      setHideImages(currentScrollY > 50);
      setScrollPosition(currentScrollY);

      // Text opacity calculation
      const scrollThreshold = heroHeight * 0.3;
      const maxScrollForOpacity = heroHeight * 0.7;

      if (currentScrollY > scrollThreshold) {
        const newOpacity = Math.min(
          (currentScrollY - scrollThreshold) /
            (maxScrollForOpacity - scrollThreshold),
          1
        );
        setTextOpacity(1);
      } else {
        setTextOpacity(0);
      }

      // Debug logging to help see phase transitions (can be removed in production)
      /*
      const videoPhase = calculateVideoStyles().phase;
      if (window.lastPhase !== videoPhase) {
        console.log(`Phase changed to: ${videoPhase} at scroll position ${currentScrollY}`);
        window.lastPhase = videoPhase;
      }
      */
    };

    // Intersection observer to handle visibility of hero section
    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHideImages(false);
        }
      });
    };

    // Create intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    // Add scroll event listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call to set positions
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, [isBrowser]); // Add isBrowser to dependencies

  // Updated calculateVideoStyles function for three-phase scrolling
  const calculateVideoStyles = () => {
    if (!isBrowser) {
      // Return default styles for SSR
      return {
        position: "fixed",
        top: "calc(100vh - 205px)",
        left: "50%",
        transform: "translateX(-50%)",
        transitionProgress: 0,
        phase: "initial",
      };
    }

    const heroHeight =
      (heroRef.current as any)?.clientHeight || window.innerHeight;
    const viewportHeight = window.innerHeight;

    // Phase 1: Initial position at bottom until scrollStartThreshold
    const scrollStartThreshold = heroHeight * 0.2;

    // Phase 2: Move up to fixed position at top
    const fixedPositionThreshold = heroHeight * 0.8;

    // Start preparing for transition to absolute
    const prepareAbsoluteThreshold = heroHeight;

    // Phase 3: After this threshold, the video should start scrolling with the page
    const scrollWithPageThreshold = heroHeight + 100; // Some additional scroll after hero section

    // Phase 1: Initial position
    if (scrollPosition < scrollStartThreshold) {
      return {
        position: "fixed",
        top: viewportHeight - 190,
        left: "50%",
        transform: "translateX(-50%)",
        transitionProgress: 0,
        phase: "initial",
        zIndex: 40,
      };
    }

    // Phase 2: Transition to fixed position at top
    if (scrollPosition < fixedPositionThreshold) {
      // Calculate progress within phase 2
      const phase2Progress =
        (scrollPosition - scrollStartThreshold) /
        (fixedPositionThreshold - scrollStartThreshold);

      // Starting position (fixed at bottom of viewport)
      const startTop = viewportHeight - 190;

      // Target position (where the video should end up temporarily fixed)
      const endTop = viewportHeight * 0.15; // 15% from the top of viewport

      // Calculate current position
      const currentTop = startTop - phase2Progress * (startTop - endTop);

      return {
        position: "fixed",
        top: currentTop,
        left: "50%",
        transform: "translateX(-50%)",
        transitionProgress: phase2Progress,
        phase: "moving-up",
        zIndex: 40,
      };
    }

    // Transition phase: Prepare for absolute positioning with a smooth transition
    if (
      scrollPosition >= fixedPositionThreshold &&
      scrollPosition < prepareAbsoluteThreshold
    ) {
      // Calculate the scroll offset needed to match positions when switching to absolute
      const fixedTopValue = viewportHeight * 0.15; // Current fixed position from top

      // Get position relative to document for the current scroll position
      const absoluteTopValue =
        heroHeight -
        (viewportHeight - fixedTopValue) +
        (scrollPosition - fixedPositionThreshold);

      // Calculate the offset we'll need when switching to absolute
      const offset = absoluteTopValue - fixedTopValue;

      return {
        position: "fixed",
        top: viewportHeight * 0.15, // 15% from the top
        left: "50%",
        transform: "translateX(-50%)",
        transitionProgress: 1,
        phase: "fixed-at-top",
        zIndex: 40,
      };
    }

    // Transition phase: Gradually adjust position before switching to absolute
    if (
      scrollPosition >= prepareAbsoluteThreshold &&
      scrollPosition <= scrollWithPageThreshold
    ) {
      // Calculate progress of this transition phase
      const transitionProgress =
        (scrollPosition - prepareAbsoluteThreshold) /
        (scrollWithPageThreshold - prepareAbsoluteThreshold);

      // Get the right absolute position for when we eventually switch
      const targetAbsoluteTop = heroHeight + 10;

      // Current fixed position (relative to viewport)
      const currentFixedTop = viewportHeight * 0.15;

      // Calculate where the element would be if it were absolute positioned
      const currentScrollBasedPosition = scrollPosition + currentFixedTop;

      // Blend between fixed and absolute during transition
      if (transitionProgress > 0.95) {
        // Almost at the end, switch to absolute
        return {
          position: "absolute",
          top: targetAbsoluteTop,
          left: "50%",
          transform: "translateX(-50%)",
          transitionProgress: 1,
          phase: "transitioning-to-absolute",
          zIndex: 30,
        };
      } else {
        // Still in transition, remain fixed but adjust the visual position
        // to match what it will be when absolute
        const adjustedTop = currentFixedTop + transitionProgress * 15; // Small adjustment to create continuity

        return {
          position: "fixed",
          top: adjustedTop,
          left: "50%",
          transform: "translateX(-50%)",
          transitionProgress: 1,
          phase: "transitioning-to-absolute",
          zIndex: 35 - Math.floor(transitionProgress * 5), // Gradually reduce z-index
        };
      }
    }

    // Phase 3: When we've scrolled past the threshold, switch to absolute positioning
    if (scrollPosition > scrollWithPageThreshold) {
      return {
        position: "absolute",
        top: heroHeight + 10, // Position it below the hero section
        left: "50%",
        transform: "translateX(-50%)",
        transitionProgress: 1,
        phase: "scroll-with-page",
        zIndex: 30,
      };
    }

    // Between fixedPositionThreshold and prepareAbsoluteThreshold, stay fixed at the top
    return {
      position: "fixed",
      top: viewportHeight * 0.15, // 15% from the top
      left: "50%",
      transform: "translateX(-50%)",
      transitionProgress: 1,
      phase: "fixed-at-top",
      zIndex: 40,
    };
  };

  const videoStyles = calculateVideoStyles();

  return (
    <>
      <div
        id="hero-section"
        ref={heroRef}
        className="pt-16 md:pt-52 xl:pt-0 relative xl:h-screen xl:w-screen xl:flex xl:flex-row xl:justify-center xl:items-center bg-[url('/bg-dots.svg')] bg-top bg-cover"
      >
        <div className="relative">
          <div className="flex flex-col items-center">
            <Image
              src={paperClipLogo}
              alt="Paperclip Logo"
              width={188.06}
              height={36.06}
            />
          </div>

          <h2 className="mt-4 text-[46px] md:text-[58px] lg:text-[68px] font-poppins font-semibold text-gray-800 leading-[51px] sm:leading-[72px] tracking-[-0.5px] text-center mx-auto">
            The easiest way to sell
            <br />
            <span>
              your stuff{" "}
              <span className="text-red-500 italic font-playfair">
                in seconds
              </span>
            </span>
          </h2>

          <Image
            src={sparkle}
            alt="Paperclip Logo"
            width={87.64}
            height={87.64}
            className="absolute invisible xl:visible right-[-50px] top-0"
          />
        </div>

        {/* Navbar Bg Shadow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden xl:block">
          <Image
            src={navShadow}
            alt="animatedImg-1"
            width={1280}
            height={143}
          />
        </div>

        {/* Side Animated Assets */}
        <AnimatePresence>
          {!hideImages && (
            <>
              <motion.div
                className="absolute top-0 left-0 hidden xl:block"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={animatedImg1}
                  alt="animatedImg-1"
                  width={233}
                  height={250}
                />
              </motion.div>

              <motion.div
                className="absolute my-auto left-0 hidden xl:block"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={animatedImg2}
                  alt="animatedImg-2"
                  width={180}
                  height={387}
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 hidden xl:block"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={animatedImg3}
                  alt="animatedImg-3"
                  width={300}
                  height={94}
                />
              </motion.div>

              <motion.div
                className="absolute bottom-[-20px] right-20 hidden xl:block z-50"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={applepay}
                  alt="animatedImg-4"
                  width={200}
                  height={240}
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 hidden xl:block z-0"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={animatedImg5}
                  alt="animatedImg-5"
                  width={130}
                  height={240}
                />
              </motion.div>

              <motion.div
                className="absolute my-auto right-0 hidden xl:block"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={animatedImg6}
                  alt="animatedImg-6"
                  width={150}
                  height={387}
                />
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 hidden xl:block"
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={animatedImg7}
                  alt="animatedImg-7"
                  width={247}
                  height={250}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Video container with text */}
      <div
        ref={videoRef}
        className="z-40 hidden xl:block"
        style={{
          position: videoStyles.position as any,
          top:
            typeof videoStyles.top === "string"
              ? videoStyles.top
              : `${videoStyles.top}px`,
          left: videoStyles.left,
          transform: videoStyles.transform,
          width: `${VIDEO_WIDTH}px`,
          transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
          zIndex: 50,
        }}
      >
        {/* Text above the video */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-full text-center px-4 pointer-events-none"
          style={{
            opacity:
              videoStyles.phase === "fixed-at-top" ||
              videoStyles.phase === "scroll-with-page"
                ? 1
                : textOpacity,
            transition: "opacity 0.5s ease-out",
            top: "-200px",
            width: "605px",
          }}
        >
          <motion.h1
            ref={letterRef}
            className="text-2xl text-center md:text-[35.3px] font-semibold text-center font-poppins !leading-[48px]"
          >
            {renderAnimatedText(
              "From AI Try-On to AI enhanced product visuals, showcase items in the best possible way and",
              0.5
            )}
          </motion.h1>
        </div>

        {/* Video element */}
        <div style={{ height: `${VIDEO_HEIGHT}px` }}>
          <video
            src="/videos/hero_mobile.mp4"
            autoPlay
            loop
            muted
            className=""
            style={{
              borderRadius: `${BORDER_RADIUS}px`,
            }}
          />
          <div className="absolute left-[-100%] top-[50%] -translate-y-1/2 hidden xl:block">
            <Image
              src={downloadNow2}
              alt="download now"
              width={250}
              height={94}
            />
          </div>
          <div className="absolute left-[-100%] top-[58%] -translate-y-1/2 hidden xl:block">
            <Image src={available} alt="available" width={160} height={94} />
          </div>
          <div className="absolute left-[-40%] top-[64%] -translate-y-1/2 hidden xl:block">
            <Image src={arrowFour} alt="arrow" width={100} height={120} />
          </div>
          <div className="absolute right-[-100%] top-[55%] -translate-y-1/2 hidden xl:block">
            <Image
              src={qrCode}
              alt="qr code"
              width={200}
              height={120}
              className="rotate-12"
            />
          </div>
        </div>
      </div>

      {/* Background gradient that follows the video's position */}
      {/* {isBrowser &&
        (videoStyles.phase === "moving-up" ||
          videoStyles.phase === "fixed-at-top") && (
          <div
            className="hidden xl:block fixed left-0 w-full bg-gradient-to-b from-white via-[#FFF2F3] to-[#FFD1D6] z-10"
            style={{
              top: `${
                videoStyles.phase === "moving-up"
                  ? (heroRef.current as any)?.clientHeight ||
                    (isBrowser ? window.innerHeight : 0)
                  : 0
              }px`,
              height: isBrowser ? window.innerHeight : 0,
              opacity: Math.min(videoStyles.transitionProgress * 2, 1),
              transition: "all 0.3s ease-out",
            }}
          />
        )} */}

      {/* This spacer div ensures there's enough space in the document for proper scrolling */}
      <div
        className="w-full hidden xl:block"
        style={{
          height: `${VIDEO_HEIGHT + 100}px`,
        }}
      ></div>
    </>
  );
};

export default Hero;
