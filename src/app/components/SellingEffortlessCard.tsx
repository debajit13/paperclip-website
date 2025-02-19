import { tick } from "../../utils/assets";
import Image from "next/image";

export default function SellingEffortlesslyCard() {
  return (
    <div className="bg-[#FFF2F3] rounded-2xl border-2 border-[#FFD1D6] shadow-[0px_10px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl p-10 xl:mr-10 text-center flex flex-col justify-between">
      {/* Icon Section */}
      <div className="flex justify-center mt-10">
        <Image src={tick} alt={"tick"} />
      </div>

      {/* Content Section */}
      <div className="mt-10">
        <h3 className="font-bold font-poppins text-[24px] md:text-[28px] text-left leading-[36px] md:leading-[40px] text-gray-900">
          Start Selling Effortlessly
        </h3>
        <p className="mt-2 text-gray-500 font-poppins text-[16px] md:text-[20px] text-left leading-[24px] md:leading-[28px]">
          Get started in minutes and reach more customers instantly. No
          subscription fees ever.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="xl:w-[60%] flex items-center justify-center bg-white text-red-500 font-bold font-poppins text-[16px] md:text-[24px] leading-[16px] md:leading-[36px] px-4 py-4 rounded-full shadow-md">
            Sign Up Now →
          </button>
        </div>
      </div>
    </div>
  );
}
