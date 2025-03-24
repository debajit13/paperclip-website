import Image from "next/image";
import { instantLeft, instantRight, pcardOne, square } from "@/utils/assets";

export default function ProfessionalToolCard({
  customStyle,
  imgWidth = 100,
  imgHeight = 100,
  customTitle,
  customDescription,
  image = null,
  imageLeft,
  imageLeftHeight,
  imageLeftWidth,
  imageRight,
  imageRightHeight,
  imageRightWidth,
  title,
  description,
  customLeftCardStyle,
  customRightCardStyle,
  imageLeftHeightMobile,
  imageRightHeightMobile,
  imageLeftWidthMobile,
  imageRightWidthMobile,
  hasOtherImage,
}: {
  customStyle?: string;
  imgWidth?: number;
  imgHeight?: number;
  customTitle?: string;
  customDescription?: string;
  image?: any;
  imageLeft?: any;
  imageLeftHeight?: any;
  imageLeftWidth?: any;
  imageLeftHeightMobile?: any;
  imageLeftWidthMobile?: any;
  imageRight?: any;
  imageRightHeight?: any;
  imageRightWidth?: any;
  imageRightHeightMobile?: any;
  imageRightWidthMobile?: any;
  title: string | React.JSX.Element;
  description: string;
  customLeftCardStyle?: string;
  customRightCardStyle?: string;
  hasOtherImage?: boolean;
}) {
  return (
    <div
      className={`relative w-full h-full bg-white rounded-2xl shadow-[0px_10px_50px_rgba(0,0,0,0.15)] border border-white/40 backdrop-blur-lg p-6 ${customStyle}`}
    >
      {/* Top Gradient Background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FFD1D6] to-transparent rounded-t-2xl"></div>

      {/* Image */}
      {image && (
        <div className="flex justify-center mt-6 relative z-50">
          <Image
            src={image}
            alt="Broken Pound"
            width={imgWidth}
            height={imgHeight}
          />
        </div>
      )}

      {/* Desktop */}
      {imageLeft && (
        <div
          className={`absolute ${
            customLeftCardStyle ?? "top-32 left-10"
          }  hidden md:block z-50`}
        >
          <Image
            src={imageLeft}
            alt="left image"
            width={imageLeftWidth ?? 130}
            height={imageLeftHeight ?? 150}
          />
        </div>
      )}

      {imageRight && (
        <div
          className={`absolute ${
            customRightCardStyle ?? "top-32 right-10"
          }  hidden md:block z-50`}
        >
          <Image
            src={imageRight}
            alt="right image"
            width={imageRightWidth ?? 160}
            height={imageRightHeight ?? 150}
          />
        </div>
      )}

      {hasOtherImage && (
        <div className={`absolute top-8 right-40 hidden md:block z-50`}>
          <Image src={square} alt="square image" width={214} height={80} />
        </div>
      )}

      {/* Mobile */}
      {imageLeft && (
        <div className="absolute top-32 left-0 block md:hidden">
          <Image
            src={imageLeft}
            alt="left image"
            width={imageLeftWidthMobile ?? 90}
            height={imageLeftHeightMobile ?? 150}
          />
        </div>
      )}

      {imageRight && (
        <div className="absolute top-10 right-0  block md:hidden">
          <Image
            src={imageRight}
            alt="right image"
            width={imageRightWidthMobile ?? 104}
            height={imageRightHeightMobile ?? 150}
          />
        </div>
      )}

      {/* Title */}
      <h3
        className={`text-[24px] font-bold font-poppins md:text-[28px] leading-[36px] md:leading-[40px] text-gray-900 text-left ${
          image ? "mt-10" : "mt-44"
        } ${customTitle}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-[#949191] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-left mt-2 ${customDescription}`}
      >
        {description}
      </p>
    </div>
  );
}
