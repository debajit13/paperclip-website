"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { carousalImg } from "@/utils/assets";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const totalSlides = 26;
const slidesPerView = 1; // We show only 1 image per view

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + slidesPerView, totalSlides - slidesPerView)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - slidesPerView, 0));
  };

  return (
    <div className="w-screen max-w-[98%] mx-auto relative">
      {/* Progress Bar */}
      <ProgressBar currentSlide={currentSlide} />

      {/* Carousel Content */}
      <div className="relative overflow-hidden w-full mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide / slidesPerView) * 100}%)`,
          }}
        >
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center rounded-lg "
            >
              <Image
                src={carousalImg}
                alt={`img-${index + 1}`}
                height={584}
                width={1920} // Full width image
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`absolute left-0 top-1/2 mt-6 transform -translate-y-1/2 bg-transparent ${
          currentSlide === 0 ? "text-gray-500" : "text-red-500"
        } p-3`}
        disabled={currentSlide === 0}
      >
        <FaChevronLeft size={40} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`absolute right-0 top-1/2 mt-6 transform -translate-y-1/2 bg-transparent ${
          currentSlide >= totalSlides - slidesPerView
            ? "text-gray-500"
            : "text-red-500"
        } p-3`}
        disabled={currentSlide >= totalSlides - slidesPerView}
      >
        <FaChevronRight size={40} />
      </button>
    </div>
  );
}
