import Image from "next/image";
import { instantLeft, instantRight, pcardOne } from "@/utils/assets";

export default function ProfessionalToolCard({
  customStyle,
  imgWidth = 100,
  imgHeight = 100,
  customTitle,
  customDescription,
  image,
  imageLeft,
  imageRight,
  title,
  description,
}: {
  customStyle?: string;
  imgWidth?: number;
  imgHeight?: number;
  customTitle?: string;
  customDescription?: string;
  image: any;
  imageLeft?: any;
  imageRight?: any;
  title: string | React.JSX.Element;
  description: string;
}) {
  return (
    <div
      className={`relative w-full h-full bg-white rounded-2xl shadow-[0px_10px_50px_rgba(0,0,0,0.15)] border border-white/40 backdrop-blur-lg p-6 ${customStyle}`}
    >
      {/* Top Gradient Background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FFD1D6] to-transparent rounded-t-2xl"></div>

      {/* Image */}
      <div className="flex justify-center mt-6">
        <Image
          src={image}
          alt="Broken Pound"
          width={imgWidth}
          height={imgHeight}
        />
      </div>

      {/* Desktop */}
      {imageLeft && (
        <div className="absolute top-32 left-10 hidden md:block">
          <Image src={instantLeft} alt="left image" width={130} height={150} />
        </div>
      )}

      {imageRight && (
        <div className="absolute top-32 right-10 hidden md:block">
          <Image
            src={instantRight}
            alt="right image"
            width={160}
            height={150}
          />
        </div>
      )}

      {/* Mobile */}
      {imageLeft && (
        <div className="absolute top-32 left-0 block md:hidden">
          <Image src={instantLeft} alt="left image" width={90} height={150} />
        </div>
      )}

      {imageRight && (
        <div className="absolute top-10 right-0  block md:hidden">
          <Image
            src={instantRight}
            alt="right image"
            width={104}
            height={150}
          />
        </div>
      )}

      {/* Title */}
      <h3
        className={`text-[24px] font-bold font-poppins md:text-[28px] leading-[36px] md:leading-[40px] text-gray-900 text-left mt-10 ${customTitle}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-gray-500 text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-left mt-2 ${customDescription}`}
      >
        {description}
      </p>
    </div>
  );
}
