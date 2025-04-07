'use client';

import { cn } from '@/lib/utils';
import { user1, user2, user3 } from '@/utils/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TestimonialCard from './testimonial-card';

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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

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
    <div
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden ',
        className
      )}
    >
      <ul className={cn('flex min-w-full shrink-0 py-4 w-max flex-nowrap')}>
        {components.map((item, idx) => (
          <li
            className='h-full  relative flex-shrink-0 py-2 mx-2'
            key={item.key}
          >
            <item.Component />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialCarousel;
