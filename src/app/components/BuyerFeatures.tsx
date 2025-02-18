import Image from "next/image";
import HomeCardsGrid from "./HomeCardsGrid";

export default function BuyerFeatures() {
  return (
    <section className="mt-20 md:mt-20 py-10 text-center w-[98%] max-w-[1500px] mx-auto">
      {/* Hero Section */}
      <h2 className="text-[40px] md:text-[68px] font-bold font-poppins text-gray-800 leading-[48px] md:leading-[72px] w-full">
        Shop <span className="text-red-500 italic">Smarter</span>, Buy{" "}
        <span className="text-red-500 italic">Better!</span>
      </h2>
      <p className="mt-10 text-gray-500 max-w-[90%] text-[#949191] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] mx-auto">
        Paperclip transforms shopping into a seamless, personalized experience
        with smart AI tools, hassle-free deals, and fast shipping.
      </p>

      <HomeCardsGrid />
    </section>
  );
}
