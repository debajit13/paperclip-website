"use client";

import Image from "next/image";
import React from "react";
import { mvCarousel1 } from "@/utils/assets";

const HeroSection = () => {
  return (
    <Image
      src={mvCarousel1}
      alt={"Carousel Image"}
      objectFit="cover"
      width={960}
    />
  );
};

const ScrollingCarousel = () => {
  const components = [HeroSection, HeroSection, HeroSection];

  const items = [...components, ...components]; // Duplicate for smooth looping

  return (
    <div className="relative flex justify-center items-center h-[512px] mt-10">
      <div className="slider relative overflow-hidden bg-white w-screen h-[512px]">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-0 w-[50px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-[50px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent z-10"></div>

        {/* Scrolling Sections */}
        <div className="slide-track flex animate-scroll h-full">
          {items.map((Component, index) => (
            <div key={index} className="slide h-full">
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCarousel;
