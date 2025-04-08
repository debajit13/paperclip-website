'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCarousel from '@/components/ui/testimonial-carousel';
import Image from 'next/image';
import { HeroBg1, HeroBg2, HeroBg3, HeroBg4 } from '@/utils/assets';

export default function Home() {
  const [hideImages, setHideImages] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const initialOpacity = 0;
  const initialScale = 0.5;
  const exitOpacity = 0;
  const exitScale = 0.5;
  const opacity = 1;
  const scale = 1;
  const transitionDuration = 0.5;
  const easeValue = 'easeInOut';

  // The single video path
  const videoPath = '/videos/hero_listing_video_all.mp4';

  // Content for each section with timestamps (in seconds)
  const headings = [
    {
      main: 'Sell your stuff in seconds',
      highlight: 'with AI :)',
      startTime: 0,
      endTime: 14.13,
    },
    {
      main: 'With AI try-on see it on you,',
      highlight: 'Instantly!',
      startTime: 14.13,
      endTime: 25.61, // 14.13 + 11.48 = 25.61
    },
    {
      main: 'Scan now to',
      highlight: 'Download  →',
      startTime: 25.61,
      endTime: 27.88, // 25.61 + 2.27 = 27.88
    },
  ];

  useEffect(() => {
    // Set isBrowser to true once component is mounted
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    // Only run this effect in the browser
    if (!isBrowser) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only hide side images when we start scrolling
      setHideImages(currentScrollY > 50);
    };

    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call to set positions
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isBrowser]);

  // Set up video and time tracking
  useEffect(() => {
    if (!videoRef.current) return;

    // Preload the video
    videoRef.current.preload = 'auto';

    // Function to update text based on current video time
    const handleTimeUpdate = () => {
      if (!videoRef.current) return;

      const currentTime = videoRef.current.currentTime;

      // Find the active section based on the current time
      for (let i = 0; i < headings.length; i++) {
        if (
          currentTime >= headings[i].startTime &&
          currentTime < headings[i].endTime
        ) {
          if (activeSection !== i) {
            setActiveSection(i);
          }
          break;
        }
      }

      // If we're past the last section's end time, we'll catch it in the ended event
      // where we reset to the beginning of the video
    };

    // Handle video ending and looping
    const handleVideoEnd = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        setActiveSection(0);
        videoRef.current
          .play()
          .catch((e) => console.log('Video replay prevented:', e));
      }
    };

    // Add event listeners
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    videoRef.current.addEventListener('ended', handleVideoEnd);

    // Start playing the video
    videoRef.current
      .play()
      .catch((e) => console.log('Video autoplay prevented:', e));

    // Cleanup
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [activeSection]);

  return (
    <div
      ref={containerRef}
      className="min-h-[120vh] w-full xl-custom:bg-[url('/hero-bg.svg')] xl-custom:bg-top xl-custom:bg-cover mb-20"
      id='hero-section'
    >
      <div className="min-h-screen bg-cover bg-[url('/bg-dots.svg')]">
        <section className='relative flex flex-col lg-custom:flex-row justify-between px-4 md:px-16 sm:pt-[100px] md:pb-0'>
          {/* Text content */}
          <div className='w-full lg-custom:w-2/3  flex flex-col justify-center mb-8 md:mb-0'>
            <div className='h-full'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  className='mb-8'
                >
                  <h1 className='text-4xl mt-10 pt-3 ml-2 md:text-5xl lg:text-[80px]  max-w-full lg-custom:max-w-[552px] font-poppins font-[600] mb-2 text-center lg-custom:text-left tracking-[-0.5px]'>
                    {headings[activeSection].main}
                  </h1>
                  <h2 className='text-5xl md:text-6xl ml-2 lg:text-8xl leading-tight lg:leading-[100px] font-playfair font-[800] italic text-[#F71D3B] text-center lg-custom:text-left'>
                    {headings[activeSection].highlight}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='mt-1'>
              <TestimonialCarousel />
            </div>
          </div>

          {/* Video section */}
          <div className='w-full lg-custom:w-1/3 flex items-center justify-center'>
            <div className='relative w-full max-w-[300px] mb-[120px] lg-custom:mb-5'>
              <div className='w-full h-full'>
                <video
                  ref={videoRef}
                  className='sm:w-[250px] md:w-full md:h-full object-cover'
                  autoPlay
                  muted
                  playsInline
                >
                  <source src={videoPath} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <button className='block sm:hidden md:hidden lg:hidden xl:hidden bg-[#F71D3B] w-full text-white py-4 px-6 rounded-full font-semibold text-base leading-6'>
            Download App
          </button>
        </section>

        {/* Side Animated Assets */}
        <AnimatePresence>
          {!hideImages && (
            <>
              <motion.div
                className='absolute top-0 left-0 hidden xl:block'
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={HeroBg3}
                  alt='decorative-element-1'
                  width={120}
                  height={250}
                />
              </motion.div>
              <motion.div
                className='absolute top-0 left-16 hidden xl:block'
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={HeroBg4}
                  alt='decorative-element-2'
                  width={250}
                  height={250}
                />
              </motion.div>

              <motion.div
                className='absolute top-0 right-[8rem] hidden xl:block z-50'
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={HeroBg1}
                  alt='decorative-element-3'
                  width={200}
                  height={240}
                />
              </motion.div>

              <motion.div
                className='absolute top-0 right-0 hidden xl:block'
                initial={{ opacity: initialOpacity, scale: initialScale }}
                animate={{ opacity: opacity, scale: scale }}
                exit={{ opacity: exitOpacity, scale: exitScale }}
                transition={{ duration: transitionDuration, ease: easeValue }}
              >
                <Image
                  src={HeroBg2}
                  alt='decorative-element-4'
                  width={150}
                  height={250}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
