"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { paperclipLogoSmall } from "@/utils/assets";
import Image from "next/image";

export default function PaperclipCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-5 left-5 pointer-events-none z-50 text-lg font-semibold text-gray-900"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={paperclipLogoSmall}
        alt={"paperclip"}
        width={60}
        height={20}
      />
    </motion.div>
  );
}
