"use client";

// src/components/Footer.js
import React from 'react';
import Image from 'next/image';
import Instagram from '../assets/instagram.jpg';
import Twitter from '../assets/twitter.png';
import YouTube from '../assets/youtube.jpg';
import useStore from './Store';

const Footer = () => {
  const { theme } = useStore();

  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col items-start">
          <a href="#" className="text-3xl font-semibold">Nexcent</a>
          <p className="mt-4 text-sm">Copyright © 2023 Nexcent. All rights reserved.</p>
          <div className="flex mt-4 space-x-4">
            <Image src={Instagram} alt="Instagram" className="h-8 w-8 rounded-full" />
            <Image src={Twitter} alt="Twitter" className="h-8 w-8 rounded-full" />
            <Image src={YouTube} alt="YouTube" className="h-8 w-8 rounded-full" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm">About us</a></li>
            <li><a href="#" className="text-sm">Blog</a></li>
            <li><a href="#" className="text-sm">Contact us</a></li>
            <li><a href="#" className="text-sm">Pricing</a></li>
            <li><a href="#" className="text-sm">Testimonial</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Support</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm">Help center</a></li>
            <li><a href="#" className="text-sm">Terms of services</a></li>
            <li><a href="#" className="text-sm">Legal</a></li>
            <li><a href="#" className="text-sm">Privacy policy</a></li>
            <li><a href="#" className="text-sm">Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Stay up to date</h3>
          <div className={`flex items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-600'} p-2 rounded`}>
            <input 
              type="text" 
              className="w-full p-2 bg-transparent border-none outline-none text-white" 
              placeholder="Your email address" 
            />
            <span className="text-white cursor-pointer ml-2">&rarr;</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
