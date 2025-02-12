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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-screen mx-auto">
      {/* Large Card - Full Width */}
      <div className="relative md:col-span-2 h-[584px] bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] p-6 rounded-[32px] shadow-lg flex flex-col md:flex-row items-center text-left">
        <div className="h-[80%] w-[40%] flex flex-col justify-between ml-6">
          <div>
            <h3 className="text-red-500 font-[600] text-[20px] leading-[28px] tracking-[2px] font-poppins">
              Smart Recommendations
            </h3>
            <h4 className="text-2xl font-[600] text-[40px] leading-[56px] mt-6 font-poppins">
              Items that ‘Get’ You.
            </h4>
            <p className="text-gray-600 font-[500] text-[24px] leading-[36px] mt-4 font-poppins">
              Our AI sifts through thousands of listings to bring you only the
              stuff that suits your taste. No more endless scrolling.
            </p>
          </div>

          <button className="mt-4 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] text-[24px] leading-[36px]">
            Browse Personalized Finds →
          </button>
        </div>
        <div className="hidden md:block absolute right-5 bottom-0">
          <Image src={mobileTwo} alt="mobileimage" width={585} height={540} />
        </div>
        <div className="hidden md:block absolute right-5 bottom-0">
          <Image
            src={mobileTwoOverlap}
            alt="mobileimageoverlap"
            width={365}
            height={354}
          />
        </div>
        <div className="hidden md:block absolute right-10 top-10">
          <Image src={sparkleTwo} alt="sparkle" width={71} height={70} />
        </div>
        <div className="hidden md:block absolute top-[40%] left-[50%]">
          <Image src={arrowTwo} alt="arrow" width={117.04} height={117.04} />
        </div>
      </div>

      {/* Two Equal Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:flex-row md:col-span-2">
        {/* Left Card */}
        <div className="relative h-[1016px] bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] p-14 rounded-[32px] shadow-lg flex flex-col flex-start text-left">
          <h3 className="text-red-500 font-[600] text-[20px] leading-[28px] tracking-[2px] font-poppins">
            On-Model Previews
          </h3>
          <h4 className="text-2xl font-[600] text-[40px] leading-[56px] mt-10 text-wrap font-poppins">
            Get a Sneak Peek—No <br /> Surprises.
          </h4>
          <p className="text-gray-600 font-[500] text-[24px] leading-[36px] mt-4 font-poppins">
            Wonder if that hat fits your vibe? Or if that coat matches your
            style? Our AI helps you see the fit before you buy
          </p>
          <button className="mt-20 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] font-poppins text-[24px] leading-[36px] w-[50%]">
            See it IRL →
          </button>
          <div className="hidden md:block absolute left-40 bottom-0 z-1000">
            <Image
              src={mobileThree}
              alt="mobileimage"
              width={300}
              height={666}
            />
          </div>
          <div className="hidden md:block absolute right-0 top-[40%] z-0">
            <Image src={cart} alt="cart" width={186} height={307} />
          </div>
          <div className="hidden md:block absolute top-[50%] left-[50%]">
            <Image src={arrowThree} alt="cart" width={97} height={97} />
          </div>
          <div className="hidden md:block absolute top-[55%] left-0">
            <Image src={sparkleTwo} alt="sparkle" width={47} height={47} />
          </div>
          <div className="hidden md:block absolute top-[58%] left-10">
            <Image src={wow} alt="wow" width={141} height={40} />
          </div>
        </div>

        {/* Right Column with Two Small Stacked Cards */}
        <div className="flex flex-col gap-6 flex-1 max-h-[1016px]">
          <div className="h-[508px] bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] p-14 rounded-[32px] shadow-lg flex flex-col flex-start text-left">
            <div>
              <h3 className="text-red-500 font-[600] text-[20px] leading-[28px] tracking-[2px] font-poppins">
                Fast, Transparent Shipping
              </h3>
              <h4 className="font-[600] text-[40px] leading-[56px] mt-10 text-wrap font-poppins">
                Purchase, Track, Relax.
              </h4>
              <p className="text-gray-600 font-[500] text-[24px] leading-[36px] mt-4 font-poppins">
                No more nerve-racking waiting games or shady updates—your new
                treasure is on its way, complete with real-time tracking
              </p>
            </div>

            <button className="mt-20 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] font-poppins text-[24px] leading-[36px] w-[50%]">
              Get It Shipped →
            </button>
          </div>

          <div className="h-[508px] bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] p-14 rounded-[32px] shadow-lg flex flex-col flex-start text-left">
            <div>
              <h3 className="text-red-500 font-[600] text-[20px] leading-[28px] tracking-[2px] font-poppins">
                Buyer Premium & Security
              </h3>
              <h4 className="font-[600] text-[40px] leading-[56px] mt-10 text-wrap font-poppins">
                Spend with Ease!
              </h4>
              <p className="text-gray-600 font-[500] text-[24px] leading-[36px] mt-4 font-poppins">
                Don’t stress about fakes or duds—our AI safety net ensures you
                always get what you paid for, or your money back.
              </p>
            </div>

            <button className="mt-20 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] font-poppins text-[24px] leading-[36px] w-[50%]">
              Shop Securely →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardsGrid;
