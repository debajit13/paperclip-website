import React from "react";
import DashboardCard from "../components/DashboardCard";
import ProfessionalToolCard from "../components/ProfessionalToolCard";
import {
  pcardOne,
  pcardTwo,
  pcardThree,
  referral,
  cr1,
  instantLeft,
  instantRight,
  navShadow,
  sparkle,
  cloudThree,
  cloudFour,
  pos,
  sumup,
  iZettle,
} from "@/utils/assets";
import ProfessionalToolCardTwo from "../components/ProfessionalToolCardTwo";
import LiveDemoCard from "../components/LiveDemoCard";
import SellingEffortlesslyCard from "../components/SellingEffortlessCard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Carousel from "../components/Carousel";
import {
  carouselContentTwo,
  carouselStepsTwo,
} from "@/constants/carouselContent";
import ScrollingCarousel from "../components/ScrollingCarousel";
import LaunchPartnerOffer from "../components/LaunchPartnerOfferCard";
import NavbarMobile from "../components/NavbarMobile";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCards";

const GetStarted = () => {
  return (
    <div className="mt-16 md:mt-44 xl:mt-0 overflow-hidden mx-auto">
      {/* Top Hero Section */}
      <section className="relative bg-white mb-28 md:mb-0 px-[16px] text-center z-0 w-screen xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-[url('/bg-dots.svg')] xl:bg-top xl:bg-cover">
        <div className="relative mt-[92px] xl:mt-[184px]">
          <h2 className="mt-4 text-[46px] md:text-[58px] xl:text-[68px] font-poppins font-semibold text-gray-800 leading-[51px] md:leading-[72px] tracking-[-0.5px] text-center">
            Digitalise Your Inventory
            <br />
            <span>
              Turbocharge{" "}
              <span className="text-[#F71D3B] xl:text-[70px] italic font-playfair">
                Your Sales!
              </span>
            </span>
          </h2>

          <Image
            src={sparkle}
            alt="Paperclip Logo"
            width={87.64}
            height={87.64}
            className="absolute invisible xl:visible top-10 right-[-80px] transform rotate-[30deg]"
          />
        </div>

        <p className="text-[#949191] font-[400px] text-[16px] leading-[24px] mt-4 md:mt-10 font-poppins max-w-7xl mx-auto px-4">
          Run your brick-and-mortar and online shop in perfect harmony, with
          effortless ai-created listings, professional product showcases and
          tools, integrated shipping, and instant marketplace reach, with no
          subscription and zero seller fees.
        </p>

        <button className="mb-[92px] max-w-[320px] mt-10 bg-gradient-to-l from-[#F71D3B] to-[#E14DE3] text-white py-3 px-6 rounded-[100px] font-[600] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] xl:w-[30%]">
          Signup now for Free!
        </button>

        {/* Navbar Bg Shadow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden xl:block">
          <Image
            src={navShadow}
            alt="animatedImg-1"
            width={1280}
            height={143}
          />
        </div>
      </section>

      {/* 3D Hover Card */}
      <div className="hidden xl:block relative flex items-center justify-center">
        {/* Floating Background Layer */}
        <div className="absolute inset-0 bg-[url('/backshadow.png')] bg-top bg-cover pointer-events-none h-[100%] -top-[40%]"></div>
        <div className="relative w-full">
          <div className="w-full mx-auto w-[75%] max-w-7xl h-64 absolute top-14 left-1/2 transform -translate-x-1/2 bg-[#F7F5F3] rounded-[24px] border border-white/40 shadow-[0px_10px_50px_rgba(0,0,0,0.24)] opacity-40 backdrop-blur-xl"></div>
          <DashboardCard />
        </div>
      </div>

      {/* Launch Partner Offer Section */}
      <div className="block mt-[72px] xl:my-[176px] grid grid-cols-1 gap-10 mx-auto px-[24px] xl:px-10">
        <LaunchPartnerOffer />
      </div>

      {/* Professsional Tools Details */}
      <section className="bg-white pt-[192px] pb-[72px] md:py-[120px] px-[24px] md:px-6 text-center rounded-t-[56px] z-0 w-screen">
        <h2 className="md:mt-4 text-[46px] md:text-[58px] lg:text-[56px] font-poppins font-semibold text-gray-800 leading-[51px] md:leading-[64px] tracking-[-0.5px] text-center">
          Professional Tools that
          <br />
          <span>
            drive your{" "}
            <span className="text-[#F71D3B] text-[60px] italic font-playfair">
              Sales {":)"}
            </span>
          </span>
        </h2>
        <p className="text-[#949191] font-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] mt-4 xl:mt-[24px] md:mt-10 font-poppins mx-auto">
          Powerful ai tools and instant marketplace access designed to help your
          business thrive.
        </p>
      </section>

      {/* Professsional Tools Cards */}
      {/* Desktop */}
      <div className="hidden xl:block">
        <div className="pb-10 grid grid-cols-3 gap-10 mx-auto xl:px-10">
          <ProfessionalToolCard
            image={pcardOne}
            imgWidth={328}
            imgHeight={328}
            title={<span>Completely Free! No Hidden Gotchas</span>}
            description={
              "No subscriptions, no seller fees. Keep 100% of your sales revenue, our fees come from buyers, so our success depends on your success."
            }
          />

          <ProfessionalToolCard
            image={pcardTwo}
            imgWidth={260}
            imgHeight={328}
            title={<span>World-Class Shipping, Baked In!</span>}
            description={
              "Store pickups, effortless returns, end-to-end tracking, and automated buyer updates—no third-party apps needed."
            }
          />

          <ProfessionalToolCard
            image={pcardThree}
            imgWidth={240}
            imgHeight={328}
            imageLeft={cloudThree}
            imageLeftHeight={82}
            imageLeftWidth={70}
            imageRightHeight={98}
            imageRightWidth={75}
            customLeftCardStyle="left-0 top-32"
            customRightCardStyle="right-0 top-5"
            imageRight={cloudFour}
            title={<span>ai-Powered Listing & Negotiation</span>}
            description={
              "Our ai turns photos into pro listings, writes descriptions, optimises pricing, and handles buyer queries—you focus on growth."
            }
          />
        </div>

        <div className="pb-10 grid grid-cols-1 gap-10 mx-auto hidden md:block xl:px-10">
          <ProfessionalToolCard
            title={<span>POS</span>}
            description={
              "Your inventory reaches thousands of buyers instantly, with perfect sync between store and online sales—no juggling, no mistakes"
            }
            image={pos}
            imgWidth={686}
            imgHeight={371}
            imageLeft={sumup}
            imageLeftHeight={77}
            imageLeftWidth={210}
            imageRight={iZettle}
            imageRightWidth={153}
            imageRightHeight={51}
            customLeftCardStyle="top-32 left-10"
            customRightCardStyle="top-60 right-20"
            hasOtherImage={true}
          />
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block xl:hidden">
        <div className="px-10 py-10 grid grid-cols-1 gap-10 mx-auto">
          <ProfessionalToolCard
            image={pcardOne}
            imgWidth={300}
            imgHeight={328}
            title={<span>Completely Free! No Hidden Gotchas</span>}
            description={
              "No subscriptions, no seller fees. Keep 100% of your sales revenue, our fees come from buyers, so our success depends on your success."
            }
          />

          <ProfessionalToolCard
            image={pcardTwo}
            imgWidth={230}
            imgHeight={328}
            title={<span>World-Class Shipping, Baked In!</span>}
            description={
              "Store pickups, effortless returns, end-to-end tracking, and automated buyer updates—no third-party apps needed."
            }
          />

          <ProfessionalToolCard
            image={pcardThree}
            imgWidth={200}
            imgHeight={328}
            imageLeft={cloudThree}
            imageLeftHeight={82}
            imageLeftWidth={70}
            imageRightHeight={98}
            imageRightWidth={75}
            customLeftCardStyle="left-0 top-32"
            customRightCardStyle="right-0 top-5"
            imageRight={cloudFour}
            title={<span>ai-Powered Listing & Negotiation</span>}
            description={
              "Our ai turns photos into pro listings, writes descriptions, optimises pricing, and handles buyer queries—you focus on growth."
            }
          />

          <ProfessionalToolCard
            image={pcardThree}
            imgWidth={200}
            imgHeight={328}
            imageLeft={cloudThree}
            imageLeftHeight={82}
            imageLeftWidth={70}
            imageRightHeight={98}
            imageRightWidth={75}
            customLeftCardStyle="left-0 top-32"
            customRightCardStyle="right-0 top-5"
            imageRight={cloudFour}
            title={<span>POS</span>}
            description={
              "Your inventory reaches thousands of buyers instantly, with perfect sync between store and online sales—no juggling, no mistakes"
            }
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <div className="px-[24px] pb-10 grid grid-cols-1 gap-10 mx-auto">
          <ProfessionalToolCard
            image={pcardOne}
            imgWidth={200}
            imgHeight={244}
            title={<span>Completely Free! No Hidden Gotchas</span>}
            description={
              "No subscriptions, no seller fees. Keep 100% of your sales revenue, our fees come from buyers, so our success depends on your success."
            }
          />

          <ProfessionalToolCard
            image={pcardTwo}
            imgWidth={200}
            imgHeight={328}
            title={<span>World-Class Shipping, Baked In!</span>}
            description={
              "Store pickups, effortless returns, end-to-end tracking, and automated buyer updates—no third-party apps needed."
            }
          />

          <ProfessionalToolCard
            image={pcardThree}
            imgWidth={200}
            imgHeight={328}
            imageLeft={cloudThree}
            imageLeftHeightMobile={82}
            imageLeftWidthMobile={50}
            imageRightHeightMobile={98}
            imageRightWidthMobile={55}
            customLeftCardStyle="left-0 top-32"
            customRightCardStyle="right-0 top-5"
            imageRight={cloudFour}
            title={<span>ai-Powered Listing & Negotiation</span>}
            description={
              "Our ai turns photos into pro listings, writes descriptions, optimises pricing, and handles buyer queries—you focus on growth."
            }
          />
        </div>
      </div>

      <div className="px-[24px] xl:px-10 pb-10 grid grid-cols-1 gap-10 mx-auto block md:hidden">
        <ProfessionalToolCard
          image={pcardThree}
          imgWidth={200}
          imgHeight={328}
          imageLeft={cloudThree}
          imageLeftHeightMobile={82}
          imageLeftWidthMobile={50}
          imageRightHeightMobile={98}
          imageRightWidthMobile={55}
          customLeftCardStyle="left-0 top-32"
          customRightCardStyle="right-0 top-5"
          imageRight={cloudFour}
          title={<span>POS</span>}
          description={
            "Your inventory reaches thousands of buyers instantly, with perfect sync between store and online sales—no juggling, no mistakes"
          }
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mx-auto px-[24px] md:px-10 xl:px-10">
        <ProfessionalToolCard
          title={"Instant Online Distribution"}
          description={
            "Your inventory reaches thousands of buyers instantly, with perfect sync between store and online sales—no juggling, no mistakes."
          }
          image={cr1}
          imageLeft={instantLeft}
          imageRight={instantRight}
          imgWidth={328}
          imgHeight={328}
        />

        <ProfessionalToolCard
          title={"Aligned Incentives, Bigger Profits"}
          description={
            "We earn from buyers, so we give you ai tools to create beautiful, targeted listings with massive online reach—the same tools used by leading brands."
          }
          image={cr1}
          imageLeft={instantLeft}
          imageRight={instantRight}
          imgWidth={328}
          imgHeight={328}
        />
      </div>

      {/* Carousel */}
      <section className="bg-white mt-[192px] md:mt-28 xl:mt-[296px] mb-[56px] md:mb-12 xl:mb-[120px] px-[24px] md:px-6 text-center rounded-t-[56px] z-0 w-screen mx-auto">
        <h2 className="text-[36px] md:text-[58px] lg:text-[56px] font-poppins font-semibold text-gray-800 leading-[48px] md:leading-[64px] tracking-[-0.5px] text-center">
          Digitalise Your Store in Minutes,
          <br />
          Instantly Expand Your Reach
        </h2>
        <p className="text-[#949191] font-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] mt-4 md:mt-8 font-poppins max-w-7xl mx-auto">
          Everything You Need to Run Your Store, 100% Free
        </p>

        <button className="max-w-[353px] mt-8 md:mt-12 bg-gradient-to-l from-[#F71D3B] to-[#E14DE3] text-white py-3 px-6 rounded-[100px] font-[600] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] xl:w-[30%]">
          Get started in minutes!
        </button>
      </section>

      <div className="px-[24px] md:px-10">
        <Carousel
          carouselContent={carouselContentTwo}
          carouselSteps={carouselStepsTwo}
          customHeight="h-[450px] md:h-[350px] xl:h-[450px]"
        />
      </div>

      {/* Set in Action */}
      <section className="bg-white mt-[192px] md:mt-28 xl:mt-[252px] mb-14 md:mb-16 xl:mb-[120px] px-[24px] md:px-6 text-center rounded-t-[56px] mx-auto">
        <h2 className="text-[40px] md:text-[58px] lg:text-[56px] font-poppins font-semibold text-gray-800 leading-[48px] md:leading-[64px] tracking-[-0.5px] text-center">
          See it in
          <span className="text-[#F71D3B] italic font-playfair"> Action!</span>
        </h2>
        <p className="text-[#949191] font-[400px] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] mt-4 md:mt-8 font-poppins max-w-7xl mx-auto">
          Test drive a live account and explore all features instantly. No
          signup,
          <br />
          no commitment—just dive in
        </p>
      </section>

      {/* Desktop */}
      <div className="hidden xl:block">
        <div className="px-10 xl:px-10 pb-10 grid grid-cols-2 grid-cols-[60%_40%] gap-10 mx-auto">
          <LiveDemoCard />
          <SellingEffortlesslyCard />
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="block xl:hidden">
        <div className="px-[24px] md:px-10 pb-10 grid grid-cols-1 gap-10 mx-auto">
          <LiveDemoCard />
          <SellingEffortlesslyCard />
        </div>
      </div>

      {/* Infinite moving Carousel */}
      <div className="mt-20 xl:mt-[296px] mx-auto hidden xl:block">
        <section className="bg-white mx-auto pt-10 pb-8 px-6 text-center rounded-t-[56px] z-0 w-full">
          <h2 className="text-[20px] font-poppins font-semibold text-[#F71D3B] leading-[28px] text-center">
            Paperclip Pro
          </h2>
          <h2 className="mt-4 text-[40px] font-poppins font-semibold text-gray-800 leading-[58px] text-center">
            Experience Our Free Retail SaaS
          </h2>
          <p className="text-[#949191] font-[500px] text-[24px] leading-[36px] mt-4 font-poppins max-w-7xl mx-auto">
            Join a growing community of shops using ai-driven tools, built-in
            shipping, and a massive online marketplace to boost sales—at zero
            cost to you.
          </p>

          <button className="max-w-[320px] mt-12 bg-gradient-to-l from-[#F71D3B] to-[#E14DE3] text-white py-3 px-6 rounded-[100px] font-[600] font-poppins text-[24px] leading-[36px] w-[30%]">
            Signup now for Free!
          </button>
        </section>

        <InfiniteMovingCardsDemo />
      </div>

      {/* Footer Section */}
      {/* Referral Section */}
      <div className="bg-white py-[72px] xl:py-10 text-center rounded-t-[56px] z-0 w-screen">
        <div className="my-10 md:my-20 xl:my-[132px] w-[94%] md:w-[90%] xl:w-[94%] mx-auto mx-auto">
          <div className="w-[92%] md:w-[90%] md:w-full mx-auto relative md:col-span-2 md:h-[344px] bg-gradient-to-l from-[#FC9CA8] to-[#FFF2F3] p-6 rounded-[32px] shadow-lg flex flex-col md:flex-row md:justify-between items-center text-left">
            <div className="h-[80%] md:w-[50%] xl:w-[40%] flex flex-col justify-between md:ml-6">
              <div>
                <h4 className="text-[32px] font-[600] xl:text-[40px] leading-[40px] xl:leading-[56px] font-poppins">
                  Earn <span className="text-[#F71D3B]">1%</span> of your
                  Friends!
                </h4>
                <p className="text-gray-600 font-[500] text-[16px] leading-[24px] xl:text-[24px] xl:leading-[36px] mt-4 font-poppins">
                  We’ll pay you 1% of everything your friends make!
                </p>
              </div>

              <button className="mt-4 max-w-[405px] bg-white text-[#F71D3B] py-2 px-6 rounded-[100px] font-[600] font-poppins text-[16px] leading-[16px] xl:text-[24px] xl:leading-[36px]">
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
        <div className="hidden md:block">
          <Navbar customStyle="w-[361px] md:w-[464px]" />
        </div>

        <div className="block md:hidden">
          <NavbarMobile />
        </div>
        <h4 className="font-poppins text-[12px] text-center leading-[16px] font-[500px] mt-10">
          Crafted with ❤️ from London
        </h4>
      </div>
    </div>
  );
};

export default GetStarted;
