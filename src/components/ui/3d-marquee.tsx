'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  useEffect(() => {
    console.log(chunks);
  }, [chunks]);
  return (
    <div
      className={cn(
        'mx-auto block h-[600px] overflow-hidden  max-sm:h-100',
        className
      )}
    >
      <div className='flex size-full items-center justify-center'>
        <div className='size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100'>
          <div
            style={{
              transform: 'rotateX(25deg) rotateY(0deg) rotateZ(-20deg)',
            }}
            className='relative top-96 right-[12%] grid size-full origin-top-left grid-cols-6 gap-6 transform-3d'
          >
            {/* First two columns with images */}
            {chunks.slice(0, 2).map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 25,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                key={colIndex + 'marquee'}
                className='flex flex-col items-start gap-9'
              >
                {subarray.map((image, imageIndex) => (
                  <div className='relative' key={imageIndex + image}>
                    <motion.img
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className='aspect-[9/18] rounded-3xl object-cover ring ring-gray-950/5 hover:shadow-2xl'
                    />
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Two middle filler columns (empty) */}
            {Array.from({ length: 2 }, (_, fillerIndex) => (
              <motion.div
                animate={{ y: fillerIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: fillerIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                key={`filler-${fillerIndex}`}
                className='flex flex-col items-start gap-8'
              >
                {/* Empty divs to maintain spacing and structure */}
                {Array.from({ length: chunkSize }, (_, emptyIndex) => (
                  <div
                    className='aspect-[9/18] rounded-3xl ring ring-gray-950/5'
                    key={`empty-${fillerIndex}-${emptyIndex}`}
                  />
                ))}
              </motion.div>
            ))}

            {/* Last two columns with images */}
            {chunks.slice(2, 4).map((subarray, colIndex) => (
              <motion.div
                animate={{ y: (colIndex + 2) % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: (colIndex + 2) % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                key={colIndex + 2 + 'marquee'}
                className='flex flex-col items-start gap-8'
              >
                {subarray.map((image, imageIndex) => (
                  <div className='relative' key={imageIndex + image}>
                    <motion.img
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className='aspect-[9/18] rounded-3xl object-cover ring ring-gray-950/5 hover:shadow-2xl'
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '1px',
          '--width': '5px',
          '--fade-stop': '90%',
          '--offset': offset || '200px', //-100px if you want to keep the line inside
          '--color-dark': 'rgba(255, 255, 255, 0.2)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]',
        'bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className
      )}
    ></div>
  );
};
