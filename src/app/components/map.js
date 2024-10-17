import React from 'react';
import imagemap from '../../assets/map.png';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";

const Map = () => {
  return (
    <div className="relative flex justify-center">
      <Image 
        src={imagemap} 
        alt="Map" 
        className="w-full h-[60vh] object-cover" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className='flex  space-x-2 mb-4'>
          {/* Icon with red background */}
          <div className="bg-red-600 rounded-full p-2">
            <IoLocationOutline className="text-white text-3xl" />
          </div>
          {/* White h1 text */}
          <h1 className="text-white text-lg font-bold">Find this service near you</h1>
        </div>
        <div className='flex'>
          <input 
            type="text" 
            className="p-2 rounded border border-gray-400 outline-none md:w-[350px] max-w-[100%] placeholder:text-base" 
            placeholder="Enter location..." 
          />
          <button className='bg-red-800 p-2 text-white ml-2 text-base'>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
