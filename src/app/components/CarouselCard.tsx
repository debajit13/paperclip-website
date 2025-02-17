"use client";

import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  btnTitle: string;
  image: any;
  imageWidth?: number;
  imageHeight?: number;
  imageMobileWidth?: number;
  imageMobileHeight?: number;
  position?: any;
}

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
}: Props) {
  return (
    <div className="w-full relative md:col-span-2 h-[584px] bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] pt-6 md:pt-0 md:p-6 px-10 shadow-lg rounded-[32px] flex flex-col md:flex-row justify-between items-center text-left">
      <div className="h-[80%] w-full md:w-[40%] flex flex-col justify-between md:ml-10">
        <div className="w-full">
          <h3 className="text-red-500 font-[600] text-[16px] md:text-[20px] leading-[28px] tracking-[2px] font-poppins">
            {title}
          </h3>
          <h4 className="text-[32px] font-[600] md:text-[40px] leading-[40px] md:leading-[56px] mt-6 font-poppins">
            {subTitle}
          </h4>
          <p className="text-gray-600 font-[500] text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] mt-4 font-poppins">
            {description}
          </p>
          <button className="block md:hidden w-[100%] mt-4 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] text-[14px] md:text-[24px] leading-[16px] md:leading-[36px]">
            {btnTitle}
          </button>
        </div>

        <button className="hidden md:block mt-4 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] text-[16px] md:text-[24px] leading-[16px] md:leading-[36px]">
          {btnTitle}
        </button>
      </div>
      <div
        className={`hidden md:block absolute right-0 bottom-0 ${
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
