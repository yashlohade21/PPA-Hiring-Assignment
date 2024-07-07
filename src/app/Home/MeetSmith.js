"use client";

import React from 'react';
import Image from 'next/image';
import Meetsmith from '../assets/meetsmith.jpg';
import Logo1 from '../assets/l1.png';
import Logo2 from '../assets/l2.png';
import Logo3 from '../assets/l3.png';
import Logo4 from '../assets/l4.png';
import useStore from './Store';

const MeetSmith = () => {
  const { theme } = useStore();

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#F5F7FA] text-gray-900'}`}>
      <div className='container mx-auto p-4 md:p-8 flex flex-col md:flex-row items-center'>
        <div className='flex-1 flex flex-col  justify-center mb-4 md:mb-0'>
          <Image
            src={Meetsmith}
            alt="Hero"
            width={250}
            height={250}
            className='object-contain rounded-lg'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center'>
          <p className='text-base md:text-lg mb-4'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div>
            <p className='text-md md:text-2xl font-bold mb-6'><span style={{ color: '#4CAF4F' }}>Tim Smith</span></p>
          </div>
          <div className='flex items-center'>
            <div id="slick-component" className='flex flex-wrap items-center'>
              <Image className="h-8 w-auto mr-2 mb-2" src={Logo1} alt="" />
              <Image className="h-8 w-auto mr-2 mb-2" src={Logo2} alt="" />
              <Image className="h-8 w-auto mr-2 mb-2" src={Logo3} alt="" />
              <Image className="h-8 w-auto mr-2 mb-2" src={Logo4} alt="" />
            </div>
            <p className={`text-sm flex text-green-700	 items-center underline ml-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Meet All Customers
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 12h14m0 0l-6-6m6 6l-6 6'></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetSmith;
