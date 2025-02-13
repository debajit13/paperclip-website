import React from "react";
import Image from "next/image";
import {
  qrCode,
  arrow,
  downloadNow,
  animatedImg3,
  animatedImg4,
  animatedImg5,
} from "@/utils/assets";

const QRSection = () => {
  return (
    <div className="relative flex flex-row items-center justify-center mt-20 ml-40 w-screen">
      <Image src={qrCode} alt="QR Code" width={152} height={152} />

      {/* Floating Text with Arrow */}
      <div className="flex flex-row items-center transform rotate-6 -mt-14 ml-4">
        <Image src={arrow} alt="arrow" width={120} height={120} />
        <div className="text-gray-900 text-xs font-bold">
          <Image
            src={downloadNow}
            alt="download now"
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="absolute left-[-80px] top-[120px]">
        <Image src={animatedImg3} alt="animatedImg-3" width={220} height={94} />
      </div>

      <div className="absolute top-[130px] right-56">
        <Image
          src={animatedImg4}
          alt="animatedImg-4"
          width={200}
          height={240}
        />
      </div>

      <div className="absolute right-20">
        <Image
          src={animatedImg5}
          alt="animatedImg-5"
          width={100}
          height={240}
        />
      </div>
    </div>
  );
};

export default QRSection;
