'use client';

import { cn } from '@/lib/utils';
import { user1, user2, user3 } from '@/utils/assets';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import TestimonialCard from './testimonial-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items?: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const scrollRef = useRef<HTMLUListElement>(null);

  // Optional: scroll to next/prev card on mobile
  const scrollByCard = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth; // full width for 1 card
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const FrameOne = () => {
    return (
      <TestimonialCard
        name='Afhaat'
        handle='@athaat'
        rating={5}
        testimonial="As a new seller on Paperclip, so far I'm very happy with the way the selling system works, it's secure for both sides."
        avatarUrl={user2.src}
      />
    );
  };

  const FrameTwo = () => {
    return (
      <TestimonialCard
        name='Jaycee'
        handle='@loveitall0'
        rating={5}
        testimonial='Paperclip is such a refreshing buy and sell app that is unique from others and lovely to use!'
        avatarUrl={user1.src}
      />
    );
  };

  const FrameThree = () => {
    return (
      <TestimonialCard
        name='Four Bears Apparel'
        handle='@fourbearsapparel'
        rating={5}
        testimonial='My experience with Paperclip has been great. The App is straight forward and listing items is a breeze.'
        avatarUrl={user3.src}
      />
    );
  };

  const components = [
    {
      key: 1,
      Component: FrameOne,
    },
    {
      key: 2,
      Component: FrameTwo,
    },
    {
      key: 3,
      Component: FrameThree,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className={cn('relative z-20', className)}
    >
      {/* Main container with no overflow restriction */}
      <div className='w-full relative pb-6'>
        {/* Scrollable container with padding to allow shadows to show */}
        <div className='overflow-hidden px-4 sm:px-6'>
          <ul
            ref={scrollRef}
            className={cn(
              'flex flex-nowrap px-6', // Negative margin technique to hide scrollbar but keep content scrollable
              'overflow-x-scroll touch-pan-x', // Enable horizontal scroll
              'sm:flex-wrap sm:overflow-visible sm:mx-0 sm:px-0', // Reset on desktop
              'scroll-smooth min-w-full py-3 w-full justify-start snap-x snap-mandatory',
              'no-scrollbar' // Hide scrollbar but keep functionality
            )}
            style={{
              paddingBottom: '20px', // Extra padding to ensure shadow is visible
              marginBottom: '-20px', // Negative margin to compensate for padding
            }}
          >
            {components.map((item, index) => (
              <li
                className={cn(
                  'h-full relative flex-shrink-0 py-2 mx-3 w-[85%] sm:w-auto snap-center'
                )}
                key={item.key}
              >
                <item.Component />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCarousel;
