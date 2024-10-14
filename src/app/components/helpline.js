import React from 'react';
import ribon2 from '../../assets/rebon2.jpg';
import Image from 'next/image';

const Helpline = () => {
  return (
    <div>
      {/* <div className='flex justify-between flex-wrap'>
        <div className='flex-shrink-0'>
          <Image src={ribon2} width={90} alt="" />
        </div>
        <div className='flex-shrink-0'>
          <Image src={ribon2} width={90} alt="" />
        </div>
      </div> */}
      <div className='bg-[#8b0000] h-[30vh] flex flex-row items-center md:items-center gap-10 justify-around'>
        <div className='mt-4 text-center pl-10'>
          <h1 className='font-bold text-white text-2xl md:text-3xl'>Helpline Number</h1>
          <div className='flex items-center flex-col'>
            <h1 className='text-2xl md:text-7xl text-white font-black'>1097</h1>
            <p className='text-white text-xl md:text-lg font-light underline'>Toll free</p>
          </div>
        </div>

        <div className='mt-4 flex items-start flex-col'>
          <h1 className='text-white font-bold text-2xl md:text-5xl'>Latest News</h1>
          <p className='text-white text-xs md:text-base mx-auto my-2'>
            More than 800 students test HIV positive in this state, 47 deaths recorded....
          </p>
          <button className='bg-none text-white font-semibold mt-2 text-xl md:text-base'>Read more...</button>
        </div>
      </div>
    </div>
  );
};

export default Helpline;
