import Image from "next/image";
import {
  animatedImg10,
  animatedImg11,
  animatedImg2,
  animatedImg3,
  animatedImg5,
  animatedImg8,
  animatedImg9,
  arrow,
  downloadNow,
  frameLeft,
  frameRight,
  mobile,
  qrCode,
  referral,
} from "@/utils/assets";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

export default function FooterSection() {
  return (
    <section className="bg-white min-h-screen text-center flex flex-col items-center mt-[188px] md:mt-16 xl:mt-[462px]">
      {/* AI Try-On Section */}
      <div className="px-[16px] md:max-w-5xl text-center">
        <h3 className="text-red-500 font-[600] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[2px] font-poppins">
          AI Try-On
        </h3>
        <h2 className="text-2xl font-[600] text-[32px] leading-[40px] md:text-[40px] md:leading-[56px] mt-6 font-poppins">
          See It on You—Instantly!
        </h2>
        <p className="text-[#949191] font-[500] text-[16px] leading-[24px] md:text-[24px] lmd:eading-[36px] mt-4 font-poppins">
          Skip the guesswork. Our AI Mirror shows how those heels, jeans, or
          jackets look on you, minus the fitting-room queue.
        </p>
        <button className="w-[100%] xl:max-w-[350px] mt-8 md:mt-16 bg-red-500 text-white py-[12px] px-[36px] rounded-[100px] font-[600] text-[16px] leading-[16px] md:text-[24px] md:leading-[36px] font-poppins">
          Try It On—Right Now →
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="mt-28 md:mt-[172px] pb-[170px] md:pb-0 w-full bg-gradient-to-b from-white via-[#FFF2F3] to-[#FFD1D6] flex flex-row justify-center">
        <div className="relative w-[100%] max-w-[1280px]">
          <Image
            src={mobile}
            alt="AI Mirror"
            width={663}
            height={829}
            className="mx-auto pl-6 hidden md:block"
          />

          {/* Center Video Desktop */}
          <video
            src="/videos/video3.mov"
            autoPlay
            loop
            muted
            className="z-50 mx-auto w-[280px] h-[600px] object-cover border-[6px] border-black rounded-[60px] hidden md:block absolute top-5 left-1/2 -translate-x-1/2"
          />

          {/* Center Video Mobile/Tab */}
          <video
            src="/videos/video3.mov"
            autoPlay
            loop
            muted
            className="mx-auto w-[280px] h-[550px] object-cover border-[6px] border-black rounded-[55px] block md:hidden"
          />

          {/* Left Video (Left Placeholder) */}
          <video
            src="/videos/video2.mov"
            autoPlay
            loop
            muted
            className="absolute top-10 left-5 w-[260px] h-[550px] border-4 object-cover opacity-70 rounded-[60px] -skew-y-[5deg] hidden xl:block"
          />

          {/* Right Video (Right Placeholder) */}
          <video
            src="/videos/video1.mov"
            autoPlay
            loop
            muted
            className="absolute top-10 right-5 w-[260px] h-[550px] border-4 object-cover opacity-70 rounded-[60px] skew-y-[5deg] hidden xl:block"
          />

          <div className="absolute top-3 xl:top-8 left-1/2 -translate-x-1/2 w-[60px] h-[20px] bg-black rounded-xl z-50"></div>
        </div>
      </div>

      {/* Referral Section */}
      <div className="bg-white mt-[-50px] md:mt-[-145px] py-10 text-center rounded-t-[56px] z-0 w-screen">
        <div className="my-[72px] md:my-20 xl:my-[200px] w-[94%] mx-auto max-w-[1280px] mx-auto">
          <div className="w-[90%] md:w-full mx-auto relative md:col-span-2 md:h-[344px] bg-gradient-to-l from-[#FC9CA8] to-[#FFF2F3] p-6 rounded-[32px] shadow-lg flex flex-col md:flex-row md:justify-between items-center text-left">
            <div className="h-[80%] md:w-[50%] xl:w-[40%] flex flex-col justify-between md:ml-6">
              <div>
                <h4 className="text-[32px] font-[600] xl:text-[40px] leading-[40px] xl:leading-[56px] font-poppins">
                  Earn <span className="text-red-500">1%</span> of your Friends!
                </h4>
                <p className="text-gray-600 font-[500] text-[16px] leading-[24px] xl:text-[24px] xl:leading-[36px] mt-4 font-poppins">
                  We’ll pay you 1% of everything your friends make!
                </p>
              </div>

              <button className="max-w-[405px] mt-4 bg-white text-red-500 py-[12px] xl:py-2 px-6 rounded-[100px] font-[600] font-poppins text-[16px] leading-[16px] xl:text-[24px] xl:leading-[36px]">
                Refer your friends today! →
              </button>
            </div>

            {/* Desktop */}
            <div className={"hidden xl:block mt-10 xl:mr-6"}>
              <Image
                src={referral}
                alt={`img-referral`}
                height={170}
                width={418}
              />
            </div>

            {/* Mobile/Tab */}
            <div className={"block xl:hidden mt-10 md:mt-0"}>
              <Image
                src={referral}
                alt={`img-referral`}
                height={170}
                width={350}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full pb-20 xl:pb-40 relative">
        <div className="hidden xl:block">
          <div className="relative flex flex-row items-center justify-center ml-40 transform mb-20">
            <Image src={qrCode} alt="QR Code" width={224} height={224} />

            {/* Floating Text with Arrow */}
            <div className="flex flex-row items-center transform rotate-6 -mt-14 ml-4">
              <Image src={arrow} alt="arrow" width={120} height={120} />
              <div className="text-gray-900 text-xs font-bold">
                <Image
                  src={downloadNow}
                  alt="download now"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Navbar customStyle="w-[361px] md:w-[464px]" />
        </div>

        <div className="block md:hidden">
          <NavbarMobile />
        </div>

        <h4 className="font-poppins text-[12px] leading-[16px] font-[500px] mt-10">
          Crafted with ❤️ from London
        </h4>

        <div className="hidden xl:block absolute top-28 left-0">
          <Image
            src={animatedImg2}
            alt="animatedImg-2"
            width={120}
            height={387}
          />
        </div>

        <div className="hidden xl:block absolute bottom-[-30px] left-0">
          <Image
            src={animatedImg3}
            alt="animatedImg-3"
            width={220}
            height={387}
          />
        </div>

        <div className="hidden xl:block absolute bottom-[-30px] left-60">
          <Image
            src={animatedImg8}
            alt="animatedImg-8"
            width={220}
            height={387}
          />
        </div>

        <div className="hidden xl:block absolute bottom-[-30px] right-60">
          <Image
            src={animatedImg9}
            alt="animatedImg-9"
            width={200}
            height={387}
          />
        </div>

        <div className="hidden xl:block absolute bottom-[-30px] right-0">
          <Image
            src={animatedImg10}
            alt="animatedImg-10"
            width={240}
            height={387}
          />
        </div>

        <div className="hidden xl:block absolute right-0 top-48">
          <Image
            src={animatedImg11}
            alt="animatedImg-11"
            width={100}
            height={240}
          />
        </div>
      </div>
    </section>
  );
}
