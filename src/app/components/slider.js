'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';

const images = [slider1, slider2, slider3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-center mt-6'>
      <Image 
        src={images[currentIndex]} 
        alt={`Slider ${currentIndex + 1}`} 
        className="w-full h-auto object-cover transition-opacity duration-500" 
        key={currentIndex}
      />
    </div>
  );
};

export default Slider;
