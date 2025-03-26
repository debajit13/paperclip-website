'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AISelling() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='relative'>
      <div className='h-40 xl:h-[1000px] bg-gradient-to-t from-[#FFF2F3] via-[#FFD1D6] to-white absolute z-0 top-[-100px] md:top-[-210px] xl:top-[-250px] left-[-2px] w-screen mx-auto'></div>
      <section className='bg-white mt-[-50px] md:mt-[-145px] xl:mt-[132px] py-5 md:py-10 px-[16px] text-center rounded-t-[56px] relative z-10 w-screen'>
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
          className='mt-16 mb-6 xl:mt-[240px] xl:mb-[200px] mx-auto'
        >
          <h2 className='hidden md:block text-[40px] md:text-[68px] font-semibold font-poppins text-gray-800 leading-[48px] md:leading-[72px]'>
            Sell{' '}
            <span className='text-[#F71D3B] italic font-playfair'>Easy</span>{' '}
            {', '}
            Shop{' '}
            <span className='text-[#F71D3B] italic font-playfair'>Happy!</span>
          </h2>
          <h2 className='block md:hidden text-[40px] md:text-[68px] font-semibold font-poppins text-gray-800 leading-[48px] md:leading-[72px]'>
            Sell{' '}
            <span className='text-[#F71D3B] italic font-playfair'>Easy</span> —{' '}
            <br />
            Shop{' '}
            <span className='text-[#F71D3B] italic font-playfair'>Happy!</span>
          </h2>

          <p className='mt-6 md:mt-10 text-gray-500 max-w-[90%] text-[#949191] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] mx-auto'>
            From snap to sale in seconds—our ai auto-fills details, sets fair
            prices, and handles negotiation. No forms, no lowball offers, stress
            free shipping, and zero fees. What’s not to love?
          </p>
        </motion.div>
      </section>
    </div>
  );
}
