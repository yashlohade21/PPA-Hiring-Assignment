"use client";

import React from 'react';
import Image from 'next/image';
import HeroImage from '../assets/herosection.png';
import useStore from './Store';

const Pixelgrade = () => {
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
          The unseen of spending three <br /> years at Pixelgrade
        </h1>
        <p className='text-base md:text-lg mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed sit amet justo ipsum. Sed accumsan quam vitae est
          varius fringilla. Pellentesque placerat vestibulum lorem 
          sed porta. Nullam mattis tristique iaculis. 
          Nullam pulvinar sit amet risus pretium auctor. 
          Etiam quis massa pulvinar, aliquam quam vitae,
          tempus sem. Donec elementum pulvinar odio.
        </p>
        <button type='button' className={`text-white ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 focus:ring-green-800' : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'} focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center`}>
              Learn More
        </button>
      </div>
    </div>
  );
}

export default Pixelgrade;
