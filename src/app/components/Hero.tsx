import React from "react";
import Image from "next/image";
import { paperClipLogo, sparkle } from "@/utils/assets";

const Hero = () => {
  return (
    <div className="mt-44 relative">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={paperClipLogo}
          alt="Paperclip Logo"
          width={188.06}
          height={36.06}
        />
      </div>

      {/* Tagline */}
      <h2 className="mt-4 text-[58px] lg:text-[68px] font-poppins font-semibold text-gray-800 leading-[72px] tracking-[-0.5px] text-center">
        The easiest way to sell
        <br />
        <span>
          your stuff <span className="text-red-500 italic">in seconds</span>
        </span>
      </h2>
      <Image
        src={sparkle}
        alt="Paperclip Logo"
        width={87.64}
        height={87.64}
        className="absolute invisible md:visible right-[-50px] top-[-10px]"
      />
    </div>
  );
};

export default Hero;
