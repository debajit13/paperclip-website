'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AISelling() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='relative'>
      <div className='h-40 h-[200px] bg-gradient-to-t from-[#FFF2F3] to-white absolute z-0 left-[-2px] w-screen mx-auto'></div>
      <section className='bg-white rounded-xl mt-[-50px] md:mt-[-145px] xl:mt-[132px] py-5 md:py-10 px-[16px] text-center rounded-t-[56px] relative z-50 w-screen'>
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
          className=' mb-[120px] mx-auto'
        >
          <h2 className='hidden md:block mt-[160px] text-[40px] md:text-[68px] font-semibold font-poppins text-gray-800 leading-[48px] md:leading-[72px]'>
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

          <p className='mt-6 md:mt-10 max-w-[90%] text-[#949191] font-poppins text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] mx-auto'>
            From snap to sale in seconds—our AI auto-fills details, sets fair
            prices, and handles negotiation. No forms, no lowball offers, stress
            free shipping, and zero fees. What’s not to love?
          </p>
        </motion.div>
      </section>
    </div>
  );
}
