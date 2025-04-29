import { liveDemo } from "@/utils/assets";
import Image from "next/image";

export default function LiveDemoCard() {
  return (
    <div className="bg-[#FFF2F3] rounded-2xl border-2 border-[#FFD1D6] shadow-[0px_10px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl">
      {/* Image Section */}
      <div className="relative flex flex-row justify-center">
        <Image src={liveDemo} alt={"livedemo"} className="w-full" />
      </div>

      {/* Content Section */}
      <div className="mt-10 px-10">
        <h3 className="font-bold font-poppins text-[24px] md:text-[28px] leading-[36px] md:leading-[40px] text-gray-900">
          Check Out Our Live Demo
        </h3>
        <p className="mt-2 text-gray-500 font-poppins text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
          Access a complete demo account with sample products and features. No
          signup needed.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-14 px-10 pb-10">
        <button className="xl:w-[50%] w-[100%] xl:max-w-[320px] flex items-center justify-center bg-white text-[#F71D3B] font-bold font-poppins text-[16px] leading-[16px] md:text-[24px] md:leading-[36px] px-4 py-4 rounded-full shadow-md">
          Retail SaaS Demo →
        </button>
      </div>
    </div>
  );
}
