'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import imagemap from '../../assets/map.png';
import Link from 'next/link'; // Import Link

const Map = () => {
  const [search, setSearch] = useState('');
  const [postOffices, setPostOffices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to fetch post offices based on search input
  const handleSearch = async () => {
    if (!search) return;

    try {
      const response = await fetch(`/api/postoffices?search=${search}`);
      const data = await response.json();

      if (data.success) {
        setPostOffices(data.data); // Store the result in state
        setShowDropdown(true); // Show dropdown when results are available
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Failed to fetch post offices:', error);
    }
  };

  // Hide dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative flex justify-center">
      <Image 
        src={imagemap} 
        alt="Map" 
        className="w-full h-[60vh] object-cover" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className='flex space-x-2 mb-4'>
          {/* Icon with red background */}
          <div className="bg-red-600 rounded-full p-2">
            <IoLocationOutline className="text-white text-3xl" />
          </div>
          {/* White h1 text */}
          <h1 className="text-white text-lg font-bold">Find your nearest testing centre</h1>
        </div>
        <div className='flex flex-col relative' ref={dropdownRef}>
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={handleSearch} // Trigger search on key up
            className="p-2 rounded border border-gray-400 outline-none md:w-[350px] max-w-[100%] placeholder:text-base" 
            placeholder="Enter Address or PIN Code." 
          />
          
          {/* Dropdown for post offices */}
          {showDropdown && postOffices.length > 0 && (
            <ul className="absolute top-12 left-0 right-0 bg-white border border-gray-300 max-h-60 overflow-auto z-10 rounded shadow-lg">
              {postOffices.map((office) => (
                <li 
                  key={office._id} 
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  <Link 
                    href={`/${office._id}`} // Adjust the URL to your route
                    onClick={() => setShowDropdown(false)} // Close the dropdown on click
                  >
                    {office.post_office_name} - {office.pin}, {office.district}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
