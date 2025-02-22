import Image from "next/image";
import { arrow, arrowTwo, downloadNow, mobile, qrCode } from "@/utils/assets";
import AISelling from "./AISelling";

export default function HeroTwo() {
  return (
    <section className="text-center relative bg-gradient-to-b from-white via-[#FFF2F3] to-[#FFD1D6] mt-8 md:mt-20 w-screen">
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-center font-poppins text-gray-900 leading-[48px] max-w-xl hidden md:block">
          Point, shoot, and watch our AI create beautiful
          <span className="text-gray-400">
            {" "}
            listings in seconds, no typing needed
          </span>
        </h1>
        <div className="relative mt-6 md:mt-32 relative ml-6">
          <Image
            src={mobile}
            alt="AI-powered phone"
            width={663}
            height={829}
            className="hidden md:block mx-auto"
          />
          <Image
            src={mobile}
            alt="AI-powered phone"
            width={500}
            height={374}
            className="block md:hidden mx-auto"
          />

          <Image
            src={downloadNow}
            alt="download now"
            width={160}
            height={94}
            className="absolute left-[-30%] top-10 -translate-y-1/2 hidden xl:block"
          />
          <Image
            src={arrowTwo}
            alt="arrow"
            width={120}
            height={120}
            className="absolute top-8 left-0 hidden xl:block"
          />
          <Image
            src={qrCode}
            alt="arrow"
            width={160}
            height={120}
            className="absolute top-0 right-[-20%] rotate-12 hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
}
