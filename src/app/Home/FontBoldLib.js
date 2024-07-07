"use client";

import React from 'react';
import useStore from './Store';

const FontBoldLib = () => {
  const { theme } = useStore();

  return (
    <div className={`w-full  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#F5F7FA] text-gray-900'}`}>
      <div className={`container mx-auto p-4 mt-0 flex flex-col items-center`}>
        <h2 className="font-bold text-4xl mb-4 text-center">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h2>
        <div className="mt-8 flex justify-center">
          <button className={`bg-green-500 text-white py-2 px-4 rounded flex items-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-green-700' : 'hover:bg-green-600'}`}>
            Register Now
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-6-6m6 6l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FontBoldLib;
