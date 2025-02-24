import React from "react";
import Image from "next/image";
import {
  mobileTwo,
  mobileTwoOverlap,
  arrowTwo,
  sparkleTwo,
} from "@/utils/assets";
import { mobileThree, cart, arrowThree, wow } from "@/utils/assets";

const HomeCardsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-24 xl:mt-10 mx-auto w-full">
      {/* Large Card - Full Width */}
      <div className="w-full relative md:col-span-2 md:h-[400px] xl:h-[584px] bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] pt-6 px-6 md:pb-6 rounded-[32px] shadow-lg flex flex-col md:flex-row md:items-center text-left">
        <div className="h-[80%] md:w-[50%] xl:w-[40%] flex flex-col justify-between md:ml-6">
          <div className="w-full">
            <h3 className="text-red-500 font-[600] text-[16px] xl:text-[20px] leading-[24px] xl:leading-[28px] tracking-[2px] font-poppins">
              Smart Recommendations
            </h3>
            <h4 className="text-[32px] font-[600] xl:text-[40px] leading-[40px] xl:leading-[56px] mt-6 font-poppins">
              Items that ‘Get’ You.
            </h4>
            <p className="text-gray-600 font-[500] text-[16px] xl:text-[24px] leading-[24px] xl:leading-[36px] mt-4 font-poppins">
              Our AI sifts through thousands of listings to bring you only the
              stuff that suits your taste. No more endless scrolling.
            </p>
          </div>

          <button className="mt-4 bg-white text-red-500 py-2 px-5 xl:px-6 rounded-[100px] font-[600] text-[16px] xl:text-[24px] leading-[16px] xl:leading-[36px]">
            Browse Personalized Finds →
          </button>
        </div>

        {/* Mobile */}
        <div className="block md:hidden mt-10 mx-auto">
          <Image src={mobileTwo} alt="mobileimage" width={300} height={540} />
        </div>

        {/* Ipad */}
        <div className="hidden md:block xl:hidden absolute right-5 bottom-0">
          <Image src={mobileTwo} alt="mobileimage" width={350} height={540} />
        </div>

        <div className="hidden md:block xl:hidden absolute right-5 bottom-0">
          <Image
            src={mobileTwoOverlap}
            alt="mobileimageoverlap"
            width={200}
            height={354}
          />
        </div>

        {/* Desktop */}
        <div className="hidden xl:block absolute right-5 bottom-0">
          <Image src={mobileTwo} alt="mobileimage" width={585} height={540} />
        </div>
        <div className="hidden xl:block absolute right-5 bottom-0">
          <Image
            src={mobileTwoOverlap}
            alt="mobileimageoverlap"
            width={365}
            height={354}
          />
        </div>
        <div className="hidden xl:block absolute right-10 top-10">
          <Image src={sparkleTwo} alt="sparkle" width={71} height={70} />
        </div>
        <div className="hidden xl:block absolute top-[40%] left-[50%]">
          <Image src={arrowTwo} alt="arrow" width={117.04} height={117.04} />
        </div>
      </div>

      {/* Two Equal Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:flex-row md:col-span-2">
        {/* Left Card */}
        <div className="relative bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] pt-6 px-6 md:pt-10 xl:pt-14 md:px-14 md:pb-10 xl:pb-14 rounded-[32px] shadow-lg flex flex-col flex-start text-left">
          <h3 className="text-red-500 font-[600] text-[16px] xl:text-[20px] leading-[24px] xl:leading-[28px] tracking-[2px] font-poppins">
            On-Model Previews
          </h3>
          <h4 className="font-[600] text-[32px] xl:text-[40px] leading-[40px] xl:leading-[56px] mt-10 text-wrap font-poppins">
            Get a Sneak Peek—No Surprises.
          </h4>
          <p className="text-gray-600 font-[500] text-[16px] xl:text-[24px] leading-[24px] xl:leading-[36px] mt-4 font-poppins">
            Wonder if that hat fits your vibe? Or if that coat matches your
            style? Our AI helps you see the fit before you buy
          </p>
          <button className="my-4 md:mt-10 xl:mt-20 w-full md:w-[60%] bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] font-poppins text-[16px] xl:text-[24px] leading-[16px] xl:leading-[36px] w-[50%]">
            See it IRL →
          </button>

          {/* Mobile */}
          <div className="block md:hidden z-1000 mt-10 mx-auto">
            <Image
              src={mobileThree}
              alt="mobileimage"
              width={200}
              height={666}
            />
          </div>

          {/* Desktop */}
          <div className="hidden xl:block absolute md:left-40 bottom-0 z-1000">
            <Image
              src={mobileThree}
              alt="mobileimage"
              width={300}
              height={666}
            />
          </div>
          <div className="hidden xl:block absolute right-0 top-[40%] z-0">
            <Image src={cart} alt="cart" width={186} height={307} />
          </div>
          <div className="hidden xl:block absolute top-[50%] left-[50%]">
            <Image src={arrowThree} alt="cart" width={97} height={97} />
          </div>
          <div className="hidden xl:block absolute top-[55%] left-0">
            <Image src={sparkleTwo} alt="sparkle" width={47} height={47} />
          </div>
          <div className="hidden xl:block absolute top-[58%] left-10">
            <Image src={wow} alt="wow" width={141} height={40} />
          </div>

          {/* tab */}
          <div className="hidden md:block xl:hidden absolute left-1/2 transform -translate-x-1/2 bottom-0 z-1000">
            <Image
              src={mobileThree}
              alt="mobileimage"
              width={200}
              height={500}
            />
          </div>
        </div>

        {/* Right Column with Two Small Stacked Cards */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] pt-6 px-6 md:pt-10 xl:pt-14 md:px-14 md:pb-10 xl:pb-14 rounded-[32px] shadow-lg flex flex-col flex-start text-left">
            <div>
              <h3 className="text-red-500 font-[600] text-[16px] xl:text-[20px] leading-[24px] xl:leading-[28px] tracking-[2px] font-poppins">
                Fast, Transparent Shipping
              </h3>
              <h4 className="font-[600] text-[32px] xl:text-[40px] leading-[40px] xl:leading-[56px] mt-10 text-wrap font-poppins">
                Purchase, Track, Relax.
              </h4>
              <p className="text-gray-600 font-[500] leading-[16px] xl:text-[24px] leading-[24px] xl:leading-[36px] mt-4 font-poppins">
                No more nerve-racking waiting games or shady updates—your new
                treasure is on its way, complete with real-time tracking
              </p>
            </div>

            <button className="my-10 xl:mt-20 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] font-poppins text-[16px] xl:text-[24px] leading-[16px] xl:leading-[36px] md:w-[80%] xl:w-[50%]">
              Get It Shipped →
            </button>
          </div>

          <div className="bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] pt-6 px-6 md:pt-10 xl:pt-14 md:px-14 md:pb-10 xl:pb-14 rounded-[32px] shadow-lg flex flex-col flex-start text-left">
            <div>
              <h3 className="text-red-500 font-[600] text-[16px] xl:text-[20px] leading-[24px] xl:leading-[28px] tracking-[2px] font-poppins">
                Fast, Transparent Shipping
              </h3>
              <h4 className="font-[600] text-[32px] xl:text-[40px] leading-[40px] xl:leading-[56px] mt-10 text-wrap font-poppins">
                Purchase, Track, Relax.
              </h4>
              <p className="text-gray-600 font-[500] leading-[16px] xl:text-[24px] leading-[24px] xl:leading-[36px] mt-4 font-poppins">
                No more nerve-racking waiting games or shady updates—your new
                treasure is on its way, complete with real-time tracking
              </p>
            </div>

            <button className="my-10 xl:mt-20 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] font-poppins text-[16px] xl:text-[24px] leading-[16px] xl:leading-[36px] md:w-[80%] xl:w-[50%]">
              Get It Shipped →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardsGrid;
