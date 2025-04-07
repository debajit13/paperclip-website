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
    {
      key: 4,
      Component: FrameOne,
    },
    {
      key: 5,
      Component: FrameTwo,
    },
    {
      key: 6,
      Component: FrameThree,
    },
  ];

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {components.map((item, idx) => (
          <li
            className='w-[450px] h-full max-w-full relative flex-shrink-0 py-2 md:w-[960px]'
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
