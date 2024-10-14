import React from 'react';
import imagemap from '../../assets/map.png';
import Image from 'next/image';

const Map = () => {
  return (
    <div className="relative flex justify-center">
      <Image 
        src={imagemap} 
        alt="Map" 
        className="w-full h-[30vh] object-cover" 
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <input 
          type="text" 
          className="p-2 rounded border border-gray-400 outline-none md:w-full max-w-xs placeholder:text-base" 
          placeholder="Enter location..." 
        />
        <button className='bg-red-800 p-2 text-white ml-2 text-base'>Search</button>
      </div>
    </div>
  );
};

export default Map;
