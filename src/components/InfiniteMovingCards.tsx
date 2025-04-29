'use client';

import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <InfiniteMovingCards direction='right' speed='slow' />
    </div>
  );
}
