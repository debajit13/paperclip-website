'use client';
import React, { useRef, useEffect, useState } from 'react';

// Define the props interface for type safety
interface PhoneFrameVideoProps {
  frameImageSrc: string;
  videoSrc: string;
  frameImageAlt?: string;
}

const PhoneFrameVideo: React.FC<PhoneFrameVideoProps> = ({
  frameImageSrc,
  videoSrc,
  frameImageAlt = 'Phone frame',
}) => {
  // Define the dimensions state with proper typing
  const [frameDimensions, setFrameDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  // Properly type the ref
  const frameRef = useRef<HTMLImageElement>(null);

  // Calculate the position and dimensions for the video based on the frame
  useEffect(() => {
    if (frameRef.current) {
      const img = new Image();
      img.onload = () => {
        if (frameRef.current) {
          setFrameDimensions({
            width: frameRef.current.clientWidth,
            height: frameRef.current.clientHeight,
          });
        }
      };
      img.src = frameImageSrc;
    }
  }, [frameImageSrc]);

  // Define video styles with proper React.CSSProperties type
  const videoStyles: React.CSSProperties = {
    position: 'absolute',
    top: '17%', // Adjust these values to match your phone frame
    left: '9%', // where the screen should appear
    width: '300px', // Adjust width to fit inside the phone screen
    height: '600px', // Adjust height to fit inside the phone screen
    objectFit: 'cover',
    borderRadius: '12px', // Optional: if the phone screen has rounded corners
  };

  return (
    <div className='phone-frame-container'>
      <img
        ref={frameRef}
        src={frameImageSrc}
        alt={frameImageAlt}
        className='phone-frame w-[646px]'
      />
      {frameDimensions.width > 0 && (
        <video style={videoStyles} autoPlay muted loop playsInline>
          <source src={videoSrc} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default PhoneFrameVideo;
