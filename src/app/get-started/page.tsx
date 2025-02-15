import React from "react";
import DashboardCard from "../components/DashboardCard";
import ProfessionalToolCard from "../components/ProfessionalToolCard";
import { pcardOne, pcardTwo, pcardThree } from "@/utils/assets";
import ProfessionalToolCardTwo from "../components/ProfessionalToolCardTwo";

const GetStarted = () => {
  return (
    <div className="mt-40">
      {/* Top Hero Section */}
      <section className="bg-white py-10 px-6 text-center rounded-t-[56px] z-0 w-screen">
        <h2 className="mt-4 text-[58px] lg:text-[68px] font-poppins font-semibold text-gray-800 leading-[72px] tracking-[-0.5px] text-center">
          Digitalise Your Inventory
          <br />
          <span>
            Turbocharge <span className="text-red-500 italic">Your Sales!</span>
          </span>
        </h2>
        <p className="text-gray-600 font-[400px] text-[24px] leading-[36px] mt-10 font-poppins max-w-7xl mx-auto">
          Run your brick-and-mortar and online shop in perfect harmony, with
          effortless AI-created listings, professional product showcases and
          tools, integrated shipping, and instant marketplace reach, with no
          subscription and zero seller fees.
        </p>

        <button className="mt-10 bg-gradient-to-l from-[#F71D3B] to-[#E14DE3] text-white py-3 px-6 rounded-[100px] font-[600] font-poppins text-[24px] leading-[36px] w-[30%]">
          Signup now for Free!
        </button>
      </section>

      {/* 3D Hover Card */}
      <div className="relative bg-gradient-to-t from-white via-[#FCE7F3] to-transparent flex items-center justify-center">
        {/* Floating Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-[#FCE7F3] to-transparent opacity-60 pointer-events-none h-[100%] -top-[20%]"></div>
        <div className="relative w-full">
          <div className="w-full mx-auto max-w-5xl h-64 absolute top-14 left-1/2 transform -translate-x-1/2 bg-[#F7F5F3] rounded-[24px] border border-white/40 shadow-[0px_10px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl"></div>
          <DashboardCard />
        </div>
      </div>

      {/* Professsional Tools Details & Cards */}
      <section className="bg-white mt-20 py-10 px-6 text-center rounded-t-[56px] z-0 w-screen">
        <h2 className="mt-4 text-[58px] lg:text-[68px] font-poppins font-semibold text-gray-800 leading-[72px] tracking-[-0.5px] text-center">
          Professional tools that
          <br />
          <span>
            drive your<span className="text-red-500 italic">Sales {":)"}</span>
          </span>
        </h2>
        <p className="text-gray-600 font-[400px] text-[24px] leading-[36px] mt-10 font-poppins max-w-7xl mx-auto">
          Powerful AI tools and instant marketplace access designed to help your
          <br />
          business thrive.
        </p>
      </section>

      <div className="my-10 px-10 py-10 grid grid-cols-3 gap-10">
        <ProfessionalToolCard
          image={pcardOne}
          imgWidth={328}
          imgHeight={328}
          title={
            <span>
              Completely Free! <br />
              No Hidden Gotchas
            </span>
          }
          description={
            "No subscriptions, no seller fees. Keep 100% of your sales revenue, our fees come from buyers, so our success depends on your success."
          }
        />

        <ProfessionalToolCard
          image={pcardTwo}
          imgWidth={300}
          imgHeight={328}
          title={
            <span>
              World-Class Shipping, <br />
              Baked In!
            </span>
          }
          description={
            "Store pickups, effortless returns, end-to-end tracking, and automated buyer updates—no third-party apps needed."
          }
        />

        <ProfessionalToolCard
          image={pcardThree}
          imgWidth={240}
          imgHeight={328}
          title={
            <span>
              AI-Powered Listing & <br />
              Negotiation
            </span>
          }
          description={
            "Our AI turns photos into pro listings, writes descriptions, optimises pricing, and handles buyer queries—you focus on growth."
          }
        />
      </div>

      <div className="my-10 px-10 py-10 grid grid-cols-2 gap-10">
        <ProfessionalToolCardTwo
          title={"Instant Online Distribution"}
          description={
            "Your inventory reaches thousands of buyers instantly, with perfect sync between store and online sales—no juggling, no mistakes."
          }
        />

        <ProfessionalToolCardTwo
          title={"Aligned Incentives, Bigger Profits"}
          description={
            "We earn from buyers, so we give you AI tools to create beautiful, targeted listings with massive online reach—the same tools used by leading brands."
          }
        />
      </div>
    </div>
  );
};

export default GetStarted;
