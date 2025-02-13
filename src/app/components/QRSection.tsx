import React from "react";
import Image from "next/image";
import { qrCode, arrow, downloadNow } from "@/utils/assets";

const QRSection = () => {
  return (
    <div className="relative flex flex-row items-center mt-20 ml-40">
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
    </div>
  );
};

export default QRSection;
