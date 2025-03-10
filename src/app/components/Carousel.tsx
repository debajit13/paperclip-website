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
  carouselSteps: string[];
  customHeight?: string;
}

export default function Carousel({
  carouselContent,
  carouselSteps,
  customHeight = "",
}: Props) {
  // Start at progress 0 (first progress bar unfilled)
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);

  const totalSteps = carouselContent.length;
  // We need totalSteps + 1 progress steps because first slide needs a click to fill its progress
  const totalProgressClicks = totalSteps;

  const nextSlide = () => {
    if (currentProgress < totalProgressClicks) {
      const newProgress = currentProgress + 1;
      setCurrentProgress(newProgress);

      // Special case for first slide: only move to next slide after filling progress
      if (currentProgress === 0) {
        // Don't advance the slide yet, just fill the progress bar
      } else {
        // For all other slides, advance immediately
        setCurrentCarouselSlide((prev) => Math.min(prev + 1, totalSteps - 1));
      }
    }
  };

  const prevSlide = () => {
    if (currentProgress > 0) {
      const newProgress = currentProgress - 1;
      setCurrentProgress(newProgress);

      // Only move carousel when we're going back from progress 1 or higher
      if (currentProgress > 1) {
        setCurrentCarouselSlide((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <div className="w-full mx-auto relative max-w-[1280px]">
      {/* Progress Bar */}
      <ProgressBar
        currentProgress={currentProgress}
        steps={carouselSteps}
        currentSlide={currentCarouselSlide}
      />

      {/* Carousel Content */}
      <div className="relative overflow-hidden w-full mt-10 rounded-[32px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentCarouselSlide * 100}%)`,
          }}
        >
          {carouselContent.map((content, index) => (
            <div key={content.key || index} className="min-w-full">
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
          currentProgress >= totalProgressClicks
            ? "text-[#94919129]"
            : "text-red-500"
        } p-3`}
        disabled={currentProgress >= totalProgressClicks}
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
