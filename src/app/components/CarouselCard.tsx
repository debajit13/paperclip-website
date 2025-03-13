"use client";

import Image from "next/image";
import { carouselContentProps } from "./Carousel";
import {
  arrow,
  arrowFive,
  arrowFour,
  arrowSix,
  arrowThree,
  arrowTwo,
  c11,
  c111,
  c112,
  c113,
  c114,
  c116,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  cloudOne,
  cloudTwo,
  literallyZero,
  sparkle,
  sparkleFour,
  sparkleThree,
  sparkleTwo,
} from "@/utils/assets";

export default function CarouselCard({
  title,
  subTitle,
  description,
  btnTitle,
  image,
  imageWidth = 585,
  imageHeight = 540,
  position,
  imageMobileHeight,
  imageMobileWidth,
  imageTabHeight,
  imageTabWidth,
  positionTab,
  customHeight,
  btnMaxWidth,
  value,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
  c31,
  c32,
  c33,
  c34,
  c35,
}: carouselContentProps) {
  return (
    <div
      className={`w-full relative md:col-span-2 ${
        customHeight ? customHeight : "h-[584px] md:h-[400px] xl:h-[584px]"
      } bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] pt-6 md:p-5 xl:p-10 px-10 shadow-lg rounded-[32px] flex flex-col md:flex-row justify-between items-center text-left`}
    >
      <div className="h-[80%] w-full md:w-[50%] xl:w-[40%] flex flex-col justify-between md:ml-10">
        <div className="w-full">
          {title && (
            <h3 className="text-red-500 font-[600] text-[16px] xl:text-[20px] leading-[28px] tracking-[2px] font-poppins">
              {title}
            </h3>
          )}

          {subTitle && (
            <h4 className="text-[32px] font-[600] xl:text-[40px] leading-[40px] xl:leading-[56px] mt-6 font-poppins">
              {subTitle}
            </h4>
          )}

          {description && (
            <p className="text-gray-600 font-[500] text-[16px] xl:text-[24px] leading-[24px] xl:leading-[36px] mt-4 font-poppins">
              {description}
            </p>
          )}

          {btnTitle && (
            <button className="block md:hidden w-[100%] my-4 bg-white text-red-500 py-[12px] xl:py-2 px-6 rounded-[100px] font-[600] text-[14px] md:text-[24px] leading-[16px] md:leading-[36px]">
              {btnTitle}
            </button>
          )}
        </div>

        {btnTitle && (
          <button
            className={`${btnMaxWidth} hidden md:block md:mt-4 bg-white text-red-500 py-2 px-[36px] rounded-[100px] font-[600] text-[16px] xl:text-[24px] leading-[16px] xl:leading-[36px]`}
          >
            {btnTitle}
          </button>
        )}
      </div>

      {/* Desktop */}
      <div
        className={`hidden xl:block absolute ${
          position && `bottom-${position.bottom}`
        } ${position && `right-${position.right}`} ${
          position && `top-${position.top}`
        }`}
      >
        <div className="relative z-10">
          <Image
            src={image}
            alt="mobileimage"
            width={imageWidth}
            height={imageHeight}
          />
        </div>

        {c1 && (
          <div className={`hidden xl:block absolute bottom-10 z-0`}>
            <Image src={c11} alt="mobileimage" width={234} height={134} />
          </div>
        )}

        {c2 && (
          <div className={`hidden xl:block absolute top-20 z-0`}>
            <Image src={c12} alt="mobileimage" width={234} height={134} />
          </div>
        )}

        {c3 && (
          <div className={`hidden xl:block absolute top-20 right-5 z-0`}>
            <Image
              src={c13}
              alt="mobileimage"
              width={234}
              height={134}
              className="z-0"
            />
          </div>
        )}

        {c4 && (
          <div
            className={`hidden xl:block absolute top-[-20px] right-20 z-0 transform -rotate-[17.75deg]`}
          >
            <Image src={sparkleTwo} alt="mobileimage" width={70} height={17} />
          </div>
        )}

        {c5 && (
          <div
            className={`hidden xl:block absolute top-14 left-[-150px] z-0 -rotate-[60deg]`}
          >
            <Image src={arrowFour} alt="mobileimage" width={75} height={75} />
          </div>
        )}

        {c6 && (
          <div className={`hidden xl:block absolute top-2 left-[-100px]`}>
            <Image
              src={literallyZero}
              alt="mobileimage"
              width={153}
              height={32}
            />
          </div>
        )}

        {c7 && (
          <div className={`hidden xl:block absolute top-5 right-[-40px]`}>
            <Image
              src={sparkleFour}
              alt="mobileimage"
              width={146}
              height={32}
            />
          </div>
        )}

        {c8 && (
          <div
            className={`hidden xl:block absolute bottom-10 left-[-200px] z-50`}
          >
            <Image src={c14} alt="mobileimage" width={263} height={249} />
          </div>
        )}

        {c9 && (
          <div className={`hidden xl:block absolute top-0 left-[-150px] z-0`}>
            <Image src={c15} alt="mobileimage" width={169} height={133} />
          </div>
        )}

        {c10 && (
          <div className={`hidden xl:block absolute top-20 right-[-150px] z-0`}>
            <Image src={c16} alt="mobileimage" width={234} height={259} />
          </div>
        )}

        {c21 && (
          <div
            className={`hidden xl:block absolute top-[-20px] right-[-90px] z-0 transform -rotate-[17.75deg]`}
          >
            <Image src={sparkleTwo} alt="mobileimage" width={65} height={64} />
          </div>
        )}

        {c22 && (
          <div
            className={`hidden xl:block absolute top-[-40px] left-[-20px] z-0 `}
          >
            <Image src={c17} alt="mobileimage" width={332} height={88} />
          </div>
        )}

        {c23 && (
          <div
            className={`hidden xl:block absolute bottom-[-40px] right-0 z-0 `}
          >
            <Image src={c18} alt="mobileimage" width={259} height={168} />
          </div>
        )}

        {c24 && (
          <div
            className={`hidden xl:block absolute bottom-40 left-[-40px] z-0`}
          >
            <Image src={arrowFive} alt="mobileimage" width={126} height={125} />
          </div>
        )}

        {c25 && (
          <div className={`hidden xl:block absolute top-[-20px] right-10 z-0`}>
            <Image
              src={sparkleThree}
              alt="mobileimage"
              width={71}
              height={73}
            />
          </div>
        )}

        {c26 && (
          <div
            className={`hidden xl:block absolute bottom-10 left-[-200px] z-0`}
          >
            <Image src={cloudOne} alt="mobileimage" width={191} height={192} />
          </div>
        )}

        {c27 && (
          <div
            className={`hidden xl:block absolute top-[-40px] right-[-150px] z-0`}
          >
            <Image src={cloudTwo} alt="mobileimage" width={159} height={160} />
          </div>
        )}

        {c28 && (
          <div className={`hidden xl:block absolute top-5 left-[-250px] z-0`}>
            <Image src={arrowSix} alt="mobileimage" width={138} height={138} />
          </div>
        )}

        {c29 && (
          <div
            className={`hidden xl:block absolute bottom-4 left-[-150px] z-50`}
          >
            <Image src={c111} alt="mobileimage" width={320} height={236} />
          </div>
        )}

        {c30 && (
          <div
            className={`hidden xl:block absolute top-[-100px] right-[-80px] z-50`}
          >
            <Image src={c112} alt="mobileimage" width={320} height={350} />
          </div>
        )}

        {c32 && (
          <div
            className={`hidden xl:block absolute bottom-0 left-[-100px] z-50`}
          >
            <Image src={c113} alt="mobileimage" width={385} height={350} />
          </div>
        )}

        {c33 && (
          <div className={`hidden xl:block absolute top-[-20px] z-50`}>
            <Image src={c114} alt="mobileimage" width={406} height={108} />
          </div>
        )}

        {c34 && (
          <div className={`hidden xl:block absolute top-20 right-0 z-50`}>
            <Image src={c116} alt="mobileimage" width={294} height={240} />
          </div>
        )}
      </div>

      {/* Ipad */}
      <div
        className={`hidden md:block xl:hidden absolute ${
          positionTab && `bottom-${positionTab.bottom}`
        } ${positionTab && `right-${positionTab.right}`} ${
          positionTab && `top-${positionTab.top}`
        }`}
      >
        <Image
          src={image}
          alt="mobileimage"
          width={imageTabWidth}
          height={imageTabHeight}
        />
      </div>

      {/* Mobile */}
      <div className={`block md:hidden`}>
        <Image
          src={image}
          alt="mobileimage"
          width={imageMobileWidth}
          height={imageMobileHeight}
        />
      </div>
    </div>
  );
}
