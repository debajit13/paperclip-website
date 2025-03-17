import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import AISelling from "./components/AISelling";
import Carousel from "./components/Carousel";
import BuyerFeatures from "./components/BuyerFeatures";
import FooterSection from "./components/Footer";
import { carouselContent, carouselSteps } from "@/constants/carouselContent";

export default function Home() {
  return (
    <div className="relative bg-white min-h-full flex flex-col items-center justify-center text-center pt-6 xl:pt-0 px-6 pb-6 overflow-hidden">
      <Hero />

      <div className="block md:hidden">
        <button className="mt-10 bg-[#F71D3B] w-[100%] text-white py-2 px-6 rounded-[100px] font-[600] text-[16px] leading-[24px]">
          Download App
        </button>
      </div>

      <div className="block xl:hidden">
        <HeroTwo />
      </div>

      <AISelling />
      <Carousel
        carouselContent={carouselContent}
        carouselSteps={carouselSteps}
      />

      <BuyerFeatures />
      <FooterSection />
    </div>
  );
}
