'use client';
import React from 'react';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import {
  gif1,
  gif10,
  gif11,
  gif12,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  gif7,
  gif8,
  gif9,
} from '@/utils/assets';

const AiTryOnSection = () => {
  const images = [
    gif1.src,
    gif2.src,
    gif3.src,
    gif1.src,
    gif2.src,
    gif3.src,
    gif4.src,
    gif5.src,
    gif6.src,
    gif4.src,
    gif5.src,
    gif6.src,
    gif7.src,
    gif8.src,
    gif9.src,
    gif7.src,
    gif8.src,
    gif9.src,
    gif10.src,
    gif11.src,
    gif12.src,
    gif10.src,
    gif11.src,
    gif12.src,
  ];

  return (
    <div className='w-full'>
      <div className='relative mx-auto my-10 flex h-screen  flex-col items-center justify-center overflow-hidden'>
        <div className='z-20'>
          <div className='mb-6 text-[#F71D3B] font-poppins text-[20px] leading-[28px] font-semibold tracking-[2px]'>
            AI try-on
          </div>
          <h2 className='mb-4 text-[#1B1B1B] text-[46px] md:text-[58px] xl:text-[68px] font-poppins font-semibold leading-[51px] md:leading-[72px] tracking-[-0.5px]'>
            See It on You, Instantly!
          </h2>
          <p className='text-[#706363] font-[500] font-poppins mb-10 max-w-[762px] text-[16px] md:text-[24px] leading-[24px] md:leading-[32px]'>
            Skip the guesswork. Our AI Mirror shows how those heels, jeans, or
            jackets look on you, minus the fitting-room queue.
          </p>

          <button
            className='inline-flex items-center bg-[#F71D3B] text-white  max-w-[320px] py-3 px-6 rounded-[100px] font-[600] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[36px]'
            role='button'
          >
            Try It On, Right Now
            <svg
              className='w-[24px] ml-2 font-bold'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 12H19M19 12L12 5M19 12L12 19'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>

        {/* overlay */}
        <div className='absolute inset-0 z-10 h-full w-full m-auto aitryon-div' />
        <ThreeDMarquee
          className='pointer-events-none absolute inset-0 h-full w-full'
          images={images}
        />
      </div>
    </div>
  );
};

export default AiTryOnSection;
