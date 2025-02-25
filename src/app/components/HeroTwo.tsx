"use client";

import Image from "next/image";
import { arrowTwo, downloadNow, mobile, qrCode } from "@/utils/assets";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HeroTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="text-center relative bg-gradient-to-b from-white via-[#FFF2F3] to-[#FFD1D6] mt-8 md:mt-20 w-screen">
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-center font-poppins text-gray-900 leading-[48px] max-w-xl hidden md:block">
          Point, shoot, and watch our AI create beautiful
          <span className="text-gray-400">
            {" "}
            listings in seconds, no typing needed
          </span>
        </h1>
        <div className="relative mt-10 md:mt-32 relative ml-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={mobile}
              alt="AI-powered phone"
              width={663}
              height={829}
              className="hidden md:block mx-auto"
            />
          </motion.div>

          <Image
            src={mobile}
            alt="AI-powered phone"
            width={500}
            height={374}
            className="block md:hidden mx-auto"
          />

          {/* Download Now (Appears after mobile animation) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="absolute left-[-30%] top-0 -translate-y-1/2 hidden xl:block"
          >
            <Image
              src={downloadNow}
              alt="download now"
              width={160}
              height={94}
            />
          </motion.div>

          {/* Arrow Two (Appears after Download Now animation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="absolute top-8 left-0 hidden xl:block"
          >
            <Image src={arrowTwo} alt="arrow" width={120} height={120} />
          </motion.div>

          {/* QR Code (Appears after Arrow Two animation) */}
          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 0.5 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
            className="absolute top-0 right-[-20%] rotate-12 hidden xl:block"
          >
            <Image src={qrCode} alt="qr code" width={160} height={120} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
