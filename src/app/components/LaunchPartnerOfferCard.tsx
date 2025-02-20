import { mobLeft, mobRight } from "@/utils/assets";
import Image from "next/image";

export default function LaunchPartnerOffer() {
  return (
    <div className="relative flex items-center justify-center rounded-[32px] shadow-lg w-[80%] mx-auto">
      <div className="w-full bg-white relative px-6 py-10 bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] rounded-[32px]">
        <p className="text-red-500 text-center font-poppins font-semibold text-[16px] tracking-[2px] mb-3">
          Launch Partner Offer
        </p>
        <h2 className="font-poppins font-semibold text-[22px] text-gray-900 text-center">
          Join as one of our first 50 stores and receive a Free Tablet—fully
          configured with our platform—plus dedicated training and support to
          digitalize your inventory seamlessly.
        </h2>
        <div className="mt-6 mb-10 relative z-50">
          <button className="text-red-500 bg-white font-poppins font-semibold text-[16px] w-full rounded-full px-3 py-3 shadow-lg">
            Become a Partner! →
          </button>
        </div>
        <div className="absolute bottom-14 left-2 -rotate-12 w-20 h-20 bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={mobLeft}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-3 right-2 rotate-12 w-20 h-20 bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={mobRight}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
