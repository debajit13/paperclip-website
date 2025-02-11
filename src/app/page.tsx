import Image from "next/image";
import paperClipLogo from "../../public/paperclip-logo-2.png";
import Navbar from "./components/Navbar";
import qrCode from "../../public/qr.png";
import arrow from "../../public/arrow.png";
import downloadNow from "../../public/downloadNow.png";

export default function Home() {
  return (
    <div className="relative bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      {/* Logo and Branding */}
      <div>
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={paperClipLogo}
            alt="Paperclip Logo"
            width={188.06}
            height={36.06}
          />
        </div>

        {/* Tagline */}
        <h2 className="mt-4 text-[58px] md:text-[68px] font-poppins font-bold text-gray-800 leading-[72px] tracking-[-0.5px] text-center">
          The easiest way to sell your stuff{" "}
          <span className="text-red-500 italic">in seconds</span>
        </h2>
      </div>

      {/* QR Code */}
      <div className="relative flex flex-row items-center mt-20 ml-40">
        <div className="p-2 bg-[#FFF2F3] rounded-lg shadow-lg">
          <Image src={qrCode} alt="QR Code" width={120} height={120} />
        </div>

        {/* Floating Text with Arrow */}
        <div className="flex flex-row items-center transform rotate-6 -mt-14 ml-4">
          <Image src={arrow} alt="QR Code" width={120} height={120} />
          <div className="text-gray-900 text-xs font-bold">
            <Image src={downloadNow} alt="QR Code" width={120} height={120} />
          </div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-[40px]">
        <Navbar />
      </div>
    </div>
  );
}
