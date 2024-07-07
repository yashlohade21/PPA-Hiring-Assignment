"use client";

import React from 'react';
import useStore from '../Store';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo1 from '../../assets/l1.png';
import Logo2 from '../../assets/l2.png';
import Logo3 from '../../assets/l3.png';
import Logo4 from '../../assets/l4.png';
import Logo5 from '../../assets/l5.png';
import Logo6 from '../../assets/l6.png';
import Logo7 from '../../assets/l7.png';
import Mo1 from '../../assets/c1.png';
import Mo2 from '../../assets/c2.png';
import Mo3 from '../../assets/c3.png';
import Image from 'next/image';
import "./slick-custom.css";


const ClientLogo = () => {
  const { theme } = useStore();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`hiring-company lg:mx-0 mx-0 my-15 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div>
        <br />
        <h1 className="font-bold text-3xl mb-4 text-center">Our Clients</h1>
        <h2 className="text-sm text-center">
          We have been working with some Fortune 500+ clients
        </h2>
      </div>
      <br />
      <br />
      <Slider {...settings} style={{ display: 'flex' }}>
        <div id="slick-component">
          <Image className="h-50 w-100 mx-auto" src={Logo1} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo2} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo3} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo4} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo5} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo6} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo7} alt="" />
        </div>
        <div id="slick-component">
          <Image className="h-50 w-100 mx-auto" src={Logo1} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo2} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo3} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo4} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo5} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo6} alt="" />
          <Image className="h-50 w-100 mx-auto" src={Logo7} alt="" />
        </div>
      </Slider>
      <h2 className="font-bold text-3xl mb-4 text-center mt-8">
        Manage your entire community <br /> in a single system
      </h2>
      <h3 className="text-sm text-center mb-8">
        Who is Nexcent suitable for?
      </h3>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 rounded-lg ">
            <Image className="h-50 w-100 mx-auto mb-4" src={Mo1} alt="Membership Organisations Logo" />
            <h3 className="font-bold text-lg mb-2">Membership Organisations</h3>
            <p className="text-sm">Our membership management software provides full automation of membership renewals and payments.</p>
          </div>
          <div className="text-center p-4 rounded-lg ">
            <Image className="h-50 w-100 mx-auto mb-4" src={Mo2} alt="National Associations Logo" />
            <h3 className="font-bold text-lg mb-2">National Associations</h3>
            <p className="text-sm">Our membership management software provides full automation of membership renewals and payments.</p>
          </div>
          <div className="text-center p-4 rounded-lg ">
            <Image className="h-50 w-100 mx-auto mb-4" src={Mo3} alt="Clubs and Groups Logo" />
            <h3 className="font-bold text-lg mb-2">Clubs and Groups</h3>
            <p className="text-sm">Our membership management software provides full automation of membership renewals and payments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
