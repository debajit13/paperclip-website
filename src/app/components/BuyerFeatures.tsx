import Image from "next/image";
import HomeCardsGrid from "./HomeCardsGrid";

export default function BuyerFeatures() {
  return (
    <section className="mt-[188px] md:mt-20 xl:mt-[491px] pt-10 text-center w-[98%] mx-auto">
      {/* Hero Section */}
      <h2 className="text-[40px] md:text-[68px] px-[16px] font-bold font-poppins text-gray-800 leading-[48px] md:leading-[72px] w-full">
        Shop <span className="text-red-500 italic font-playfair">Smarter</span>,
        Buy <span className="text-red-500 italic font-playfair">Better!</span>
      </h2>
      <p className="mt-6 md:mt-10 xl:mb-[181px] text-gray-500 px-[16px] text-[#949191] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] mx-auto">
        Paperclip transforms shopping into a seamless, personalized experience
        with smart AI tools, hassle-free deals, and fast shipping.
      </p>

      <HomeCardsGrid />
    </section>
  );
}
