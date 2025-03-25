"use client";

import Image from "next/image";
import {
  arrowFour,
  arrowTwo,
  available,
  downloadNow,
  downloadNow2,
  mobile,
  qrCode,
} from "@/utils/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import VideoPlayer from "./video/Video1";

export default function HeroTwo() {
  const ref = useRef(null);
  const letterRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: letterRef,
    offset: ["start end", "end start"], // Triggers animation as it scrolls in and stops at the top
  });

  // Function to animate each letter individually with fill effect
  const renderAnimatedText = (text: string, delayOffset = 0) => {
    return text.split("").map((char, index) => {
      // Create a dynamic fill effect per letter based on scroll progress
      const progress = useTransform(
        scrollYProgress,
        // Adjust these ranges to control when each letter starts/completes filling
        [0.1 + index * 0.005, 0.3 + index * 0.005],
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

  return (
    <section className="text-center relative mt-12 mb-24 md:mt-24 md:mb-32 w-screen">
      <div className="flex flex-col justify-center items-center">
        {/* Animated Heading */}
        <motion.h1
          ref={letterRef}
          className="text-2xl md:text-4xl font-semibold text-center font-poppins !leading-[48px] max-w-xl hidden md:block"
        >
          {renderAnimatedText(
            "From ai Try-On to ai enhanced product visuals, showcase items in the best possible way and",
            0.5
          )}
        </motion.h1>

        <div className="relative md:my-28">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <VideoPlayer
              width={200}
              height={400}
              customStyle="hidden md:block"
            />
          </motion.div>

          <VideoPlayer width={172} height={374} customStyle="block md:hidden" />

          {/* Download Now (Appears after mobile animation) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="absolute left-[-40%] top-0 -translate-y-1/2 hidden xl:block"
          >
            <Image
              src={downloadNow2}
              alt="download now"
              width={250}
              height={94}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="absolute left-[-38%] top-16 -translate-y-1/2 hidden xl:block"
          >
            <Image src={available} alt="available" width={160} height={94} />
          </motion.div>

          {/* Arrow Two (Appears after Download Now animation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="absolute top-10 left-[-5%] hidden xl:block"
          >
            <Image src={arrowFour} alt="arrow" width={120} height={120} />
          </motion.div>

          {/* QR Code (Appears after Arrow Two animation) */}
          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 0.5 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
            className="absolute top-0 right-[-20%] hidden xl:block"
          >
            <Image
              src={qrCode}
              alt="qr code"
              width={200}
              height={120}
              className="rotate-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
