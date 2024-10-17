'use client';

import React, { useState } from "react";
import Image from "next/image";
import Meghalogo from '../../assets/aidlogo.png'; // Adjust the path as necessary
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`flex fixed top-0 z-50 w-full justify-between items-center py-2 px-4 md:px-8 transition-colors duration-500 bg-red-800 text-white`}>
      <div>
        <Link href="/" className="cursor-pointer">
          <Image
            src={Meghalogo}
            alt="Logo"
            height={80}
            width="auto"
            className="hidden md:block"
          />
          <Image
            src={Meghalogo}
            alt="Logo"
            height={70}
            width="auto"
            className="block md:hidden mx-3"
          />
        </Link>
      </div> 
      <div className="hidden md:flex text-sm space-x-10">
        <Link href="/about" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
          ABOUT US
        </Link>
        <Link href="/nacp" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
          NACP
        </Link>
        <Link href="/divisions" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
          DIVISIONS
        </Link>
        <Link href="/living-with-hiv" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
          LIVING WITH HIV/AIDS
        </Link>
        <Link href="/macs-in-action" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
          MACS IN ACTION
        </Link>
        <Link href="/hiv-aids-acts" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
          HIV/AIDS ACTS
        </Link>
        <Link href="/tender-and-advertisement" className="cursor-pointer font-playfair text-[16px] hover:text-gray-300 hover:scale-105 duration-100 text-md">
          TENDER AND ADVERTISEMENT
        </Link>
      </div>
      <div className="md:hidden flex my-auto mx-5">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className={`w-6 h-6 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden fixed inset-0 ${menuOpen ?  'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out bg-red-800 z-30`}>
        <div className="flex justify-end p-11">
          <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-5 mt-8">
          <Link href="/about" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </Link>
          <Link href="/nacp" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
            NACP
          </Link>
          <Link href="/divisions" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
            DIVISIONS
          </Link>
          <Link href="/living-with-hiv" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
            LIVING WITH HIV/AIDS
          </Link>
          <Link href="/macs-in-action" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
            MACS IN ACTION
          </Link>
          <Link href="/hiv-aids-acts" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
            HIV/AIDS ACTS
          </Link>
          <Link href="/tender-and-advertisement" className="text-white text-lg font-playfair cursor-pointer" onClick={() => setMenuOpen(false)}>
            TENDER AND ADVERTISEMENT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
