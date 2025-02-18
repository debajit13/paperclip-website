"use client";

import Image from "next/image";
import { carouselContentProps } from "./Carousel";

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
            <button className="block md:hidden w-[100%] my-4 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] text-[14px] md:text-[24px] leading-[16px] md:leading-[36px]">
              {btnTitle}
            </button>
          )}
        </div>

        {btnTitle && (
          <button className="hidden md:block md:mt-4 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] text-[16px] xl:text-[24px] leading-[16px] xl:leading-[36px]">
            {btnTitle}
          </button>
        )}
      </div>

      {/* Desktop */}
      <div
        className={`hidden xl:block absolute right-0 bottom-0 ${
          position && `bottom-${position.bottom}`
        } ${position && `right-${position.right}`} ${
          position && `top-${position.top}`
        }`}
      >
        <Image
          src={image}
          alt="mobileimage"
          width={imageWidth}
          height={imageHeight}
        />
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
