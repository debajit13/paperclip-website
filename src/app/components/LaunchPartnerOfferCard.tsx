import {
  L1,
  L2,
  mobLeft,
  mobRight,
  R1,
  R2,
  tabLeft,
  tabRight,
} from "@/utils/assets";
import Image from "next/image";

export default function LaunchPartnerOffer() {
  return (
    <div className="relative flex items-center justify-center rounded-[32px] shadow-lg w-full">
      <div className="w-full bg-white relative px-6 py-10 bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] rounded-[32px]">
        <p className="text-[#F71D3B] text-center font-poppins font-bold text-[16px] tracking-[2px] mb-3">
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
          <button className="text-[#F71D3B] max-w-[330px] bg-white font-poppins font-bold text-[16px] rounded-full px-[36px] py-[16px] shadow-lg">
            Become a Partner! →
          </button>
        </div>

        {/* Mobile/Tab */}
        <div className="absolute bottom-0 left-0 rounded-[32px] overflow-hidden block xl:hidden">
          <Image src={tabLeft} alt="Tablet Left" width={115} height={136} />
        </div>
        <div className="absolute bottom-0 right-0 rounded-[32px] overflow-hidden block xl:hidden">
          <Image src={tabRight} alt="Tablet Right" width={115} height={136} />
        </div>

        {/* Desktop */}
        <div className="absolute bottom-0 left-0 rounded-[32px] overflow-hidden hidden xl:block">
          <Image src={tabLeft} alt="Tablet Left" width={315} height={336} />
        </div>

        <div className="absolute bottom-0 right-0 rounded-[32px] overflow-hidden hidden xl:block">
          <Image src={tabRight} alt="Tablet Right" width={315} height={336} />
        </div>
      </div>
    </div>
  );
}
