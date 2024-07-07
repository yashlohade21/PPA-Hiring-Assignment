"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import useStore from './Store';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useStore();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`border-gray-200 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image src={Logo} alt="Logo" width={40} height={40} className="h-8" />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap`}>Nexcent</span>
        </a>
        <div className='flex flex-row inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button data-collapse-toggle='navbar-cta' type='button' className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700 focus:ring-gray-600' : 'hover:bg-gray-100 focus:ring-gray-200'}`} aria-controls='navbar-cta' aria-expanded={showMenu} onClick={toggleMenu}>
            <span className='sr-only'>Open main menu</span>
            <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15'/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${showMenu ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id='navbar-cta'>
          <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'} md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}>
            <li>
              <a href="#home" className={`block py-2 px-3 md:p-0 ${theme === 'dark' ? 'text-white bg-green-500 rounded' : 'text-green-500 bg-transparent hover:bg-gray-100 hover:text-gray-900'} md:bg-transparent md:text-green-500`} aria-current='page'>Home</a>
            </li>
            <li>
              <a href="#features" className={`block py-2 px-3 md:p-0 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500`}>Features</a>
            </li>
            <li>
              <a href="#community" className={`block py-2 px-3 md:p-0 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500`}>Community</a>
            </li>
            <li>
              <a href="#blog" className={`block py-2 px-3 md:p-0 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500`}>Blog</a>
            </li>
            <li>
              <a href="#pricing" className={`block py-2 px-3 md:p-0 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500`}>Pricing</a>
            </li>
            <li className='md:hidden'>
              <button
                className={`inline-flex items-center p-2 w-full justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700 focus:ring-gray-600' : ''}`}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4v4m-4 9a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14M12 3v18m-7-7h14m-14 7h14" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:order-3 space-x-3 rtl:space-x-reverse">
          <button
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700 focus:ring-gray-600' : ''}`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4v4m-4 9a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14M12 3v18m-7-7h14m-14 7h14" />
              </svg>
            )}
          </button>
          <div className='flex flex-row inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <div className='flex  space-x-3'>
            <button type='button' className={`text-green-600 ${theme === 'dark' ? 'border-gray-400 hover:bg-gray-700 focus:ring-gray-600' : 'border-green-500 hover:bg-gray-100 focus:ring-green-300'} border font-medium rounded-lg text-sm px-4 py-2 text-center`}>
              Login
            </button>
            <button type='button' className={`text-white ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 focus:ring-green-800' : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'} focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center`}>
              Signup
            </button>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
