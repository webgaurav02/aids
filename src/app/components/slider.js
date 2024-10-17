'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';

const images = [slider1, slider2, slider3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsSliding(false);
      }, 500); // Match this duration to your CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='overflow-hidden w-full'>
      <div
        className={`flex transition-transform duration-500 ${isSliding ? 'transform' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image 
              src={image} 
              alt={`Slider ${index + 1}`} 
              className="w-full h-auto object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
