"use client";
import React from "react";
import { FaRocket, FaShieldAlt, FaCloud } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[960px] h-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-10">
      <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
      <p className="mt-2 text-lg">
        Experience seamless integration and smart solutions.
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[960px] h-full bg-gray-900 text-white rounded-lg shadow-lg p-10">
      <h2 className="text-3xl font-bold">Business Statistics</h2>
      <p className="mt-2 text-lg">Track performance with real-time data.</p>
      <div className="mt-4 flex space-x-8">
        <div className="text-center">
          <p className="text-2xl font-bold">10K+</p>
          <p>Active Users</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">5M+</p>
          <p>Transactions</p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[960px] h-full bg-green-500 text-white rounded-lg shadow-lg p-10">
      <h2 className="text-3xl font-bold">Powerful Features</h2>
      <p className="mt-2 text-lg">
        Enhance productivity with cutting-edge tools.
      </p>
      <div className="mt-4 flex space-x-8">
        <div className="flex flex-col items-center">
          <FaRocket className="text-4xl" />
          <p>Fast Performance</p>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-4xl" />
          <p>High Security</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCloud className="text-4xl" />
          <p>Cloud Support</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[960px] h-full bg-yellow-500 text-white rounded-lg shadow-lg p-10">
      <h2 className="text-3xl font-bold">What Our Users Say</h2>
      <p className="mt-2 text-lg">Real feedback from our amazing community.</p>
      <div className="mt-4 text-center italic">
        <p>“This platform changed the way we work. Absolutely love it!”</p>
        <p className="mt-2 font-bold">- Sarah Johnson</p>
      </div>
    </div>
  );
};

const CallToActionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[960px] h-full bg-red-500 text-white rounded-lg shadow-lg p-10">
      <h2 className="text-3xl font-bold">Get Started Today</h2>
      <p className="mt-2 text-lg">
        Join us and take your business to the next level.
      </p>
      <button className="mt-4 px-6 py-2 bg-white text-red-500 font-bold rounded-lg hover:bg-gray-200">
        Sign Up Now
      </button>
    </div>
  );
};

const ScrollingCarousel = () => {
  const components = [
    HeroSection,
    StatsSection,
    FeaturesSection,
    TestimonialsSection,
    CallToActionSection,
  ];

  const items = [...components, ...components]; // Duplicate for smooth looping

  return (
    <div className="relative flex justify-center items-center h--[512px] my-40">
      <div className="slider relative overflow-hidden bg-white w-screen h-[512px]">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent z-10"></div>

        {/* Scrolling Sections */}
        <div className="slide-track flex flex-nowrap animate-scroll space-x-4 h-full">
          {items.map((Component, index) => (
            <div key={index} className="slide w-[960px] h-full flex-shrink-0">
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCarousel;
