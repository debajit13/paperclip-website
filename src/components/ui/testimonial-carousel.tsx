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
        testimonial='As a new seller on Paperclip, so far I’m very happy with the way the selling system works, it’s secure for both sides.'
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
      className={cn('relative z-20 overflow-hidden', className)}
    >
      <ul
        ref={scrollRef}
        className={cn(
          'flex flex-nowrap overflow-x-auto snap-x snap-mandatory',
          'sm:flex-wrap sm:overflow-visible no-scrollbar',
          'scroll-smooth min-w-full shrink-0 py-3 w-full justify-center lg-custom:justify-start '
        )}
      >
        {components.map((item) => (
          <li
            className='h-full relative flex-shrink-0 py-2 mx-2 w-[90%] sm:w-auto snap-start'
            key={item.key}
          >
            <item.Component />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TestimonialCarousel;
