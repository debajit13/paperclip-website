'use client';
import { useRef } from 'react';
import HomeCardsGrid from './HomeCardsGrid';
import { motion, useInView } from 'framer-motion';

export default function BuyerFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className='mt-[188px] md:mt-[200px] z-50 bg-white xl:mt-0 xl:pt-[491px] text-center w-[98%] mx-auto'>
      {/* Hero Section */}
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
      >
        <h2 className='text-[40px] md:text-[68px] px-[16px] font-bold font-poppins text-gray-800 leading-[48px] md:leading-[72px] w-full'>
          Shop{' '}
          <span className='text-[#F71D3B] italic font-playfair'>Smarter</span>,
          Buy{' '}
          <span className='text-[#F71D3B] italic font-playfair'>Better!</span>
        </h2>
        <p className='mt-6 md:mt-10 xl:mb-[181px] px-[16px] text-[#949191] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] mx-auto'>
          Paperclip transforms shopping into a seamless, personalized experience
          with smart AI tools, hassle-free deals, and fast shipping.
        </p>
      </motion.div>

      <HomeCardsGrid />
    </section>
  );
}
