"use client";

import React from 'react';
import Image from 'next/image';
import MarketingOne from '../assets/marketing1.jpg';
import MarketingTwo from '../assets/marketing2.jpg';
import MarketingThree from '../assets/marketing3.jpg';
import useStore from './Store';

const Marketing = () => {
  const { theme } = useStore();

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='container mx-auto p-4 rounded-xl'>
        <h2 className="font-bold text-3xl mb-4 text-center">
          Caring is the new marketing
        </h2>
        <h3 className="text-sm text-center mb-8">
          The Nexcent blog is the best place to read about the latest membership insights,
          trends and more. <br />See who's joining the community, 
          read about our community are <br /> increasing their 
          membership income and lot's more.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className={`relative flex flex-col text-gray-700 rounded-xl bg-clip-border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className="relative h-40 md:h-56 w-full">
              <Image src={MarketingOne} alt="Marketing One" className="rounded-t-xl" layout="fill" objectFit="cover" />
            </div>
            <div className={`relative grid mx-4 mb-4 -mt-6 overflow-hidden shadow-lg h-28 place-items-center rounded-xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              <h3 className="block font-sans text-md text-center antialiased leading-snug tracking-normal">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
            </div>
          </div>
          <div className={`relative flex flex-col text-gray-700 rounded-xl bg-clip-border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className="relative h-40 md:h-56 w-full">
              <Image src={MarketingTwo} alt="Marketing Two" className="rounded-t-xl" layout="fill" objectFit="cover" />
            </div>
            <div className={`relative grid mx-4 mb-4 -mt-6 overflow-hidden shadow-lg h-28 place-items-center rounded-xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              <h3 className="block font-sans text-md text-center antialiased leading-snug tracking-normal">
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
            </div>
          </div>
          <div className={`relative flex flex-col text-gray-700 rounded-xl bg-clip-border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className="relative h-40 md:h-56 w-full">
              <Image src={MarketingThree} alt="Marketing Three" className="rounded-t-xl" layout="fill" objectFit="cover" />
            </div>
            <div className={`relative grid mx-4 mb-4 -mt-6 overflow-hidden shadow-lg h-28 place-items-center rounded-xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              <h3 className="block font-sans text-md text-center antialiased leading-snug tracking-normal">
                Revamping the Membership Model with Triathlon Australia
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
