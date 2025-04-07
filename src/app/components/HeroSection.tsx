// pages/index.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import TestimonialCarousel from '@/components/ui/testimonial-carousel';
import PhoneFrameVideo from './PhoneFrameVideo';
import {
  animatedImg1,
  animatedImg2,
  animatedImg3,
  animatedImg5,
  animatedImg6,
  animatedImg7,
  applepay,
  PhoneFrameHand,
  HeroBg1,
  HeroBg2,
  HeroBg3,
  HeroBg4,
} from '@/utils/assets';
import Image from 'next/image';

export default function Home() {
  const [hideImages, setHideImages] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasCompletedForwardSequence, setHasCompletedForwardSequence] =
    useState(false);
  const [hasCompletedReverseSequence, setHasCompletedReverseSequence] =
    useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationSectionRef = useRef<HTMLDivElement>(null);
  const scrollDirectionRef = useRef<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const initialOpacity = 0;
  const initialScale = 0.5;
  const exitOpacity = 0;
  const exitScale = 0.5;
  const opacity = 1;
  const scale = 1;
  const transitionDuration = 0.5;
  const easeValue = 'easeInOut';

  // Track overall page scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const videos = ['/video1.mp4', '/video2.mp4', '/video3.mp4'];

  const headings = [
    {
      main: 'With AI try-on see it on you,',
      highlight: 'Instantly!',
    },
    {
      main: 'Perfect fit guarantee,',
      highlight: 'No returns!',
    },
    {
      main: 'Shop with confidence,',
      highlight: 'Every time!',
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

    // Intersection observer to handle visibility of hero section
    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHideImages(false);
        }
      });
    };

    // Create intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call to set positions
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, [isBrowser]); // Add isBrowser to dependencies

  // Function to update the video
  const updateVideo = (index: number) => {
    if (videoRef.current) {
      videoRef.current.src = videos[index];
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((e) => console.log('Video autoplay prevented'));
    }
  };

  // Determine scroll direction and whether we're at the top of the page
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      scrollDirectionRef.current =
        currentScrollY < lastScrollY.current ? 'up' : 'down';
      lastScrollY.current = currentScrollY;

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        // If we're at the very top of the page
        if (currentScrollY <= 0) {
          // If we just completed scrolling through all sections and now at the top
          if (hasCompletedReverseSequence) {
            setHasCompletedReverseSequence(false);
            setActiveSection(0); // Reset to first section
          }
          // If we're scrolling up at the top (trying to go past the top)
          else if (scrollDirectionRef.current === 'up' && !isScrollLocked) {
            setIsScrollLocked(true);
            setActiveSection(2); // Start with the last section for reverse sequence
          }
        }
        // If we're entering the section from below (scrolling up)
        else if (
          scrollDirectionRef.current === 'up' &&
          animationSectionRef.current &&
          animationSectionRef.current.getBoundingClientRect().bottom >=
            window.innerHeight &&
          animationSectionRef.current.getBoundingClientRect().top <= 0 &&
          !isScrollLocked &&
          !hasCompletedForwardSequence
        ) {
          setIsScrollLocked(true);
          setActiveSection(2); // Start with the last section for reverse sequence
        }
        // If we're entering the section from above (scrolling down)
        else if (
          scrollDirectionRef.current === 'down' &&
          animationSectionRef.current &&
          animationSectionRef.current.getBoundingClientRect().top <= 0 &&
          !isScrollLocked &&
          !hasCompletedReverseSequence
        ) {
          setIsScrollLocked(true);
          setActiveSection(0); // Start with the first section for forward sequence
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [
    isScrollLocked,
    hasCompletedForwardSequence,
    hasCompletedReverseSequence,
  ]);

  // Apply scroll locking
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isScrollLocked]);

  // Handle wheel events for locked scrolling
  useEffect(() => {
    if (!isScrollLocked) return;

    let wheelTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        // Determine wheel direction (positive = down, negative = up)
        const wheelDirection = e.deltaY > 0 ? 'down' : 'up';

        setActiveSection((prev) => {
          let next = prev;

          // Forward navigation (0 -> 1 -> 2 -> unlock)
          if (wheelDirection === 'down') {
            if (prev < headings.length - 1) {
              next = prev + 1;
            } else if (prev === headings.length - 1) {
              // Reached the end, unlock and allow scrolling to continue
              setIsScrollLocked(false);
              setHasCompletedForwardSequence(true);
              setHasCompletedReverseSequence(false);
            }
          }
          // Backward navigation (2 -> 1 -> 0 -> unlock)
          else if (wheelDirection === 'up') {
            if (prev > 0) {
              next = prev - 1;
            } else if (prev === 0) {
              // Reached the beginning, unlock and allow scrolling to continue
              setIsScrollLocked(false);
              setHasCompletedReverseSequence(true);
              setHasCompletedForwardSequence(false);

              // Scroll to the very top when completed reverse sequence
              if (window.scrollY > 0) {
                window.scrollTo({
                  top: 0,
                  behavior: 'auto',
                });
              }
            }
          }

          // Update video if section changed
          if (next !== prev) {
            updateVideo(next);
          }

          return next;
        });
      }, 100);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Handle touch events for mobile
    const touchStartY = { value: 0 };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.value = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrollLocked) return;
      e.preventDefault();

      const touchY = e.touches[0].clientY;
      const diff = touchStartY.value - touchY;

      if (Math.abs(diff) > 50) {
        // Determine touch direction (positive diff = down swipe, negative = up swipe)
        const touchDirection = diff > 0 ? 'down' : 'up';

        setActiveSection((prev) => {
          let next = prev;

          // Forward navigation (0 -> 1 -> 2 -> unlock)
          if (touchDirection === 'down') {
            if (prev < headings.length - 1) {
              next = prev + 1;
            } else if (prev === headings.length - 1) {
              // Reached the end, unlock and allow scrolling to continue
              setIsScrollLocked(false);
              setHasCompletedForwardSequence(true);
              setHasCompletedReverseSequence(false);
            }
          }
          // Backward navigation (2 -> 1 -> 0 -> unlock)
          else if (touchDirection === 'up') {
            if (prev > 0) {
              next = prev - 1;
            } else if (prev === 0) {
              // Reached the beginning, unlock and allow scrolling to continue
              setIsScrollLocked(false);
              setHasCompletedReverseSequence(true);
              setHasCompletedForwardSequence(false);

              // Scroll to the very top when completed reverse sequence
              if (window.scrollY > 0) {
                window.scrollTo({
                  top: 0,
                  behavior: 'auto',
                });
              }
            }
          }

          // Update video if section changed
          if (next !== prev) {
            updateVideo(next);
          }

          touchStartY.value = touchY; // Reset for next move
          return next;
        });
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(wheelTimeout);
    };
  }, [isScrollLocked, headings.length]);

  // Reset sequences when exiting the section completely
  useEffect(() => {
    const checkVisibility = () => {
      if (animationSectionRef.current) {
        const rect = animationSectionRef.current.getBoundingClientRect();

        // If section is no longer visible at all
        if (
          (rect.bottom < 0 || rect.top > window.innerHeight * 1.3) &&
          !isScrollLocked
        ) {
          setHasCompletedForwardSequence(false);
          setHasCompletedReverseSequence(false);
        }
      }
    };

    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [isScrollLocked]);

  return (
    <div
      ref={containerRef}
      className="min-h-[140vh]  bg-[url('/shadow-bg.svg')] bg-top bg-cover w-full"
      id='hero-section'
    >
      <div
        ref={animationSectionRef}
        className="h-screen bg-cover bg-[url('/bg-dots.svg')]"
      >
        <section className='sticky top-0 h-screen flex flex-col md:flex-row justify-between px-4 md:px-16 pt-[90px] pr-0 md:pr-0'>
          <div className='w-full flex flex-col justify-center'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className='mb-8'
              >
                <h1 className='text-4xl leading-[96px] md:text-[80px] max-w-[552px] font-poppins font-[600] mb-2 text-left tracking-[-0.5px]'>
                  {headings[activeSection].main}
                </h1>
                <h2 className='text-5xl md:text-8xl leading-[100px] font-playfair font-[800] italic text-[#F71D3B] text-left'>
                  {headings[activeSection].highlight}
                </h2>
              </motion.div>
            </AnimatePresence>
            <TestimonialCarousel />
          </div>
          <div className='flex items-end justify-end'>
            <PhoneFrameVideo
              frameImageSrc={`${PhoneFrameHand.src}`}
              videoSrc='/videos/hero_mobile.mp4'
            />
          </div>
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
                  alt='animatedImg-1'
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
                  alt='animatedImg-1'
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
                  alt='animatedImg-4'
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
                  alt='animatedImg-7'
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
