"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselCard from "./CarouselCard";

export interface carouselContentProps {
  key?: number;
  title: string;
  subTitle: string;
  description: string;
  btnTitle: string;
  image: any;
  imageWidth?: number;
  imageHeight?: number;
  imageMobileWidth?: number;
  imageMobileHeight?: number;
  imageTabHeight?: number | undefined;
  imageTabWidth?: number | undefined;
  position?: any;
  positionTab?: any;
  customHeight?: string;
  btnMaxWidth?: string;
}

export interface Props {
  carouselContent: carouselContentProps[];
  clicksPerCarouselMove: number;
  carouselSteps: string[];
  customHeight?: string;
}

export default function Carousel({
  carouselContent,
  clicksPerCarouselMove,
  carouselSteps,
  customHeight = "",
}: Props) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);

  const totalSteps = carouselContent.length; // Total progress bar steps
  const totalProgressClicks = totalSteps * clicksPerCarouselMove; // 20 total clicks
  const totalCarouselSlides = totalSteps; // 5 slides in the carousel

  const nextSlide = () => {
    if (currentProgress < totalProgressClicks - 1) {
      setCurrentProgress((prev) => prev + 1);
    }

    // Move carousel only on the 4th click of each progress step
    if ((currentProgress + 1) % clicksPerCarouselMove === 0) {
      setCurrentCarouselSlide((prev) =>
        Math.min(prev + 1, totalCarouselSlides - 1)
      );
    }
  };

  const prevSlide = () => {
    if (currentProgress > 0) {
      setCurrentProgress((prev) => prev - 1);
    }

    // Move carousel back only when reversing a full step
    if (currentProgress % clicksPerCarouselMove === 0 && currentProgress > 0) {
      setCurrentCarouselSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="w-full mx-auto relative max-w-[1280px] mx-auto">
      {/* Progress Bar */}
      <ProgressBar currentSlide={currentProgress} steps={carouselSteps} />

      {/* Carousel Content */}
      <div className="relative overflow-hidden w-full mt-10 rounded-[32px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentCarouselSlide * 100}%)`,
          }}
        >
          {carouselContent.map((content, index) => (
            <div key={content.key} className="min-w-full">
              <CarouselCard
                title={content.title}
                subTitle={content.subTitle}
                description={content.description}
                btnTitle={content.btnTitle}
                image={content.image}
                imageWidth={content.imageWidth}
                imageHeight={content.imageHeight}
                position={content.position}
                imageMobileWidth={content.imageMobileWidth}
                imageMobileHeight={content.imageMobileHeight}
                customHeight={customHeight}
                imageTabWidth={content.imageTabWidth}
                imageTabHeight={content.imageTabHeight}
                positionTab={content.positionTab}
                btnMaxWidth={content.btnMaxWidth}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`absolute left-0 top-1/2 mt-10 transform -translate-y-1/2 bg-transparent ${
          currentProgress === 0 ? "text-[#94919129]" : "text-red-500"
        } p-3`}
        disabled={currentProgress === 0}
      >
        <div className="hidden md:block">
          <FaChevronLeft size={40} />
        </div>

        <div className="block md:hidden">
          <FaChevronLeft size={20} />
        </div>
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-0 top-1/2 mt-10 transform -translate-y-1/2 bg-transparent ${
          currentProgress >= totalProgressClicks - 1
            ? "text-[#94919129]"
            : "text-red-500"
        } p-3`}
        disabled={currentProgress >= totalProgressClicks - 1}
      >
        <div className="hidden md:block">
          <FaChevronRight size={40} />
        </div>

        <div className="block md:hidden">
          <FaChevronRight size={20} />
        </div>
      </button>
    </div>
  );
}
