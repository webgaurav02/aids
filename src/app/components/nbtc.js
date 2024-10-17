import React from 'react';
import Image from 'next/image';
import Scanner from '../../assets/download.svg';
import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';

const Helpline = () => {
  return (
    <div>
      <div className='bg-red-800 mt-10 md:h-[30vh] flex flex-col md:flex-row justify-around px-4 md:px-60'>
        {/* Text Section */}
        <div className='mt-8 text-center md:text-left'>
          <h1 className='font-bold text-white text-3xl md:text-5xl'>
            National Blood Transfusion
          </h1>
          <h1 className='text-3xl md:text-5xl text-white font-bold mt-2'>
            Council (NBTC)
          </h1>
          <div className='w-full md:w-[50%] mt-4'>
            <p className='text-white text-sm md:text-base px-4 md:px-0'>
              Blood Transfusion Services have to ensure that Blood/Components
              (Whole Blood/ Packed Red Cells/ Plasma/ Platelets) are Available
              (Adequate Blood Collection to fulfill need) Accessible (Enough
              reach where it is needed) Affordable (At reasonable costs) Safe
              (Not cause harm, especially TTI) Of standard quality (Provide
              clinical...
            </p>
          </div>
        </div>

        {/* Download App Section */}
        <div className='mt-8 flex flex-col items-center'>
          <div className='flex gap-2 text-white'>
            <h1 className='text-xl md:text-2xl font-bold'>Download</h1>
            <h1 className='text-xl md:text-2xl font-bold'>App</h1>
          </div>

          
          <Scanner className='mt-2' width={100} height={100} /> {/* Adjust size as needed */}
        
    

          <div className='flex justify-center items-center space-x-4 mt-8'>
            <Image
              src={playstore}
              alt='Play Store'
              className='border border-red-950'
              width={120}
              height={40}
              style={{ objectFit: 'contain' }}
            />
            <Image
              src={appstore}
              alt='App Store'
              className='border border-red-800'
              width={120}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpline;
