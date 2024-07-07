"use client";

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import HeroImage from "../assets/herosection.png";
import useStore from './Store';

const HeroSection = () => {
  const { theme } = useStore();

  return (
    <div>
      <style jsx global>{`
        .carousel .control-arrow,
        .carousel .carousel-status {
          display: none;
        }
      `}</style>
      <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
        <div className={`flex flex-col md:flex-row items-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-8 w-full h-auto md:h-[417px]`}>
          <div className='flex flex-col justify-center pr-0 md:pr-8 mb-4 md:mb-0'>
            <h1 className='text-5xl md:text-4xl font-bold mb-4 leading-tight text-center md:text-left'>
              Lessons and insights <span style={{ color: '#4CAF4F' }}>from 8 years</span>
            </h1>
            <p className='text-base md:text-lg mb-6 text-center md:text-left'>
              Where to grow your business as a photographer: site or social media?
            </p>
            <div className='flex justify-center md:justify-start'>
            <button type='button' className={`text-white ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 focus:ring-green-800' : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'} focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center`}>
              Register 
            </button>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <Image
              src={HeroImage}
              alt="Hero"
              width={400}
              height={400}
              className='object-contain'
            />
          </div>
        </div>
        <div className={`flex flex-col md:flex-row items-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-8 w-full h-auto md:h-[417px]`}>
          <div className='flex flex-col justify-center pr-0 md:pr-8 mb-4 md:mb-0'>
            <h1 className='text-5xl md:text-4xl font-bold mb-4 leading-tight text-center md:text-left'>
              Lessons and insights <span style={{ color: '#4CAF4F' }}>from 8 years</span>
            </h1>
            <p className='text-base md:text-lg mb-6 text-center md:text-left'>
              Where to grow your business as a photographer: site or social media?
            </p>
            <div className='flex justify-center md:justify-start'>
            <button type='button' className={`text-white ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 focus:ring-green-800' : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'} focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center`}>
              Register
            </button>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <Image
              src={HeroImage}
              alt="Hero"
              width={400}
              height={400}
              className='object-contain'
            />
          </div>
        </div>
        <div className={`flex flex-col md:flex-row items-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-8 w-full h-auto md:h-[417px]`}>
          <div className='flex flex-col justify-center pr-0 md:pr-8 mb-4 md:mb-0'>
            <h1 className='text-5xl md:text-4xl font-bold mb-4 leading-tight text-center md:text-left'>
              Lessons and insights <span style={{ color: '#4CAF4F' }}>from 8 years</span>
            </h1>
            <p className='text-base md:text-lg mb-6 text-center md:text-left'>
              Where to grow your business as a photographer: site or social media?
            </p>
            <div className='flex justify-center md:justify-start'>
            <button type='button' className={`text-white ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 focus:ring-green-800' : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'} focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center`}>
              Register
            </button>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <Image
              src={HeroImage}
              alt="Hero"
              width={400}
              height={400}
              className='object-contain'
            />
          </div>
        </div>
    </Carousel>
    </div>
  );
};

export default HeroSection;
