import React from 'react';

import Search from '../components/Search'
import Image from '../assets/img/house-banner.png'
const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col text-center items-center lg:items-start lg:text-left lg:ml-8 xl:ml-[135px]
      justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-violet-700'>Rent</span> Your Dream With Us</h1>
        <p className='max-w-[480px] mb-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specime
        </p>
      </div>
      {/* Image */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt='' />
      </div>
    </div>
    <Search />

  </section>;
};

export default Banner;
