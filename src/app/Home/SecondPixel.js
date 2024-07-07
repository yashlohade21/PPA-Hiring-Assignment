"use client";

import React from 'react';
import Image from 'next/image';
import HeroImage from '../assets/herosection.png';
import useStore from './Store';

const SecondPixel = () => {
  const { theme } = useStore();

  return (
    <div className={`flex flex-col md:flex-row items-center p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='md:w-1/2 md:pr-8'>
        <Image
          src={HeroImage}
          alt="Hero"
          width={400}
          height={400}
          className='object-contain rounded-lg'
        />
      </div>
      <div className='md:w-1/2 md:pl-8'>
        <h1 className='text-3xl md:text-4xl font-bold mb-4 leading-tight'>
          How to design your site footer like <br /> we did
        </h1>
        <p className='text-base md:text-lg mb-6'>
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button type='button' className={`text-white ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 focus:ring-green-800' : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'} focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center`}>
              Learn More
        </button>
      </div>
    </div>
  );
}

export default SecondPixel;
