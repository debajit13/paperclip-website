'use client';

import Image from 'next/image';
import {
  animatedImg10,
  animatedImg11,
  animatedImg2,
  animatedImg3,
  animatedImg5,
  animatedImg8,
  animatedImg9,
  arrow,
  arrowFour,
  ashtonMorning,
  downloadNow,
  downloadNow2,
  frameLeft,
  frameRight,
  mobile,
  qrCode,
  referral,
} from '@/utils/assets';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AiTryOnSection from './AiTryOnSection';

export default function FooterSection() {
  const [centerVideoPlayed, setCenterVideoPlayed] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef(null);
  const centerVideoRef = useRef(null);
  const [allVideosPlayed, setAllVideosPlayed] = useState(false);
  const [videoSet, setVideoSet] = useState(1);
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  // IntersectionObserver to detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Handle video playing when in viewport
  useEffect(() => {
    if (isInViewport) {
      // Start playing the center video when in viewport
      if (centerVideoRef.current) {
        (centerVideoRef.current as HTMLVideoElement)?.play();
      }
    } else {
      // Pause videos when not in viewport
      if (centerVideoRef.current) {
        (centerVideoRef.current as HTMLVideoElement)?.pause();
      }
    }
  }, [isInViewport]);

  // Track when all videos have played once
  useEffect(() => {
    if (centerVideoPlayed && allVideosPlayed && !isTransitioning) {
      // Set transitioning state to prevent multiple transitions and fade out videos
      setIsTransitioning(true);

      // Wait for fade out to complete, then change video sources
      setTimeout(() => {
        // When all videos have played once, rotate the video sources
        setVideoSet((prevSet) => (prevSet === 1 ? 2 : prevSet === 2 ? 3 : 1));

        // Wait a bit for the new videos to load their first frame, then fade back in
        setTimeout(() => {
          setAllVideosPlayed(false);
          setIsTransitioning(false);
        }, 300); // Time to load new videos before fading back in
      }, 300); // Time for fade out to complete
    }
  }, [centerVideoPlayed, allVideosPlayed, isTransitioning]);

  // Handle ended event for center video
  const handleCenterVideoEnded = () => {
    setCenterVideoPlayed(true);
    // Restart video to loop after counting it as played once
    if (centerVideoRef.current) {
      (centerVideoRef.current as HTMLVideoElement)?.play();
    }
  };

  // Handle ended events for side videos
  const handleSideVideosEnded = () => {
    // Check if both side videos have ended at least once
    if (centerVideoPlayed && leftVideoRef.current && rightVideoRef.current) {
      setAllVideosPlayed(true);
    }
  };

  return (
    <section className='bg-white relative z-50 min-h-screen text-center flex flex-col items-center mt-[160px] md:mt-[110px] xl:pt-[462px] xl:mt-0'>
      <AiTryOnSection />
      {/* Referral Section */}
      <div className='bg-white  xl:mb-20 text-center rounded-t-[56px] z-0 w-screen'>
        <div className='my-[72px] md:my-20 xl:my-[200px] w-[94%] mx-auto rounded-t-[56px]'>
          <div className='w-[90%] md:w-full mx-auto relative md:col-span-2 md:h-[344px] bg-gradient-to-l from-[#FC9CA8] to-[#FFF2F3] p-6 rounded-[32px] shadow-lg flex flex-col md:flex-row md:justify-between items-center text-left'>
            <div className='h-[80%] md:w-[50%] xl:w-[40%] flex flex-col justify-between md:ml-6'>
              <div>
                <h4 className='text-[32px] font-[600] xl:text-[40px] leading-[40px] xl:leading-[56px] font-poppins'>
                  Earn <span className='text-[#F71D3B]'>1%</span> of your
                  Friends!
                </h4>
                <p className='text-gray-600 font-[500] text-[16px] leading-[24px] xl:text-[24px] xl:leading-[36px] mt-4 font-poppins'>
                  We’ll pay you 1% of everything your friends make!
                </p>
              </div>

              <button className='max-w-[405px] mt-4 bg-white text-[#F71D3B] py-[12px] xl:py-2 px-6 rounded-[100px] font-[600] font-poppins text-[16px] leading-[16px] xl:text-[24px] xl:leading-[36px]'>
                Refer your friends today! →
              </button>
            </div>

            {/* Desktop */}
            <div className={'hidden xl:block mt-10 xl:mr-6'}>
              <Image
                src={referral}
                alt={`img-referral`}
                height={170}
                width={418}
              />
            </div>

            {/* Mobile/Tab */}
            <div className={'block xl:hidden mt-10 md:mt-0'}>
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
      <div className="w-full pb-20 xl:pb-40 relative xl:bg-[url('/bg-dots-2.svg')] xl:bg-bottom xl:bg-cover">
        <div className='hidden xl:block xl:mt-[-100px]'>
          <div className='relative flex flex-row items-center justify-center transform mb-20 mx-auto'>
            {/* Floating Text with Arrow */}
            <div className='absolute left-32 top-0 flex flex-row items-center transform rotate-6 -mt-14 ml-4'>
              <div className='text-gray-900 text-xs font-bold'>
                <Image
                  src={downloadNow2}
                  alt='download now'
                  width={257}
                  height={32}
                />
              </div>
              <Image
                src={arrowFour}
                alt='arrow'
                width={100}
                height={100}
                className='absolute top-10 left-52'
              />
            </div>

            <Image src={qrCode} alt='QR Code' width={224} height={224} />
          </div>
        </div>

        <div className='hidden md:block'>
          <Navbar customStyle='w-[361px] md:w-[464px]' />
        </div>

        <div className='block md:hidden'>
          <NavbarMobile />
        </div>

        <h4 className='font-poppins text-[12px] leading-[16px] font-[500px] mt-10'>
          Crafted with ❤️ from London
        </h4>

        <div className='hidden xl:block absolute top-28 left-0'>
          <Image
            src={animatedImg2}
            alt='animatedImg-2'
            width={120}
            height={387}
          />
        </div>

        <div className='hidden xl:block absolute bottom-[-30px] left-0'>
          <Image
            src={animatedImg3}
            alt='animatedImg-3'
            width={220}
            height={387}
          />
        </div>

        <div className='hidden xl:block absolute bottom-[-30px] left-60'>
          <Image
            src={animatedImg8}
            alt='animatedImg-8'
            width={220}
            height={387}
          />
        </div>

        <div className='hidden xl:block absolute bottom-[-30px] right-60'>
          <Image
            src={ashtonMorning}
            alt='animatedImg-9'
            width={200}
            height={387}
          />
        </div>

        <div className='hidden xl:block absolute bottom-[-30px] right-0'>
          <Image
            src={animatedImg10}
            alt='animatedImg-10'
            width={240}
            height={387}
          />
        </div>

        <div className='hidden xl:block absolute right-0 top-48'>
          <Image
            src={animatedImg11}
            alt='animatedImg-11'
            width={100}
            height={240}
          />
        </div>
      </div>
    </section>
  );
}
