import Image from "next/image";
import paperClipLogo from "../../public/paperclip-logo-2.png";
import Navbar from "./components/Navbar";
import QRSection from "./components/QRSection";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import AISelling from "./components/AISelling";
import Carousel from "./components/Carousel";
import BuyerFeatures from "./components/BuyerFeatures";
import FooterSection from "./components/Footer";
import {
  animatedImg1,
  animatedImg2,
  animatedImg3,
  animatedImg6,
  animatedImg7,
} from "@/utils/assets";

export default function Home() {
  return (
    <div className="relative bg-white min-h-full flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      <Hero />

      <div className="hidden md:block">
        <QRSection />
      </div>

      <div className="block md:hidden">
        <button className="mt-10 bg-[#F71D3B] w-[100%] text-white py-2 px-6 rounded-[100px] font-[600] text-[16px] leading-[24px]">
          Download App
        </button>
      </div>

      <HeroTwo />
      <AISelling />
      <Carousel />

      <BuyerFeatures />
      <FooterSection />

      <div className="absolute top-0 left-0 hidden md:block">
        <Image
          src={animatedImg1}
          alt="animatedImg-1"
          width={180}
          height={250}
        />
      </div>

      <div className="absolute top-52 left-0 hidden md:block">
        <Image
          src={animatedImg2}
          alt="animatedImg-2"
          width={120}
          height={387}
        />
      </div>

      <div className="absolute top-28 right-0 hidden md:block">
        <Image
          src={animatedImg6}
          alt="animatedImg-6"
          width={120}
          height={387}
        />
      </div>

      <div className="absolute top-0 right-5 hidden md:block">
        <Image
          src={animatedImg7}
          alt="animatedImg-7"
          width={200}
          height={250}
        />
      </div>
    </div>
  );
}
