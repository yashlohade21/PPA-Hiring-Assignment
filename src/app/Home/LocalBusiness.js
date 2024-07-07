"use client";

import React, { useEffect, useState } from 'react';
import useStore from './Store';

const CountUpNumber = ({ end }) => {
  const { theme } = useStore();
  const [currentNumber, setCurrentNumber] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (currentNumber < end) {
      const timer = setTimeout(() => {
        setCurrentNumber(currentNumber + 20000);
      }, 50); // Adjust animation speed here

      return () => clearTimeout(timer);
    } else {
      setAnimationComplete(true);
    }
  }, [currentNumber, end]);

  return (
    <span className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {animationComplete ? end.toLocaleString() : currentNumber.toLocaleString()}
    </span>
  );
};

const LocalBusiness = () => {
  const { theme } = useStore();

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#F5F7FA] text-gray-900'}`}>
      <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 flex justify-center items-center mb-4 md:mb-0">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Helping a local <br /> <span style={{ color: '#4CAF4F' }}>business reinvent itself</span>
            </h2>
            <p className="text-lg">
              We reached here with our hard work and dedication.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={2245341} />
              </h3>
              <p className="text-lg">Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={46238} />
              </h3>
              <p className="text-lg">Clubs</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={828867} />
              </h3>
              <p className="text-lg">Event Booking</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={1926436} />
              </h3>
              <p className="text-lg">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBusiness;
