import Image from "next/image";
import paperClipLogo from "../../public/paperclip-logo-2.png";
import Navbar from "./components/Navbar";
import qrCode from "../../public/qr.png";
import arrow from "../../public/arrow.png";
import downloadNow from "../../public/downloadNow.png";
import sparkle from "../../public/sparkle.png";
import QRSection from "./components/QRSection";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import AISelling from "./components/AISelling";
import Carousel from "./components/Carousel";
import BuyerFeatures from "./components/BuyerFeatures";

export default function Home() {
  return (
    <div className="bg-white min-h-full flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      <Navbar />

      <Hero />

      <QRSection />

      <HeroTwo />
      <AISelling />
      <Carousel />

      <BuyerFeatures />
    </div>
  );
}
