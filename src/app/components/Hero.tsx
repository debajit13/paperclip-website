"use client";

import React, { useEffect, useState } from "react";
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
} from "@/utils/assets";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const [hideImages, setHideImages] = useState(false);
  const initialOpacity = 0;
  const initialScale = 0.5;
  const exitOpacity = 0;
  const exitScale = 0.5;
  const opacity = 1;
  const scale = 1;
  const transitionDuration = 0.5;
  const easeValue = "easeInOut";

  useEffect(() => {
    const handleScroll = () => {
      setHideImages(true);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHideImages(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 1.0,
    });

    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <div
      id="hero-section"
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

        {/* Tagline */}
        <h2 className="mt-4 text-[46px] md:text-[58px] lg:text-[68px] font-poppins font-semibold text-gray-800 leading-[51px] sm:leading-[72px] tracking-[-0.5px] text-center max-w-[1280px] mx-auto">
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
        <Image src={navShadow} alt="animatedImg-1" width={1280} height={143} />
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
              className="absolute bottom-0 mx-auto hidden xl:block"
              initial={{ opacity: initialOpacity, scale: initialScale }}
              animate={{ opacity: opacity, scale: scale }}
              exit={{ opacity: exitOpacity, scale: exitScale }}
              transition={{ duration: 0.2, ease: easeValue }}
            >
              <Image src={heroIphone} alt="iPhone" width={663} height={829} />
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
  );
};

export default Hero;
