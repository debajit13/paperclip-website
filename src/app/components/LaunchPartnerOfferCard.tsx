import { L1, L2, mobLeft, mobRight, R1, R2 } from "@/utils/assets";
import Image from "next/image";

export default function LaunchPartnerOffer() {
  return (
    <div className="relative flex items-center justify-center rounded-[32px] shadow-lg w-full">
      <div className="w-full bg-white relative px-6 py-10 bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] rounded-[32px]">
        <p className="text-red-500 text-center font-poppins font-semibold text-[16px] tracking-[2px] mb-3">
          Launch Partner Offer
        </p>
        {/* Desktop */}
        <h2 className="font-poppins font-semibold text-[22px] text-gray-900 text-center hidden xl:block">
          Join as one of our first 50 stores and receive a Free Tablet—fully
          <br /> configured with our platform—plus dedicated training and
          support
          <br /> to digitalize your inventory seamlessly.
        </h2>

        {/* Mobile */}
        <h2 className="font-poppins font-semibold text-[22px] text-gray-900 text-center block xl:hidden">
          Join as one of our first 50 stores and receive a Free Tablet—fully
          configured with our platform—plus dedicated training and support to
          digitalize your inventory seamlessly.
        </h2>
        <div className="mt-10 mb-10 relative z-50 flex flex-row justify-center">
          <button className="text-red-500 max-w-[330px] bg-white font-poppins font-bold text-[16px] rounded-full px-[36px] py-[16px] shadow-lg">
            Become a Partner! →
          </button>
        </div>

        {/* Mobile/Tab */}
        <div className="absolute bottom-14 left-2 -rotate-12 w-20 h-20 bg-white rounded-lg shadow-lg overflow-hidden block xl:hidden">
          <Image
            src={L1}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-3 right-2 rotate-12 w-20 h-20 bg-white rounded-lg shadow-lg overflow-hidden block xl:hidden">
          <Image
            src={L2}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>

        {/* Desktop */}
        <div className="absolute top-32 left-4 -rotate-12 bg-white w-[150px] h-[170px] rounded-lg shadow-lg overflow-hidden hidden xl:block">
          <Image
            src={L1}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-3 left-32 rotate-12 w-[150px] h-[170px] bg-white rounded-lg shadow-lg overflow-hidden hidden xl:block">
          <Image
            src={L2}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-32 right-4 rotate-12 bg-white w-[150px] h-[170px] rounded-lg shadow-lg overflow-hidden hidden xl:block">
          <Image
            src={R1}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-3 right-32 -rotate-12 w-[150px] h-[170px] bg-white rounded-lg shadow-lg overflow-hidden hidden xl:block">
          <Image
            src={R2}
            alt="Tablet"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
