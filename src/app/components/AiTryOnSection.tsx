'use client';
import React from 'react';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';

const AiTryOnSection = () => {
  const images = [
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://64.media.tumblr.com/c7ca75501b9314b294ea5f869a93f585/tumblr_nbsvqiNDLC1qz8q0ho1_500.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
    'https://cdn.dribbble.com/userupload/28750001/file/original-9bf45c2dac863cf150817f1aa8f2a72e.gif',
  ];

  return (
    <div className='w-full'>
      <div className='relative mx-auto my-10 flex h-screen w-[93%]  flex-col items-center justify-center overflow-hidden rounded-3xl'>
        <div className='z-20'>
          <div className='mb-2 text-[#F71D3B] font-poppins text-[20px] leading-[28px] font-semibold tracking-[2px]'>
            ai try-on
          </div>
          <h2 className='text-[40px] font-semibold mb-4 font-poppins text-[#1B1B1B] leading-[56px]'>
            See It on You, Instantly!
          </h2>
          <p className='text-[#949191] text-[24px] font-[500] font-poppins leading-[36px] mb-8 max-w-[762px]'>
            Skip the guesswork. Our AI Mirror shows how those heels, jeans, or
            jackets look on you, minus the fitting-room queue.
          </p>

          <a
            href='#try-now'
            className='inline-flex items-center font-poppins px-[40px] py-[16px] bg-[#F71D3B] text-white font-semibold rounded-full text-[24px] leading-[36px]'
            role='button'
          >
            Try It On, Right Now
            <svg
              className='w-4 h-4 ml-2'
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
          </a>
        </div>

        {/* overlay */}
        <div
          style={{
            background: 'radial-gradient(#FFF 0%, transparent 95%)',
          }}
          className='absolute inset-0 z-10 h-full w-full m-auto rounded-3xl'
        />
        <ThreeDMarquee
          className='pointer-events-none absolute inset-0 h-full w-full'
          images={images}
        />
      </div>
    </div>
  );
};

export default AiTryOnSection;
