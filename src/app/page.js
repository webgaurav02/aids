'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import Link from 'next/link'; // Import Link
import Navbar from './components/navbar';
import Logos from './components/logos';
import Slider from './components/slider';
import Helpline from './components/helpline';
import HivTest from './components/hivtest';
import Map from './components/map';
import Activities from './components/activities';
import About from './components/about';
import Nbtc from './components/nbtc';
import Indialogos from './components/indialogos';
import Footer from './components/footer';
import IntouchImage from './components/intouch';

import whatsapp from '../assets/icons8-whatsapp-96.png'


//Temporary images
import hero from '../assets/Desktop/hero.png'
import cards from '../assets/Desktop/cards.png'
import bottom from '../assets/Desktop/bottom.png'

import hero_mobile from '../assets/Mobile/hero.png'
import naco_mobile from '../assets/Mobile/naco.png'
import cards_mobile from '../assets/Mobile/cards.png'
import bottom_mobile from '../assets/Mobile/bottom.png'


const SearchBar = () => {

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

  return (<div className="absolute md:bottom-16 md:right-[calc(50%-180px)] flex flex-col items-center justify-center p-4">
    <div className='flex space-x-2 mb-4'>
      {/* Icon with red background */}
      <div className="bg-red-600 rounded-full p-2 -ml-2">
        <IoLocationOutline className="text-white text-3xl" />
      </div>
      {/* White h1 text */}
      <h1 className="text-black text-lg font-bold mt-2">Find your nearest testing centre</h1>
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
  );
}



const page = () => {

  return (
    <div>
      <Link href='https://wa.me/918837009679' target='_blank' rel='noreferrer noopener' className='fixed flex flex-col items-center justify-center z-50 md:bottom-[50px] bottom-[50px] md:right-[50px] right-[50px]'>
        <Image 
        src={whatsapp}
          alt='whatsapp icon'
          width={70}
          height={70}
          className=''
        />
        <p className='font-medium'>Click to chat</p>
      </Link>
      <Navbar />
      <div className='relative'>
        <Image
          src={hero}
          alt='Hero Section'
          className='mt-28 md:block hidden border-b border-black'
        />
        <div className='md:block hidden'><SearchBar /></div>
      </div>
      <Image
        src={cards}
        alt='Cards Section'
        className='md:block hidden'
      />
      <div className='md:block hidden m-0 p-0'>
        <Slider />
      </div>
      <Image
        src={bottom}
        alt='Bottom Section'
        className='md:block hidden'
      />
      {/* <Logos/>
      <Slider/>
      <Helpline/>
      <HivTest/>
      <Map/>
      <Activities/>
      <About/>
      <Nbtc/>
      <Indialogos/>
      <Footer/> */}
      <Image
        src={hero_mobile}
        alt='Hero Section'
        className='mt-28 block md:hidden border-b border-black'
      />
      <div className='block md:hidden'><SearchBar /></div>
      <Image
        src={naco_mobile}
        alt='Hero Section'
        className='mt-28 block md:hidden border-b border-black'
      />
      <Image
        src={cards_mobile}
        alt='Cards Section'
        className='block md:hidden'
      />
      <Image
        src={bottom_mobile}
        alt='Bottom Section'
        className='block md:hidden'
      />
      <IntouchImage />
    </div>
  )
}

export default page