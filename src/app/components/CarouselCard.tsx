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
}: Props) {
  return (
    <div className="w-full relative md:col-span-2 h-[584px] bg-gradient-to-t from-[#FC9CA8] to-[#FFF2F3] p-6 px-10 shadow-lg rounded-[32px] flex flex-col md:flex-row justify-between items-center text-left">
      <div className="h-[80%] w-[40%] flex flex-col justify-between ml-10">
        <div>
          <h3 className="text-red-500 font-[600] text-[20px] leading-[28px] tracking-[2px] font-poppins">
            {title}
          </h3>
          <h4 className="text-2xl font-[600] text-[40px] leading-[56px] mt-6 font-poppins">
            {subTitle}
          </h4>
          <p className="text-gray-600 font-[500] text-[24px] leading-[36px] mt-4 font-poppins">
            {description}
          </p>
        </div>

        <button className="mt-4 bg-white text-red-500 py-2 px-6 rounded-[100px] font-[600] text-[24px] leading-[36px]">
          {btnTitle}
        </button>
      </div>
      <div
        className={`absolute right-0 bottom-0 ${
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
    </div>
  );
}
