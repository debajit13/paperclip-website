import { liveDemo } from "@/utils/assets";
import Image from "next/image";

export default function LiveDemoCard() {
  return (
    <div className="bg-[#FFF2F3] rounded-2xl border-2 border-[#FFD1D6] shadow-[0px_10px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl p-10">
      {/* Image Section */}
      <div className="relative flex flex-row justify-center">
        <Image src={liveDemo} alt={"livedemo"} />
      </div>

      {/* Content Section */}
      <div className="mt-10">
        <h3 className="font-bold font-poppins text-[28px] leading-[40px] text-gray-900">
          Check Out Our Live Demo
        </h3>
        <p className="mt-2 text-gray-500 font-poppins text-[20px] leading-[28px]">
          Access a complete demo account with sample products and features. No
          signup needed.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-14">
        <button className="w-[40%] flex items-center justify-center bg-white text-red-500 font-bold font-poppins text-[24px] leading-[36px] px-4 py-4 rounded-full shadow-md">
          Retail SaaS Demo →
        </button>
      </div>
    </div>
  );
}
